# 🚀 DevStack - Devlopment Stack

### Build Your Ideal Development Stack

DevStack is a modern and interactive web application that helps developers explore different technologies and build their ideal development stack.

Users can browse technologies by category, add technologies to their personal stack, remove them when needed, and visually manage their selected tools in one place.

---

## ✨ Features

### 1. 🧩 Build Your Own Stack
Explore different technologies and add them to your personal development stack with a single click.

### 2. 📚 Explore Technologies
Discover technologies across different categories such as Frontend, Backend, Database, Styling, Languages, DevOps, and Tools.

### 3. ⚡ Interactive Stack Management
Easily add, remove, and clear technologies from your stack with real-time UI updates and visual feedback.

---

## 🛠️ Technologies Used

- ⚛️ React
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔔 React Toastify
- ⭐ React Icons
- ⚡ Vite

---

## 🎯 Project Highlights

- Responsive design for desktop, tablet, and mobile
- Component-based React architecture
- Type-safe development with TypeScript
- Dynamic state management using React Hooks
- API data fetching
- Interactive UI with smooth transitions
- Clean and modern user interface


























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
