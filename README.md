# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive React application that helps developers explore popular technologies and build a personalized development stack. Users can browse technology cards, view useful details, add technologies to their stack, and remove them whenever needed.

## 🌐 Live Links

- **GitHub Repository:** https://github.com/Istiak0614/dev-stack
- **Live Site:** https://dev-stack-istiak.netlify.app

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- Font Awesome
- JSON

## ✨ Features

1. **Browse Development Technologies**  
   Explore different frontend, backend, database, language, styling, and DevOps technologies with details such as category, difficulty, rating, badge, and description.

2. **Build a Personalized Technology Stack**  
   Add technologies to the **Your Stack** section while preventing duplicate selections. Added technologies are clearly marked and their buttons become disabled.

3. **Manage the Selected Stack Dynamically**  
   Remove individual technologies or clear the complete stack using **Remove All**, with React Toastify notifications for add, duplicate, remove, and remove-all actions.

## 📱 Responsive Design

The application is fully responsive:

- **Mobile:** 1 technology card per row
- **Tablet:** 2 technology cards per row
- **Desktop:** 3 technology cards per row with the stack sidebar beside the technology grid

## 📂 Project Structure

```text
dev-stack/
│
├── public/
│   └── data.json
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── MainLayout.tsx
│   │   ├── TechList.tsx
│   │   ├── TechCard.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
│
└── vite.config.ts
```

## ⚙️ Installation and Setup

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project folder:

```bash
cd dev-stack
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

---

# ❓ React Questions

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX because it makes UI components easier to read, write, and manage.

## 2. What is the difference between props and state?

**Props** are values passed from a parent component to a child component. They are used to share data and functions between components.

**State** is data managed inside a component and can change while the application is running. When state changes, React updates the UI.

In this project, `App.tsx` passes technologies, stack data, and handler functions to child components using props.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update changing data in a React component.

In this project, I used it for:

- storing the technology list
- storing selected technologies in the stack
- tracking the loading state
- storing fetch errors
- controlling the mobile navigation menu

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.

I used it in `App.tsx` to fetch the technology data from `/data.json` when the application loads. The empty dependency array `[]` makes the fetch run only once when the component first loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify each item in a rendered list. It helps React understand which item was added, removed, or changed and update the UI efficiently.

In this project, I use each technology's unique ID:

```tsx
key={tech.id}
```

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, the sidebar checks whether the stack is empty. If there are no selected technologies, it shows an empty-state message. Otherwise, it displays the selected technologies.

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // selected technologies
)}
```

Conditional rendering is also used for the loading state, error message, Remove All button, and the **Added to Stack** button state.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component sends data to a child component using **props**.

For example, `App.tsx` passes the selected stack and handler functions to other components.

A child component can communicate back to the parent by calling a function that the parent passed through props.

For example, `TechCard` calls:

```tsx
handleAddToStack(tech)
```

The function is defined in the parent component, so the parent updates the stack state and React updates the UI.

---

## 📌 Data Source

Technology information is stored in:

```text
public/data.json
```

The application loads the JSON data using `fetch()` and `useEffect` instead of hardcoding the technology array inside a React component.

## 🔔 Notifications

React Toastify is used to show notifications when:

- a technology is added
- a duplicate add is attempted
- a technology is removed
- all technologies are removed

## 🎨 Theme

The project uses one shared **orange → pink → violet** gradient for important branding elements and primary actions to keep the design consistent.

## 📄 License

This project was created for educational purposes as part of the Dev Stack Builder assignment.
