import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Camera, Users, MessageSquare, ArrowDown, Sparkles, CheckCircle2, ChevronRight, Building2, Shield, Flame, Activity, Layers, ArrowUpRight } from 'lucide-react';
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

  const heroSectors: HeroSector[] = [
    {
      id: 'institutional',
      category: 'institutional',
      tag: 'Academic Prestige',
      title: 'Institutional & Academy Programs',
      highlight: 'Structured twill blazers, royal oxford shirts, pleated skirts & bullion crest embroidery.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=90',
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
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=90',
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
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=90',
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
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=90',
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
    <section className="relative min-h-[92vh] xl:min-h-[96vh] 2xl:min-h-[98vh] pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#F8F9FA] flex flex-col justify-between border-b border-gray-200/80">
      
      {/* Background Big Screen Ambient Layers */}
      <div className="absolute inset-0 bg-radial-[at_30%_20%] from-amber-50/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-radial-[at_70%_20%] from-slate-200/35 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:32px_32px] opacity-45 pointer-events-none" />

      {/* Main Expansive Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative w-full my-auto">
        
        {/* Sector Quick Switcher Navigation Bar on Big Screens */}
        <FadeInDelay delay={0.08} direction="down" className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-[11px] font-bold tracking-[0.25em] text-slate-800 uppercase shrink-0 mr-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Sectors:
            </span>
            <div className="inline-flex p-1 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/90 shadow-2xs">
              {heroSectors.map((sector, idx) => {
                const IconComponent = sector.icon;
                const isActive = activeSectorIndex === idx;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSectorIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-gray-700 hover:text-slate-950 hover:bg-gray-100/80'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-gray-500'}`} />
                    <span className="whitespace-nowrap">{sector.tag}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeInDelay>

        {/* Big Screen Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Larger Display Typography & Action */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            
            {/* Tag / Eyebrow */}
            <FadeInDelay delay={0.15} direction="down">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-2xs mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span className="text-xs font-bold tracking-[0.22em] text-slate-800 uppercase font-mono">
                  PRECISION TEXTILES • EST. 1998
                </span>
              </div>
            </FadeInDelay>

            {/* Giant Display Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem] 2xl:text-[5.75rem] text-[#0a0d14] font-normal leading-[1.05] tracking-tight mb-6 sm:mb-7">
              <AnimatedWords
                text="Connect with Excellence"
                staggerDuration={0.05}
                delay={0.2}
                className="font-serif font-normal text-slate-950"
              />
            </h1>

            {/* Dynamic Sector Highlights & Subtitle */}
            <FadeInDelay delay={0.4} direction="up">
              <div className="min-h-[72px] mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSector.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-base sm:text-lg xl:text-xl text-slate-800 leading-relaxed font-normal">
                      {currentSector.highlight}
                    </p>
                    <div className="mt-2.5 flex items-center gap-2 text-xs font-mono text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>{currentSector.specs}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeInDelay>

            {/* Action Buttons */}
            <FadeInDelay delay={0.55} direction="up">
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(currentSector.category)}
                  id="hero-request-consultation-btn"
                  className="bg-[#0a0d14] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-xs transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer active:scale-98"
                >
                  <span>Request Program Consultation</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>

                <button
                  onClick={() => onOpenLookbook(currentSector.lookbookIndex)}
                  id="hero-view-lookbook-btn"
                  className="bg-white hover:bg-gray-50 border border-gray-300 text-slate-900 text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-4 rounded-xs transition-all hover:border-slate-900 flex items-center gap-2 cursor-pointer"
                >
                  <Camera className="w-4 h-4 text-slate-700" />
                  <span>View Lookbook</span>
                </button>
              </div>
            </FadeInDelay>

            {/* Micro Highlights Badges */}
            <FadeInDelay delay={0.7} direction="up">
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-gray-200/90">
                <div className="bg-white/80 p-3 rounded-lg border border-gray-200/60 shadow-2xs">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-bold font-serif text-slate-950">450+</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-700 tracking-wider uppercase font-semibold mt-0.5">Institutions</div>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-gray-200/60 shadow-2xs">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-bold font-serif text-slate-950">500K</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-700 tracking-wider uppercase font-semibold mt-0.5">Monthly Capacity</div>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-gray-200/60 shadow-2xs">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-bold font-serif text-slate-950">120K</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-700 tracking-wider uppercase font-semibold mt-0.5">Sq.Ft Mill</div>
                </div>
              </div>
            </FadeInDelay>

          </div>

          {/* Right Column: Hero Stage Image with Floating Control Dock (Large Big Screen UI) */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <FadeInDelay delay={0.25} direction="left">
              <div className="relative rounded-2xl sm:rounded-3xl xl:rounded-[2rem] overflow-hidden shadow-2xl bg-slate-950 border border-gray-300/80 aspect-[16/11] sm:aspect-[16/10] xl:aspect-[16/11] group">
                
                {/* Dynamic High-Res Big Screen Background Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSector.image}
                    src={currentSector.image}
                    alt={currentSector.title}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </AnimatePresence>

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />

                {/* Top Left Series Tag on Big Screen Stage */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-200">
                    {currentSector.tag}
                  </span>
                </div>

                {/* Bottom Left Title & Spec Card on Image */}
                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/50 shadow-xl max-w-[280px] sm:max-w-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 animate-pulse shrink-0" />
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {currentSector.title}
                    </h2>
                  </div>
                  <p className="text-[11px] text-gray-700 line-clamp-2 leading-relaxed">
                    {currentSector.specs}
                  </p>
                </div>

                {/* Floating Glass Tool Action Pill Dock (Right Edge - Matching Image 8) */}
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3 bg-white/30 hover:bg-white/40 backdrop-blur-xl border border-white/50 p-2 sm:p-2.5 rounded-full shadow-2xl transition-all duration-300">
                  
                  {/* Share Tool */}
                  <button
                    onClick={handleShare}
                    title="Share Institutional Portal"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm relative cursor-pointer"
                    aria-label="Share Link"
                  >
                    <Share2 className="w-4 h-4" />
                    {copiedShare && (
                      <span className="absolute -left-20 bg-black text-white text-[10px] px-2 py-0.5 rounded shadow">
                        Copied!
                      </span>
                    )}
                  </button>

                  {/* Lookbook / Camera Gallery Tool */}
                  <button
                    onClick={() => onOpenLookbook(currentSector.lookbookIndex)}
                    title="View High-Resolution Lookbook"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
                    aria-label="View Lookbook"
                  >
                    <Camera className="w-4 h-4" />
                  </button>

                  {/* Institutional Reviews Tool */}
                  <button
                    onClick={() => onScrollToSection('testimonials')}
                    title="Read Verified Client Reviews"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
                    aria-label="Client Testimonials"
                  >
                    <Users className="w-4 h-4" />
                  </button>

                  {/* Consultation / Inquiries Tool */}
                  <button
                    onClick={() => onScrollToSection('locations')}
                    title="Request Institutional Consultation"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
                    aria-label="Consultation Inquiry"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </FadeInDelay>
          </div>

        </div>

      </div>

      {/* Bottom Subtle Scroll Indicator for Big Screen Immersion */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full pt-6 sm:pt-8 flex items-center justify-between text-xs text-slate-600 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span>Tirupur Mill Active • 100% In-House Dyeing & Weaving</span>
        </div>
        <button
          onClick={() => onScrollToSection('collections')}
          className="hidden sm:flex items-center gap-1.5 text-slate-800 hover:text-black transition-colors cursor-pointer"
        >
          <span>Scroll to Explore Collections</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
