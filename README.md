# 🤖 Useful Prompts

精选 ChatGPT / Claude / Gemini 中文提示词集合 / Curated Chinese AI prompts for ChatGPT / Claude / Gemini / 厳選ChatGPT・Claude・Gemini中国語プロンプト集

🌐 **Live site / 在线访问 / オンライン:** https://howcanlove.github.io/useful-prompts/

[![screenshot](./screenshot.png)](https://howcanlove.github.io/useful-prompts/)

> Built from the [useful-catalog-template](https://github.com/HowCanLove/useful-catalog-template). Sister sites: [useful-software](https://github.com/HowCanLove/useful-software) · [useful-vscode](https://github.com/HowCanLove/useful-vscode).

## ✨ Features

- 🌍 中文 / English / 日本語 — auto-detected from browser
- 🎯 Filter by target model (ChatGPT / Claude / Universal) and by use case (Writing / Coding / Translation / Learning / Marketing / Creative / Data / Career / Life)
- 📋 **One-click copy** — every card opens to a full prompt template; one button copies it to clipboard ready to paste into any AI
- 🔗 Hash-routed deep links (`/#文章润色专家` opens that prompt directly)
- ⭐ Favourites stored in localStorage
- 🌙 Dark mode + responsive

## ➕ Adding a prompt

Edit [`data.js`](./data.js) and append:

```js
{
  name: '提示词名',
  desc: {
    zh: '一两句话讲清楚这个 prompt 解决什么问题、适合什么场景。',
    en: 'One or two sentences on what this prompt solves.',
    ja: 'このプロンプトの目的と使用場面を1〜2文で。',
  },
  url: 'https://chat.openai.com/',  // 哪个 AI 比较适合用这个 prompt
  os: 'cross',         // 'windows' = ChatGPT 专用 · 'macos' = Claude 专用 · 'cross' = 通用
  category: 'system',  // system=写作 disk=编程 files=翻译 productivity=学习
                       // dev=营销 media=创意 network=数据 security=求职 browser=生活
  price: 'free',
  prompt: `完整的提示词模板。
                       
支持多行，支持任何字符（前端会用 textContent 渲染避免 HTML 问题）。
用 [方括号] 标出用户需要替换的占位。`,
}
```

## 💡 The 'prompt' field is special to this site

The base [`useful-catalog-template`](https://github.com/HowCanLove/useful-catalog-template) doesn't have this field. We add a small block to `app.js` (search for `// useful-prompts 专属`) that renders `item.prompt` inside the modal as a code block with a 📋 Copy button. The rest of the template is reused as-is.

## 🛠️ Local preview

```bash
python -m http.server 8000   # or `npx serve`, or open index.html directly
```

## 📄 License

MIT
