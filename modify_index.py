import re

with open('c:/專題/frontend/pages/index.vue', 'r', encoding='utf-8') as f:
    c = f.read()

c = re.sub(
    r'(const runPredict = async \(\) => \{[\s\S]*?if \(\!text\.value\.trim\(\)\) \{.+?return\n    \})',
    r"\1\n    live2dRef.value?.act?.('sp1')",
    c
)

c = re.sub(
    r'(const runUrlScan = async \(\) => \{[\s\S]*?if \(\!input\) \{.+?return\n    \})',
    r"\1\n    live2dRef.value?.act?.('sp2')",
    c
)

c = re.sub(
    r'(const runPhoneDetect = async \(\) => \{[\s\S]*?if \(\!source\) \{.+?return\n    \})',
    r"\1\n    live2dRef.value?.act?.('sp3')",
    c
)

with open('c:/專題/frontend/pages/index.vue', 'w', encoding='utf-8') as f:
    f.write(c)

