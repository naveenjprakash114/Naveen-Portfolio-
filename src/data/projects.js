export const projectFilterCategories = [
  "ALL",
  "FRONTEND",
  "UI/UX DESIGN",
  "WEB DESIGN",
  "E-COMMERCE",
  "PHOTOGRAPHY",
  "VIDEOGRAPHY"
];

export const projects = [
  {
    id: "ecommerce-store-platform",
    number: "01",
    name: "MODERN E-COMMERCE STORE",
    client: "ScoopZone — Ice Cream Delivery",
    category: "E-Commerce UI/UX & Web Development",
    filterTags: ["E-COMMERCE", "WEB DESIGN", "BRANDING", "FRONTEND"],
    thumbnail: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-hd.jpg",
    fullDesignImage: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-hd.jpg",
    designTitle: "ScoopZone — High-Converting E-Commerce Storefront Landing Page Design",
    monogram: "SZ",
    accentColor: "from-amber-100/90 to-yellow-50/50",
    roleSubtitle: "E-Commerce UI/UX & Frontend Development",
    description: "End-to-end e-commerce landing page design for ScoopZone: 'Ice Cream, Delivered Before The Melt.' Featuring 8-10 min delivery promise, brand partners, 50+ flavor catalog, 3-step ordering flow, and customer proof.",
    githubId: "naveenjprakash114",
    githubUrl: "https://github.com/naveenjprakash114",
    liveUrl: "https://ice-cream-ecommerce-dtigp0wua-naveenjprakash114.vercel.app/",
    liveUrlLabel: "Live Storefront (Vercel)",
    driveUrl: "", // Attach Google Drive / Figma link here
    designScreens: [
      {
        id: "scoopzone-storefront",
        title: "ScoopZone Storefront Design",
        subtitle: "Ice Cream, Before It Melts — Full Landing Page",
        badge: "E-Commerce",
        device: "desktop",
        url: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-hd.jpg",
        rawUrl: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-raw.jpg",
        resolution: "744 × 4096 px HD",
        description: "Complete full-length conversion landing page design: Hero product showcase, Build Your Perfect Scoop interactive module, 10-Minute Cold Chain, and Live Delivery Tracking."
      }
    ],
    role: [
      "E-Commerce UI/UX Designer",
      "Frontend Developer",
      "Digital Merchandiser",
      "Conversion Optimizer"
    ],
    overview: "Designed an engaging, conversion-optimized D2C e-commerce storefront landing page for ScoopZone, a quick ice cream delivery platform promising cold, fresh delivery within 8–10 minutes. Includes brand partnerships (Baskin Robbins, Arun, Boomerang, Ibaco), 50+ flavor varieties catalog, a 3-step ordering journey, customer reviews, and seasonal combo packs.",
    objectives: [
      "Design a high-converting, mobile-responsive e-commerce landing page with rich product storytelling.",
      "Implement structured product catalog cards, filter facets, and interactive product ordering flows.",
      "Create high-impact promotional banners, seasonal launch graphics, and digital marketing assets.",
      "Build seamless, responsive shopping experiences using React.js and modern frontend architectures."
    ],
    deliverables: [
      {
        title: "D2C Storefront Landing Page",
        type: "UI/UX & Web Design",
        description: "Full-length conversion landing page with dynamic hero product showcase, ordering flow, and customer testimonials."
      },
      {
        title: "Product Catalog & Merchandising",
        type: "Frontend Development",
        description: "Structured categorization, faceted filters, product highlight badges, and grid curation."
      },
      {
        title: "Checkout Flow & Cart Conversion",
        type: "E-Commerce Strategy",
        description: "Frictionless mobile-first cart drawer, bundle offers, and payment integration."
      }
    ],
    tools: ["React.js", "Tailwind CSS", "Figma", "Adobe Photoshop", "Canva Pro"],
    isFeatured: true
  },
  {
    id: "personal-creative-projects",
    number: "02",
    name: "PERSONAL CREATIVE PROJECTS",
    client: "DJ Photography / Personal Portfolio",
    category: "Photography & Videography",
    filterTags: ["PHOTOGRAPHY", "VIDEOGRAPHY"],
    thumbnail: "/assets/projects/photography/cover.jpg",
    monogram: "NP",
    accentColor: "from-stone-200/80 to-amber-50/40",
    roleSubtitle: "Visual Storyteller & Camera Director",
    description: "A curated selection of commercial, product, portrait, and event photography, cinematography, and cinematic color grading spanning 3+ years.",
    liveUrl: "https://www.instagram.com/djphotography268?vrfl=NW02N2VpOWJoa3d3",
    instagramUrl: "https://www.instagram.com/djphotography268?vrfl=NW02N2VpOWJoa3d3",
    instagramHandle: "@djphotography268",
    liveUrlLabel: "Visit @djphotography268 on Instagram",
    liveCardLabel: "2 Instagram Pages",
    liveLinks: [
      {
        label: "Visit @djphotography268 on Instagram",
        url: "https://www.instagram.com/djphotography268?vrfl=NW02N2VpOWJoa3d3"
      },
      {
        label: "Visit @djphotographymodelling on Instagram",
        url: "https://www.instagram.com/djphotographymodelling?vrfl=a3l5bmE2ODJzeHl6"
      }
    ],
    githubUrl: "",
    driveUrl: "",
    role: [
      "Photographer",
      "Videographer",
      "Colour Grader",
      "Editor"
    ],
    overview: "Drawing upon 3 years of hands-on camera work with DJ Photography, this archive explores commercial shoots, product setups, natural light portraiture, and cinematic short-form visuals across two active Instagram profiles (@djphotography268 and @djphotographymodelling). It reflects a dedication to composition, depth, and storytelling.",
    objectives: [
      "Produced product, model, portrait, commercial and event photography.",
      "Planned and captured promotional videos, brand visuals and short-form social media reels.",
      "Performed video editing, colour grading, photo retouching, lighting setup and post-production.",
      "Curated and published photo sets and editorial model portfolios on Instagram."
    ],
    deliverables: [
      {
        title: "Commercial & Event Photography",
        type: "Photography (@djphotography268)",
        description: "Studio and outdoor commercial shoots with professional lighting, styling, and composition."
      },
      {
        title: "Fashion & Model Portfolios",
        type: "Editorial Photography (@djphotographymodelling)",
        description: "Creative fashion portraits, model test shoots, and editorial visual portfolios."
      },
      {
        title: "Post-Production & Colour Grading",
        type: "Editing & Retouching",
        description: "Fine-tuned color grading calibrated for skin tones, luxury fabrics, and cinematic atmospheres."
      }
    ],
    tools: ["DSLR / Mirrorless Systems", "Adobe Lightroom", "Adobe Photoshop", "Premiere Pro"],
    isFeatured: false
  },
  {
    id: "ai-powered-web-experiences",
    number: "03",
    name: "FRONTEND DEVELOPER",
    client: "Frontend & AI Engineering Lab",
    category: "Frontend Developer",
    filterTags: ["FRONTEND", "WEB DESIGN"],
    thumbnail: "/assets/projects/web/cover.jpg",
    monogram: "FE",
    accentColor: "from-amber-100/60 to-yellow-50/40",
    roleSubtitle: "React.js, Web Applications & AI Integration",
    description: "Modern website interfaces and web applications built with React.js, Tailwind CSS, and AI-assisted engineering tools — featuring an AI Assistant Dashboard, Real Estate platform, and Photography web app.",
    githubId: "naveenjprakash114",
    githubUrl: "https://github.com/naveenjprakash114",
    liveUrl: "https://ai-assistant-ohl0ttblf-naveenjprakash114.vercel.app/",
    liveUrlLabel: "AI Assistant (Vercel)",
    liveCardLabel: "3 Live Web Apps",
    liveLinks: [
      {
        label: "AI Assistant (Vercel)",
        url: "https://ai-assistant-ohl0ttblf-naveenjprakash114.vercel.app/"
      },
      {
        label: "Real Estate Website (Vercel)",
        url: "https://real-estate-6l3ojtw4h-naveenjprakash114.vercel.app/"
      },
      {
        label: "Photography Website (Vercel)",
        url: "https://photography-website-d0bk2h5zr-naveenjprakash114.vercel.app/"
      }
    ],
    driveUrl: "",
    role: [
      "Frontend Developer",
      "React.js Engineer",
      "AI Prompt Engineer"
    ],
    overview: "Bridging creative design with modern web engineering, this exploration investigates generative design workflows, prompt engineering for visual mockups, and building responsive React components styled with Tailwind CSS — including live production web platforms for an AI Assistant Dashboard, Real Estate marketplace, and Photography showcase deployed on Vercel.",
    objectives: [
      "Design user-focused UI/UX layouts and modern website interfaces.",
      "Develop responsive frontend pages using React.js and AI-assisted development tools.",
      "Implement smooth micro-interactions, responsive grids, and accessible components.",
      "Deploy and maintain production frontend builds on Vercel with continuous deployment."
    ],
    deliverables: [
      {
        title: "AI Assistant Web Dashboard",
        type: "AI & Frontend Engineering",
        description: "Interactive AI assistant dashboard featuring generative workflows, prompt interfaces, real-time responses, and clean analytics UI deployed on Vercel."
      },
      {
        title: "Real Estate Web Platform",
        type: "Frontend Development & React.js",
        description: "Modern, responsive real estate web platform featuring interactive property listings, search filters, and sleek architectural UI deployed on Vercel."
      },
      {
        title: "Photography Showcase Web Application",
        type: "Frontend Development & React.js",
        description: "Responsive, high-performance photography showcase website deployed live on Vercel with smooth transitions and curated visual gallery."
      },
      {
        title: "Component Architecture",
        type: "React.js",
        description: "Modular, reusable component systems styled with Tailwind CSS."
      },
      {
        title: "AI Creative Direction",
        type: "Prompt Engineering",
        description: "Structured prompt chains for multimodal design and rapid asset creation."
      }
    ],
    tools: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Generative AI Tools"],
    isFeatured: false
  },
  {
    id: "uiux-design-projects",
    number: "04",
    name: "UI/UX DESIGN",
    client: "ScoopZone & Aurel Estates",
    category: "UI/UX Design",
    filterTags: ["UI/UX DESIGN", "WEB DESIGN", "E-COMMERCE"],
    thumbnail: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-hd.jpg",
    fullDesignImage: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-hd.jpg",
    designTitle: "ScoopZone & Aurel Estates — Full-Page UI/UX Design Systems",
    monogram: "UX",
    accentColor: "from-purple-100/80 to-amber-50/40",
    roleSubtitle: "D2C E-Commerce & Luxury Interface Systems",
    description: "End-to-end conversion-driven UI/UX design suites — featuring the full-length D2C e-commerce storefront for ScoopZone ('Ice Cream, Before It Melts') and the comprehensive 6-screen mobile & desktop architectural design system for Aurel Estates.",
    liveUrl: "",
    liveLinks: [],
    githubUrl: "",
    driveUrl: "",
    role: [
      "UI/UX Designer",
      "E-Commerce Wireframing & Design",
      "Design System Architect",
      "User Journey & Conversion Prototyping"
    ],
    overview: "A showcase of end-to-end UI/UX landing page and application designs. Features ScoopZone's high-converting D2C e-commerce storefront ('Ice Cream, Before It Melts' — with interactive scoop customizer, brand showcases, 10-minute cold chain engineering, and real-time live map tracking) alongside Aurel Estates' luxury architectural estate multi-screen ecosystem.",
    objectives: [
      "Designed full-length ScoopZone e-commerce landing page with interactive ordering flows.",
      "Crafted conversion-optimized merchandising hierarchy, brand partner showcases, and delivery proof.",
      "Engineered Aurel Estates multi-screen mobile application and desktop luxury portal.",
      "Standardized typography scales, luxury and playful color palettes, and responsive grids."
    ],
    deliverables: [
      {
        title: "ScoopZone E-Commerce Storefront",
        type: "Full-Length Landing Page UI/UX",
        description: "Complete conversion page with hero storytelling, Build Your Perfect Scoop configurator, 10-minute cold chain guarantee, and live delivery tracking."
      },
      {
        title: "Aurel Estates Mobile App Suite",
        type: "Mobile UI/UX Design (5 Screens)",
        description: "Spaces That Define Living hero, Exceptional Properties catalog with faceted filters, and deep residence dossiers."
      },
      {
        title: "Aurel Estates Desktop Editorial Portal",
        type: "Desktop UI/UX Layout",
        description: "Full desktop editorial layout showcasing architectural vision, iconic estates, and private client ledger."
      },
      {
        title: "Design Systems & Component Libraries",
        type: "UI Architecture",
        description: "Modular component hierarchies, atomic tokens, and responsive multi-device design patterns."
      }
    ],
    designScreens: [
      {
        id: "scoopzone-storefront",
        title: "ScoopZone Storefront",
        subtitle: "Ice Cream, Before It Melts — Full Landing Page",
        badge: "E-Commerce",
        device: "desktop",
        url: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-hd.jpg",
        rawUrl: "/assets/projects/uiux/scoopzone/scoopzone-uiux-landing-raw.jpg",
        resolution: "744 × 4096 px HD",
        description: "Complete full-length conversion landing page design: Hero product showcase, Build Your Perfect Scoop interactive module, 10-Minute Cold Chain, and Live Delivery Tracking."
      },
      {
        id: "mobile-home",
        title: "Aurel Mobile Home",
        subtitle: "Spaces That Define Living",
        badge: "Mobile 01",
        device: "mobile",
        url: "/assets/projects/uiux/mobile/aurel-home-hd.png",
        rawUrl: "/assets/projects/uiux/mobile/aurel-home-raw.png",
        resolution: "336 × 3584 px HD",
        description: "Hero landing page featuring curated estate listings, lifestyle philosophy, and advisory pillars."
      },
      {
        id: "mobile-catalog",
        title: "Aurel Properties Catalog",
        subtitle: "Exceptional Properties & Filter System",
        badge: "Mobile 02",
        device: "mobile",
        url: "/assets/projects/uiux/mobile/aurel-catalog-hd.png",
        rawUrl: "/assets/projects/uiux/mobile/aurel-catalog-raw.png",
        resolution: "528 × 3584 px HD",
        description: "Luxury property search and filtering across Goa, Mumbai, and ECR Chennai with unlisted mandates trigger."
      },
      {
        id: "mobile-dossier",
        title: "Aurel Residence Dossier",
        subtitle: "The Aurelia Residence & Specs",
        badge: "Mobile 03",
        device: "mobile",
        url: "/assets/projects/uiux/mobile/aurel-property-detail-hd.png",
        rawUrl: "/assets/projects/uiux/mobile/aurel-property-detail-raw.png",
        resolution: "332 × 3584 px HD",
        description: "In-depth property dossier with architectural vision, craftsmanship specs, azure amenities, location map, and floor plans."
      },
      {
        id: "mobile-editorial",
        title: "Aurel Brand Editorial",
        subtitle: "Philosophy & The Aurel Benchmark",
        badge: "Mobile 04",
        device: "mobile",
        url: "/assets/projects/uiux/mobile/aurel-editorial-hd.png",
        rawUrl: "/assets/projects/uiux/mobile/aurel-editorial-raw.png",
        resolution: "262 × 3584 px HD",
        description: "Editorial storytelling on modernist artistry, acquisition in three acts, track record metrics, and directorate."
      },
      {
        id: "mobile-enquiry",
        title: "Aurel Private Enquiry",
        subtitle: "Confidential Dossier Brief",
        badge: "Mobile 05",
        device: "mobile",
        url: "/assets/projects/uiux/mobile/aurel-enquiry-hd.png",
        rawUrl: "/assets/projects/uiux/mobile/aurel-enquiry-raw.png",
        resolution: "511 × 3584 px HD",
        description: "High-net-worth confidential brief with NDA sequestering, territory selection, capital brackets, and ateliers."
      },
      {
        id: "desktop-landing",
        title: "Aurel Desktop Landing",
        subtitle: "Full-Length Desktop Showcase",
        badge: "Desktop",
        device: "desktop",
        url: "/assets/projects/uiux/aurel-estates-uiux-design-hd.jpg",
        rawUrl: "/assets/projects/uiux/aurel-estates-uiux-design.jpg",
        resolution: "861 × 3072 px HD",
        description: "Expansive desktop layout featuring hero, iconic estate cards, architectural philosophy, and private ledger."
      }
    ],
    tools: ["Figma", "Adobe Photoshop", "Canva Pro", "Design Systems", "E-Commerce UI/UX", "Mobile UI/UX"],
    isFeatured: true
  }
];
