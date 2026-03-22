# NeuraWeb 🌐

> **The Future of AI-Powered Web Experiences**

A modern, fully responsive landing page for an AI startup — built with **React 18** and **Tailwind CSS**. Features a deep-space dark theme with neon glow accents, live canvas animations, glassmorphism UI, and a clean 8-component architecture ready for production.

![NeuraWeb Preview](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-8b5cf6?style=flat)
![Status](https://img.shields.io/badge/Status-Production_Ready-10b981?style=flat)

---

## ✨ Features

- 🌌 **Live Neural Network Animation** — HTML Canvas API renders floating nodes with dynamic glowing connections in real time
- 💜 **Neon Dark Theme** — Deep space background (`#070B14`) with purple, cyan, and fuchsia accent glows
- 🪟 **Glassmorphism Cards** — Frosted glass UI with backdrop blur, hover lift effects, and neon box shadows
- 🌀 **Orbital Platform Visualization** — CSS-animated orbiting nodes around a glowing AI core
- 📱 **Fully Responsive** — Fluid layouts across mobile, tablet, and desktop using Tailwind's grid system
- ⚡ **8 Clean Components** — Modular, easy-to-customize React component structure
- 🔤 **Premium Typography** — Syne (display) + Space Grotesk (body) Google Fonts pairing
- 🎞️ **Smooth Animations** — Float, pulse, spin, and glow keyframe animations throughout

---

## 🖥️ Live Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed top bar with scroll-aware blur, logo, nav links, mobile hamburger menu |
| **Hero** | Full-screen canvas neural animation, gradient headline, CTA buttons, live stats |
| **Features** | 4 glassmorphism cards — AI Automation, Smart Analytics, Neural Processing, Cloud Intelligence |
| **AI Platform** | Two-column layout with orbiting node visualization and platform feature breakdown |
| **Testimonials** | 3 customer review cards with star ratings and gradient avatars |
| **Pricing** | 3-tier pricing (Starter / Pro / Enterprise) with highlighted recommended plan |
| **CTA** | Full-width call-to-action with animated glow background |
| **Footer** | Brand block, 3 link columns, social icons, copyright |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8+ or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/neuraweb.git

# Navigate into the project
cd neuraweb

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will hot-reload on file changes.

### Build for Production

```bash
npm run build
```

The optimized static build will be output to the `/build` folder, ready for deployment.

---

## 📁 Project Structure

```
neuraweb/
├── public/
│   └── index.html              # HTML entry point (Google Fonts loaded here)
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Fixed navbar with scroll blur + mobile menu
│   │   ├── Hero.js             # Canvas neural animation + headline + CTA
│   │   ├── Features.js         # 4-card feature grid with glassmorphism
│   │   ├── Platform.js         # Orbital visualization + platform details
│   │   ├── Testimonials.js     # Customer review cards
│   │   ├── Pricing.js          # 3-tier pricing table
│   │   ├── CTA.js              # Call-to-action section
│   │   └── Footer.js           # Footer with links and social icons
│   ├── App.js                  # Root component — assembles all sections
│   ├── index.js                # React DOM entry point
│   └── index.css               # Tailwind directives + global keyframe animations
├── tailwind.config.js          # Tailwind content paths config
├── postcss.config.js           # PostCSS + autoprefixer setup
├── package.json                # Dependencies and scripts
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Background | Deep Space | `#070B14` |
| Primary Accent | Violet | `#8b5cf6` |
| Secondary Accent | Cyan | `#06b6d4` |
| Tertiary Accent | Fuchsia | `#d946ef` |
| Info Accent | Blue | `#3b82f6` |
| Body Text | Slate | `#94a3b8` |
| Muted Text | Dark Slate | `#475569` |

### Typography

| Font | Usage | Weights |
|---|---|---|
| [Syne](https://fonts.google.com/specimen/Syne) | Headings, logo, labels | 600, 700, 800 |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | Body, descriptions, UI | 300, 400, 500 |

### Key Animations

| Class | Effect | Duration |
|---|---|---|
| `.animate-float` | Gentle vertical bob | 6s ease-in-out |
| `.animate-pulse-slow` | Opacity breathe | 4s ease-in-out |
| `.animate-spin-slow` | Clockwise ring spin | 25s linear |
| `.animate-spin-reverse` | Counter-clockwise spin | 18s linear |

---

## 🛠️ Customization Guide

### Changing Content

| What you want to change | File to edit |
|---|---|
| Logo name and nav links | `src/components/Navbar.js` |
| Hero headline and subtext | `src/components/Hero.js` |
| Feature cards (title, icon, description) | `src/components/Features.js` |
| Platform description and orbit labels | `src/components/Platform.js` |
| Testimonials (quote, name, company) | `src/components/Testimonials.js` |
| Pricing plans and feature lists | `src/components/Pricing.js` |
| CTA headline and button text | `src/components/CTA.js` |
| Footer links and social icons | `src/components/Footer.js` |

### Changing the Color Theme

The entire color scheme is driven by inline style values. To swap the primary accent from violet to another color, find and replace the hex values across components:

```
Primary violet:   #8b5cf6  →  your color
Dark violet:      #7c3aed  →  your dark shade
Light violet:     #a78bfa  →  your light shade
Cyan accent:      #06b6d4  →  your secondary
```

### Adjusting the Neural Animation

In `src/components/Hero.js`, inside the `NeuralCanvas` component:

```js
// Number of floating nodes (default: 60)
const nodes = Array.from({ length: 60 }, ...

// Connection draw distance in px (default: 140)
if (dist < 140) { ...

// Node speed (default: 0.35 — increase for faster)
vx: (Math.random() - 0.5) * 0.35,
```

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | 18.2 | UI framework |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first styling |
| [PostCSS](https://postcss.org/) | 8.4 | CSS processing |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4 | Vendor prefixing |
| HTML Canvas API | Native | Neural network animation |
| Google Fonts | CDN | Syne + Space Grotesk |

> No UI component libraries. No animation libraries. Pure React + CSS.

---

## 🌐 Deployment

This project is a standard Create React App and can be deployed anywhere static sites are supported.

**Vercel (recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Drag and drop the /build folder to netlify.com/drop
```

**GitHub Pages**
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://your-username.github.io/neuraweb"
npm run build
npx gh-pages -d build
```

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for personal or commercial projects. Attribution appreciated but not required.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💬 Acknowledgements

- Design inspired by the next generation of AI-native products
- Typography by [Google Fonts](https://fonts.google.com/)
- Built with [Create React App](https://create-react-app.dev/)

---

<p align="center">
  Built with ♥ for the AI-native era &nbsp;·&nbsp;
  <a href="#neuraweb-">Back to top ↑</a>
</p>
