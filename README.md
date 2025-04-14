# 🧠 Sentence Construction Assignment

This is a sentence construction quiz web app built using **Vite + React + Tailwind CSS**. It presents users with fill-in-the-blank style questions, where they need to select the correct sequence of words to form a meaningful sentence.

## 🚀 Live Demo

Check out the deployed app here:  
🔗 [https://sentence-construction-assignment-ca-monk.vercel.app/](https://sentence-construction-assignment-ca-monk.vercel.app/)


## 📦 Tech Stack

- ⚛️ React (with Vite)
- 🎨 Tailwind CSS
- 🧠 TypeScript (optional usage)
- 📁 Modular File Structure

## 📁 Folder Structure


Directory structure:
└── amrithimanshu-sentence_construction_assignment_ca_monk/
    ├── README.md
    ├── data.json
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── api/
    │   └── data.js
    ├── public/
    └── src/
        ├── App.css
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── assets/
        ├── components/
        │   ├── QuestionCard.tsx
        │   └── Result.tsx
        ├── pages/
        │   ├── Instruction.tsx
        │   ├── Quiz.tsx
        │   └── Start.tsx
        ├── types/
        │   └── index.ts
        └── utils/
            └── api.ts



## ✨ Features

- ⏳ 30-second timer per question
- 🔁 Auto-navigation to next question on timeout
- ✅ Dynamic word selection & answer validation
- 📊 Final score/result screen
- 🚫 Quit quiz confirmation popup
- 📱 Responsive UI

## 📄 Data Source

Questions are fetched from a local `data.json` file using a custom API route (`/api`).

## 🛠️ Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/sentence-construction-assignment.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
