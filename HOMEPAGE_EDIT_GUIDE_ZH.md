# 主页修改超详细说明（按区块定位）

这份文档告诉你：如果要改主页的每个部分，应该改哪个文件、哪个字段、哪段代码。

## 1. 先理解项目结构（你会经常改到的文件）

- `App.tsx`：总布局、页面切换、深浅色模式开关逻辑。
- `constants.tsx`：大部分内容数据源（个人信息、论文、日志、图片墙、技能等）。
- `components/Sidebar.tsx`：左侧个人栏（头像、姓名、单位、地点、社交链接、主题按钮）。
- `components/Navigation.tsx`：顶部导航（Profile / Research / Log）。
- `components/views/About.tsx`：Profile 页面主体。
- `components/views/Research.tsx`：Research 列表页。
- `components/views/ResearchDetail.tsx`：Research 详情页（可加载 markdown）。
- `components/views/Log.tsx`：Log 列表 + Moments 图片墙。
- `components/views/LogDetail.tsx`：Log 详情页（可加载 markdown）。
- `public/content/research/*.md`：论文详情 markdown 文件。
- `public/content/logs/*.md`：日志详情 markdown 文件。
- `index.html`：网页标题、字体加载、Tailwind（运行时）主题配置。
- `tailwind.config.js`：Tailwind（构建时）主题配置。

---

## 2. 一张表：你想改什么，去哪里改

- 改网站浏览器标题（title）：`index.html:6`
- 改左侧头像：`constants.tsx:27` 的 `PROFILE.avatar`
- 改姓名：`constants.tsx:20` 的 `PROFILE.name`
- 改中文名：`constants.tsx:21` 的 `PROFILE.chineseName`
- 改头衔（Researcher）：`constants.tsx:22` 的 `PROFILE.title`
- 改单位：`constants.tsx:23` 的 `PROFILE.affiliation`
- 改个人简介：`constants.tsx:24` 的 `PROFILE.bio`
- 改邮箱：`constants.tsx:25` + `constants.tsx:32` 的 `mailto`
- 改所在地：`constants.tsx:26`
- 改 CV 链接：`constants.tsx:28`
- 改社交链接：`constants.tsx:31` 到 `constants.tsx:36`
- 改顶部导航文案（Profile/Research/Log）：`components/Navigation.tsx:10` 到 `components/Navigation.tsx:14`
- 改首页默认打开页面：`App.tsx:10`（`useState<View>('about')`）
- 改每个页面内容宽度：`App.tsx:52` 到 `App.tsx:56`
- 改 About 顶部大标题句子：`components/views/About.tsx:51` 到 `components/views/About.tsx:53`
- 改 About “About Me”正文：`constants.tsx:24` + `components/views/About.tsx:58`
- 改 Focus 列表：`constants.tsx:141` 到 `constants.tsx:146`
- 改 Research Skills 列表：`constants.tsx:148` 到 `constants.tsx:151`
- 改 Education 区块：`components/views/About.tsx:92` 到 `components/views/About.tsx:120`
- 改 Publications 数据：`constants.tsx:38` 到 `constants.tsx:71`
- 改 Conferences 数据：`constants.tsx:73` 到 `constants.tsx:97`
- 改论文详情 markdown 路径：`constants.tsx:54`（每条 `fileUrl`）
- 改 Research 卡片布局样式：`components/views/Research.tsx:16` 到 `components/views/Research.tsx:64`
- 改 Research 详情页样式：`components/views/ResearchDetail.tsx:11` 到 `components/views/ResearchDetail.tsx:213`
- 改 Log 列表数据：`constants.tsx:99` 到 `constants.tsx:129`
- 改 Moments 图片墙数据：`constants.tsx:131` 到 `constants.tsx:139`
- 改 Log 卡片布局样式：`components/views/Log.tsx:26` 到 `components/views/Log.tsx:63`
- 改 Log 详情页样式：`components/views/LogDetail.tsx:11` 到 `components/views/LogDetail.tsx:113`
- 改全站颜色/字体（运行时）：`index.html:9` 到 `index.html:57`、`index.html:58`
- 改 Tailwind 主题（构建时）：`tailwind.config.js:8` 到 `tailwind.config.js:55`
- 改深浅色切换逻辑：`App.tsx:14` 到 `App.tsx:40`

---

## 3. 详细拆解：按页面区块修改

## 3.1 外层框架（侧边栏 + 顶部导航 + 主内容）

### 3.1.1 页面切换逻辑
- 文件：`App.tsx:42` 到 `App.tsx:49`
- 说明：
  - `currentView = 'about' | 'research' | 'log'`
  - `renderContent()` 决定当前渲染 `About` / `Research` / `Log`

如果你要新增第四个页面（比如 `projects`）：
1. 在 `types.ts:3` 的 `View` 联合类型里加 `'projects'`
2. 在 `App.tsx:42` 到 `App.tsx:49` 的 `switch` 里加 case
3. 在 `components/Navigation.tsx:10` 到 `components/Navigation.tsx:14` 的 tabs 里加一项

### 3.1.2 页面宽度
- 文件：`App.tsx:52` 到 `App.tsx:56`
- 说明：
  - research：`max-w-[1800px]`
  - log：`max-w-7xl`
  - about：`max-w-3xl`

如果你觉得某个页面太窄/太宽，就改这里。

### 3.1.3 深浅色模式
- 初始化：`App.tsx:14` 到 `App.tsx:25`
- 切换：`App.tsx:28` 到 `App.tsx:40`
- 原理：给 `document.documentElement` 加/删 `dark` class，同时写入 `localStorage.theme`

---

## 3.2 左侧 Sidebar（头像、姓名、社交）

### 3.2.1 数据来源
- 全部来自 `constants.tsx` 的 `PROFILE` 和 `SOCIAL_LINKS`：
  - `PROFILE`：`constants.tsx:19` 到 `constants.tsx:29`
  - `SOCIAL_LINKS`：`constants.tsx:31` 到 `constants.tsx:36`

### 3.2.2 区块对应关系
- 头像：`components/Sidebar.tsx:20` 到 `components/Sidebar.tsx:25`（`src={PROFILE.avatar}`）
- 英文名：`components/Sidebar.tsx:32` 到 `components/Sidebar.tsx:36`
- 中文名：`components/Sidebar.tsx:38`
- 头衔：`components/Sidebar.tsx:40` 到 `components/Sidebar.tsx:42`
- 单位：`components/Sidebar.tsx:47` 到 `components/Sidebar.tsx:53`
- 地点：`components/Sidebar.tsx:55` 到 `components/Sidebar.tsx:60`
- CV：`components/Sidebar.tsx:62` 到 `components/Sidebar.tsx:72`
- 社交图标：`components/Sidebar.tsx:88` 到 `components/Sidebar.tsx:101`
- 主题按钮：`components/Sidebar.tsx:77` 到 `components/Sidebar.tsx:83`、`components/Sidebar.tsx:104` 到 `components/Sidebar.tsx:110`

### 3.2.3 重要细节
- 姓名是按空格拆分两行显示：`components/Sidebar.tsx:34` 到 `components/Sidebar.tsx:35`
  - 如果你名字不是“名 + 姓”两个单词，建议改成直接显示 `PROFILE.name`，否则可能显示不完整。

---

## 3.3 顶部 Navigation（Profile / Research / Log）

- 文件：`components/Navigation.tsx:10` 到 `components/Navigation.tsx:14`
- 你只需改 `label` 文案，不建议随便改 `id`（除非你同步改 `View` 类型和 `App.tsx` switch）

活跃 tab 样式在：
- `components/Navigation.tsx:24` 到 `components/Navigation.tsx:28`

---

## 3.4 About 页面（Profile 页面主体）

文件：`components/views/About.tsx`

### 3.4.1 移动端个人信息块
- 区块：`components/views/About.tsx:10` 到 `components/views/About.tsx:47`
- 数据来源仍然是 `PROFILE` 和 `SOCIAL_LINKS`

### 3.4.2 顶部大标题（诗句）
- 文案位置：`components/views/About.tsx:51` 到 `components/views/About.tsx:53`
- 这里是直接硬编码文本，和 `constants.tsx` 无关

### 3.4.3 About Me 简介
- 渲染：`components/views/About.tsx:58`
- 内容：`constants.tsx:24` 的 `PROFILE.bio`

### 3.4.4 Focus 列表
- 渲染循环：`components/views/About.tsx:67` 到 `components/views/About.tsx:73`
- 数据：`constants.tsx:141` 到 `constants.tsx:146`

### 3.4.5 Research Skills 列表
- 渲染循环：`components/views/About.tsx:81` 到 `components/views/About.tsx:87`
- 数据：`constants.tsx:148` 到 `constants.tsx:151`

### 3.4.6 教育背景
- 当前是硬编码，不在 `constants.tsx`：
  - `components/views/About.tsx:92` 到 `components/views/About.tsx:120`
- 要改学校、学位、年份，直接改这段文本

---

## 3.5 Research 页面（论文列表 + 会议列表）

文件：`components/views/Research.tsx`

### 3.5.1 数据源
- Publications：`RESEARCH_DATA`（`constants.tsx:38` 到 `constants.tsx:71`）
- Conferences：`CONFERENCE_DATA`（`constants.tsx:73` 到 `constants.tsx:97`）

### 3.5.2 卡片上每个字段来自哪里
- 图片：`item.image`（`components/views/Research.tsx:25` 到 `components/views/Research.tsx:30`）
- 标签：`item.tags`（`components/views/Research.tsx:39` 到 `components/views/Research.tsx:40`）
- 年份：`item.year`（`components/views/Research.tsx:43`）
- 标题：`item.title`（`components/views/Research.tsx:46` 到 `components/views/Research.tsx:48`）
- 摘要：`item.abstract`（`components/views/Research.tsx:50` 到 `components/views/Research.tsx:52`）
- 作者：`item.authors`（`components/views/Research.tsx:55` 到 `components/views/Research.tsx:56`）
- 会议名：`item.conference`（`components/views/Research.tsx:57` 到 `components/views/Research.tsx:59`）

### 3.5.3 两个栏目标题
- “Selected Publications”：`components/views/Research.tsx:76`
- “Conferences”：`components/views/Research.tsx:84`

---

## 3.6 Research 详情页（点击论文后的页面）

文件：`components/views/ResearchDetail.tsx`

### 3.6.1 详情内容来源逻辑
- 如果 `paper.fileUrl` 有值，则 `fetch` 对应 markdown：`components/views/ResearchDetail.tsx:37` 到 `components/views/ResearchDetail.tsx:55`
- markdown 内容渲染：`components/views/ResearchDetail.tsx:157` 到 `components/views/ResearchDetail.tsx:161`
- 如果 `fileUrl` 为空，显示占位提示：`components/views/ResearchDetail.tsx:163` 到 `components/views/ResearchDetail.tsx:165`

### 3.6.2 如何给论文接入 markdown
1. 在 `public/content/research/` 下新增文件（例如 `my-paper.md`）
2. 在对应论文对象里设置：
   - `fileUrl: "/content/research/my-paper.md"`（示例见 `constants.tsx:54`）
3. 刷新页面，点击该论文即可显示 markdown

### 3.6.3 操作按钮显示条件
- “Read Paper” 按钮：仅当 `paper.pdfUrl` 存在且不等于 `#` 才显示（`components/views/ResearchDetail.tsx:99`）
- “View Code” 按钮：仅当 `paper.codeUrl` 存在时显示（`components/views/ResearchDetail.tsx:110`）

### 3.6.4 BibTeX 生成
- 模板在：`components/views/ResearchDetail.tsx:176` 到 `components/views/ResearchDetail.tsx:181`
- 键名取第一作者的姓（`split(' ')[1]`）+ 年份，特殊姓名可能要手动调整

### 3.6.5 markdown 显示样式（标题、段落、代码块）
- `MarkdownComponents` 定义在：`components/views/ResearchDetail.tsx:11` 到 `components/views/ResearchDetail.tsx:30`
- 你可以在这里改 h1/h2/p/code 等渲染样式

---

## 3.7 Log 页面（日志卡片 + Moments 图片墙）

文件：`components/views/Log.tsx`

### 3.7.1 左侧日志列表数据
- 数据：`LOG_DATA`（`constants.tsx:99` 到 `constants.tsx:129`）
- 列表渲染：`components/views/Log.tsx:27` 到 `components/views/Log.tsx:64`
- 标题 “Mukj1's Log”：`components/views/Log.tsx:23`

每条日志卡片字段：
- 日期：`log.date`（`components/views/Log.tsx:47` 到 `components/views/Log.tsx:49`）
- 标题：`log.title`（`components/views/Log.tsx:51` 到 `components/views/Log.tsx:53`）
- 摘要：`log.summary`（`components/views/Log.tsx:55` 到 `components/views/Log.tsx:57`）
- 封面：`log.image`（`components/views/Log.tsx:35` 到 `components/views/Log.tsx:40`）

### 3.7.2 右侧 Moments 图片墙
- 数据：`GALLERY_IMAGES`（`constants.tsx:131` 到 `constants.tsx:139`）
- 渲染：`components/views/Log.tsx:76` 到 `components/views/Log.tsx:92`
- 尾部文案 “Captured on iPhone ...”：`components/views/Log.tsx:95` 到 `components/views/Log.tsx:97`

点击图片会打开 Lightbox：
- `components/views/Log.tsx:103` 到 `components/views/Log.tsx:106`
- Lightbox 组件在 `components/Lightbox.tsx`

---

## 3.8 Log 详情页

文件：`components/views/LogDetail.tsx`

### 3.8.1 内容来源逻辑
- 若 `entry.fileUrl` 有值：加载 markdown（`components/views/LogDetail.tsx:36` 到 `components/views/LogDetail.tsx:50`）
- 若 `entry.fileUrl` 为空：回退到 `entry.summary`（`components/views/LogDetail.tsx:51` 到 `components/views/LogDetail.tsx:53`）

### 3.8.2 如何给日志接入 markdown
1. 在 `public/content/logs/` 下新建 `xxx.md`
2. 在 `constants.tsx` 对应日志对象设：
   - `fileUrl: "/content/logs/xxx.md"`（示例：`constants.tsx:109`）

### 3.8.3 markdown 样式
- `LogMarkdownComponents` 在 `components/views/LogDetail.tsx:11` 到 `components/views/LogDetail.tsx:29`

---

## 4. 重点数据文件：`constants.tsx` 字段说明

## 4.1 `PROFILE`（`constants.tsx:19` 到 `constants.tsx:29`）
- `name`：英文名（侧边栏/可能用于 AI 文案）
- `chineseName`：中文名
- `title`：职位头衔
- `affiliation`：机构
- `bio`：个人介绍
- `email`：邮箱（注意社交里的 mailto 也要一起改）
- `location`：地点
- `avatar`：头像 URL
- `cvLink`：CV 地址

## 4.2 `RESEARCH_DATA` / `CONFERENCE_DATA`
- 核心字段：
  - `id`：唯一 ID，不能重复
  - `title`
  - `authors`（字符串数组）
  - `conference`
  - `year`（数字）
  - `abstract`
  - `tags`（数组）
  - `image`
  - `pdfUrl`
  - `codeUrl`
  - `doi`
  - `fileUrl`（markdown 路径，格式通常是 `/content/...`）

## 4.3 `LOG_DATA`
- `id`：唯一 ID
- `date`：建议 `YYYY-MM-DD`
- `title`
- `summary`
- `category`：只能是 `'Dev' | 'Life' | 'Reading'`（见 `types.ts:24`）
- `image`
- `fileUrl`

---

## 5. markdown 文件应该放哪里

- 论文详情：`public/content/research/`
- 日志详情：`public/content/logs/`
- 在数据里用绝对站点路径引用，例如：
  - `/content/research/social-dynamics.md`
  - `/content/logs/optimizing-pandas.md`

参考现有：
- `public/content/research/social-dynamics.md`
- `public/content/logs/optimizing-pandas.md`

---

## 6. 全站样式（颜色、字体、动画）怎么改

## 6.1 字体和颜色
- `index.html:9` 到 `index.html:57`：Tailwind 运行时 config
- `index.html:58`：Google Fonts 引入
- `tailwind.config.js:11` 到 `tailwind.config.js:41`：构建时字体和颜色

建议：
- 若你只改文案和内容，不需要动这两处。
- 若你要系统改视觉风格，最好同时改 `index.html` 和 `tailwind.config.js`，避免开发/构建环境不一致。

## 6.2 动画
- `animate-slide-in` 定义：
  - `tailwind.config.js:43` 到 `tailwind.config.js:50`
  - `index.html:45` 到 `index.html:53`

---

## 7. 目前代码里你要特别注意的点

- `constants.tsx:21` 的 `chineseName` 在当前文件里有编码/字符串异常迹象（显示乱码和引号不完整），你修改时建议直接改成标准 UTF-8 字符串，例如 `"杨睿驰"`。
- 多处出现 `鈥?` / `漏` 这类乱码字符（如 `components/views/Research.tsx:40`、`components/views/Log.tsx:96`、`components/Sidebar.tsx:113`），如果你要做内容清理，可统一替换为正常符号（如 `•`、`©`、`-`）。
- `components/GeminiChat.tsx` 和 `components/Logo.tsx` 当前没有在 `App.tsx` 中挂载；你改它们不会影响主页，除非你把组件引入并渲染到 `App.tsx`。

---

## 8. 最常见改动的“最短路径”

## 8.1 只改个人信息（名字/简介/头像/CV）
- 只改 `constants.tsx` 的 `PROFILE` 区块（`constants.tsx:19` 到 `constants.tsx:29`）

## 8.2 新增一篇论文（带详情 markdown）
1. 在 `constants.tsx` 的 `RESEARCH_DATA` 新增对象（参考 `constants.tsx:39` 到 `constants.tsx:55`）
2. 在 `public/content/research/` 新建 markdown
3. 设置 `fileUrl: "/content/research/你的文件名.md"`

## 8.3 新增一条日志（带详情 markdown）
1. 在 `constants.tsx` 的 `LOG_DATA` 新增对象（参考 `constants.tsx:100` 到 `constants.tsx:110`）
2. 在 `public/content/logs/` 新建 markdown
3. 设置 `fileUrl: "/content/logs/你的文件名.md"`

## 8.4 改导航文案
- 改 `components/Navigation.tsx:10` 到 `components/Navigation.tsx:14` 的 `label`

## 8.5 改 About 页面教育经历
- 直接改 `components/views/About.tsx:92` 到 `components/views/About.tsx:120` 文本

---

如果你愿意，我下一步可以基于这份说明，帮你把当前主页内容全部替换成你的真实信息（中英文姓名、学校、研究方向、论文、日志、图片）并顺手修掉乱码字符。
