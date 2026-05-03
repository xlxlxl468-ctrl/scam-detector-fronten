const fs = require('fs');

let content = fs.readFileSync('c:/專題/frontend/pages/index.vue', 'utf-8');

// Replace the imports inside onMounted
const importRegex = /const\s+\[\{\s*gsap\s*\}\]\s*=\s*await\s+Promise\.all\(\[\s*import\('gsap'\)\s*\]\)/g;
content = content.replace(importRegex, `const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger')
        ]);
        gsap.registerPlugin(ScrollTrigger);`);

// Template replacement for Pin & Scale wrapper
const templateRegex = /<div class="flex items-center justify-between mb-8 enter-up"[^>]*>[\s\S]*?(?=<UCard)/;
const newTemplate = `
      <!-- Apple-style Pin & Scale Hero Section -->
      <div class="title-pin-section h-screen w-full flex items-center justify-center -mt-10 mb-20 relative z-20">
        <div class="text-center w-full max-w-4xl px-4 flex flex-col items-center">
          <h1 class="page-title text-5xl md:text-[8rem] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-emerald-300 to-indigo-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)] whitespace-nowrap">
             詐騙偵測器
          </h1>
          <p class="hero-subtitle text-slate-300 mt-6 text-xl font-light tracking-widest hidden md:block">
            Future Security Console · AI Scam Detection
          </p>
          <div class="mt-10 btn-group flex gap-4 hidden md:flex">
            <UButton color="cyan" variant="soft" size="lg" class="fx-btn ring-1 ring-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              開始掃描
            </UButton>
            <UButton color="gray" variant="ghost" size="lg" class="fx-btn backdrop-blur-md" @click="toggleMode">
              {{ neonMode ? '低調模式' : '霓虹模式' }}
            </UButton>
          </div>
        </div>
      </div>

      <!-- Dashboard content that scrolls up as title scales -->
      <div class="dashboard-content max-w-6xl mx-auto z-10 relative">
`;

// Insert the closing div before chat fab
content = content.replace(/<UButton v-if="!chatOpen"/, `</div>\n      <UButton v-if="!chatOpen"`);

content = content.replace(templateRegex, newTemplate);

// Script logic injection
const scrollScript = `
        const setupScroll = () => {
          if (!document.querySelector('.title-pin-section')) return;
          
          let mm = gsap.matchMedia();

          mm.add("(min-width: 768px)", () => {
            // Parallax particles background
            gsap.to('.fx-particle-layer', {
              yPercent: 40,
              ease: 'none',
              scrollTrigger: {
                trigger: '.theme-shell',
                start: 'top top',
                end: 'bottom top',
                scrub: true
              }
            });

            // Apple style Pin & Scale!
            const tlPin = gsap.timeline({
              scrollTrigger: {
                trigger: '.title-pin-section',
                start: 'top top',
                end: '+=1500', // Pin for 1500px distance
                pin: true,
                scrub: true,   // Link animation specifically to scroll movement
              }
            });

            tlPin.to('.page-title', {
                scale: 60,
                opacity: 0,
                ease: 'power2.in',
                duration: 1
              }, 0)
              .to('.hero-subtitle', {
                y: -50,
                opacity: 0,
                duration: 0.3
              }, 0)
              .to('.btn-group', {
                y: 50,
                opacity: 0,
                duration: 0.3
              }, 0)
              .from('.dashboard-content', {
                y: 100,
                opacity: 0,
                ease: 'power3.out',
                duration: 0.5
              }, 0.5);

            // Scroll Reveal on Cards (3D Flip In)
            gsap.utils.toArray('.f-card').forEach((card) => {
              gsap.from(card, {
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                },
                y: 80,
                rotationX: -15,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.4)'
              });
            });
          });
        };
`;

// Insert the setup function after GSAP timeline creation
content = content.replace(/const holdDuration = 0\.5/, scrollScript + '\n        const holdDuration = 0.5');

// Update introDone hook to also call setupScroll depending on state
content = content.replace(/introDone\.value = true/g, 'introDone.value = true; setTimeout(()=>setupScroll(), 50);');

fs.writeFileSync('c:/專題/frontend/pages/index.vue', content, 'utf-8');
console.log('ScrollTrigger animation injected successfully!');
