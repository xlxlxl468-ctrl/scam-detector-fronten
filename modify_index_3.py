import re

with open('c:/專題/frontend/pages/index.vue', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace runPredict
c = re.sub(
    r"(const runPredict = async \(\) => \{\n  error\.value = ''\n  result\.value = null\n  if \(\!text\.value\.trim\(\)\) \{\n    error\.value = '請先輸入訊息'\n    return\n  \}\n  loading\.value = true)",
    r"const runPredict = async () => {\n  error.value = ''\n  result.value = null\n  if (!text.value.trim()) {\n    error.value = '請先輸入訊息'\n    return\n  }\n  live2dRef.value?.act?.('sp1')\n  loading.value = true",
    c
)

# Replace runUrlScan
c = re.sub(
    r"(const runUrlScan = async \(\) => \{\n  urlError\.value = ''\n  urlResult\.value = null\n  const input = urlInput\.value\.trim\(\)\n  if \(\!input\) \{\n    urlError\.value = '請先貼上網址'\n    return\n  \}\n\n  urlLoading\.value = true)",
    r"const runUrlScan = async () => {\n  urlError.value = ''\n  urlResult.value = null\n  const input = urlInput.value.trim()\n  if (!input) {\n    urlError.value = '請先貼上網址'\n    return\n  }\n  live2dRef.value?.act?.('sp2')\n\n  urlLoading.value = true",
    c
)

# Replace runPhoneDetect
c = re.sub(
    r"(const runPhoneDetect = async \(\) => \{\n  phoneError\.value = ''\n  phoneMatches\.value = \[\]\n  const source = phoneInput\.value\.trim\(\) \|\| text\.value\.trim\(\) \|\| ocrResult\.value\?\.text \|\| ''\n  if \(\!source\) \{\n    phoneError\.value = '請先輸入文字或先做 OCR'\n    return\n  \}\n\n  phoneLoading\.value = true)",
    r"const runPhoneDetect = async () => {\n  phoneError.value = ''\n  phoneMatches.value = []\n  const source = phoneInput.value.trim() || text.value.trim() || ocrResult.value?.text || ''\n  if (!source) {\n    phoneError.value = '請先輸入文字或先做 OCR'\n    return\n  }\n  live2dRef.value?.act?.('sp3')\n\n  phoneLoading.value = true",
    c
)

with open('c:/專題/frontend/pages/index.vue', 'w', encoding='utf-8') as f:
    f.write(c)

