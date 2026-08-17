import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Share2, Camera, Users, MessageSquare, ArrowDown, ChevronRight, 
  Building2, Shield, Activity, Layers, Maximize2, Minimize2, X, Eye, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { AnimatedWords, FadeInDelay } from './AnimatedText';

interface HeroSectionProps {
  onOpenQuoteModal: (category?: string) => void;
  onOpenLookbook: (index?: number) => void;
  onScrollToSection: (sectionId: string) => void;
}

interface HeroSector {
  id: string;
  category: string;
  tag: string;
  title: string;
  highlight: string;
  image: string;
  specs: string;
  icon: React.ComponentType<{ className?: string }>;
  lookbookIndex: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenLookbook,
  onScrollToSection,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const [isFullImageViewOpen, setIsFullImageViewOpen] = useState(false);
  const [displayMode, setDisplayMode] = useState<'immersive' | 'split'>('immersive');

  const heroSectors: HeroSector[] = [
    {
      id: 'institutional',
      category: 'institutional',
      tag: 'Academic Prestige',
      title: 'Institutional & Academy Programs',
      highlight: 'Structured twill blazers, royal oxford shirts, pleated skirts & bullion crest embroidery.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2400&q=95',
      specs: '240 GSM Twill • Nano-Pel Stain Repel • 100+ Wash Fastness',
      icon: Building2,
      lookbookIndex: 0,
    },
    {
      id: 'corporate',
      category: 'corporate',
      tag: 'Executive Authority',
      title: 'Corporate & Hospitality Suiting',
      highlight: 'Tailored Australian wool blends, structured blazers, silk-touch linings & executive cuts.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2400&q=95',
      specs: '275 GSM Poly-Wool • Bi-Stretch Drape • Wrinkle Recovery',
      icon: Layers,
      lookbookIndex: 3,
    },
    {
      id: 'industrial',
      category: 'industrial',
      tag: 'Technical Compliance',
      title: 'Industrial & High-Spec Safety Gear',
      highlight: 'EN ISO 20471 hi-vis overalls, 3M Scotchlite retroreflective tape & ripstop workwear.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2400&q=95',
      specs: '320 GSM Cordura Ripstop • Flame & Arc Retardant • Triple Stitch',
      icon: Shield,
      lookbookIndex: 2,
    },
    {
      id: 'athletic',
      category: 'athletic',
      tag: 'Athletic Performance',
      title: 'High-Performance Track & Sports Kits',
      highlight: 'Hydro-wick aeromesh, 4-way compression interlock & anti-chafing ergonomic construction.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2400&q=95',
      specs: '180 GSM Interlock • Silver-Ion Antimicrobial • Laser Vents',
      icon: Activity,
      lookbookIndex: 4,
    }
  ];

  const currentSector = heroSectors[activeSectorIndex];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden flex flex-col justify-between border-b border-gray-200/80 bg-slate-950 text-white">
      
      {/* FULL BACKGROUND IMAGE FOR BIGGER / LARGER SCREENS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSector.image}
            src={currentSector.image}
            alt={currentSector.title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
            loading="eager"
          />
        </AnimatePresence>

        {/* Sophisticated Dark-to-Glass Gradient Overlay for Ultimate Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a12]/95 via-[#070a12]/75 to-[#070a12]/30 sm:w-3/4 lg:w-3/5 xl:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/95 via-transparent to-[#070a12]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none" />
      </div>

      {/* Main Expansive Content Container */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 w-full my-auto">
        
        {/* Top Controls: Sector Quick Switcher & Full Screen Image Mode Toggle */}
        <FadeInDelay delay={0.08} direction="down" className="mb-6 lg:mb-10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase shrink-0 mr-1 flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Sectors:
            </span>
            <div className="inline-flex p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl">
              {heroSectors.map((sector, idx) => {
                const IconComponent = sector.icon;
                const isActive = activeSectorIndex === idx;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSectorIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-slate-950 shadow-md scale-102 font-bold'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-amber-600' : 'text-gray-400'}`} />
                    <span className="whitespace-nowrap">{sector.tag}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full Resolution Image Lightbox Trigger */}
          <button
            onClick={() => setIsFullImageViewOpen(true)}
            className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-medium text-slate-200 hover:text-white transition-all cursor-pointer shadow-lg hover:scale-105"
            title="Expand to Full-Resolution Uncropped Image"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Image View</span>
            <Maximize2 className="w-3 h-3 text-slate-400" />
          </button>
        </FadeInDelay>

        {/* Hero Main Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Grand Display Typography on Frosted Backdrop */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            
            {/* Tag / Eyebrow */}
            <FadeInDelay delay={0.15} direction="down">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-bold tracking-[0.22em] text-slate-200 uppercase font-mono">
                  PRECISION TEXTILES • EST. 1998
                </span>
              </div>
            </FadeInDelay>

            {/* Giant Display Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] 2xl:text-[6rem] text-white font-normal leading-[1.04] tracking-tight mb-6 drop-shadow-sm">
              <AnimatedWords
                text="Connect with Excellence"
                staggerDuration={0.05}
                delay={0.2}
                className="font-serif font-normal text-white"
              />
            </h1>

            {/* Dynamic Sector Highlights & Subtitle */}
            <FadeInDelay delay={0.4} direction="up">
              <div className="min-h-[78px] mb-8 bg-black/35 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/15 max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSector.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-base sm:text-lg xl:text-xl text-slate-200 leading-relaxed font-normal">
                      {currentSector.highlight}
                    </p>
                    <div className="mt-2.5 flex items-center gap-2 text-xs font-mono text-amber-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{currentSector.specs}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeInDelay>

            {/* Action Buttons */}
            <FadeInDelay delay={0.55} direction="up">
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onOpenQuoteModal(currentSector.category)}
                  id="hero-request-consultation-btn"
                  className="bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-xs transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer active:scale-98"
                >
                  <span>Request Program Consultation</span>
                  <ChevronRight className="w-4 h-4 text-amber-600" />
                </button>

                <button
                  onClick={() => onOpenLookbook(currentSector.lookbookIndex)}
                  id="hero-view-lookbook-btn"
                  className="bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-4 rounded-xs transition-all hover:border-white flex items-center gap-2 cursor-pointer"
                >
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span>View Lookbook</span>
                </button>
              </div>
            </FadeInDelay>

            {/* Micro Metrics Highlights */}
            <FadeInDelay delay={0.7} direction="up">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 mt-8 border-t border-white/15 max-w-xl">
                <div className="bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-bold font-serif text-white">450+</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-300 tracking-wider uppercase font-semibold mt-0.5">Institutions</div>
                </div>
                <div className="bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-bold font-serif text-white">500K</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-300 tracking-wider uppercase font-semibold mt-0.5">Monthly Capacity</div>
                </div>
                <div className="bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-bold font-serif text-white">120K</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-300 tracking-wider uppercase font-semibold mt-0.5">Sq.Ft Mill</div>
                </div>
              </div>
            </FadeInDelay>

          </div>

          {/* Right Column: Floating Live Stage Preview Card with Full Image Access */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex flex-col items-end justify-center">
            <FadeInDelay delay={0.3} direction="left" className="w-full max-w-md xl:max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40 backdrop-blur-xl p-4 sm:p-5">
                
                {/* Sector Spec Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-200">
                      {currentSector.tag}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsFullImageViewOpen(true)}
                    className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="View Full Size"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Sub-Card Image Preview */}
                <div 
                  onClick={() => setIsFullImageViewOpen(true)}
                  className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black cursor-pointer group border border-white/10"
                >
                  <img
                    src={currentSector.image}
                    alt={currentSector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 text-white text-xs flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click for Full Uncropped Image</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                  <span className="font-serif font-bold text-white text-sm">{currentSector.title}</span>
                  <button
                    onClick={() => onOpenQuoteModal(currentSector.category)}
                    className="text-amber-400 hover:text-amber-300 font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </FadeInDelay>
          </div>

        </div>

      </div>

      {/* Floating Glass Tool Action Pill Dock (Right Fixed Edge - Faithful to Image 8) */}
      <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3 bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/30 p-2 sm:p-2.5 rounded-full shadow-2xl transition-all duration-300">
        
        {/* Share Tool */}
        <button
          onClick={handleShare}
          title="Share Institutional Portal"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm relative cursor-pointer"
          aria-label="Share Link"
        >
          <Share2 className="w-4 h-4" />
          {copiedShare && (
            <span className="absolute -left-20 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg">
              Copied!
            </span>
          )}
        </button>

        {/* Lookbook / Camera Gallery Tool */}
        <button
          onClick={() => onOpenLookbook(currentSector.lookbookIndex)}
          title="View High-Resolution Lookbook"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
          aria-label="View Lookbook"
        >
          <Camera className="w-4 h-4" />
        </button>

        {/* Institutional Reviews Tool */}
        <button
          onClick={() => onScrollToSection('testimonials')}
          title="Read Verified Client Reviews"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
          aria-label="Client Testimonials"
        >
          <Users className="w-4 h-4" />
        </button>

        {/* Consultation / Inquiries Tool */}
        <button
          onClick={() => onScrollToSection('locations')}
          title="Request Institutional Consultation"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
          aria-label="Consultation Inquiry"
        >
          <MessageSquare className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Status & Scroll Down Indicator */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full pt-6 relative z-10 flex items-center justify-between text-xs text-gray-300 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Tirupur Mill Active • 100% In-House Dyeing & Weaving</span>
        </div>
        <button
          onClick={() => onScrollToSection('collections')}
          className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer"
        >
          <span>Scroll to Explore Collections</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

      {/* FULL-SCREEN EXPANDED IMAGE MODAL LIGHTBOX */}
      <AnimatePresence>
        {isFullImageViewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-7xl h-[88vh] flex flex-col justify-between"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/20 text-white">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold">
                    {currentSector.title} — High Resolution Master Display
                  </h3>
                </div>
                <button
                  onClick={() => setIsFullImageViewOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Full Uncropped High Res Image Display */}
              <div className="flex-1 my-4 relative rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <img
                  src={currentSector.image}
                  alt={currentSector.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Bottom Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/20 text-xs text-gray-300">
                <div>
                  <span className="font-mono text-amber-400">{currentSector.specs}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setIsFullImageViewOpen(false);
                      onOpenQuoteModal(currentSector.category);
                    }}
                    className="bg-white text-black font-bold uppercase tracking-wider px-5 py-2.5 rounded-xs hover:bg-amber-400 transition-colors"
                  >
                    Request Consultation
                  </button>
                  <button
                    onClick={() => setIsFullImageViewOpen(false)}
                    className="bg-white/10 hover:bg-white/20 text-white uppercase tracking-wider px-4 py-2.5 rounded-xs transition-colors"
                  >
                    Close Full View
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
