# 🎮 TicTacPro

**TicTacPro** is a modern and interactive Tic-Tac-Toe game built with React.

The project provides a simple, intuitive, and responsive gaming experience for two players, featuring turn-based gameplay, automatic winner detection, draw handling, and game reset functionality.

This project was developed as part of the freeCodeCamp Front-End Development Libraries Certification.

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

- Node.js & npm
- Docker & Docker Compose
- Make

### Installation

**1. Clone the repository**

```bash
git clone git@github.com:djimgon/tictacpro.git
cd tictacpro
```

**2. Initialize React (first-time setup only)**

```bash
cd frontend
npm create vite@latest . -- --template react
cd ..
```

> Node.js and npm must be installed on the host machine to initialize React.
> Skip this step if the React application is already initialized.

**3. Initialize Docker environment**

```bash
make init
```

**4. Restart the environment after initial setup**

```bash
make down
make init
```

**5. Open the application**

http://localhost:8080

## 🎯 Features

- Interactive 3×3 game board
- Two-player gameplay (X and O)
- Automatic player switching
- Winner detection
- Draw detection
- Game reset functionality
- Prevention of invalid moves
- Responsive user interface

## 📌 Project Status

🚧 Under active development.

---

**Author:** [Dmitry Goncharov](https://github.com/djimgon)