# Enterprise Income Category Ledger (React Refactor)

## 📌 Project Overview
This repository contains the refactored **Finals TLA 1** project for *CS008.23 - Web Applications Development 1*. The application transitions our original Midterm Vanilla JavaScript DOM manipulation code into a modern, declarative single-page React application powered by Vite and Bootstrap 5.

## 🔗 Live Deliverables
- **GitHub Repository:** [https://github.com/gaarrrrr/income-category-ledger.git]
- **Vercel Live Deployment:** [https://income-category-ledger-gaarrrrr.vercel.app/]

---

## 🤖 Mandatory AI Implementation & Code Defense

### 1. Features Developed with AI Assistance
AI (ChatGPT / Gemini) was utilized as a collaborative tool to assist in:
1. **Refactoring Imperative DOM Methods:** Translating direct DOM element queries (`document.getElementById`) and imperative mutations (`insertAdjacentHTML`) into reactive React state hooks (`useState`).
2. **UI Polish & Enhancements:** Incorporating dynamic UI helpers, such as a category counter badge and an interactive "Delete" action button per table row.
3. **Defense Documentation:** Structuring project documentation and verifying component state transitions.

---

### 2. Technical Code Defense & Architecture Breakdown

#### A. Imperative DOM vs. Declarative React State
* **Vanilla JS Approach (Midterm):** Required manually targeting nodes in memory (`document.getElementById("txtCatName")`), reading input values upon button click events, constructing raw HTML markup strings, and calling `.insertAdjacentHTML("beforeend", newRowHTML)` to modify the dynamic table body node in RAM.
* **React Approach (Finals):** The application relies on **declarative state management**. Form inputs are bound directly to React state variables (`catName`, `catDesc`) via controlled inputs (`onChange`). Adding a category simply pushes a new JavaScript object into the `categories` array state via `setCategories([...categories, newCategory])`. React automatically re-renders the DOM view in response to state changes.

#### B. Component Logic & State Mechanics
* **`useState` Hooks:**
  * `catName` & `catDesc`: Store real-time values of form inputs.
  * `categories`: Holds an array of category objects (`{ id, name, description }`).
* **Guard Clause Validation:** Retained from the original baseline script to prevent adding empty or whitespace-only category submissions (`if (!catName.trim() || !catDesc.trim())`).
* **Dynamic Table Rendering:** Replaced string interpolation with standard JSX list rendering (`categories.map()`), using a unique `key={item.id}` attribute for efficient React virtual DOM diffing.

---

## 🛠️ Technical Stack
- **Framework:** React 18+ (Vite)
- **Styling:** Bootstrap 5
- **Deployment Platform:** Vercel
- **Version Control:** Git & GitHub 