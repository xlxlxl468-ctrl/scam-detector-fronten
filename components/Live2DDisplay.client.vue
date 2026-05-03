<template>
  <div class="container">
    <canvas ref="canvas" class="live2d-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelUrl: {
    type: String,
    required: true
  }
})

const canvas = ref(null)
let app = null
let model = null
let mouseMoveHandler = null
let idleMotionTimer = null
let focusRafId = null
let pendingFocus = null

onMounted(async () => {
  try {
    // 加載 PIXI
    if (!window.PIXI) {
      await loadScript('https://cdn.jsdelivr.net/npm/pixi.js@6.5.10/dist/browser/pixi.min.js')
    }
    if (!window.Live2DCubismCore) {
      await loadScript('https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js')
    }
    if (!window.PIXI?.live2d?.Live2DModel) {
      await loadScript('https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.4.0/dist/cubism4.min.js')
    }

    // 初始化 PIXI App
    app = new window.PIXI.Application({
      view: canvas.value,
      width: 200,
      height: 300,
      transparent: true,
      backgroundAlpha: 0
    })

    // 加載模型
    const url = props.modelUrl
    
    console.log('📍 Loading from:', url)
    model = await window.PIXI.live2d.Live2DModel.from(url)
    console.log('✅ Model loaded')
    
    app.stage.addChild(model)
    
    // 調整大小
    const w = 200, h = 300
    const sx = w / model.internalModel.width
    const sy = h / model.internalModel.height
    const s = Math.min(sx, sy) * 1.0
    model.scale.set(s)
    model.x = (w - model.internalModel.width * s) / 2
    model.y = (h - model.internalModel.height * s) / 2 + 0

    // 滑鼠追蹤：用 rAF 節流，避免每次 mousemove 都直接觸發 focus
    mouseMoveHandler = (e) => {
      if (!model || !canvas.value) return
      const rect = canvas.value.getBoundingClientRect()
      pendingFocus = {
        x: e.clientX - rect.left - (rect.width / 2),
        y: e.clientY - rect.top - (rect.height / 2)
      }

      if (focusRafId != null) return
      focusRafId = requestAnimationFrame(() => {
        focusRafId = null
        if (!model || !pendingFocus) return
        model.focus(pendingFocus.x, pendingFocus.y)
      })
    }
    window.addEventListener('mousemove', mouseMoveHandler)

    // 自動播放待機動作 (隨機播放動作2或動作3)
    idleMotionTimer = setInterval(() => {
      if (model) {
        const randomIdle = Math.random() < 0.5 ? 0 : 1; // 0 對應 m2，1 對應 m3
        model.motion('', randomIdle, 3); // 3 代表強制 (FORCE) 播放
      }
    }, 15000)

  } catch (e) {
    console.error('❌ Init error:', e)
  }
})

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

// 播放動作
const act = (name) => {
  if (!model) {
    alert('模型還沒加載完成')
    return
  }

  console.log('🎬 Action:', name)
  
  const map = {
    'm2': 0,
    'm3': 1,
    'm4': 2,
    'sp1': 3,
    'sp2': 4,
    'sp3': 5
  }

  if (name === 'idle') {
    model.motion('Idle')
  } else if (map[name] !== undefined) {
    // groupName 為空字串，3 代表優先級 FORCE
    model.motion('', map[name], 3)
  } else {
    console.log('⚠️ Motion not found:', name)
  }
}

// 設定表情
const expr = (i) => {
  if (!model) return

  const name = `exp_${String(i).padStart(2, '0')}`
  console.log('😊 Expression:', name)
  
  // cubism 4 直接傳入名稱即可
  model.expression(name)
}

defineExpose({
  act,
  expr
})

onUnmounted(() => {
  if (mouseMoveHandler) {
    window.removeEventListener('mousemove', mouseMoveHandler)
    mouseMoveHandler = null
  }
  if (idleMotionTimer) {
    clearInterval(idleMotionTimer)
    idleMotionTimer = null
  }
  if (focusRafId != null) {
    cancelAnimationFrame(focusRafId)
    focusRafId = null
  }
  pendingFocus = null
  if (app) app.destroy()
  app = null
  model = null
})
</script>

<style scoped>
.container {
  position: relative;
  width: 150px;
  height: px;
  pointer-events: none; /* 讓點擊穿透，不會擋到後面元件 */
}

.live2d-canvas {
  width: 100%;
  height: 100%;
  pointer-events: auto; /* canvas 自身仍可互動 */
}
</style>
