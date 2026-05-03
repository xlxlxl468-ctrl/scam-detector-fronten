import re

with open('c:/專題/frontend/pages/index.vue', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace template
c = re.sub(
    r'<Live2DDisplay model-url="/live2d/girl/mao_pro_zh/runtime/mao_pro\.model3\.json" />',
    r'<Live2DDisplay ref="live2dRef" model-url="/live2d/girl/mao_pro_zh/runtime/mao_pro.model3.json" />',
    c
)

with open('c:/專題/frontend/pages/index.vue', 'w', encoding='utf-8') as f:
    f.write(c)

