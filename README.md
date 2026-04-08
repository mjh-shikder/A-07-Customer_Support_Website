# CS Ticket System

A responsive customer support ticket dashboard built with React and Vite. The application presents support tickets in a clean card-based layout, lets users move tickets into an active task list, and tracks progress through simple in-progress and resolved status counters.

## Live Demo

[View Live Project](https://www.mjhshikder.com/)

## Project Overview

This project was created as part of an assignment and later published after the submission window ended. It focuses on building a modern frontend interface for a customer support workflow using reusable React components and local JSON data.

## Key Features

- Responsive customer support dashboard UI
- Ticket listing with title, description, customer, priority, status, and created date
- Click-to-add workflow for moving tickets into task status
- Completion flow for marking selected tasks as resolved
- Real-time summary cards for in-progress and resolved counts
- Toast notifications for user actions
- Component-based React architecture

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- ESLint

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates an optimized production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint across the project

## Project Structure

```text
a-07-customer-support/
|-- public/
|   `-- Card.json
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Cards.jsx
|   |   |-- Container.jsx
|   |   |-- Footer.jsx
|   |   |-- Navbar.jsx
|   |   |-- SingleCard.jsx
|   |   |-- StatusBox.jsx
|   |   `-- Task.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## How It Works

The application loads ticket data from `public/Card.json` and renders each item as a support card. When a user selects a ticket, it is added to the task status panel and counted as in progress. Completing a task removes it from the active task list and increases the resolved count.

## Notes

- Ticket data is currently powered by a local JSON file
- State is managed with React hooks
- The project is frontend-only and does not include a backend or database


---

## 👤 Author

**MJH Shikder**

- GitHub: [@mjh-shikder](https://github.com/mjh-shikder)
- Portfolio: [Website](https://www.mjhshikder.com/)

---

## 📄 License

This project is private and not currently licensed for public use.

---

<p align="center">Built with ❤️ using React & Vite</p>
