# Naveen Prakash J — Personal Portfolio Website
### Multidisciplinary Creative Professional
**Apple-Inspired Luxury Minimalism | Beige + Cream + Warm Neutral Theme**

---

## ✦ Overview
This is a production-quality, luxury personal portfolio website crafted for **Naveen Prakash J**, a Visual Communication graduate and multidisciplinary creative professional based in Salem, Tamil Nadu, India.

The project embodies **Apple-inspired luxury minimalism**—generous whitespace, editorial serif headings paired with clean sans typography, fine warm taupe borders, subtle shadows, and restrained micro-interactions without unnecessary gradients or generic templates.

---

## ✦ Visual Identity & Design System

| Element | Specification |
| :--- | :--- |
| **Warm Beige** | `#E9DDCB` |
| **Cream (Base Background)** | `#F8F5EF` |
| **Soft White (Cards & Modals)** | `#FFFFFF` |
| **Taupe (Accents & Borders)** | `#B7A58D` |
| **Charcoal (Headings & Wordmarks)** | `#24221F` |
| **Muted Grey (Prose & Metadata)** | `#89847D` |
| **Headings Typography** | *Playfair Display* & *Instrument Serif* |
| **Body Typography** | *Inter* |

---

## ✦ Pages & Navigation

1. **Home (`/`)**:
   - Split-layout editorial hero section.
   - Left: Introduction, main headline *"Creativity meets technology. Ideas become experiences."*, supporting narrative, CTAs (`Explore My Work`, `Let's Connect`), and location badge.
   - Right: Editorial portrait frame placeholder (`/public/images/profile.jpg`).
   - Slim expertise marquee ticker.
   - Selected portfolio preview, philosophy statement, and current role highlight.
2. **About Me (`/about`)**:
   - Headline *"Behind the pixels, ideas and innovation."*
   - Two-column biography (B.Sc Visual Communication, photography & videography background, digital marketing, AI creative direction, and React frontend development).
   - Education section (AVS College of Arts & Science / Periyar University, 2022) and self-directed technical competencies (no false certificates).
   - Career progression timeline.
3. **My Expertise (`/expertise`)**:
   - 6 structured categories:
     - `01 — CREATIVE PRODUCTION`
     - `02 — DIGITAL MARKETING`
     - `03 — AI & CREATIVE TECHNOLOGY`
     - `04 — UI/UX & DIGITAL DESIGN`
     - `05 — FRONTEND DEVELOPMENT`
     - `06 — CREATIVE TOOLS`
   - Honest, craft-based presentation without inflated skill percentage bars.
4. **Work / Portfolio (`/work`)**:
   - Interactive category filter: `ALL`, `BRANDING & DESIGN`, `PHOTOGRAPHY`, `VIDEOGRAPHY`, `DIGITAL MARKETING`, `WEB DEVELOPMENT`, `AI CREATIVE PROJECTS`.
   - Feature projects: **Arulmathi Silks**, **Hashtag Clothings**, **Visual Narratives Photography**, **CineFlow Motion**, and **Intelligent Interfaces**.
5. **Project Details (`/project/:id`)**:
   - Deep-dive case studies with context, strategic objectives, creative direction, responsibilities, tools used, visual galleries, video reel slots, and previous/next navigation.
6. **Experience & Services (`/experience`)**:
   - Vertical timeline: **BitByte Technologies** (with subtle `CURRENT POSITION` badge), **Shriram Finance Ltd.**, and **DJ Photography**.
   - Clear distinction between **Established Professional Services** (commercial agency scope) and **Exploration / Personal Project Services** (self-developed UI/UX & React frontend scope).
7. **Contact (`/contact`)**:
   - Headline *"Let's create something extraordinary."*
   - Direct channels: Email, Phone, Location, Instagram, WhatsApp CTA link (`+91 7397172114`).
   - Functional contact form with client-side validation, EmailJS integration support, and automatic mailto client fallback.

---

## ✦ How to Replace Placeholders with Your Real Photos

All images are neatly organized in the `public/images/` directory:

```bash
public/images/
├── profile.jpg          # Your main homepage portrait (aspect ratio 4:5)
├── about.jpg            # Your about page editorial photo (aspect ratio 4:5)
├── projects/
│   ├── arulmathi-silks/ # Cover and case study stills
│   ├── hashtag-clothings/
│   ├── photography/
│   ├── videography/
│   └── creative/
└── services/            # Category thumbnails
```

Simply overwrite `public/images/profile.jpg` or any project image with your high-resolution photograph. The layout automatically adapts, and if an image is ever missing, an Apple-styled placeholder frame is displayed.

---

## ✦ Development & Deployment

### Run Locally
```bash
npm run dev
# The website will be available at http://localhost:3000
```

### Build for Production
```bash
npm run build
# Compiles minified, optimized production bundle to the dist/ folder
```

### Preview Production Build
```bash
npm run preview
```

---

## ✦ Email Configuration (Optional)
To receive emails directly through EmailJS without opening the user's mail client:
1. Create an account at [emailjs.com](https://www.emailjs.com/).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Fill in your `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
*(If left unset, the form works automatically with a direct mailto client fallback).*

