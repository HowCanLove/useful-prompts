// AI 提示词数据
//
// os 字段在这个仓库里被复用为"目标模型"：
//   'windows'  →  ChatGPT (GPT-4 / GPT-5)
//   'macos'    →  Claude (Sonnet / Opus / Haiku)
//   'cross'    →  通用（任何主流 LLM 都能用）
//
// category: system=写作 · disk=编程 · files=翻译 · productivity=学习 ·
//           dev=营销 · media=创意 · network=数据分析 · security=求职 · browser=生活
//
// 每条多一个 prompt 字段：完整提示词文本。前端在弹窗里渲染并提供"复制"按钮。

const CATALOG = [
  // ========== 写作 ==========
  {
    name: '文章润色专家',
    desc: {
      zh: '把口水话/翻译腔/AI 味浓的草稿改成自然通顺的中文。保留原意和语气，只改不顺、啰嗦、有语法问题的地方。',
      en: 'Polishes draft Chinese into natural, flowing prose — keeps meaning and tone, only fixes awkward / verbose / ungrammatical parts.',
      ja: '中国語のドラフトを自然な文章に磨き上げる。意味とトーンを保ち、不自然・冗長・文法ミスのみ修正。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'system', price: 'free',
    prompt: `你是一位资深中文编辑。我会给你一段中文草稿，请你帮我润色，让它读起来更自然、更通顺、更地道。

要求：
1. 保留原文的核心意思和情感语气，不要改变作者的观点
2. 只修改不通顺、太啰嗦、有语法问题或翻译腔的部分
3. 保持原文的段落结构，不要随意增删段落
4. 如果有专业术语或人名，保持不变
5. 修改完之后，用一句话告诉我你主要改了哪些方面

我的草稿：
[在这里粘贴你的文章]`,
  },
  {
    name: '公众号开篇钩子生成器',
    desc: {
      zh: '给定主题和核心观点，生成 5 个不同风格的公众号开篇段落（数据派 / 故事派 / 反常识派 / 提问派 / 矛盾派），让点击率不会死在第一行。',
      en: 'Given a topic and angle, generates 5 WeChat-article opening hooks in distinct styles so the read-through rate does not die in line one.',
      ja: 'トピックと切り口から、WeChat記事の冒頭を5つの異なるスタイルで生成。最初の行で読者を逃さない。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'system', price: 'free',
    prompt: `你是一位经验丰富的公众号编辑，擅长写让人忍不住读下去的开头。

我会给你一个文章主题和核心观点。请你给我 5 个不同风格的开篇段落（每段 80-150 字）：

1. **数据派**：用一个意外的数字/比例切入
2. **故事派**：用一个具体的小场景切入
3. **反常识派**：用一个挑战常见认知的判断切入
4. **提问派**：用一个让读者想知道答案的问题切入
5. **矛盾派**：用一对看似冲突的现象切入

每段开头标好风格名。最后用一句话告诉我你最推荐哪一种、为什么。

主题：[填入你的文章主题]
核心观点：[填入你想表达的核心论点]`,
  },
  {
    name: '邮件改写（更专业 / 更友好 / 更简短）',
    desc: {
      zh: '把你随手写的邮件草稿改写成 3 个版本：更正式、更友好、更简短。适合给客户/老板/同事发邮件前过一遍。',
      en: 'Rewrites your draft email in 3 variants — more formal, friendlier, shorter. Run it before hitting send to clients/managers/peers.',
      ja: 'メールドラフトを3つのバージョン（よりフォーマル/より親しみやすく/より簡潔）に書き換え。送信前のチェックに最適。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'system', price: 'free',
    prompt: `我会给你一封中文邮件草稿。请改写成 3 个版本：

1. **更专业版**：商务正式语气，适合给客户或上级
2. **更友好版**：轻松一些的口吻，但仍然得体，适合给同事
3. **更简短版**：保留所有关键信息但字数减一半，适合需要快速沟通的场景

每版前面标好类型，邮件主题也一并改写。

我的草稿：
[在这里粘贴你的邮件草稿]`,
  },
  {
    name: '小红书爆款文案模板',
    desc: {
      zh: '把任何主题改写成小红书风格：emoji 开头、3 行标题、要点列表、引导评论。专为算法推荐写。',
      en: 'Rewrites any topic into Xiaohongshu (RED) style — emoji opener, 3-line title, bullet points, comment hooks. Built for the algorithm.',
      ja: 'どんなトピックも小紅書スタイルに変換 — 絵文字冒頭、3行タイトル、箇条書き、コメント誘導。アルゴリズム向け。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'dev', price: 'free',
    prompt: `你是小红书爆款博主，深谙平台算法和用户心理。

我会给你一个主题或一个想分享的内容。请你帮我写一篇小红书风格的笔记：

【格式要求】
- 标题：3 行以内，每行不超过 20 字，必须带 1-2 个相关 emoji
- 正文：300-600 字，开头 1 句话 hook，中间用列表/小标题分点（带 emoji），结尾引导评论
- 配 5-8 个相关话题标签 #xxx

【内容要求】
- 真诚不像广告，但要"爆"——给读者明确的价值（避坑、捡漏、技巧）
- 用第一人称叙述，加入个人感受/经历
- 数据要具体（"省了 30%" 比 "省了很多" 好）

主题/内容：[填入你想分享的]
受众：[比如：30 岁宝妈 / 大学生 / 程序员]`,
  },

  // ========== 编程 ==========
  {
    name: '代码 Review（找问题 + 给方案）',
    desc: {
      zh: '把一段代码贴进去，AI 像资深 reviewer 一样找出 bug、设计问题、性能隐患、可读性问题，并给出具体改法。',
      en: 'Paste code, get a senior-reviewer-style critique — bugs, design issues, perf risks, readability — each with a concrete fix.',
      ja: 'コードを貼ると、シニアレビュアー視点でバグ・設計・パフォーマンス・可読性の問題を指摘し、具体的な修正案を提示。',
    },
    url: 'https://claude.ai/',
    os: 'macos', category: 'disk', price: 'free',
    prompt: `你是一位经验 10 年以上的资深工程师，擅长 code review。

我会贴一段代码给你。请按下面的格式 review：

## 1. 严重问题（会导致 bug / 安全漏洞 / 数据丢失）
列出每个问题 + 在哪一行 + 为什么是问题 + 怎么改

## 2. 设计 / 架构问题
看代码组织、抽象、命名、职责划分。一样：在哪 + 为什么 + 怎么改

## 3. 性能 / 资源问题
有没有 N+1 查询、不必要的循环嵌套、内存泄漏隐患等

## 4. 可读性 / 维护性问题
变量命名、注释、复杂度、魔法数字等

## 5. 我整体的看法（1 段话）
这段代码总体怎么样？建议先改哪 1-2 个最重要的？

代码（语言：[填语言]）：
\`\`\`
[在这里粘贴代码]
\`\`\``,
  },
  {
    name: '把这段代码讲清楚',
    desc: {
      zh: '看到看不懂的代码（比如 leetcode 题解 / 别人写的复杂函数），让 AI 用初学者听得懂的话解释清楚每一步在干嘛。',
      en: 'Drop in code you don\'t understand — AI walks through it step by step in beginner-friendly language.',
      ja: '理解できないコード（leetcode解答や複雑な関数）を渡すと、初心者にも分かる言葉で各ステップを解説。',
    },
    url: 'https://claude.ai/',
    os: 'macos', category: 'disk', price: 'free',
    prompt: `我会给你一段我看不懂或者只看懂大概的代码。请用对一个**有基本编程知识但不熟悉这段代码所用模式**的人能听懂的方式，把它讲清楚。

请按这个结构：

1. **一句话总结**：这段代码是干嘛的
2. **关键概念预备**：理解这段代码需要先知道哪些前置知识？每个用 1-2 句解释
3. **逐段讲解**：把代码分成 3-6 个逻辑块，每块说"这块在做什么 + 为什么这样做"
4. **可能的陷阱**：有什么容易理解错或踩坑的地方
5. **如果让我自己写一遍**：你会建议我先写哪部分、怎么测试每一步

代码（语言：[填语言]）：
\`\`\`
[在这里粘贴]
\`\`\``,
  },
  {
    name: '帮我写测试用例',
    desc: {
      zh: '贴一个函数 / 类，让 AI 帮你列出该测的所有边界情况，并写好对应的测试代码（pytest / Jest / Go test 等都支持）。',
      en: 'Paste a function or class and the AI lists every edge case worth testing, then writes the test code (pytest / Jest / Go test, etc).',
      ja: '関数やクラスを貼ると、テストすべき全エッジケースを列挙し、対応するテストコード（pytest/Jest/Go testなど）を生成。',
    },
    url: 'https://claude.ai/',
    os: 'macos', category: 'disk', price: 'free',
    prompt: `你是一位测试驱动开发的资深工程师。

我会给你一个函数或类。请按以下流程帮我写测试：

## 1. 测试矩阵（先列再写）
列出所有应该测的场景，分组：
- 正常路径（happy path）：典型输入应该返回什么
- 边界情况：空输入、最大/最小值、极长/极短、Unicode 字符等
- 错误路径：非法输入、依赖失败、超时等
- 副作用 / 状态：如果有的话

## 2. 测试代码
按你列的矩阵写测试。格式要求：
- 每个测试用 \`describe\` / \`it\` 命名清楚在测什么场景
- 测试名用中文（"应该 xxx 时返回 yyy"），让人一眼看懂
- AAA 模式（Arrange / Act / Assert）

## 3. 测不到的部分
如果有些场景靠单元测试覆盖不了（比如要 mock 外部 API），明确指出来，并建议怎么补（集成测试 / 手测）

测试框架：[pytest / Jest / Vitest / Go test / RSpec ...]
被测代码：
\`\`\`
[在这里粘贴]
\`\`\``,
  },
  {
    name: 'Bug 排查助手（先问再答）',
    desc: {
      zh: '描述一个 bug 现象，AI 不会马上瞎猜原因，而是先问你 3-5 个关键问题，再根据你的回答给出排查方向。',
      en: 'Describe a bug — AI asks 3-5 sharp diagnostic questions first, then narrows down the cause based on your answers.',
      ja: 'バグ症状を説明すると、AIはすぐ推測せず、まず3-5つの診断質問をしてから原因を絞り込む。',
    },
    url: 'https://claude.ai/',
    os: 'macos', category: 'disk', price: 'free',
    prompt: `你是一位经验丰富的 senior 工程师，擅长 debug。

我会描述一个我遇到的 bug。**不要直接猜原因**，请按以下流程：

## 第一步：问我关键问题
根据我的描述，问我 3-5 个最能区分可能原因的问题。每个问题前标号。

例如：
1. 这个问题是从什么时候开始的？最近改过什么吗？
2. 它每次都发生还是偶发？
3. 错误信息 / log 里有什么具体内容？
（等我回答完所有问题再继续）

## 第二步（等我回答之后）：列出可能的原因
按可能性从高到低，每个原因附"为什么我猜是这个 + 怎么验证"。

## 第三步：给出最优先的排查动作
"如果让你只做一件事来定位，先做 X"。

我遇到的现象：
[在这里描述]`,
  },

  // ========== 翻译 ==========
  {
    name: '中英技术翻译（保留术语）',
    desc: {
      zh: '专门翻译技术文档/代码注释/issue 评论，保留所有专业术语原文（不强行翻译"thread / cache / buffer"等），翻译质量比直翻好得多。',
      en: 'Specialized for tech docs / code comments / issue threads — keeps technical terms in original form (no forced translation of "thread/cache/buffer"). Far better than literal translation.',
      ja: '技術文書・コードコメント・issueコメント専用翻訳。専門用語は原文維持（thread/cache/bufferを無理に翻訳しない）。直訳より遥かに優秀。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'files', price: 'free',
    prompt: `你是一位资深技术翻译，长期为程序员翻译英文技术文档、issue、PR comment。

【翻译规则】
1. 保留所有英文专业术语原文（thread, cache, buffer, race condition, deadlock, queue 等）。**不要强行翻译技术名词**
2. 代码片段、变量名、函数名一律保持原文不动
3. 句式按中文习惯调整，**不要逐字直译**。中英文标点正确切换
4. 缩写第一次出现可以补全英文全称（HTTP / TCP 这种已经太普及的不用补）
5. 如果原文有歧义，按对程序员最自然的理解翻译，并在末尾用 // 注明

【格式】
- 翻译完直接给中文，不要再附原文（除非有歧义说明）
- 段落结构和原文一致

需要翻译的内容（中→英也按这套规则反向）：
[在这里粘贴]`,
  },

  // ========== 学习 ==========
  {
    name: '费曼学习法：考考我',
    desc: {
      zh: '让 AI 当你的"学生"，你给它讲解你正在学的概念，它来用初学者视角提问，暴露你解释里逻辑漏洞和理解不到位的地方。',
      en: 'AI plays your "student" while you explain a concept — it asks beginner-style questions that surface gaps in your reasoning.',
      ja: 'AIがあなたの「生徒」になり、あなたが概念を説明する。AIは初心者視点で質問し、理解の穴を浮き彫りにする。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'productivity', price: 'free',
    prompt: `我们来玩费曼学习法：我教你一个概念，你扮演一个**完全不懂这个领域的初学者**，用提问的方式帮我发现讲解里讲不清楚的地方。

【你的角色规则】
1. 假装你是这个领域的零基础初学者，**不要用专业知识自己补全**我没讲清的部分
2. 当我用了我没解释过的术语时，立刻打断："等等，xxx 是什么意思？"
3. 当我的论证有跳跃时，问："为什么从 A 就能推到 B 了？"
4. 当我举的例子不够具体时，问："能给个具体场景吗？比如一个真实例子"
5. 一次只问 1-2 个问题，不要一次问一堆把我淹没
6. 如果我答得好，简短确认（"懂了"）然后问下一个问题
7. 我答错或者答得含糊时，明确指出来："你说的 X，但我之前学过 Y，这俩不矛盾吗？"

我准备讲解的概念是：[填入你要复习/讲清楚的概念]

我开始讲：
[然后开始你的讲解]`,
  },
  {
    name: '把一个学科压缩成一张地图',
    desc: {
      zh: '给定一门学科或主题，让 AI 给你一张"知识地图"：核心概念、关键分支、常见误区、推荐学习路径，1 小时形成全局认知。',
      en: 'Get a one-page knowledge map of any field — core concepts, main branches, common pitfalls, recommended learning path. Build a mental map in an hour.',
      ja: 'どんな分野でも1ページの「知識マップ」に圧縮 — 中核概念、主要分岐、よくある落とし穴、推奨学習パス。1時間で全体像を把握。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'productivity', price: 'free',
    prompt: `我想用最快的速度建立对一个学科 / 主题的全局认知（不深入细节，先有地图）。

请按以下结构给我一张"地图"：

## 1. 这个领域到底在解决什么问题？（2-3 句话）
不要从历史和定义开始，**直接说它对人类/产业的实际作用**

## 2. 核心概念（5-8 个，每个 1 句话定义）
按重要性排序。这些是后面所有内容的基础

## 3. 主要分支 / 流派（树状）
列出这个领域的 3-5 个大方向，每个简单说"在研究什么 + 适合解决什么问题"

## 4. 入门常见误区（3-5 条）
新手最容易理解错或走弯路的地方

## 5. 推荐学习路径
- 入门级（0→1 阶段）：读什么 / 做什么项目，需要多久
- 进阶级（能上手做事）：要看什么 / 练什么
- 大牛级（能创新）：再学什么、看什么论文

## 6. 这个领域里"大家都在引用但其实没必要早学"的概念
帮我在前期不浪费时间

主题：[填入你想入门的领域，例如：机器学习 / 经济学 / 神经科学 / 量子物理 / 区块链]`,
  },

  // ========== 数据 ==========
  {
    name: 'Excel/Google Sheets 公式生成',
    desc: {
      zh: '用大白话描述你想要的逻辑（比如"在 A 列里找出包含某个词且 B 列大于 100 的行加起来"），AI 给你正确的公式 + 解释每段在做什么。',
      en: 'Describe what you want in plain language ("sum rows where column A contains X and column B > 100") — AI returns the formula plus a breakdown.',
      ja: 'やりたいことを普通の言葉で説明（「A列に〇〇を含み、B列が100超の行を合計」）すると、正しい数式と各部分の解説を返す。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'network', price: 'free',
    prompt: `我会用普通中文描述我想在 Excel / Google Sheets 里做的事。请帮我：

1. 给出**最简洁正确**的公式
2. 拆解公式的每一段在做什么（用中文，对应公式里的具体函数 / 参数）
3. 列出 2-3 个常见陷阱（比如：数据有空格 / 大小写 / 文本 vs 数字混在一起会出问题）
4. 如果有更优解（比如改用透视表 / Filter 函数），单独提一句"如果你的版本支持 X，下面这种更好"

【环境信息】
我用的是：[Excel 365 / Excel 2019 / Google Sheets / WPS]
数据规模：[大概多少行]

【我想做的事】
[用中文描述你的需求]

【数据样例】
[贴 3-5 行数据让我能理解你的列结构]`,
  },
  {
    name: 'SQL 查询助手',
    desc: {
      zh: '用中文描述你要查的数据，AI 写出对应的 SQL 并解释每个 JOIN/WHERE 条件为什么要这么写。支持 PostgreSQL / MySQL / SQLite 方言区分。',
      en: 'Describe the data you need in plain English / Chinese — AI writes the SQL and explains each JOIN/WHERE. Handles PostgreSQL / MySQL / SQLite dialects.',
      ja: '必要なデータを言葉で説明すると、SQLを生成し各JOIN/WHERE条件の意図を解説。PostgreSQL/MySQL/SQLite方言対応。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'network', price: 'free',
    prompt: `你是一位资深 DBA。我会描述我想查的数据，请你帮我写 SQL。

【流程】
1. 如果我没说清楚表结构，**先反问我**关键的表和列。不要瞎猜
2. 写出 SQL 后，**逐段解释**：为什么这里 JOIN、WHERE 为什么这么过滤、为什么用 GROUP BY 而不是 DISTINCT 等
3. 提醒我 2-3 个性能上要注意的地方（缺索引会慢、笛卡尔积风险等）
4. 如果有更优写法（CTE 重写更清晰、LATERAL JOIN 替代相关子查询等），单独提

【环境】
数据库：[PostgreSQL / MySQL / SQLite / SQL Server / Oracle]
版本：[填版本号或 "不确定"]

【表结构】
[贴 CREATE TABLE 语句或者用文字说明]

【我想查什么】
[用中文描述]`,
  },

  // ========== 创意 ==========
  {
    name: '从一个想法发散 10 个变体',
    desc: {
      zh: '想做一个 SaaS / 写一篇文章 / 起一个产品名时，给 AI 一个种子想法，让它帮你发散 10 个不同方向的变体（不是改写措辞，是真的换角度）。',
      en: 'Got a seed idea (SaaS, article angle, product name)? AI generates 10 genuine variations along different axes — not rephrasings, real reframings.',
      ja: 'SaaS・記事・製品名のアイデアの種から、本質的に異なる10通りのバリエーションを生成。言い換えではなく本当の発想転換。',
    },
    url: 'https://chat.openai.com/',
    os: 'cross', category: 'media', price: 'free',
    prompt: `我有一个种子想法。请你不要改写措辞，而是从**真正不同的角度**给我 10 个变体——每个变体应该让我觉得"哦，我没想过这种切法"。

【发散的轴】
请确保 10 个变体覆盖以下不同维度（不是每个轴一个，而是每个变体明确说自己是从哪个角度切的）：
- 受众：换一个完全不同的目标用户
- 场景：换一个使用时机或地点
- 形式：换一种载体（从产品换成服务 / 从文章换成短视频）
- 反向：把核心动作反过来做
- 极简：砍到只剩一个最核心的功能 / 论点
- 极致：把某个维度做到夸张（最便宜 / 最快 / 最美）
- 跨界：从另一个行业借鉴模式
- 小众：只服务一个非常细分的群体
- 时间：把时间维度变了（订阅 / 年度仪式 / 一次性）
- 反直觉：从大家都觉得不对的方向切入

每个变体格式：
**[变体名]**（角度：xxx）
1 句话说清楚做什么 + 1 句话说为什么这个角度有意思

种子想法：[填入你的初始想法]`,
  },

  // ========== 求职 ==========
  {
    name: '简历针对性优化',
    desc: {
      zh: '把你的简历 + 目标 JD 一起喂给 AI，让它告诉你简历里哪些项目要加强 / 改写措辞 / 重新排序，让 HR 一眼看到匹配点。',
      en: 'Paste your CV + a job description. AI tells you which experience to strengthen / reword / reorder so the recruiter spots the match instantly.',
      ja: '履歴書とJDを渡すと、どの経歴を強化・言い換え・並び替えすればリクルーターに即マッチと分かるかを指摘。',
    },
    url: 'https://claude.ai/',
    os: 'macos', category: 'security', price: 'free',
    prompt: `你是一位资深 tech 招聘官，每天 review 几十份简历。我会给你两段内容：我的简历 + 目标 JD。请按以下结构帮我针对性优化：

## 1. JD 里的关键能力 / 关键词（提取）
按 JD 列出 5-10 个对方最看重的能力或关键词，按权重排序

## 2. 我简历的匹配度评估
- ✅ 已经写到位的（点出在简历哪段）
- 🟡 写了但写得不够亮眼的（说怎么改）
- ❌ JD 要而我没写的（建议如何补——是真没做过那就不补，是做过但没写就要加）

## 3. 具体改写建议
针对最关键的 3-5 条经历，给出"原文 → 改后"的对照。改后版本应该：
- 用 STAR 法则（情境 / 任务 / 行动 / 结果）
- 数字化结果（提升 X% / 节省 Y 小时）
- 关键词与 JD 呼应

## 4. 你建议我重新排序简历的哪几项？
让最匹配的内容出现在前 1/3

简历：
[在这里粘贴]

目标 JD：
[在这里粘贴]`,
  },
];
