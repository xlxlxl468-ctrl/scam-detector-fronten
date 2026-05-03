<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useScamApi } from '../composables/useScamApi'

const text = ref('')
const loading = ref(false)
const error = ref('')
const result = ref<any>(null)

const batchText = ref('')
const batchLoading = ref(false)
const batchError = ref('')
const batchResults = ref<any[]>([])
const batchFilter = ref<'all' | 'scam' | 'normal'>('all')
const neonMode = ref(true)
const historyItems = ref<Array<{ text: string; probability: number; is_scam: boolean; ts: number }>>([])
const shellGlow = ref({ x: 50, y: 10, active: false })
const tiltState = ref({ rx: 0, ry: 0, gx: 50, gy: 50 })
const isLiteFx = ref(false)

const live2dRef = ref<any>(null)

const bgParticles = ref<Array<{ id: number; left: number; top: number; size: number; dur: number; delay: number; op: number }>>([])
const modeParticles = ref<Array<{ id: number; x: number; y: number; size: number; dur: number; delay: number; hue: number; dx: number; dy: number }>>([])
const modeBurstActive = ref(false)
const displayGauge = ref(0)
const displayProbability = ref(0)
const displayStats = ref({ total: 0, scam: 0, normal: 0, rate: 0 })
const riskShake = ref(false)
const singleSoftGlow = ref(false)
const urlSoftGlow = ref(false)
const phoneSoftGlow = ref(false)
const chatInput = ref('')
const chatLoading = ref(false)
const chatError = ref('')
const chatOpen = ref(true)
const assistantTalkingUntil = ref(0)
const urlInput = ref('')
const urlLoading = ref(false)
const urlError = ref('')
const urlResult = ref<any>(null)
const ocrLoading = ref(false)
const ocrError = ref('')
const ocrResult = ref<any>(null)
const ocrInputRef = ref<HTMLInputElement | null>(null)
const phoneInput = ref('')
const phoneLoading = ref(false)
const phoneError = ref('')
const phoneMatches = ref<any[]>([])
const chatMessages = ref<Array<{ role: 'user' | 'assistant'; content: string; ts: number }>>([
  { role: 'assistant', content: '你好，我是詐騙防護 AI 助理。你可以問我：這則訊息為什麼是高風險？接下來該怎麼做？', ts: Date.now() }
])
let magnetCleanup: null | (() => void) = null
let shakeTimer: ReturnType<typeof setTimeout> | null = null
let burstTimer: ReturnType<typeof setTimeout> | null = null
let singleGlowTimer: ReturnType<typeof setTimeout> | null = null
let urlGlowTimer: ReturnType<typeof setTimeout> | null = null
let phoneGlowTimer: ReturnType<typeof setTimeout> | null = null
// variables

const { predict, batch, chat: askChat, scanUrl, analyzeOcr, detectPhones } = useScamApi()

const RISK_KEYWORDS = [
  '中獎', '領獎', '點擊', '驗證', '帳戶', '帳號', '密碼', 'OTP', '轉帳', '銀行', '連結', 'bit.ly', 'tinyurl',
  '立即', '限時', '高報酬', '投資', '異常', '停用'
]

const escapeHtml = (s: string) =>
  s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const highlightedHtml = computed(() => {
  if (!text.value) return ''
  let out = escapeHtml(text.value)
  for (const kw of RISK_KEYWORDS) {
    const re = new RegExp(escapeRegExp(kw), 'gi')
    out = out.replace(re, (m) => `<mark class="kw-mark">${m}</mark>`)
  }
  return out.replace(/\n/g, '<br>')
})

const keywordHits = computed(() => {
  const t = text.value.toLowerCase()
  return RISK_KEYWORDS.filter(k => t.includes(k.toLowerCase()))
})

const gaugeValue = computed(() => Math.round(((result.value?.probability ?? 0) * 100)))
const gaugeStyle = computed(() => ({
  background: `conic-gradient(${gaugeValue.value < 40 ? '#34d399' : gaugeValue.value < 70 ? '#fbbf24' : '#f87171'} ${gaugeValue.value * 3.6}deg, rgba(51,65,85,.45) 0deg)`
}))
const isRiskHigh = computed(() => Boolean(result.value?.is_scam && (result.value?.probability ?? 0) >= 0.75))

const filteredBatchResults = computed(() => {
  const sorted = [...batchResults.value].sort((a, b) => b.probability - a.probability)
  if (batchFilter.value === 'scam') return sorted.filter(r => r.is_scam)
  if (batchFilter.value === 'normal') return sorted.filter(r => !r.is_scam)
  return sorted
})

const stats = computed(() => {
  const total = batchResults.value.length
  const scam = batchResults.value.filter(r => r.is_scam).length
  const normal = total - scam
  const rate = total ? ((scam / total) * 100).toFixed(1) : '0.0'
  return { total, scam, normal, rate }
})

const shellStyle = computed(() => {
  if (!shellGlow.value.active) return {}
  return {
    background: `radial-gradient(260px circle at ${shellGlow.value.x}% ${shellGlow.value.y}%, rgba(56,189,248,0.14), transparent 60%)`
  }
})

const tiltStyle = computed(() => ({
  transform: `perspective(900px) rotateX(${tiltState.value.rx}deg) rotateY(${tiltState.value.ry}deg)`,
  backgroundImage: `radial-gradient(260px circle at ${tiltState.value.gx}% ${tiltState.value.gy}%, rgba(56,189,248,0.16), rgba(2,6,23,0.55))`
}))

const urlGaugeStyle = computed(() => {
  const v = Number(urlResult.value?.safety_score ?? 0)
  const color = v >= 80 ? '#34d399' : v >= 60 ? '#fbbf24' : '#f87171'
  return {
    background: `conic-gradient(${color} ${Math.max(0, Math.min(100, v)) * 3.6}deg, rgba(51,65,85,.45) 0deg)`
  }
})

const phoneDashboard = computed(() => {
  if (!phoneMatches.value.length) {
    return { safetyScore: 0, riskScore: 0, riskLevel: 'LOW' }
  }
  const risk = phoneMatches.value.reduce((sum, m) => sum + Number(m.risk_score || 0), 0) / phoneMatches.value.length
  return {
    safetyScore: Math.max(0, 100 - risk),
    riskScore: risk,
    riskLevel: risk >= 70 ? 'HIGH' : risk >= 40 ? 'MEDIUM' : 'LOW'
  }
})

const phoneGaugeStyle = computed(() => {
  const v = Number(phoneDashboard.value.safetyScore ?? 0)
  const color = v >= 80 ? '#34d399' : v >= 60 ? '#fbbf24' : '#f87171'
  return {
    background: `conic-gradient(${color} ${Math.max(0, Math.min(100, v)) * 3.6}deg, rgba(51,65,85,.45) 0deg)`
  }
})

const isUrlRiskHigh = computed(() => {
  const risk = Number(urlResult.value?.risk_score ?? 0)
  return !urlResult.value?.is_whitelisted && risk >= 70
})

const isPhoneRiskHigh = computed(() => {
  const risk = Number(phoneDashboard.value?.riskScore ?? 0)
  return risk >= 70
})

const assistantState = computed<'idle' | 'thinking' | 'talking' | 'warning'>(() => {
  if (chatLoading.value) return 'thinking'
  if (Date.now() < assistantTalkingUntil.value) return 'talking'
  if (isRiskHigh.value || isUrlRiskHigh.value || isPhoneRiskHigh.value) return 'warning'
  return 'idle'
})

const animateValue = (from: number, to: number, duration: number, setter: (v: number) => void) => {
  const now = () => (typeof performance !== 'undefined' && typeof performance.now === 'function' ? performance.now() : Date.now())
  const nextFrame = (cb: (ts: number) => void) => {
    if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(cb)
      return
    }
    setTimeout(() => cb(now()), 16)
  }

  const start = now()
  const delta = to - from
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - p, 3)
    setter(from + delta * eased)
    if (p < 1) nextFrame(step)
  }
  nextFrame(step)
}

const runPredict = async () => {
  error.value = ''
  result.value = null
  if (!text.value.trim()) {
    error.value = '請先輸入訊息'
    return
  }
  live2dRef.value?.act?.('sp1')
  loading.value = true
  try {
    result.value = await predict(text.value)
    
    // 依據風險高低觸發表情
    if (result.value?.probability >= 0.7) {
      live2dRef.value?.expr?.(8)
    } else {
      live2dRef.value?.expr?.(2)
    }

    historyItems.value.unshift({
      text: text.value,
      probability: Number(result.value?.probability ?? 0),
      is_scam: Boolean(result.value?.is_scam),
      ts: Date.now()
    })
    historyItems.value = historyItems.value.slice(0, 20)
    localStorage.setItem('scam_history', JSON.stringify(historyItems.value))
  } catch (e: any) {
    error.value = e?.data?.error || e?.message || '檢測失敗'
  } finally {
    loading.value = false
  }
}

const runBatch = async () => {
  batchError.value = ''
  batchResults.value = []
  const texts = batchText.value.split('\n').map(v => v.trim()).filter(Boolean)
  if (!texts.length) {
    batchError.value = '請至少輸入一行訊息'
    return
  }
  batchLoading.value = true
  try {
    const res = await batch(texts)
    batchResults.value = res.results || []
  } catch (e: any) {
    batchError.value = e?.data?.error || e?.message || '批量檢測失敗'
  } finally {
    batchLoading.value = false
  }
}

const sendChat = async () => {
  chatError.value = ''
  const question = chatInput.value.trim()
  if (!question) {
    chatError.value = '請先輸入問題'
    return
  }

  chatMessages.value.push({ role: 'user', content: question, ts: Date.now() })
  chatInput.value = ''
  chatLoading.value = true

  try {
    const answer = await askChat(question, {
      text: text.value,
      is_scam: result.value?.is_scam,
      probability: result.value?.probability,
      risk_level: result.value?.risk_level,
      risk_description: result.value?.risk_description,
      reason: result.value?.reason,
    })
    chatMessages.value.push({ role: 'assistant', content: answer, ts: Date.now() })
  } catch (e: any) {
    chatError.value = e?.data?.error || e?.message || 'AI 回覆失敗'
  } finally {
    chatLoading.value = false
  }
}

const handleChatKeydown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault()
    sendChat()
  }
}

const runUrlScan = async () => {
  urlError.value = ''
  urlResult.value = null
  const input = urlInput.value.trim()
  if (!input) {
    urlError.value = '請先貼上網址'
    return
  }
  live2dRef.value?.act?.('sp2')

  urlLoading.value = true
  try {
    urlResult.value = await scanUrl(input)
  } catch (e: any) {
    urlError.value = e?.data?.error || e?.message || '網址掃描失敗'
  } finally {
    urlLoading.value = false
  }
}

const onOcrUpload = async (ev: Event) => {
  ocrError.value = ''
  ocrResult.value = null
  const target = ev.target as HTMLInputElement | null
  const file = target?.files?.[0]
  if (!file) return

  ocrLoading.value = true
  try {
    ocrResult.value = await analyzeOcr(file)
    if (ocrResult.value?.text) {
      text.value = ocrResult.value.text
    }
  } catch (e: any) {
    ocrError.value = e?.data?.error || e?.message || 'OCR 分析失敗'
  } finally {
    ocrLoading.value = false
    if (target) target.value = ''
  }
}

const openOcrPicker = () => {
  ocrInputRef.value?.click()
}

const runPhoneDetect = async () => {
  phoneError.value = ''
  phoneMatches.value = []
  const source = phoneInput.value.trim() || text.value.trim() || ocrResult.value?.text || ''
  if (!source) {
    phoneError.value = '請先輸入文字或先做 OCR'
    return
  }
  live2dRef.value?.act?.('sp3')

  phoneLoading.value = true
  try {
    const res = await detectPhones(source)
    phoneMatches.value = res.matches || []
  } catch (e: any) {
    phoneError.value = e?.data?.error || e?.message || '電話辨識失敗'
  } finally {
    phoneLoading.value = false
  }
}

const fillSample = (v: string) => (text.value = v)

const useHistoryItem = (item: { text: string }) => {
  text.value = item.text
}

const onShellMove = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement | null
  if (!el) return
  const rect = el.getBoundingClientRect()
  shellGlow.value = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
    active: true
  }
}

const onShellLeave = () => {
  shellGlow.value.active = false
}

const onTiltMove = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement | null
  if (!el) return
  const rect = el.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  tiltState.value = {
    ry: (px - 0.5) * 8,
    rx: (0.5 - py) * 8,
    gx: px * 100,
    gy: py * 100
  }
}

const onTiltLeave = () => {
  tiltState.value = { rx: 0, ry: 0, gx: 50, gy: 50 }
}

const createBgParticles = () => {
  const count = isLiteFx.value ? 6 : 12
  bgParticles.value = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 4,
    dur: 10 + Math.random() * 14,
    delay: Math.random() * 6,
    op: 0.18 + Math.random() * 0.35
  }))
}

const burstModeParticles = () => {
  const count = isLiteFx.value ? 8 : 14
  modeParticles.value = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 42 + Math.random() * 16,
    y: 6 + Math.random() * 16,
    size: 3 + Math.random() * 6,
    dur: 380 + Math.random() * 420,
    delay: Math.random() * 120,
    hue: 180 + Math.random() * 80,
    dx: -90 + Math.random() * 180,
    dy: -30 + Math.random() * 120
  }))
  modeBurstActive.value = true
  if (burstTimer) clearTimeout(burstTimer)
  burstTimer = setTimeout(() => {
    modeBurstActive.value = false
  }, 850)
}

const toggleMode = () => {
  neonMode.value = !neonMode.value
  burstModeParticles()
}

const setupMagneticButtons = () => {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('.fx-btn button'))
  const cleanups: Array<() => void> = []

  for (const node of nodes) {
    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      node.style.setProperty('--mx', `${dx * 0.08}px`)
      node.style.setProperty('--my', `${dy * 0.08}px`)
    }

    const onLeave = () => {
      node.style.setProperty('--mx', '0px')
      node.style.setProperty('--my', '0px')
    }

    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', onLeave)
    cleanups.push(() => {
      node.removeEventListener('mousemove', onMove)
      node.removeEventListener('mouseleave', onLeave)
    })
  }

  magnetCleanup = () => cleanups.forEach(fn => fn())
}

onMounted(async () => {

  isLiteFx.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches || (navigator.hardwareConcurrency || 8) <= 4
  createBgParticles()
  
  // 背景動畫
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reducedMotion && !isLiteFx.value) {
    try {
      const { default: gsap } = await import('gsap')
      gsap.to('.cyber-grid-layer', {
        backgroundPosition: "0px 80px",
        ease: "none",
        duration: 2.4,
        repeat: -1,
      })
    } catch (e) {
      // GSAP 加載失敗，繼續執行
    }
  }

  try {
    const raw = localStorage.getItem('scam_history')
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) historyItems.value = parsed.slice(0, 20)
    }
  } catch {
    historyItems.value = []
  }

  setupMagneticButtons()
})

onBeforeUnmount(() => {
  magnetCleanup?.()
  magnetCleanup = null
  if (shakeTimer) clearTimeout(shakeTimer)
  if (burstTimer) clearTimeout(burstTimer)
  if (singleGlowTimer) clearTimeout(singleGlowTimer)
  if (urlGlowTimer) clearTimeout(urlGlowTimer)
  if (phoneGlowTimer) clearTimeout(phoneGlowTimer)
})

watch(gaugeValue, (to) => {
  animateValue(displayGauge.value, to, isLiteFx.value ? 180 : 520, (v) => {
    displayGauge.value = Math.round(v)
  })
}, { immediate: true })

watch(() => result.value?.probability, (to) => {
  const target = Number(to ?? 0) * 100
  animateValue(displayProbability.value, target, isLiteFx.value ? 180 : 560, (v) => {
    displayProbability.value = v
  })
}, { immediate: true })

watch(stats, (to) => {
  animateValue(displayStats.value.total, to.total, 420, (v) => { displayStats.value.total = Math.round(v) })
  animateValue(displayStats.value.scam, to.scam, 420, (v) => { displayStats.value.scam = Math.round(v) })
  animateValue(displayStats.value.normal, to.normal, 420, (v) => { displayStats.value.normal = Math.round(v) })
  animateValue(displayStats.value.rate, Number(to.rate), 520, (v) => { displayStats.value.rate = v })
}, { immediate: true })

watch(isRiskHigh, (high) => {
  if (!high || isLiteFx.value) return
  riskShake.value = true
  if (shakeTimer) clearTimeout(shakeTimer)
  shakeTimer = setTimeout(() => {
    riskShake.value = false
  }, 420)
})

watch(() => chatMessages.value.length, () => {
  const last = chatMessages.value[chatMessages.value.length - 1]
  if (last?.role === 'assistant') {
    assistantTalkingUntil.value = Date.now() + 2600
  }
})

watch(() => result.value, (val) => {
  if (!val) return
  singleSoftGlow.value = true
  if (singleGlowTimer) clearTimeout(singleGlowTimer)
  singleGlowTimer = setTimeout(() => { singleSoftGlow.value = false }, 700)
})

watch(() => urlResult.value, (val) => {
  if (!val) return
  urlSoftGlow.value = true
  if (urlGlowTimer) clearTimeout(urlGlowTimer)
  urlGlowTimer = setTimeout(() => { urlSoftGlow.value = false }, 700)
})

watch(() => phoneMatches.value.length, (len) => {
  if (!len) return
  phoneSoftGlow.value = true
  if (phoneGlowTimer) clearTimeout(phoneGlowTimer)
  phoneGlowTimer = setTimeout(() => { phoneSoftGlow.value = false }, 700)
})

const downloadCsv = () => {
  if (!batchResults.value.length) return
  const header = ['text', 'is_scam', 'probability', 'risk_level', 'risk_description', 'reason']
  const rows = batchResults.value.map(r => [
    String(r.text ?? '').replaceAll('"', '""'),
    r.is_scam ? '1' : '0',
    Number(r.probability ?? 0).toFixed(6),
    r.risk_level ?? '',
    r.risk_description ?? '',
    String(r.reason ?? '').replaceAll('"', '""')
  ])
  const csv = [header.join(','), ...rows.map(cols => cols.map(c => `"${c}"`).join(','))].join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'batch_detection_results.csv'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="cyber-grid-layer"></div>
  <UContainer
    :class="['py-10 relative z-10 transition-all duration-500 theme-shell shell-glow', neonMode ? 'mode-neon' : 'mode-plain', isLiteFx ? 'fx-lite' : 'fx-full']"
    :style="shellStyle"
    @mousemove="onShellMove"
    @mouseleave="onShellLeave"
  >
    <div class="fx-particle-layer" aria-hidden="true">
      <span
        v-for="p in bgParticles"
        :key="p.id"
        class="fx-particle"
        :style="{ left: `${p.left}%`, top: `${p.top}%`, width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, opacity: p.op }"
      />
    </div>

    <div v-if="modeBurstActive" class="mode-burst" aria-hidden="true">
      <span
        v-for="p in modeParticles"
        :key="`burst-${p.id}`"
        class="mode-dot"
        :style="{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.dur}ms`, animationDelay: `${p.delay}ms`, background: `hsla(${p.hue}, 100%, 70%, .9)`, '--dx': `${p.dx}px`, '--dy': `${p.dy}px` }"
      />
    </div>

    
      <!-- Title Section -->
      <div class="text-center w-full px-3 mb-12 relative z-10">
        <h1 class="text-4xl md:text-6xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-emerald-300 to-indigo-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
           詐騙偵測器
        </h1>
        <p class="text-slate-300 mt-4 text-lg font-light tracking-widest">
          Future Security Console · AI Scam Detection
        </p>
      </div>

      <!-- Dashboard content -->
      <div class="max-w-6xl mx-auto z-10 relative">
<UCard class="f-card shimmer-card enter-up mb-6 border border-cyan-400/25 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_45px_-18px_rgba(56,189,248,0.45)]" style="--delay: .06s;">
      <template #header>
        <div class="font-semibold text-cyan-200 tracking-wide">單訊息檢測</div>
      </template>

      <UTextarea
        v-model="text"
        :rows="5"
        placeholder="例如：恭喜中獎，請點擊連結領取獎品..."
        class="[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300"
      />
      <div class="flex gap-2 mt-3">
        <UButton :loading="loading" @click="runPredict" class="fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0">
          開始檢測
        </UButton>
        <UButton color="gray" variant="soft" @click="text='';result=null;error=''" class="fx-btn bg-slate-800/80 text-slate-200">
          清空
        </UButton>
      </div>

      <div v-if="loading" class="mt-3 rounded-md border border-cyan-400/30 bg-cyan-500/5 overflow-hidden">
        <div class="scan-line"></div>
        <div class="skeleton-grid px-3 pt-3 pb-1">
          <span class="skeleton-line w-11/12"></span>
          <span class="skeleton-line w-9/12"></span>
          <span class="skeleton-line w-10/12"></span>
        </div>
        <div class="text-xs text-cyan-200 px-3 py-2">掃描中... AI 正在分析詐騙特徵</div>
      </div>

      <div class="flex gap-2 mt-3 flex-wrap">
        <UButton size="xs" color="gray" variant="outline" class="fx-btn border-cyan-400/35 text-cyan-200" @click="fillSample('恭喜您中獎，請立即點擊 bit.ly 領獎')">範例：中獎詐騙</UButton>
        <UButton size="xs" color="gray" variant="outline" class="fx-btn border-cyan-400/35 text-cyan-200" @click="fillSample('您的帳戶異常，請回覆驗證碼')">範例：帳戶驗證</UButton>
        <UButton size="xs" color="gray" variant="outline" class="fx-btn border-cyan-400/35 text-cyan-200" @click="fillSample('今天晚上一起吃飯嗎？')">範例：正常訊息</UButton>
      </div>

      <div v-if="text" class="mt-3 rounded-md border border-sky-400/25 bg-slate-950/40 p-3">
        <div class="text-xs text-slate-300 mb-2">關鍵詞命中：{{ keywordHits.length }} <span v-if="keywordHits.length">（{{ keywordHits.join('、') }}）</span></div>
        <div class="text-sm text-slate-200 leading-7" v-html="highlightedHtml"></div>
      </div>

      <UAlert v-if="error" color="red" variant="soft" :title="error" class="mt-4" />

      <UCard
        v-if="result"
        :class="['mt-4 border bg-slate-950/55 tilt-card shimmer-card', isRiskHigh ? 'risk-pulse border-red-400/45' : 'border-cyan-400/20', riskShake ? 'risk-shake' : '', singleSoftGlow ? 'soft-result-glow' : '']"
        :style="tiltStyle"
        @mousemove="onTiltMove"
        @mouseleave="onTiltLeave"
      >
        <div class="flex justify-center mb-4">
          <div class="gauge-outer" :style="gaugeStyle">
            <div class="gauge-inner">
              <div class="text-xl font-bold text-slate-100">{{ displayGauge }}%</div>
              <div class="text-[11px] text-slate-400">風險機率</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div class="text-xs text-gray-400">判定</div>
            <UBadge :class="isRiskHigh ? 'badge-pulse' : ''" :color="result.is_scam ? 'red' : 'green'" variant="soft">{{ result.is_scam ? '詐騙' : '正常' }}</UBadge>
          </div>
          <div>
            <div class="text-xs text-gray-400">詐騙機率</div>
            <div>{{ displayProbability.toFixed(1) }}%</div>
          </div>
          <div>
            <div class="text-xs text-gray-400">風險等級</div>
            <div>{{ result.risk_level }}</div>
          </div>
          <div>
            <div class="text-xs text-gray-400">風險描述</div>
            <div>{{ result.risk_description }}</div>
          </div>
        </div>

        <div class="mt-3">
          <div class="text-xs text-slate-300 mb-1">風險視覺化</div>
          <UProgress :value="displayGauge" />
        </div>

        <div class="mt-3 text-slate-200"><b class="text-cyan-300">原因：</b>{{ result.reason || '—' }}</div>
      </UCard>
    </UCard>

    <UCard class="f-card shimmer-card enter-up mb-6 border border-amber-400/20 bg-slate-900/70 backdrop-blur-xl" style="--delay: .1s;">
      <template #header>
        <div class="font-semibold text-amber-200 tracking-wide">網址即時掃描</div>
      </template>

      <div class="flex gap-2 items-center">
        <UInput
          v-model="urlInput"
          placeholder="貼上網址，例如 bit.ly/xxxx 或可疑登入頁面"
          class="flex-1"
        />
        <UButton :loading="urlLoading" class="fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0" @click="runUrlScan">掃描網址</UButton>
        <UButton color="gray" variant="soft" class="fx-btn bg-slate-800/80 text-slate-200" @click="urlInput='www.google.com'">安全測試</UButton>
      </div>

      <div v-if="urlLoading" class="mt-3 rounded-md border border-amber-400/30 bg-amber-500/5 overflow-hidden">
        <div class="scan-line"></div>
        <div class="skeleton-grid px-3 pt-3 pb-1">
          <span class="skeleton-line w-11/12"></span>
          <span class="skeleton-line w-9/12"></span>
          <span class="skeleton-line w-10/12"></span>
        </div>
        <div class="text-xs text-amber-200 px-3 py-2">網址分析中... 正在檢查跳轉與假登入特徵</div>
      </div>

      <UAlert v-if="urlError" color="red" variant="soft" :title="urlError" class="mt-3" />

      <UCard
        v-if="urlResult"
        :class="['mt-4 border bg-slate-950/55 tilt-card shimmer-card', isUrlRiskHigh ? 'risk-pulse border-red-400/45' : 'border-amber-400/25', urlSoftGlow ? 'soft-result-glow' : '']"
        :style="tiltStyle"
        @mousemove="onTiltMove"
        @mouseleave="onTiltLeave"
      >
        <div class="flex justify-center mb-2">
          <div class="gauge-outer" :style="urlGaugeStyle">
            <div class="gauge-inner">
              <div class="text-xl font-bold text-slate-100">{{ Math.round(urlResult.safety_score || 0) }}%</div>
              <div class="text-[11px] text-slate-400">URL 安全分數</div>
            </div>
          </div>
        </div>
        <div class="text-slate-200">主網域：<span class="text-amber-200">{{ urlResult.host }}</span></div>
        <div class="text-slate-200">最終網址：<span class="text-slate-300 break-all">{{ urlResult.final_url }}</span></div>
        <div class="flex items-center gap-2">
          <span class="text-slate-300">風險評分：{{ urlResult.risk_score }}/100</span>
          <span class="text-slate-300">安全分數：{{ urlResult.safety_score }}/100</span>
          <UBadge :color="urlResult.risk_level === 'HIGH' ? 'red' : urlResult.risk_level === 'MEDIUM' ? 'yellow' : 'green'" variant="soft">{{ urlResult.risk_level }}</UBadge>
          <UBadge v-if="urlResult.redirected" color="orange" variant="soft">偵測到跳轉</UBadge>
          <UBadge v-if="urlResult.is_whitelisted" color="emerald" variant="soft">白名單安全</UBadge>
        </div>
        <UProgress :value="Math.round(urlResult.safety_score || 0)" color="emerald" />
        <div v-if="urlResult.findings?.length" class="text-slate-200">
          <div class="text-xs text-slate-400 mb-1">可疑特徵：</div>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="(f, i) in urlResult.findings" :key="`url-f-${i}`">{{ f }}</li>
          </ul>
        </div>
      </UCard>
    </UCard>

    <UCard class="f-card shimmer-card enter-up mb-6 border border-fuchsia-400/20 bg-slate-900/70 backdrop-blur-xl" style="--delay: .14s;">
      <template #header>
        <div class="font-semibold text-fuchsia-200 tracking-wide">截圖辨識（OCR）</div>
      </template>

      <input ref="ocrInputRef" type="file" accept="image/*" class="hidden" @change="onOcrUpload" />
      <div class="flex items-center gap-2 flex-wrap">
        <UButton :loading="ocrLoading" class="fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0" @click="openOcrPicker">上傳截圖辨識</UButton>
        <UButton color="gray" variant="soft" class="fx-btn bg-slate-800/80 text-slate-200" @click="ocrResult=null;ocrError=''">清空結果</UButton>
        <div class="text-xs text-slate-400">上傳聊天截圖後，系統會自動擷取文字並做風險分析 + AI 建議</div>
      </div>

      <div v-if="ocrLoading" class="mt-3 rounded-md border border-fuchsia-400/30 bg-fuchsia-500/5 overflow-hidden">
        <div class="scan-line"></div>
        <div class="text-xs text-fuchsia-200 px-3 py-2">OCR 辨識中... 請稍候</div>
      </div>

      <UAlert v-if="ocrError" color="red" variant="soft" :title="ocrError" class="mt-3" />

      <div v-if="ocrResult" class="mt-4 grid gap-3">
        <UCard class="bg-slate-950/60 border border-fuchsia-400/25">
          <div class="text-xs text-slate-400 mb-1">OCR 文字</div>
          <div class="text-sm text-slate-200 whitespace-pre-wrap">{{ ocrResult.text || '（未擷取到文字）' }}</div>
        </UCard>

        <UCard v-if="ocrResult.predict" class="bg-slate-950/60 border border-fuchsia-400/25">
          <div class="text-xs text-slate-400 mb-1">模型判定</div>
          <div class="flex items-center gap-2 text-slate-200">
            <UBadge :color="ocrResult.predict.is_scam ? 'red' : 'green'" variant="soft">{{ ocrResult.predict.is_scam ? '詐騙' : '正常' }}</UBadge>
            <span>機率 {{ (ocrResult.predict.probability * 100).toFixed(1) }}%</span>
            <span class="text-slate-400">{{ ocrResult.predict.risk_level }} / {{ ocrResult.predict.risk_description }}</span>
          </div>
          <div class="mt-2 text-sm text-slate-300">{{ ocrResult.predict.reason }}</div>
        </UCard>

        <UCard class="bg-slate-950/60 border border-cyan-400/25">
          <div class="text-xs text-slate-400 mb-1">AI 建議</div>
          <div class="text-sm text-slate-100 whitespace-pre-wrap">{{ ocrResult.ai_answer }}</div>
        </UCard>
      </div>
    </UCard>

    <UCard class="f-card shimmer-card enter-up mb-6 border border-emerald-400/20 bg-slate-900/70 backdrop-blur-xl" style="--delay: .16s;">
      <template #header>
        <div class="font-semibold text-emerald-200 tracking-wide">電話辨識</div>
      </template>

      <UTextarea
        v-model="phoneInput"
        :rows="3"
        placeholder="貼上訊息內容（留空則自動用上方單訊息/OCR 文字）"
        class="[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-emerald-400/30 [&>textarea]:focus:border-emerald-300"
      />
      <div class="mt-3 flex gap-2">
        <UButton :loading="phoneLoading" class="fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0" @click="runPhoneDetect">辨識電話</UButton>
        <UButton color="gray" variant="soft" class="fx-btn bg-slate-800/80 text-slate-200" @click="phoneInput='0912345678'">安全測試</UButton>
        <UButton color="gray" variant="soft" class="fx-btn bg-slate-800/80 text-slate-200" @click="phoneInput='';phoneMatches=[];phoneError=''">清空</UButton>
      </div>

      <div v-if="phoneLoading" class="mt-3 rounded-md border border-emerald-400/30 bg-emerald-500/5 overflow-hidden">
        <div class="scan-line"></div>
        <div class="skeleton-grid px-3 pt-3 pb-1">
          <span class="skeleton-line w-10/12"></span>
          <span class="skeleton-line w-8/12"></span>
          <span class="skeleton-line w-11/12"></span>
        </div>
        <div class="text-xs text-emerald-200 px-3 py-2">電話辨識中... 正在分析號碼風險特徵</div>
      </div>

      <UAlert v-if="phoneError" color="red" variant="soft" :title="phoneError" class="mt-3" />

      <UCard
        v-if="phoneMatches.length"
        :class="['mt-4 border bg-slate-950/55 tilt-card shimmer-card', isPhoneRiskHigh ? 'risk-pulse border-red-400/45' : 'border-emerald-400/25', phoneSoftGlow ? 'soft-result-glow' : '']"
        :style="tiltStyle"
        @mousemove="onTiltMove"
        @mouseleave="onTiltLeave"
      >
        <div class="flex justify-center mb-2">
          <div class="gauge-outer" :style="phoneGaugeStyle">
            <div class="gauge-inner">
              <div class="text-xl font-bold text-slate-100">{{ Math.round(phoneDashboard.safetyScore) }}%</div>
              <div class="text-[11px] text-slate-400">電話安全分數</div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 text-sm text-slate-300">
          <span>風險評分：{{ phoneDashboard.riskScore.toFixed(1) }}/100</span>
          <span>安全分數：{{ phoneDashboard.safetyScore.toFixed(1) }}/100</span>
          <UBadge :color="phoneDashboard.riskLevel === 'HIGH' ? 'red' : phoneDashboard.riskLevel === 'MEDIUM' ? 'yellow' : 'green'" variant="soft">{{ phoneDashboard.riskLevel }}</UBadge>
        </div>
        <UProgress :value="Math.round(phoneDashboard.safetyScore)" color="emerald" class="mb-2" />
        <UCard v-for="(m, i) in phoneMatches" :key="`pm-${i}`" class="bg-slate-950/60 border border-emerald-400/20">
          <div class="flex items-center justify-between gap-2 text-sm">
            <div class="text-slate-100">{{ m.raw }}</div>
            <div class="flex items-center gap-2">
              <UBadge color="emerald" variant="soft">{{ m.type }}</UBadge>
              <UBadge :color="m.risk_level === 'HIGH' ? 'red' : m.risk_level === 'MEDIUM' ? 'yellow' : 'green'" variant="soft">{{ m.risk_level }}</UBadge>
              <UBadge v-if="m.is_whitelisted" color="emerald" variant="soft">白名單安全</UBadge>
            </div>
          </div>
          <div class="text-xs text-slate-400 mt-1">標準化：{{ m.normalized }}</div>
          <div class="text-xs text-slate-400 mt-1">安全分數：{{ m.safety_score }}/100｜風險評分：{{ m.risk_score }}/100</div>
          <div class="text-xs text-slate-300 mt-1">{{ m.reason }}</div>
        </UCard>
      </UCard>
      <div v-else-if="!phoneLoading" class="mt-3 text-sm text-slate-400">尚未辨識到電話號碼</div>
    </UCard>

    <UCard class="f-card shimmer-card enter-up mb-6 border border-slate-500/25 bg-slate-900/60 backdrop-blur-xl" style="--delay: .12s;">
      <template #header>
        <div class="font-semibold text-slate-200 tracking-wide">最近檢測紀錄</div>
      </template>

      <div v-if="!historyItems.length" class="text-sm text-slate-400">尚無紀錄</div>
      <div v-else class="space-y-2 max-h-56 overflow-auto pr-1">
        <button
          v-for="(item, idx) in historyItems"
          :key="idx"
          class="w-full text-left rounded-md border border-slate-700/80 bg-slate-950/50 hover:bg-slate-800/70 p-2 transition"
          @click="useHistoryItem(item)"
        >
          <div class="flex items-center justify-between text-xs">
            <span :class="item.is_scam ? 'text-red-300' : 'text-emerald-300'">{{ item.is_scam ? '詐騙' : '正常' }}</span>
            <span class="text-slate-400">{{ new Date(item.ts).toLocaleString() }}</span>
          </div>
          <div class="text-slate-200 text-sm truncate mt-1">{{ item.text }}</div>
          <div class="text-slate-400 text-xs mt-1">機率：{{ (item.probability * 100).toFixed(1) }}%</div>
        </button>
      </div>
    </UCard>

    <UCard class="f-card shimmer-card enter-up border border-indigo-400/20 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_45px_-20px_rgba(99,102,241,0.45)]" style="--delay: .18s;">
      <template #header>
        <div class="font-semibold text-indigo-200 tracking-wide">批量檢測（每行一筆）</div>
      </template>

      <UTextarea
        v-model="batchText"
        :rows="6"
        placeholder="第一筆訊息&#10;第二筆訊息&#10;第三筆訊息"
        class="[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-indigo-400/30 [&>textarea]:focus:border-indigo-300"
      />
      <div class="flex gap-2 mt-3 flex-wrap items-center">
        <UButton :loading="batchLoading" @click="runBatch" class="fx-btn primary-btn bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 border-0">批量檢測</UButton>
        <UButton color="gray" variant="soft" @click="batchText='';batchResults=[];batchError=''" class="fx-btn bg-slate-800/80 text-slate-200">清空</UButton>
        <UButton color="emerald" variant="soft" :disabled="!batchResults.length" @click="downloadCsv" class="fx-btn bg-emerald-500/20 text-emerald-200">下載 CSV</UButton>
        <USelect v-model="batchFilter" :options="[{label:'全部',value:'all'},{label:'只看詐騙',value:'scam'},{label:'只看正常',value:'normal'}]" option-attribute="label" value-attribute="value" class="w-36" />
      </div>

      <div v-if="batchLoading" class="mt-3 rounded-md border border-indigo-400/30 bg-indigo-500/5 overflow-hidden">
        <div class="scan-line indigo"></div>
        <div class="skeleton-grid px-3 pt-3 pb-1">
          <span class="skeleton-line w-10/12"></span>
          <span class="skeleton-line w-8/12"></span>
          <span class="skeleton-line w-11/12"></span>
        </div>
        <div class="text-xs text-indigo-200 px-3 py-2">批次掃描中... 請稍候</div>
      </div>

      <UAlert v-if="batchError" color="red" variant="soft" :title="batchError" class="mt-4" />

      <div v-if="batchResults.length" class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <UCard class="bg-slate-950/50 border border-slate-700"><div class="text-xs text-gray-400">總筆數</div><div class="text-lg text-slate-200">{{ displayStats.total }}</div></UCard>
        <UCard class="bg-slate-950/50 border border-red-400/30"><div class="text-xs text-gray-400">詐騙</div><div class="text-lg text-red-300">{{ displayStats.scam }}</div></UCard>
        <UCard class="bg-slate-950/50 border border-emerald-400/30"><div class="text-xs text-gray-400">正常</div><div class="text-lg text-emerald-300">{{ displayStats.normal }}</div></UCard>
        <UCard class="bg-slate-950/50 border border-indigo-400/30"><div class="text-xs text-gray-400">詐騙率</div><div class="text-lg text-indigo-200">{{ displayStats.rate.toFixed(1) }}%</div></UCard>
      </div>

      <UTable v-if="filteredBatchResults.length" :rows="filteredBatchResults" class="mt-4" :columns="[
        { key: 'text', label: '訊息' },
        { key: 'is_scam', label: '結果' },
        { key: 'probability', label: '機率' },
        { key: 'risk_level', label: '風險' }
      ]">
        <template #text-data="{ row }">
          {{ row.text?.slice(0, 40) }}{{ row.text?.length > 40 ? '...' : '' }}
        </template>
        <template #is_scam-data="{ row }">
          <UBadge :color="row.is_scam ? 'red' : 'green'" variant="soft">{{ row.is_scam ? '詐騙' : '正常' }}</UBadge>
        </template>
        <template #probability-data="{ row }">
          {{ (row.probability * 100).toFixed(1) }}%
        </template>
      </UTable>
    </UCard>

    </div>
    
    <!-- AI助手問答區 -->
    <UButton v-if="!chatOpen" class="ai-chat-fab fx-btn bg-gradient-to-r from-cyan-500 to-indigo-500 border-0" @click="chatOpen = true">
      AI 助手
    </UButton>

    <UCard v-if="chatOpen" class="f-card shimmer-card ai-follow-screen border border-cyan-400/20 bg-slate-900/80 backdrop-blur-xl w-full md:w-[24rem] lg:w-[28rem]">
      <template #header>
        <div class="flex items-center justify-between gap-2">
          <div class="font-semibold text-cyan-200 tracking-wide">AI 防詐問答助手</div>
          <UButton size="xs" color="gray" variant="soft" class="fx-btn" @click="chatOpen = false">收合</UButton>
        </div>
      </template>

      <div class="ai-chat-layout flex items-center gap-6 mx-4">
        <div class="ai-live2d-slot w-20 md:w-36 h-24 md:h-36 flex-shrink-0 -ml-5 md:-ml-6">
          <Live2DDisplay ref="live2dRef" model-url="/live2d/girl/mao_pro_zh/runtime/mao_pro.model3.json" />
        </div>

        <div class="chat-content-column flex-1 bg-black/30 rounded-lg p-4 border border-slate-800/50">
          <div class="space-y-2 w-full max-h-[36rem] overflow-auto pr-1">
            <div
              v-for="(m, i) in chatMessages"
              :key="i"
              :class="['rounded-lg p-3 text-sm whitespace-pre-wrap', m.role === 'user' ? 'bg-cyan-500/15 border border-cyan-400/30 text-cyan-50 ml-auto mr-0 w-[75%] text-right' : 'bg-slate-950/60 border border-slate-700 text-slate-100 ml-0 mr-auto w-[75%]']"
            >
              <div class="text-[11px] opacity-70 mb-1">{{ m.role === 'user' ? '你' : 'AI 助手' }}</div>
              <div>{{ m.content }}</div>
            </div>
          </div>

          <UAlert v-if="chatError" color="red" variant="soft" :title="chatError" class="mt-3" />

          <div class="mt-4 relative">
            <UTextarea
              v-model="chatInput"
              :rows="3"
              placeholder="例如：這則訊息為什麼被判定為詐騙？我該怎麼處理？ (Ctrl+Enter 發送)"
              class="w-full autoresize [&>textarea]:min-h-[96px] [&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300 [&>textarea]:pr-12"
              @keydown="handleChatKeydown"
            />
            <button
              :disabled="chatLoading || !chatInput.trim()"
              @click="sendChat"
              class="absolute bottom-3 right-3 text-cyan-400 hover:text-cyan-300 disabled:text-slate-600 transition-colors"
              :title="chatLoading ? '發送中...' : '發送 (Ctrl+Enter)'"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<style scoped>
.theme-shell {
  border-radius: 16px;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
  transition: background-color .3s ease, box-shadow .3s ease, filter .3s ease;
}

.shell-glow {
  transition: background 0.18s linear;
}

.fx-particle-layer,
.mode-burst {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: none;
  overflow: hidden;
  background: rgba(2, 6, 23, 0.96);
}

.intro-half {
  position: absolute;
  left: 0;
  width: 100vw;
  height: 50vh;
  background:
    linear-gradient(180deg, rgba(6, 14, 30, 1), rgba(2, 6, 23, 1)),
    repeating-linear-gradient(90deg, rgba(125, 211, 252, 0.05) 0 2px, transparent 2px 10px);
  box-shadow: none;
    background-size: 200vw 200vh, 100vw 100vh, 100vw 100vh;
    animation: cyberFluid 6s ease-in-out infinite alternate;
}

.intro-half-top {
  top: 0;
  border-bottom: 1px solid rgba(125, 211, 252, 0.35);
}

.intro-half-bottom {
  bottom: 0;
  border-top: 1px solid rgba(125, 211, 252, 0.35);
}

.intro-overlay::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: rgba(125, 211, 252, 0.22);
  transform: translateY(-0.5px);
}

.intro-center-wrap {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.intro-title-wrap {
  position: relative;
}

.intro-title {
  margin: 0;
  font-size: clamp(2.1rem, 6vw, 4.2rem);
  font-weight: 900;
  letter-spacing: 0.2em;
  color: transparent;
  background-image: linear-gradient(90deg, #67e8f9, #60a5fa, #a78bfa);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: none;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

.intro-title-ghost {
  visibility: hidden;
}

.intro-title-slice {
  position: absolute;
  inset: 0;
  will-change: transform;
  transform: translateZ(0); /* force render layer */
  backface-visibility: hidden;
}

.intro-title-top {
  clip-path: inset(0 0 50% 0);
}

.intro-title-bottom {
  clip-path: inset(50% 0 0 0);
}

.intro-title :deep(.char) {
  display: inline-block;
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform, opacity;
}


.fx-particle {
  position: absolute;
  border-radius: 999px;
  background: rgba(103, 232, 249, 0.9);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.45);
  animation: particleFloat linear infinite;
}

.mode-dot {
  position: absolute;
  border-radius: 999px;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.4);
  animation: burstOut ease-out forwards;
}

.enter-up {
  opacity: 0;
  transform: translateY(14px);
  animation: enterUp 0.6s ease forwards;
  animation-delay: var(--delay, 0s);
}

.shimmer-card {
  position: relative;
  overflow: hidden;
}


.shimmer-card::after {
  content: '';
  position: absolute;
  inset: -30% auto -30% -55%;
  width: 45%;
  transform: rotate(16deg) translateX(-120%);
  background: linear-gradient(90deg, transparent, rgba(148, 233, 255, 0.16), transparent);
  animation: shimmerSweep 4.2s ease-in-out infinite;
  pointer-events: none;
}

.mode-neon {
  --fx-sat: 1.08;
  --fx-bright: 1.02;
}

.mode-plain {
  --fx-sat: 0.75;
  --fx-bright: 0.95;
}

.mode-neon .f-card,
.mode-neon .page-title,
.mode-plain .f-card,
.mode-plain .page-title {
  filter: saturate(var(--fx-sat, 1)) brightness(var(--fx-bright, 1));
  transition: filter .3s ease, background-color .3s ease, box-shadow .3s ease, border-color .3s ease;
}

.mode-plain .page-title {
  background-image: linear-gradient(90deg, #cbd5e1, #94a3b8) !important;
  -webkit-text-fill-color: transparent;
}

.mode-plain .f-card {
  border-color: rgba(148, 163, 184, 0.35) !important;
  box-shadow: none !important;
  background: rgba(15, 23, 42, 0.85) !important;
}

.mode-plain .primary-btn {
  background-image: none !important;
  background-color: #334155 !important;
}

.scan-line {
  height: 3px;
  width: 35%;
  background: linear-gradient(90deg, transparent, #22d3ee, transparent);
  animation: scan 1.2s linear infinite;
}

.scan-line.indigo {
  background: linear-gradient(90deg, transparent, #818cf8, transparent);
}

.fx-btn :deep(button) {
  --mx: 0px;
  --my: 0px;
  transition: transform 0.2s ease, box-shadow 0.25s ease, filter 0.2s ease, border-color 0.25s ease;
  will-change: transform;
}

.fx-btn :deep(button:hover) {
  transform: translate(var(--mx), calc(var(--my) - 2px)) scale(1.01);
  box-shadow: 0 10px 24px rgba(56, 189, 248, 0.22);
  filter: brightness(1.06);
}

.fx-btn :deep(button:active) {
  transform: translate(calc(var(--mx) * 0.5), calc(var(--my) * 0.5)) scale(0.99);
}

.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.14s ease-out, box-shadow 0.2s ease, background-image 0.2s ease;
  will-change: transform;
}

.tilt-card:hover {
  box-shadow: 0 18px 42px rgba(56, 189, 248, 0.16);
}

.risk-pulse {
  animation: riskPulse 1.5s ease-in-out infinite;
}

.badge-pulse {
  animation: badgePulse 1.2s ease-in-out infinite;
}

.risk-shake {
  animation: riskShake .38s ease-in-out 1;
}

.skeleton-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-line {
  display: inline-block;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(71, 85, 105, .35), rgba(148, 163, 184, .5), rgba(71, 85, 105, .35));
  background-size: 220% 100%;
  animation: skeletonFlow 1.2s linear infinite;
  box-shadow: inset 0 0 0 1px rgba(148, 163, 184, .08);
}

.soft-result-glow {
  animation: softResultGlow .7s ease-out 1;
}

.ai-follow-screen {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 0;
  width: min(28rem, calc(100vw - 28px));
  max-width: min(28rem, calc(100vw - 28px));
  z-index: 60;
  box-shadow: 0 14px 44px rgba(2, 6, 23, 0.55);
}

.ai-chat-layout {
  display: flex;
  gap: 12px;
  align-items: center;
}

.ai-live2d-slot {
  flex: 0 0 auto;
}

.chat-content-column {
  min-width: 16rem;
}

.ai-chat-fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 61;
}

@media (max-width: 768px) {
  .ai-follow-screen {
    right: 8px;
    left: 8px;
    bottom: 8px;
    width: auto;
  }

  .ai-chat-fab {
    right: 12px;
    bottom: 12px;
  }
}

.gauge-outer {
  width: 120px;
  height: 120px;
  border-radius: 999px;
  padding: 8px;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
}


.gauge-inner {
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: rgba(2, 6, 23, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

:deep(.kw-mark) {
  background: rgba(239, 68, 68, 0.25);
  color: #fecaca;
  border: 1px solid rgba(248, 113, 113, 0.45);
  border-radius: 4px;
  padding: 0 4px;
}

:deep(tbody tr td) {
  transition: background-color .2s ease, background-image .25s ease;
}

:deep(tbody tr:hover td) {
  background-color: rgba(30, 41, 59, 0.58) !important;
  background-image: linear-gradient(90deg, rgba(56, 189, 248, 0.08), rgba(99, 102, 241, 0.05));
}

.fx-lite .fx-particle,
.fx-lite .shimmer-card::after,
.fx-lite .badge-pulse,
.fx-lite .risk-pulse,
.fx-lite .scan-line,
.fx-lite .skeleton-line {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
}

@keyframes scan {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(340%);
  }
}

@keyframes enterUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmerSweep {
  0%, 35% {
    transform: rotate(16deg) translateX(-130%);
  }
  70%, 100% {
    transform: rotate(16deg) translateX(310%);
  }
}

@keyframes particleFloat {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-18px) scale(1.06);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes burstOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(.35);
  }
  25% {
    opacity: .95;
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--dx, 0px)), calc(-50% + var(--dy, 0px))) scale(1.2);
  }
}

@keyframes riskPulse {
  0%, 100% {
    box-shadow: 0 0 0 rgba(248, 113, 113, 0.0);
  }
  50% {
    box-shadow: 0 0 24px rgba(248, 113, 113, 0.24);
  }
}

@keyframes badgePulse {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.18);
  }
}

@keyframes riskShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-1px); }
}

@keyframes skeletonFlow {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -40% 0;
  }
}

@keyframes softResultGlow {
  0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
  45% { box-shadow: 0 0 0 2px rgba(56, 189, 248, .28), 0 0 18px rgba(56, 189, 248, .14); }
  100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
}

</style>

<style scoped>
@keyframes cyberFluid {
  0% { background-position: center bottom, 0 0, 0 0; }
  100% { background-position: right top, 0 0, 0 0; }
}

.cyber-grid-layer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 60vh;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(to top, rgba(56, 189, 248, 0.35) 1px, transparent 1px),
    linear-gradient(to right, rgba(56, 189, 248, 0.35) 1px, transparent 1px);
  background-size: 80px 80px;
  background-position: 0px 0px;
  transform: perspective(1000px) rotateX(62deg);
  transform-origin: bottom center;
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 92%);
  mask-image: linear-gradient(to top, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 92%);
}
</style>