# 自然水景改造 · 2026-10-22

## 目标与边界
鱼与水草均采用自然彩色材质；界面控件沿用液态玻璃。当前为轻量 Canvas 2.5D 自然风格，尚不是基于真实模型的照片级 3D 渲染。

## find-skills 与安装
运行 `npx --yes skills find "threejs lighting"`，选用 CloudAI-X/threejs-skills，搜索当时 threejs-lighting 约 12.2K 安装，仓库页面约 3.7K stars。已核对技能内容与当前 three.js r186 相符。
安装目录：项目内 `.agents/skills/`（本地开发资源，不包含在仓库中）。
- threejs-lighting：主光、环境补光与接触阴影；当前用轻量的渐变阴影实现落地感。
- threejs-materials：区分自然漫反射表面与透明材质，Canvas 颜色纹理按 sRGB 上传。
- threejs-animation：时间驱动的连续动画。水草使用共享水流，相位与根部约束避免整株平移。
- 沿用 threejs-shaders：现有 WebGL 光学层与原生内容的分离。
技能安装后后续回合可自动发现，本回合已直接读取 SKILL.md 应用。

技能来源：https://github.com/CloudAI-X/threejs-skills
技能检索：https://skills.sh/cloudai-x/threejs-skills/threejs-lighting

## GitHub 参考
| 项目 | 可借鉴内容 | 接入成本与本轮采用 |
| --- | --- | --- |
| https://github.com/jamisonhill/aquarium | 统一水流、植物摆动、程序化造景、水下吸光和焦散 | 完整迁移要替换当前场景与交互；本轮参考分层与共享时钟思路，保留当前投喂/打捞/存档。README 标明 MIT。 |
| https://github.com/reki2000/aquarium | 自然砂石沉木、水体吸收、质量分级 | WebGPU/TSL 架构不宜直接拼接；参考自然材质与接触明暗层次，未复制代码或模型。README 提醒其焦散实现许可待核实，因此不引入该实现。 |
| https://github.com/WebGLSamples/WebGLSamples.github.io/tree/master/aquarium | 鱼尾摆动、海草变形、雾化和纹理照明 | 传统 WebGL 示例，依赖较旧；只参考技术思路，不迁入旧依赖或素材。源码带 Google BSD 条款。 |

以上仅参考公开 README 与技术源码；没有声称这些项目已通过长期维护评估。GitHub API 在本次查询触发未认证限流，未能核实最新提交日期。

## 本轮落地
- 移除自然场景的 SDF 玻璃鱼草绘制；整个自然场景先在 Canvas 完成，再供玻璃控件采样。
- 水草恢复不透明绿色，添加叶片两面明暗、叶脉、长叶与茎叶变化；根部固定，叶尖随水流轻摆。
- 添加分层砂床、稳定颗粒、河石纹理、沉木与接触阴影，静态纹理按尺寸和昼夜缓存。
- 加入后景植被、底部动态水纹光，保持鱼的普通彩色外观并补少量鳞片与鳃细节。
- 新增「背景外观 → 氛围配色 → 自然草缸」；参考条纹默认关闭，首次升级迁移一次，之后仍可自行开启。
- 自定义图片、颜色、鱼群存档、投喂与打捞继续使用现有接口。

## 验证
`npm run build`；`npm test` 共 40 项通过。
新增回归覆盖：旧条纹设置只迁移一次且不影响鱼和背景数据；自然场景在昼夜与窄尺寸绘制时不改变鱼群状态。
浏览器人工检查自然草缸、昼夜与轻量模式。
