# Personal Portfolio -- Next.js + Tailwind CSS

A modern, high-performance developer portfolio built with **Next.js
14**, **App Router**, **Tailwind CSS**, and **TypeScript**.\
Designed to showcase professional experience, featured projects,
testimonials, skills, and contact details --- with beautiful UI
animations, scroll-based effects, and responsive layouts.

Live Demo: **liveLink**

------------------------------------------------------------------------

## 🚀 Tech Stack

-   **Next.js 14 (App Router)**
-   **React 18**
-   **TypeScript**
-   **Tailwind CSS**
-   **SVGR** for SVG icons
-   **Next/Image** for optimized assets
-   **Vercel Deployment**
-   Custom UI elements (Orbit animations, sticky project cards, marquee
    testimonials, etc.)

------------------------------------------------------------------------

## 📁 Project Structure

    src/
    │── app/
    │   │── globals.css
    │   │── layout.tsx
    │   └── page.tsx
    │
    │── sections/
    │   │── Header.tsx
    │   │── Hero.tsx
    │   │── Projects.tsx
    │   │── Testimonials.tsx
    │   │── About.tsx
    │   └── Footer.tsx
    │
    │── components/
    │   │── Card.tsx
    │   │── SectionHeader.tsx
    │   └── HeroOrbit.tsx
    │
    │── assets/
    │   │── images/
    │   │── icons/
    │   └── toolbox/
    │
    └── profile.config.ts

------------------------------------------------------------------------

## ✨ Features

### 🎯 **Hero Section**

-   Animated star field & orbiting icons
-   Status badge with pulse animation
-   Responsive & visually identical to reference desig

------------------------------------------------------------------------

### 🧩 **Projects Section**

-   Beautiful sticky-scrolling project cards
-   Each card includes:
    -   Company & year badge
    -   Project title + description
    -   Bullet points with SVG check icons
    -   Image preview & CTA button
-   Smooth transitions & depth effects

------------------------------------------------------------------------

### 💬 **Testimonials Section**

-   Infinite horizontal marquee with:
    -   Client avatar
    -   Client name & position
    -   Review text (auto scroll + hover pause)
-   Soft border glow + grain texture

------------------------------------------------------------------------

### 🧰 **About & Toolbox**

-   Skill icons auto-loaded from `profile.config.ts`
-   Hobbies with floating emojis
-   Fully responsive layout

------------------------------------------------------------------------

### 📬 **Footer**

-   Social links
-   Email address loaded dynamically from config

------------------------------------------------------------------------

## 🔧 Configuration

All portfolio data is stored in:

    profile.config.ts

You can edit:

-   Email
-   Toolbox skills
-   Projects
-   Testimonials
-   Footer links
-   Hobbies

This makes the portfolio fully customizable without touching UI
components.

------------------------------------------------------------------------

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

``` bash
git clone https://github.com/hemant2807/My-Portfolio.git
cd My-Portfolio
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Run Dev Server

``` bash
npm run dev
```

Visit:\
➡️ http://localhost:3000

------------------------------------------------------------------------

## 📦 Production Build

``` bash
npm run build
npm start
```

------------------------------------------------------------------------

## 🚀 Deployment (Vercel)

1.  Push the repository to GitHub
2.  Import the repo into Vercel
3.  Set up domain & environment configs (optional)
4.  Deploy 🚀

Supports: - `vercel.app` default domain
- Custom domain (Namecheap, Name.com, etc.)
- **is-a.dev** domain (free through Student Dev Pack)

------------------------------------------------------------------------

## 🎨 Customization

### Change Fonts

Modify in `layout.tsx` using `next/font`.

### Change Stars, Orbit Icons

Update assets in:

    /assets/icons/toolbox
    /assets/icons/star.svg

### Adjust Hero Spacing

Edit ring sizes or icon orbits inside `Hero.tsx`.

------------------------------------------------------------------------

## 📸 Screenshots

*Screenshot*

------------------------------------------------------------------------

## 🧑‍💻 Author

**Hemant Kumar**\
Frontend + Backend Engineer\
🌐 Portfolio: LiveLink\
🐦 Twitter: https://x.com/hemant_2807 \
💼 LinkedIn: https://www.linkedin.com/in/hemant2807/

------------------------------------------------------------------------

## ⭐ Support

If you like this project, consider giving a **star** on GitHub 🌟
