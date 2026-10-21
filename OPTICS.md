> 当前版本说明：鱼与水草已恢复自然材质，完整自然场景由 Canvas 绘制后供玻璃控件采样。本文中的玻璃鱼草描述属于先前实现；目前玻璃折射仅用于界面和可选的光学研究视图。

# 光学玻璃：截图分析与实现

## 截图中的材质目标

最后一张图的关键并不是高透明度本身，而是：背景线条穿过厚玻璃边缘时发生压缩、反向翻卷和轻微色差；中央保持平面，倒角承载高光。材质中央大面积白色填充、随机波纹和普通背景模糊都会偏离这个目标。

| 参考章节 | 本项目中的处理 | 对应源码 |
| --- | --- | --- |
| 三层结构 | Background RT → Glass → 原生 DOM 文字/图标/命中区 | optics-renderer.js |
| SDF / 宽高比 | 全部坐标使用 CSS 像素；圆角矩形、椭圆、三角形及 polynomial smooth-min；fwidth 抗锯齿 | optics-shaders.js |
| 高度场与法线 | interior / bevel 的 quintic 高度，中央平台恒定；对独立高度场中心差分，不对抗锯齿 Mask 求导 | optics-shaders.js |
| 双界面折射 | IOR 1.46；空气→玻璃→空气，先走厚度再走背景距离，零射线稳定回退；R/G/B 使用不同 IOR | optics-shaders.js / traceRay |
| 三路采样 | Face 0.975 轻微放大，Inner 压缩、Outer 反向翻卷，采用不同 textureLod；色散集中在边缘 | optics-shaders.js / glassFragment |
| BRDF | GGX、Smith 可见性、Schlick Fresnel，粗糙度 .32；四个冷暖方向灯，倒角外部支持权重，中央不叠镜面亮斑 | optics-shaders.js / ggx |

## 在网页中的适配

- 视频固定 1080×1920，本项目保持原有响应式网页尺寸。没有把应用硬编码成竖屏画布。
- 只有一个 Three.js / WebGL2 上下文。paintComposerRT 先接收真实绘制的水下背景、自定义照片或参考条纹，生成可供 textureLod 使用的 mipmaps。
- 自然物体用实例化四边形批量绘制：SDF 鱼、叶片和茎。之后 UI 玻璃读取已包含鱼草的第二个 RT。
- 输出用现有 Canvas 和各控件的 2D 呈现层放回布局，保留原有 DOM 表单、按钮、焦点和事件。没有 DOM 截图，没有把最终页面 RGB 做整体假扭曲。文字和图标不进入折射纹理。
- Plus 模式关闭对应表面的 CSS backdrop-filter 和旧 SVG 材质，不叠加重复模糊。轻量/实色模式保留兼容材质。
- 控件中心为可读性保留适度暗色，物体中央几乎无白色覆盖。底色平坦时折射自然不明显；使用参考条纹或细节丰富的图片更容易看见真实变化。
- 这是一套屏幕空间光学近似，不是离线路径追踪，也未声称与视频逐像素相同。

## 新技能与来源

通过 find-skills 检索 `threejs shaders`，选择 CloudAI-X/threejs-skills 的 `threejs-shaders`（检索时约 14.5K 安装）和 `threejs-postprocessing`（约 12.6K）；来源仓库约 3.7K stars，MIT。安装在 D 盘项目 `.agents/skills/`。

- https://skills.sh/cloudai-x/threejs-skills/threejs-shaders
- https://skills.sh/cloudai-x/threejs-skills/threejs-postprocessing
- https://github.com/CloudAI-X/threejs-skills

Three.js 锁定 0.186.1，许可见 vendor/Three.LICENSE。原 liquid-glass-react 保留为兼容材质。

## 使用与验证

「背景外观 → 参考条纹」启用/关闭黑白对照背景；选择新图片会关闭条纹，照片仍单独保存。无已有照片的新设置默认显示条纹以方便对照，已有照片会优先保留。

正常应用入口是 index.html。`index.html?study=glass` 是同一套着色器的放大材质对照视图，显示圆形与圆角方形，不修改或删除鱼群。

已执行：生产构建、38 项 Node 测试、Chromium 着色器编译、条纹/自定义图片切换、原生投放参数编辑、打捞及撤销（8→7→8）、侧栏滚动、Esc 焦点返回、390px 窄屏（无横向溢出、自动轻量）。未进行 Safari/Firefox 真机验证。默认像素比上限 1.25，自动模式窄屏不用重型渲染；WebGL 或上下文失败会退到轻量材质。当前环境一次运行采样约 40fps，仅用于检查，不能代表所有设备。

测试用图片已移除，原鱼群数量恢复。运行时 bundle 约 737 KiB（未压缩传输体积），包含本地 Three.js 与 React，无 CDN 依赖。
