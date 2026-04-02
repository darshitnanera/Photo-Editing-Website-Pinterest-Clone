# Photo Editing Website / Pinterest Clone

## 📸 Overview

A full-stack social media platform inspired by Pinterest, focused on photo editing, sharing, and discovery. Users can upload images, create boards/collections, post comments, search pins, and interact via likes/shares. Features image hosting via ImageKit and real-time updates.

**Tech Stack:**
- **Frontend**: React 19 + Vite + React Router + Tailwind/ESLint
- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Auth**: JWT + bcrypt
- **Image Upload**: ImageKit
- **Other**: Emoji picker, responsive UI

## 🚀 Quick Start

### Prerequisites
- Node.js (v20+)
- MongoDB URI (use MongoDB Atlas for cloud)
- ImageKit account (for uploads) - add keys to `.env`

### 1. Clone & Install

```bash
git clone <repo-url>
cd Photo_Editing_website
```

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env` in `backend/` and add:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### 3. Run the App

#### Backend (Terminal 1)
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:3000`

#### Frontend (Terminal 2)
```bash
cd client
npm run dev
```
App runs on `http://localhost:5173` (Vite default)

Open `http://localhost:5173` in browser.

## 🛠️ Project Structure

```
Photo_Editing_website/
├── backend/                 # Express API
│   ├── controller/          # Business logic
│   │   ├── user.controller.js
│   │   ├── pin.controller.js
│   │   ├── board.controller.js
│   │   └── comment.controller.js
│   ├── models/              # Mongoose schemas
│   │   ├── User.js
│   │   ├── Pin.js
│   │   ├── Board.js
│   │   └── Comment.js
│   ├── routes/              # API routes
│   │   ├── /users
│   │   ├── /pins
│   │   ├── /boards
│   │   └── /comments
│   └── utils/connectDB.js
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI
│   │   │   ├── gallery/
│   │   │   ├── collections/
│   │   │   ├── comments/
│   │   │   └── topBar/
│   │   ├── routes/          # Pages/Routes
│   │   │   ├── homepage/
│   │   │   ├── createPage/
│   │   │   ├── profilePage/
│   │   │   └── postPage/
│   │   └── App.jsx
│   ├── public/pins/         # Sample images
│   └── package.json
└── README.md
```

## ✨ Features

- **Auth**: Login/Signup (JWT)
- **Upload & Edit**: Create pins with ImageKit
- **Feed**: Homepage with gallery/search
- **Profile**: User pins, boards, collections
- **Interactions**: Comments, likes, shares
- **Boards**: Organize pins into collections
- **Responsive**: Mobile-first design
- **Search**: Pin discovery

## 📁 API Endpoints

| Method | Endpoint       | Description      |
|--------|----------------|------------------|
| POST   | `/users/register` | Create account |
| POST   | `/pins`            | Upload pin     |
| GET    | `/pins`            | Get all pins   |
| POST   | `/comments`        | Add comment    |
| POST   | `/boards`          | Create board   |

## 🧪 Testing

```bash
# Backend tests (add jest/supertest)
npm test

# Frontend lint
cd client && npm run lint
```

## 🔧 Development

- **Frontend HMR**: Auto-reloads on `npm run dev`
- **Backend Watch**: `npm run dev` with nodemon
- **Build**: `npm run build` (client) → `dist/`

## 🚀 Deployment

1. **Frontend**: Build & deploy to Vercel/Netlify
   ```bash
   cd client && npm run build
   ```
2. **Backend**: Render/Heroku + MongoDB Atlas
3. Update ImageKit URLs for prod

## 🤝 Contributing

1. Fork & PR
2. Follow ESLint rules
3. Update tests

## 📄 License

MIT

---

⭐ **Star on GitHub if useful!** Questions? Open an issue.

![Screenshot](client/public/general/logoBig.png)

Built with ❤️ for photo editing enthusiasts.
