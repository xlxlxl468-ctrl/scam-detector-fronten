import re

with open('c:/專題/frontend/pages/index.vue', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    '''const runPredict = async () => {
    error.value = ''
    result.value = null
    if (!text.value.trim()) {
      error.value = '請先輸入訊息'
      return
    }''',
    '''const runPredict = async () => {
    error.value = ''
    result.value = null
    if (!text.value.trim()) {
      error.value = '請先輸入訊息'
      return
    }
    live2dRef.value?.act?.('sp1')'''
)

c = c.replace(
    '''const runUrlScan = async () => {
    urlError.value = ''
    urlResult.value = null
    const input = urlInput.value.trim()
    if (!input) {
      urlError.value = '請先輸入網址'
      return
    }''',
    '''const runUrlScan = async () => {
    urlError.value = ''
    urlResult.value = null
    const input = urlInput.value.trim()
    if (!input) {
      urlError.value = '請先輸入網址'
      return
    }
    live2dRef.value?.act?.('sp2')'''
)

c = c.replace(
    '''const runPhoneDetect = async () => {
    phoneError.value = ''
    phoneMatches.value = []
    const source = phoneInput.value.trim() || text.value.trim() || ocrResult.value?.text || ''
    if (!source) {
      phoneError.value = '請先輸入電話號碼或上傳OCR'
      return
    }''',
    '''const runPhoneDetect = async () => {
    phoneError.value = ''
    phoneMatches.value = []
    const source = phoneInput.value.trim() || text.value.trim() || ocrResult.value?.text || ''
    if (!source) {
      phoneError.value = '請先輸入電話號碼或上傳OCR'
      return
    }
    live2dRef.value?.act?.('sp3')'''
)

with open('c:/專題/frontend/pages/index.vue', 'w', encoding='utf-8') as f:
    f.write(c)

