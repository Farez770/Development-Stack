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

---

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript or TypeScript. I use it in React because it makes writing and understanding the UI much easier.

---

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. A child should not change its props.

**State** is data that a component manages by itself. When the state changes, React updates the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets me store and update data in a React component.

In my DevStack project, I used it to keep track of the technologies that the user added to their stack.

```tsx
const [selectedTechnology, setSelectedTechnology] = useState<ItechnologiType[]>(
  [],
);
```

---

### 4. What does the `useEffect` hook do, and did you use it in this project?

`useEffect` is used for handling side effects in React, such as fetching data from an API.

I did not use `useEffect` to load the JSON data in my DevStack project. Instead, I used React's `use()` with a Promise to load the technology data.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which item has changed, been added, or removed.

For example:

`jsx
{technologyData.map((technology) => (
<TechnologyCards
    key={technology.id}
    technology={technology}
  />
))}
`

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition.

For example, I show a message when the user hasn't added anything to their stack:

For example:

`jsx
{selectedTechnology.length === 0 ? (

  <p>Your stack is empty.</p>
) : (
  selectedTechnology.map((technology) => (
    <div key={technology.id}>
      {technology.name}
    </div>
  ))
)}
`

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from a parent to a child using props.

For example, my Technologies component passes the technology data and isSelected value to TechnologyCards:

`jsx
<TechnologyCards
  technology={technology}
  isSelected={isSelected}
  onAdd={handleAddTechnology}
/>
`

The child can send something back by calling a function that the parent passed as a prop:

`jsx
<button onClick={() => onAdd(technology)>
Add to Stack
</button>
`

Here, TechnologyCards calls onAdd(), and the parent handles the action and updates the state.

---

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
