import { CollectionItem, Testimonial, LocationDetail } from '../types';

export const HERO_DATA = {
  title: "Connect with Excellence",
  subtitle: "Reach out to our dedicated institutional team to discuss bespoke uniform programs, manufacturing capabilities, and bulk inquiries.",
  established: "Est. 1998",
  activeInstitutions: "450+ Institutions Globally",
  annualOutput: "6M+ Garments Produced",
  heroImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=85",
  secondaryImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85",
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "institutional",
    category: "institutional",
    title: "Institutional & Academy Uniforms",
    subtitle: "Enduring Prestige & Academic Elegance",
    tagline: "Tailored blazer sets, crisp herringbone oxford shirts, durable pleated skirts, and formal academy ties.",
    description: "Engineered for daily academic rigor without sacrificing structured dignity. Our institutional uniforms blend stain-resistant yarn technology with tailored British silhouette cuts, providing supreme comfort and prestige across every campus tier.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
    ],
    fabricSpecs: {
      composition: "65% Long-Staple Combed Cotton / 35% High-Tenacity Poly Twill",
      weight: "240 GSM Blazer Twill / 145 GSM Oxford Shirting",
      weave: "Fine Twill & Royal Oxford Weave",
      durability: "65,000+ Martindale Abrasion Cycles",
      features: ["Nano-Pel Stain Repellent", "Anti-Pilling Grade 4.5", "Wrinkle Recovery Finish", "Breathable Double Weave"]
    },
    keyFeatures: [
      "Reinforced stress seams with bar-tack stitching",
      "Grow-with-me adjustable waistbands and expandable hems",
      "Fade-proof reactive vat dyeing guaranteed for 100+ industrial washes",
      "Custom crest bullion & high-definition laser embroidery"
    ],
    recommendedSectors: ["K-12 International Academies", "Boarding Schools", "Universities", "Preparatory Colleges"],
    minOrderQty: 100,
    leadTime: "3 to 4 Weeks"
  },
  {
    id: "corporate",
    category: "corporate",
    title: "Corporate & Executive Suiting",
    subtitle: "Bespoke Precision for Modern Enterprises",
    tagline: "Structured charcoal suits, tailored blazers, luxury poly-wool blends, and signature executive silhouettes.",
    description: "Designed to reinforce corporate brand authority. Our executive collection offers impeccably drape-retaining suits, trousers, and blazers tailored for boardrooms, hospitality leadership, and aviation crews.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=85"
    ],
    fabricSpecs: {
      composition: "70% Fine Australian Wool / 28% Micro-Polyester / 2% Elastane",
      weight: "275 GSM Tropical Weight Wool Blend",
      weave: "Micro-Houndstooth & Sharkskin Weave",
      durability: "70,000+ Martindale Cycles",
      features: ["Bi-Stretch Ergonomic Drape", "Anti-Static Viscose Lining", "Liquid Repellent Coating", "Crease Resistance"]
    },
    keyFeatures: [
      "Canvas-fused chest piece for natural shoulder contouring",
      "Custom jacquard inner lining with brand watermark",
      "Reinforced pocket jets with horn button accents",
      "Available in Slim, Contemporary, and Tailored Classic fits"
    ],
    recommendedSectors: ["Financial Institutions", "Corporate HQs", "Luxury Hospitality", "Aviation & Ground Staff"],
    minOrderQty: 50,
    leadTime: "2 to 3 Weeks"
  },
  {
    id: "industrial",
    category: "industrial",
    title: "Industrial & High-Spec Safety Workwear",
    subtitle: "Heavy-Duty Compliance with Ergonomic Agility",
    tagline: "Hi-vis fluorescent jackets, flame-retardant coveralls, tear-resistant ripstop pants, and robotic plant gear.",
    description: "Engineered to satisfy stringent global safety standards (EN ISO 20471, NFPA 70E, OSHA). Built with ultra-tough ripstop weaves and 3M Scotchlite reflective bands that withstand aggressive industrial wash chemistry.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=85"
    ],
    fabricSpecs: {
      composition: "60% Cotton Drill / 40% High-Tenacity Cordura Ripstop with FR Core",
      weight: "320 GSM Heavyweight Industrial Drill",
      weave: "Grid-Locked 5mm Diamond Ripstop",
      durability: "100,000+ Martindale Friction Cycles",
      features: ["3M Scotchlite Retroreflective Tape", "Arc-Flash & Spark Resistant", "Triple Needled Inseam", "Oil & Chemical Barrier"]
    },
    keyFeatures: [
      "Articulated knee panels with internal CORDURA pad slots",
      "Heavy-gauge YKK metal zippers with protective flap guards",
      "Utility pocketing with reinforced tool holsters and badge loops",
      "Class 2 & Class 3 High-Visibility Certified"
    ],
    recommendedSectors: ["Advanced Manufacturing", "Automotive Assembly", "Oil & Gas Refineries", "Logistics & Ports"],
    minOrderQty: 100,
    leadTime: "3 to 4 Weeks"
  },
  {
    id: "athletic",
    category: "athletic",
    title: "Performance Athletic & Track Apparel",
    subtitle: "Aero-Dynamic Form with Hydro-Wick Core",
    tagline: "Competition track jackets, moisture-wicking interlock polos, compression gear, and academy athletic kits.",
    description: "Designed for athletic performance and endurance. Breathable micro-mesh aeration zones and four-way stretch dynamic weaves allow athletes to move with uninhibited velocity while staying dry and cool.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
    ],
    fabricSpecs: {
      composition: "88% Recycled Poly Dri-Flex / 12% Spandex Aeromesh",
      weight: "180 GSM Quick-Dry Double Knit Interlock",
      weave: "Honeycomb Micro-Ventilated Knit",
      durability: "50,000+ Martindale Stretch Cycles",
      features: ["Hydro-Wick Moisture Evacuation", "Anti-Odor Silver Ion Tech", "UPF 50+ UV Defense", "4-Way Ergonomic Flex"]
    },
    keyFeatures: [
      "Laser-perforated thermal ventilation zones across spine and underarms",
      "Flatlock anti-chafe seamless construction",
      "Sublimation printing that never cracks, peels, or fades",
      "Elasticated hem with internal silicone grip lock"
    ],
    recommendedSectors: ["Varsity Athletics", "Sports Academies", "Marathon & Athletic Leagues", "Gym & Fitness Chains"],
    minOrderQty: 75,
    leadTime: "2 to 3 Weeks"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "The quality of the institutional uniforms provided by Ridhvick is unmatched. Their attention to detail and ability to scale up for our multiple campus locations seamlessly was impressive.",
    author: "Arun Kumar",
    role: "Director of Operations",
    company: "National Apex Academy Network",
    initial: "A",
    rating: 5,
    verified: true,
    sector: "Institutional Academies"
  },
  {
    id: "2",
    quote: "From the initial fabric selection to the final delivery, the team demonstrated absolute professionalism. The durability of the fabrics holds up incredibly well in our industrial environments.",
    author: "Sarah Jenkins",
    role: "Procurement Head",
    company: "Apex Global Industrial Robotics",
    initial: "S",
    rating: 5,
    verified: true,
    sector: "Industrial Manufacturing"
  },
  {
    id: "3",
    quote: "Ridhvick Uniforms brings a level of bespoke tailoring to mass manufacturing that we didn't think was possible. The consistency across 500+ employees is remarkable.",
    author: "Meera Patel",
    role: "HR Director",
    company: "Vanguard Financial Capital",
    initial: "M",
    rating: 5,
    verified: true,
    sector: "Corporate Suiting"
  },
  {
    id: "4",
    quote: "Our track and field squad needed uniforms that could handle rigorous national meets in humid conditions. Ridhvick's athletic Dri-Flex line delivered top performance with zero degradation after a full season.",
    author: "Devon Ross",
    role: "Head of Athletics",
    company: "Crestview Sports Academy",
    initial: "D",
    rating: 5,
    verified: true,
    sector: "Athletic Programs"
  }
];

export const LOCATIONS: LocationDetail[] = [
  {
    id: "tirupur",
    city: "Tirupur",
    type: "MANUFACTURING FACILITY",
    address: "SIPCOT Industrial Complex, Tirupur, Tamil Nadu 641603",
    details: [
      "120,000 sq.ft state-of-the-art spinning, weaving & stitching plant",
      "500,000 garments monthly output capacity",
      "Zero Liquid Discharge (ZLD) eco-dyeing facility",
      "Dedicated sample development & testing laboratory"
    ],
    phone: "+91 95001 11321",
    email: "factory@ridhvick.com",
    coordinates: {
      lat: 11.1085,
      lng: 77.3411
    },
    highlights: ["Advanced Automated Cutting (Gerber/Lectra)", "ISO 9001:2015 Certified", "OEKO-TEX Standard 100"]
  },
  {
    id: "chennai",
    city: "Chennai",
    type: "CORPORATE OFFICE",
    address: "Level 4, Prestige Polygon, Mount Road, Chennai 600035",
    details: [
      "Design studio & client consultation suites",
      "Enterprise accounts & international procurement desk",
      "Textile swatch archives & bespoke fitting lounge",
      "Quality audit & distribution dispatch command"
    ],
    phone: "+91 95001 11321",
    email: "info@ridhvick.com",
    coordinates: {
      lat: 13.0827,
      lng: 80.2707
    },
    highlights: ["Institutional Consultation Hub", "Client Fitting Lounge", "Bespoke Swatch Library"]
  }
];

export const FABRIC_DETAILS = [
  {
    name: "Royal Oxford & Twill Weave",
    category: "Institutional",
    code: "TX-OXF-240",
    composition: "65% Combed Long-Staple Cotton / 35% High-Tenacity Poly",
    weight: "240 GSM",
    warpWeft: "80s/2 x 80s/2 Ring Spun",
    finish: "Nano-Pel Stain Repel & Soft Luster",
    icon: "ShieldCheck",
    colorway: ["#1e293b", "#ffffff", "#334155", "#0f172a"]
  },
  {
    name: "Sharkskin Super 120s Blend",
    category: "Corporate",
    code: "TX-WOL-275",
    composition: "70% Merino Wool / 28% Poly / 2% Lycra Elastane",
    weight: "275 GSM",
    warpWeft: "120s/2 High-Twist Worsted",
    finish: "Bi-Stretch Hydrophobic Repel",
    icon: "Sparkles",
    colorway: ["#374151", "#1f2937", "#111827", "#4b5563"]
  },
  {
    name: "Hi-Vis Ripstop Drill with FR",
    category: "Industrial",
    code: "TX-IND-320",
    composition: "60% Cotton / 40% Cordura Ripstop with FR Core",
    weight: "320 GSM",
    warpWeft: "20s/2 x 16s Heavy Cord",
    finish: "Fluorocarbon Chemical & Spark Guard",
    icon: "Flame",
    colorway: ["#eab308", "#1e3a8a", "#0284c7", "#f97316"]
  },
  {
    name: "Dri-Flex Aeromesh Interlock",
    category: "Athletic",
    code: "TX-ATH-180",
    composition: "88% Recycled Poly / 12% Spandex",
    weight: "180 GSM",
    warpWeft: "75D/72F Microfilament",
    finish: "Hydro-Wick & Silver Ion Antimicrobial",
    icon: "Zap",
    colorway: ["#0284c7", "#10b981", "#1e293b", "#f43f5e"]
  }
];

export const MANUFACTURING_METRICS = [
  { label: "Monthly Garment Capacity", value: "500K+", unit: "Pieces / Month" },
  { label: "Institutional Partners", value: "450+", unit: "Schools & Corporates" },
  { label: "Quality Audit Pass Rate", value: "99.8%", unit: "Zero Defect Standard" },
  { label: "On-Time Dispatch Rate", value: "99.4%", unit: "Strict SLAs Met" }
];
