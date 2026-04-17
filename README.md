# 🚀 PixelFlow

**PixelFlow** is a premium media discovery engine built for creators, designers, and developers. It provides a unified interface to search and save high-quality Photos, Videos, and GIFs using industry-leading APIs.

### 🔗 [Live Demo](https://pixel-flow-theta.vercel.app/)

---

## ✨ Features

- **Multi-Source Search:** Fetch data from Unsplash (Photos), Pexels (Videos), and Giphy (GIFs/Stickers).
- **Modern UI/UX:** Responsive design featuring 3D hover effects, glassmorphism, and a sleek dark theme.
- **Persistent Collections:** Save your favorite media to a personal collection using Redux Toolkit and LocalStorage.
- **Optimized Performance:** Fast loading times via Vite and smart asset handling.
- **Responsive Layout:** Perfectly tailored experience for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router Dom](https://reactrouter.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repo:
   ```bash
   git clone [https://github.com/your-username/pixel-flow.git](https://github.com/your-username/pixel-flow.git)

2. Install dependencies:
   ```bash
    npm install

3. Create a .env file in the root directory and add your keys:
   ```bash
    VITE_PEXELS_API_KEY=your_key
    VITE_GIPHY_API_KEY=your_key
    VITE_UNSPLASH_API_KEY=your_key

4. Run the project:
   ```bash
    npm run dev

## 📂 Project Structure:

-src/
- ┣ api/            # API fetching logic
- ┣ components/     # Reusable UI components
- ┣ pages/          # Home and Collection views
- ┣ redux/          # Store and Slices
- ┗ App.jsx         # Main routing logic

 Built with ❤️ by Mohammad Islam