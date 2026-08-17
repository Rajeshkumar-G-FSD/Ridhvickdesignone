import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Layers, Shield, Activity, Stethoscope, Compass, 
  ChevronLeft, ChevronRight, ArrowRight, Camera, Sparkles, 
  Play, Pause, Eye, CheckCircle2, ShieldCheck
} from 'lucide-react';
import { FadeInDelay } from './AnimatedText';

export interface CategoryCardData {
  id: string;
  category: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  gsm: string;
  fabric: string;
  compliance: string;
  icon: React.ComponentType<{ className?: string }>;
  lookbookIndex: number;
}

interface Category3DCarouselProps {
  onOpenQuoteModal: (category?: string) => void;
  onOpenLookbook: (index?: number) => void;
}

export const Category3DCarousel: React.FC<Category3DCarouselProps> = ({
  onOpenQuoteModal,
  onOpenLookbook,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const categories: CategoryCardData[] = [
    {
      id: 'institutional',
      category: 'institutional',
      tag: 'Academic Prestige',
      title: 'Academy & School Programs',
      subtitle: 'Structured twill blazers, royal oxford shirts, pleated skirts & bullion crest embroidery.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=90',
      gsm: '240 GSM Twill',
      fabric: 'Poly-Viscose & Nano-Pel',
      compliance: '100+ Wash Fastness',
      icon: Building2,
      lookbookIndex: 0,
    },
    {
      id: 'corporate',
      category: 'corporate',
      tag: 'Executive Authority',
      title: 'Corporate & Hospitality Suiting',
      subtitle: 'Tailored Australian wool blends, structured blazers, silk-touch linings & executive cuts.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
      gsm: '275 GSM Suiting',
      fabric: 'Australian Wool-Poly Blend',
      compliance: 'Wrinkle Recovery Standard',
      icon: Layers,
      lookbookIndex: 3,
    },
    {
      id: 'industrial',
      category: 'industrial',
      tag: 'Technical Compliance',
      title: 'Industrial & Technical Hi-Vis',
      subtitle: 'EN ISO 20471 hi-vis overalls, 3M Scotchlite retroreflective tape & flame-retardant ripstop.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=90',
      gsm: '320 GSM Cordura',
      fabric: 'Flame & Arc Retardant Ripstop',
      compliance: 'EN ISO 20471 Certified',
      icon: Shield,
      lookbookIndex: 2,
    },
    {
      id: 'athletic',
      category: 'athletic',
      tag: 'Performance Sportswear',
      title: 'Athletic & Sports Trackwear',
      subtitle: 'Hydro-wick aeromesh, 4-way compression interlock & anti-chafing ergonomic construction.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=90',
      gsm: '180 GSM Interlock',
      fabric: 'Silver-Ion Microfiber Mesh',
      compliance: 'Anti-Microbial & UV-50+',
      icon: Activity,
      lookbookIndex: 4,
    },
    {
      id: 'healthcare',
      category: 'institutional',
      tag: 'Clinical Hygiene',
      title: 'Healthcare & Clinical Scrubs',
      subtitle: 'Fluid-barrier surgical scrubs, antimicrobial lab coats & ergonomic stretch nurses uniform.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=90',
      gsm: '210 GSM Poplin',
      fabric: 'Antimicrobial Chlorine-Resistant',
      compliance: 'AAMI Level 3 Fluid Barrier',
      icon: Stethoscope,
      lookbookIndex: 1,
    },
    {
      id: 'aviation',
      category: 'corporate',
      tag: 'Aviation & Security',
      title: 'Aviation & Tactical Security',
      subtitle: 'Crease-proof pilot epaulette shirts, reinforced suiting, gold braid details & security jackets.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=90',
      gsm: '250 GSM Gabardine',
      fabric: 'Poly-Cotton Tropical Weave',
      compliance: 'Aero Grade Colorfastness',
      icon: Compass,
      lookbookIndex: 5,
    },
  ];

  const total = categories.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay interval
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoplay, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch & Drag Swipe handling
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStartX === null) return;
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX - clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setDragStartX(null);
  };

  return (
    <section 
      id="category-3d-directory" 
      className="relative py-20 lg:py-28 bg-[#090d16] text-white overflow-hidden border-b border-gray-800"
    >
      {/* 3D Atmospheric Canvas Ambient Lights */}
      <div className="absolute inset-0 bg-radial-[at_50%_0%] from-slate-800/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:36px_36px] opacity-25 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <FadeInDelay delay={0.1} direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-amber-400 uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D SECTOR CAROUSEL • 6 SPECIALIZED DIVISIONS</span>
              </div>
            </FadeInDelay>
            
            <FadeInDelay delay={0.2} direction="up">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight">
                Explore Uniform Programs
              </h2>
            </FadeInDelay>
          </div>

          {/* Controls: Autoplay Toggle, Arrows, Indicators */}
          <FadeInDelay delay={0.3} direction="up" className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-gray-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer border border-white/15"
              title={isAutoplay ? 'Pause 3D Autoplay' : 'Start 3D Autoplay'}
            >
              {isAutoplay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Autoplay Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-slate-300" />
                  <span className="hidden sm:inline">Play Carousel</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                id="carousel-3d-prev-btn"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-105 active:scale-95 shadow-lg"
                aria-label="Previous Uniform Category"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                id="carousel-3d-next-btn"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-105 active:scale-95 shadow-lg"
                aria-label="Next Uniform Category"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </FadeInDelay>
        </div>

        {/* 3D CAROUSEL STAGE CONTAINER */}
        <div 
          ref={carouselContainerRef}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
          style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
        >
          {categories.map((cat, idx) => {
            // Calculate distance offset from activeIndex [-2, -1, 0, 1, 2, etc.]
            let offset = idx - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // 3D positioning mathematics
            const translateX = offset * 280; // horizontal separation
            const translateZ = isCenter ? 0 : -Math.abs(offset) * 160; // depth recess
            const rotateY = offset * -25; // inward angle rotation
            const scale = isCenter ? 1 : 0.84 - Math.abs(offset) * 0.08;
            const opacity = isCenter ? 1 : 0.65 - Math.abs(offset) * 0.2;
            const zIndex = 30 - Math.abs(offset) * 10;

            const IconComponent = cat.icon;

            return (
              <motion.div
                key={cat.id}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(idx);
                  }
                }}
                initial={false}
                animate={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className={`absolute w-[290px] sm:w-[340px] md:w-[380px] h-[440px] sm:h-[480px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-300 border ${
                  isCenter
                    ? 'border-amber-400/80 shadow-[0_20px_50px_rgba(245,158,11,0.2)] bg-slate-900 ring-1 ring-amber-400/50'
                    : 'border-white/20 shadow-xl bg-slate-950/90 hover:border-white/40 cursor-pointer'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Top Image Section */}
                <div className="relative w-full h-[52%] overflow-hidden bg-black">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />

                  {/* Top Tag & Sector Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-amber-400 border border-white/20 uppercase">
                      {cat.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Center Lookbook Quick Trigger */}
                  {isCenter && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenLookbook(cat.lookbookIndex);
                      }}
                      className="absolute bottom-3 right-3 bg-black/70 hover:bg-black backdrop-blur-md text-white text-xs px-2.5 py-1.5 rounded-lg border border-white/30 flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
                      title="View Series in Lookbook"
                    >
                      <Camera className="w-3.5 h-3.5 text-amber-400" />
                      <span>Lookbook</span>
                    </button>
                  )}
                </div>

                {/* Bottom Content Info Section */}
                <div className="p-5 sm:p-6 flex flex-col justify-between h-[48%] bg-gradient-to-b from-slate-900 to-[#070a12]">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-300 line-clamp-2 leading-relaxed font-light">
                      {cat.subtitle}
                    </p>
                  </div>

                  {/* Specs & Consultation Action */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-400 mb-3.5">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span className="truncate">{cat.gsm}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{cat.compliance}</span>
                      </div>
                    </div>

                    {isCenter ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteModal(cat.category);
                        }}
                        className="w-full bg-white hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98"
                      >
                        <span>Inquire This Program</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="text-center text-[11px] font-mono text-amber-400 uppercase tracking-widest py-2">
                        Click to Focus
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Carousel Pill Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {categories.map((cat, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  isActive
                    ? 'w-8 h-2 bg-amber-400'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to ${cat.title}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
