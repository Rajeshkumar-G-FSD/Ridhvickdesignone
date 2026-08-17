import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Download, Sparkles, Layers, Shield } from 'lucide-react';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  onSelectCategoryForQuote: (category: string) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  initialIndex = 0,
  onSelectCategoryForQuote,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // High quality images representing all 5 source images + extra angles
  const slides = [
    {
      title: "Apex Institutional Academy Program",
      category: "institutional",
      subtitle: "British Academy Cut • Formal Blazers & Pleated Skirts",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=85",
      desc: "Tailored navy twill blazers paired with crisp royal oxford collared shirts, custom woven academy ties, and reinforced pleated skirts designed for all-day comfort across educational campuses.",
      specs: ["240 GSM Stain-Resistant Twill", "Nano-Pel Finish", "Reinforced Bar-Tacks", "Expandable Hems"]
    },
    {
      title: "Micro-Textile & Oxford Weave Inspection",
      category: "institutional",
      subtitle: "Close-Up Luxury Fabric & Collar Detail",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1600&q=85",
      desc: "Macro view of our signature herringbone oxford shirting fabric next to 80s/2 combed cotton blazer twill. Note the precision pick-stitching along the lapel and reinforced mother-of-pearl buttons.",
      specs: ["High Thread Density", "Anti-Pilling Grade 4.5", "Double-Stitched Seams", "Vat-Dyed Navy"]
    },
    {
      title: "High-Spec Industrial Safety Gear",
      category: "industrial",
      subtitle: "EN ISO 20471 & Arc-Flash Certified Workwear",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=85",
      desc: "Engineered for robotics engineers, automated assembly lines, and industrial facilities. High-visibility fluorescent neon with 3M Scotchlite retroreflective tape and reinforced Cordura ripstop.",
      specs: ["320 GSM Cordura Ripstop Drill", "3M Scotchlite Reflective", "Chemical & Spark Barrier", "Ergonomic Articulated Knees"]
    },
    {
      title: "Executive Corporate Suiting",
      category: "corporate",
      subtitle: "Bespoke Australian Merino Wool Blend",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85",
      desc: "Structured charcoal and navy executive suits tailored for corporate headquarters and modern boardrooms. Features bi-stretch movement and anti-static silk viscose lining.",
      specs: ["275 GSM Super 120s Blend", "Canvas-Fused Chest Piece", "Wrinkle Recovery", "Custom Monogrammed Linings"]
    },
    {
      title: "High-Performance Athletic & Sprint Uniforms",
      category: "athletic",
      subtitle: "Hydro-Wick Aeromesh & Track Kits",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85",
      desc: "Designed for competitive track meets and athletic squads. Aerodynamic 4-way stretch interlock knit that accelerates sweat evaporation and regulates athlete core temperature.",
      specs: ["180 GSM Quick-Dry Interlock", "Silver-Ion Antimicrobial", "Laser Thermal Vents", "Chafe-Free Flatlock Stitch"]
    }
  ];

  if (!isOpen) return null;

  const currentSlide = slides[currentIndex] || slides[0];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="bg-[#0b0f19] border border-slate-800 text-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl relative my-auto flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-black/40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-serif tracking-widest text-sm uppercase text-slate-200">
                RIDHVICK LOOKBOOK & TEXTILE DOSSIER
              </span>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                ({currentIndex + 1} of {slides.length})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Slide Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Slide Image Stage */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] bg-black flex items-center justify-center overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Details Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-900/90 border-t lg:border-t-0 lg:border-l border-slate-800">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase block mb-1">
                  {currentSlide.subtitle}
                </span>

                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  {currentSlide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {currentSlide.desc}
                </p>

                {/* Specs List */}
                <div className="bg-black/40 rounded-xl p-4 border border-slate-800 mb-6">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Performance Attributes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {currentSlide.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-slate-200">
                        <span className="text-amber-400 text-xs">◆</span>
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    onClose();
                    onSelectCategoryForQuote(currentSlide.category);
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Consultation for This Series</span>
                </button>
              </div>

            </div>

          </div>

          {/* Slide Selector Thumbnails Strip */}
          <div className="p-3 bg-black/70 border-t border-slate-800 flex items-center justify-center gap-2 overflow-x-auto">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === i ? 'border-amber-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
