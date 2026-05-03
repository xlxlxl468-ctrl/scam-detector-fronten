<template>
  <div class="live2d-wrapper" ref="wrapperRef">
    <canvas id="live2d-canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelUrl: {
    type: String,
    required: true
  },
  state: {
    type: String,
    default: 'idle'
  }
})

const canvasRef = ref(null)
const wrapperRef = ref(null)
let pixiApp = null
let model = null
let mouseMoveHandler = null
let focusRafId = null
let pendingFocus = null

onMounted(async () => {
  // 動態載入腳本函數
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  try {
    // 依序載入依賴，因為 CDN 版本依賴 window.PIXI
    if (!window.PIXI) {
      await loadScript('https://cdn.jsdelivr.net/npm/pixi.js@6.5.10/dist/browser/pixi.min.js')
    }
    if (!window.Live2DCubismCore) {
      await loadScript('https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js')
    }
    if (!window.PIXI?.live2d?.Live2DModel) {
      await loadScript('https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.4.0/dist/cubism4.min.js')
    }

    if (canvasRef.value) {
      // 放大畫布與模型
      const canvasWidth = 500;
      const canvasHeight = 600;

      pixiApp = new window.PIXI.Application({
        view: canvasRef.value,
        width: canvasWidth,
        height: canvasHeight,
        transparent: true,
        backgroundAlpha: 0
      })

      // 使用前端 public 靜態路徑載入模型
      const url = props.modelUrl
      model = await window.PIXI.live2d.Live2DModel.from(url)

      pixiApp.stage.addChild(model)

      // 調整模型位置和大小以填滿更大的畫布
      // 稍微移下一點避免超出
      const scaleToFitX = canvasWidth / model.internalModel.width
      const scaleToFitY = canvasHeight / model.internalModel.height
      const scale = Math.min(scaleToFitX, scaleToFitY) * 0.5 // 

      model.scale.set(scale)
      model.x = (canvasWidth - model.internalModel.width * scale) / 2
      model.y = (canvasHeight - model.internalModel.height * scale) / 2 + 300 // 往下移

      // 支援滑鼠追蹤：用 rAF 節流降低高頻事件負擔
      mouseMoveHandler = (e) => {
        if (!model || !canvasRef.value) return
        const rect = canvasRef.value.getBoundingClientRect()
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
    }
  } catch (error) {
    console.error('Live2D 載入失敗:', error)
  }
})

onUnmounted(() => {
  if (mouseMoveHandler) {
    window.removeEventListener('mousemove', mouseMoveHandler)
    mouseMoveHandler = null
  }
  if (focusRafId != null) {
    cancelAnimationFrame(focusRafId)
    focusRafId = null
  }
  pendingFocus = null
  if (pixiApp) {
    pixiApp.destroy(true, { children: true })
  }
  pixiApp = null
  model = null
})
</script>

<style scoped>
.live2d-wrapper {
  position: fixed;
  bottom: 50px;
  right: -250px;
  width: 600px;
  height: 800px;
  pointer-events: none; /* 讓點擊穿透 */
  z-index: 9999;
}

#live2d-canvas {
  width: 100%;
  height: 100%;
  pointer-events: auto; /* 讓模型可以接收滑鼠事件 */
}
</style>
