# 🎮 TicTacPro

**TicTacPro** is an interactive Tic-Tac-Toe game built with React.

The project provides a simple, intuitive, and responsive gaming experience for two players, featuring turn-based gameplay, automatic winner detection, draw handling, and game reset functionality.

Developed as part of the **freeCodeCamp Front-End Development Libraries Certification**, with all 11 project tests successfully passed.

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS3
- Node.js
- Docker & Docker Compose
- Nginx

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Docker & Docker Compose
- Make

### Installation

**1. Clone the repository**

```bash
git clone git@github.com:djimgon/tictacpro.git
cd tictacpro
```

**2. Initialize and start the application**

```bash
make init
```

**3. Open the application**

http://localhost:8080

### Stopping the Application

```bash
make down
```

## 🎯 Features

- Interactive 3×3 game board
- Local two-player gameplay (X and O)
- Automatic player switching
- Winner detection across all 8 possible winning combinations
- Draw detection
- Game reset functionality
- Prevention of moves on occupied squares
- Automatic game termination after a winner is determined
- Responsive user interface

## 🧠 React Concepts Practiced

- Functional Components
- Props & Component Composition
- React Hooks (`useState`)
- Event Handling
- Conditional Rendering
- Dynamic Rendering with `Array.map()`
- State Immutability
- Array Destructuring
- Derived State
- JavaScript Functions & Algorithms

## 📁 Project Structure

```text
frontend/
└── src/
    ├── components/
    │   ├── Board.jsx
    │   └── Square.jsx
    ├── utils/
    │   └── checkWinner.js
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

## 📌 Project Status

✅ Completed — All 11 freeCodeCamp project tests passed.

---

**Author:** [Dmitry Goncharov](https://github.com/djimgon)