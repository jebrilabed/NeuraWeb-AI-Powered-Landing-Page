# NeuraWeb — AI-Powered Landing Page

A modern, futuristic AI startup landing page built with **React** and **Tailwind CSS**.

## Features

- 🌌 Animated neural network canvas in the hero section
- 💜 Dark futuristic theme with neon glow effects (purple, cyan, fuchsia)
- 🪟 Glassmorphism UI cards with hover animations
- 🌀 Orbiting AI platform visualization
- 📱 Fully responsive for mobile, tablet & desktop
- ⚡ Clean component architecture (8 components)

## Project Structure

```
neuraweb/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js          ← Canvas neural animation
│   │   ├── Features.js
│   │   ├── Platform.js      ← Orbital visualization
│   │   ├── Testimonials.js
│   │   ├── Pricing.js
│   │   ├── CTA.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `/build` folder.

## Customization

| File | What to change |
|------|---------------|
| `src/components/Navbar.js` | Logo, nav links |
| `src/components/Hero.js` | Headline, subtext, stats |
| `src/components/Features.js` | Feature cards & icons |
| `src/components/Platform.js` | Platform description & orbit nodes |
| `src/components/Testimonials.js` | Testimonial quotes & names |
| `src/components/Pricing.js` | Plans, prices & features |
| `src/components/CTA.js` | CTA headline & button |
| `src/components/Footer.js` | Footer links & social icons |

## Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **HTML Canvas API** — Neural network animation
- **Google Fonts** — Syne (display) + Space Grotesk (body)
