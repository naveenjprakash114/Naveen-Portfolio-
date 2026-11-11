# Naveen Prakash J — Single-Page Personal Portfolio Website
### Creative Technologist | Digital Marketer | AI Creative Director
**Apple-Inspired Luxury Minimalism | Beige + Cream + Warm Neutral System**

---

## ✦ Overview
This is a production-quality, luxury single-page personal portfolio website created for **Naveen Prakash J**.

The design combines **Apple-inspired luxury minimalism** with editorial typography (*Playfair Display*, *Cormorant Garamond*, *Inter*, *Manrope*), generous whitespace, fine borders, smooth section scrolling, interactive case study modals, and restrained micro-animations.

---

## ✦ Color Palette Implementation

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Warm Beige** | `#E8DDCB` | Alternate sections, hero backing frames, tag pills |
| **Cream** | `#F7F3EB` | Base canvas background, section alternates |
| **Soft Ivory** | `#FDFBF7` | Clean card surfaces, modal backgrounds |
| **Charcoal** | `#292722` | Primary typography, CTA buttons, dark accents |
| **Muted Bronze** | `#A18B70` | Editorial subheadings, fine border lines, icons |
| **Light Taupe** | `#D4C6B3` | Scrollbar thumb, secondary accents |

---

## ✦ Sections in Single-Page Architecture

1. **Navigation (`Navbar.jsx`)**:
   - Wordmark: `NAVEEN PRAKASH`
   - Links with smooth scrolling: `Home` (`#home`), `About` (`#about`), `Expertise` (`#expertise`), `Experience` (`#experience`), `Projects` (`#projects`), `Services` (`#services`), `Contact` (`#contact`)
   - Action Button: `LET'S TALK`
   - Mobile responsive drawer with smooth animated toggle.
2. **Hero Section (`Hero.jsx` / `#home`)**:
   - Small label: `HELLO, I'M NAVEEN PRAKASH`
   - Headline: *"Creativity Meets Technology."* (Editorial serif highlight on *Creativity*)
   - Subheading: *"I create meaningful digital experiences through design, photography, marketing and artificial intelligence."*
   - Badges: `Based in Salem, India` | `Available for Creative Opportunities`
   - Actions: `EXPLORE MY WORK` (scrolls to `#projects`) & `DOWNLOAD RESUME` (opens CV / printable modal)
   - Profile Frame: Rectangular portrait placeholder (`/public/assets/profile/portrait.jpg`) with floating label `DESIGN × TECHNOLOGY × CREATIVITY`.
3. **About Me (`About.jsx` / `#about`)**:
   - Section label: `01 / ABOUT`
   - Heading: *"A little about me."*
   - Narrative covering Visual Communication degree, photography foundation, BitByte Technologies role, and philosophy.
   - Three minimal cards: `01 — Creative Thinking`, `02 — Technology Driven`, `03 — Continuous Learning`.
   - Signature text: *Naveen Prakash J*.
4. **Expertise / Skills (`Expertise.jsx` / `#expertise`)**:
   - Section label: `02 / EXPERTISE`
   - Heading: *"What I bring to the table."*
   - Six structured categories without fake percentages:
     - `01 — CREATIVE PRODUCTION`
     - `02 — GRAPHIC DESIGN`
     - `03 — DIGITAL MARKETING`
     - `04 — AI & EMERGING TECHNOLOGY`
     - `05 — UI/UX & WEB DESIGN`
     - `06 — DEVELOPMENT`
5. **Professional Experience (`Experience.jsx` / `#experience`)**:
   - Section label: `03 / EXPERIENCE`
   - Heading: *"My professional journey."*
   - Vertical timeline:
     - **BitByte Technologies** (*Digital Marketing & Creative Technology*, Current, Start: 01 July 2026)
     - **Shriram Finance Ltd.** (*Executive Officer*, 6 Months)
     - **DJ Photography** (*Photographer & Videographer*, 3 Years)
6. **Selected Projects (`Projects.jsx` / `#projects`)**:
   - Section label: `04 / SELECTED WORK`
   - Heading: *"Some things I've created."*
   - Subheading: *"A collection of creative projects, visual stories and digital experiences."*
   - Filter pills: `ALL`, `BRANDING`, `GRAPHIC DESIGN`, `PHOTOGRAPHY`, `VIDEOGRAPHY`, `DIGITAL MARKETING`, `WEB DESIGN`
   - Projects: **Arulmathi Silks**, **Hashtag Clothings**, **Personal Creative Projects**, **AI-Powered Web Experiences**
   - Clickable cards open **`ProjectModal.jsx`** with full case study, objectives, roles, tools, and visual galleries.
7. **Services (`Services.jsx` / `#services`)**:
   - Section label: `05 / SERVICES`
   - Heading: *"What I can help you with."*
   - 6 service offerings clearly separating established commercial services from developing technical capabilities.
8. **Education (`Education.jsx` / `#education`)**:
   - Section label: `06 / EDUCATION`
   - Degree: B.Sc Visual Communication, AVS College of Arts & Science, Periyar University, 2022.
   - Independent Study: AI Creative Direction, Prompt Engineering, React.js, UI/UX Design, Web Design.
9. **Contact (`Contact.jsx` / `#contact`)**:
   - Section label: `07 / LET'S CONNECT`
   - Heading: *"Have an idea? Let's create something meaningful."*
   - Direct channels: Email (`naveenjprakash114@gmail.com`), Phone & WhatsApp (`+91 7397172114`), Instagram (`@naveen_j_prakash`).
   - Working contact form with validation, Formspree / EmailJS preparation, and automatic mail client fallback.
10. **Footer (`Footer.jsx`)**:
    - Left: `NAVEEN PRAKASH J`
    - Center: `Creative Technologist | Digital Creative`
    - Right: `BACK TO TOP ↑`
    - Copyright: `© 2026 Naveen Prakash J. All Rights Reserved.`

---

## ✦ Replacing Placeholder Images

Drop your high-resolution images into:
```bash
public/assets/profile/portrait.jpg   # Main Hero Portrait (aspect ratio 4:5)
public/assets/projects/              # Project covers and gallery stills
```

---

## ✦ Development Commands

```bash
# Start development server on port 3000
npm run dev

# Build optimized production bundle
npm run build

# Preview build locally
npm run preview
```
