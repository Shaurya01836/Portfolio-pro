# 💼 Shaurya Upadhyay's Portfolio


Welcome to the source code of my personal portfolio website - a modern, responsive showcase of my skills, projects, experience, and achievements. Built with **React**, **Tailwind CSS**, and **Vite**, this site reflects my passion for clean design, efficient code, and hackathon culture.

## 🌐 Live Site

Visit the portfolio: [shaurya-portfolio](https://shaurya-upadhyay.me/)

## ✨ Features

- **Responsive Layout:** Two-column design with a fixed sidebar on desktop and adaptive mobile layout.
- **Bento Grid Home:** A grid-based landing section linking to my resume, GitHub, LeetCode, and more.
- **Glassmorphic Bottom Nav:** Floating navigation bar for mobile with scroll-aware active section highlighting.
- **Modular Sections:**
  - **Projects:** Cryptify, PayPact, Devora — with tech stacks and links.
  - **Skills:** Categorized by languages, frameworks, databases, and tools.
  - **Experience:** Professional roles and contributions.
  - **Achievements:** Hackathon wins and recognitions.
- **Custom Hooks:** `useOnScreen` powered by Intersection Observer for dynamic UI behavior.

## 🛠️ Tech Stack

| Category     | Tools Used                                  |
|--------------|---------------------------------------------|
| Framework    | [React](https://react.dev/)                 |
| Build Tool   | [Vite](https://vitejs.dev/)                 |
| Styling      | [Tailwind CSS](https://tailwindcss.com/)    |
| Icons        | [Remixicon](https://remixicon.com/)         |
| Linting      | [ESLint](https://eslint.org/)               |

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shaurya01836/shaurya-portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd shaurya-portfolio
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` or the next available port.

## 📂 Project Structure

```
.
├── src
│   ├── assets        # Static assets like images
│   ├── components    # Reusable React components for each portfolio section
│   │   ├── Profile.jsx
│   │   ├── Header.jsx      # Home/Bento Grid section
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   └── BottomNav.jsx   # Mobile navigation bar
│   ├── hooks         # Custom React hooks (e.g., useOnScreen)
│   ├── App.jsx       # Main application component and layout
│   └── main.jsx      # Entry point of the React application
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```


