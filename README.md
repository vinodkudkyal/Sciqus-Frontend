<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->



# Sciqus Frontend Task - Responsive Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73C96?style=for-the-badge&logo=vite&logoColor=white)

A pixel-perfect, responsive dashboard implementation that strictly adheres to the provided design specifications. This project demonstrates adaptive layouts, component architecture, and modern UI/UX principles using **React** and **Tailwind CSS**.

## 🚀 Live Demo

[View Live Demo](#) 

## 📋 Project Overview

The objective was to design a responsive static website that adapts seamlessly between desktop and mobile environments.

* **Desktop:** Features a fixed sidebar, a sticky header, and a complex 12-column grid layout.
* **Mobile:** Features a collapsible hamburger menu, sticky header, and a stacked single-column layout for readability.

## ✨ Key Features

* **Responsive Architecture:** transitions fluently from a 12-column grid (Desktop) to a vertical stack (Mobile).
* **Correlated Design:** The Sidebar and Header share a unified design language (Brand colors, shadows, and iconography).
* **Fixed Navigation:** The sidebar is pinned on the desktop (does not scroll away), while the main content remains scrollable.
* **Interactive Components:**
    * **Hero Carousel:** Animated background with overlay.
    * **Live Feed:** Scrollable news/updates section.
    * **Team Slider:** Interactive profile viewer with navigation.
    * **Task Actions:** Distinct "Approve" and "Reject" workflows.
    * **Event Scheduler:** Animated slider for upcoming meetings.

## 🛠️ Technologies Used

* **Framework:** [React](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Language:** JavaScript (ES6+)

## 📂 Layout & Containers

The application is structured into a `MainLayout` containing the Header, Sidebar, and a Grid of 6 specific containers as per the requirements:

| Container | Description | Implementation |
| :--- | :--- | :--- |
| **Container 1** | Image/Carousel | **Hero Section:** Full-width card with background image, gradient overlay, and CTA buttons. |
| **Container 2** | Text Block | **System Updates:** A scrolling feed of notifications and alerts. |
| **Container 3** | Interactive Slider | **Team Spotlight:** Profile cards with Next/Prev navigation. |
| **Container 4** | Static Content | **Analytics Grid:** A 2x2 grid displaying Revenue, Visitors, Bounce Rate, and Growth. |
| **Container 5** | Button Actions | **Task Review:** A "Pending Document" card with **Approve (Button B)** and **Reject (Button A)** actions. |
| **Container 6** | Animated Content | **Schedule Slider:** An animated, auto-sliding card showing upcoming events and attendees. |

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/vinodkudkyal/Sciqus-Frontend.git](https://github.com/vinodkudkyal/Sciqus-Frontend.git)
    cd Sciqus-Frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```
    *Note: Ensure `lucide-react` is installed for icons.*

3.  **Run the development server**
    ```bash
    npm run dev
    ```

## 📁 Project Structure

```bash
src/
├── components/
│   ├── Header.jsx       # Top navigation & Mobile toggle
│   ├── Sidebar.jsx      # Fixed Left navigation (Desktop)
│   ├── Container1.jsx   # Hero Carousel
│   ├── Container2.jsx   # Info Feed
│   ├── Container3.jsx   # Team Slider
│   ├── Container4.jsx   # Statistics
│   ├── Container5.jsx   # Action Buttons
│   └── Container6.jsx   # Event Scheduler
├── layouts/
│   └── MainLayout.jsx   # Grid system & Responsive logic
├── App.jsx              # Entry point
└── index.css            # Tailwind directives