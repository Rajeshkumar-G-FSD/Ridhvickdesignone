import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Share2, Camera, Users, MessageSquare, ArrowDown, ChevronRight, 
  Maximize2, X, Eye, Sparkles, Layers 
} from 'lucide-react';
import { AnimatedWords, FadeInDelay } from './AnimatedText';

interface HeroSectionProps {
  onOpenQuoteModal: (category?: string) => void;
  onOpenLookbook: (index?: number) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenLookbook,
  onScrollToSection,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const [isFullImageViewOpen, setIsFullImageViewOpen] = useState(false);

  const heroImage = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2600&q=95";

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] 2xl:min-h-[96vh] pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden flex flex-col justify-between bg-[#070a12] text-white border-b border-gray-900">
      
      {/* Full Big Screen Background Picture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Ridhvick Uniforms Master Display"
          className="w-full h-full object-cover object-center filter brightness-[0.74] contrast-[1.08] scale-102"
          loading="eager"
        />

        {/* Ambient Dark-to-Glass Optical Gradients for Clarity & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/50 to-[#070a12]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a12]/95 via-[#070a12]/50 to-transparent sm:w-3/4 lg:w-2/3" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none" />
      </div>

      {/* Main Expansive Content Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 w-full my-auto flex flex-col justify-between gap-10">
        
        {/* Top Minimalist Header & Full View Trigger */}
        <div className="flex items-center justify-between gap-4">
          <FadeInDelay delay={0.1} direction="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>RIDHVICK UNIFORMS • EST. 1998</span>
            </div>
          </FadeInDelay>

          <FadeInDelay delay={0.15} direction="down">
            <button
              onClick={() => setIsFullImageViewOpen(true)}
              className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-medium text-slate-200 hover:text-white transition-all cursor-pointer shadow-lg hover:scale-105"
              title="Expand to Full-Resolution Uncropped Image"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Full Photo View</span>
              <Maximize2 className="w-3 h-3 text-slate-400" />
            </button>
          </FadeInDelay>
        </div>

        {/* Big Screen Grand Display Typography & Primary Actions */}
        <div className="max-w-3xl">
          <FadeInDelay delay={0.18} direction="down">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Institutional & Corporate Apparel</span>
            </div>
          </FadeInDelay>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.75rem] text-white font-normal leading-[1.03] tracking-tight mb-5 drop-shadow-md">
            <AnimatedWords
              text="Connect with Excellence"
              staggerDuration={0.04}
              delay={0.15}
              className="font-serif font-normal text-white"
            />
          </h1>

          <FadeInDelay delay={0.3} direction="up">
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl">
              Precision woven academic blazers, tailored corporate suiting, industrial safety gear, and athletic performance kits engineered in our vertically integrated Tirupur mills.
            </p>
          </FadeInDelay>

          {/* Primary Action Buttons */}
          <FadeInDelay delay={0.4} direction="up">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('institutional')}
                id="hero-request-consultation-btn"
                className="bg-white hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase px-8 py-4 rounded-xs transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer active:scale-98"
              >
                <span>Request Program Consultation</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => onScrollToSection('category-3d-directory')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-4 rounded-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Explore 3D Directory Below</span>
              </button>

              <button
                onClick={() => onOpenLookbook(0)}
                id="hero-view-lookbook-btn"
                className="bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-gray-300 hover:text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-5 py-4 rounded-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Camera className="w-4 h-4 text-amber-400" />
                <span>Lookbook</span>
              </button>
            </div>
          </FadeInDelay>
        </div>

      </div>

      {/* Floating Glass Tool Action Pill Dock (Right Fixed Edge) */}
      <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/25 p-2 rounded-full shadow-2xl transition-all">
        
        {/* Share Tool */}
        <button
          onClick={handleShare}
          title="Share Institutional Portal"
          className="w-9 h-9 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm relative cursor-pointer"
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
          onClick={() => onOpenLookbook(0)}
          title="View High-Resolution Lookbook"
          className="w-9 h-9 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
          aria-label="View Lookbook"
        >
          <Camera className="w-4 h-4" />
        </button>

        {/* Institutional Reviews Tool */}
        <button
          onClick={() => onScrollToSection('testimonials')}
          title="Read Verified Client Reviews"
          className="w-9 h-9 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
          aria-label="Client Testimonials"
        >
          <Users className="w-4 h-4" />
        </button>

        {/* Consultation / Inquiries Tool */}
        <button
          onClick={() => onScrollToSection('locations')}
          title="Request Institutional Consultation"
          className="w-9 h-9 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
          aria-label="Consultation Inquiry"
        >
          <MessageSquare className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Status & Direct Scroll Link to 3D Carousel */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full pt-4 relative z-10 flex items-center justify-between text-xs text-gray-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Tirupur Mill Facility • Active Production Cycle</span>
        </div>
        <button
          onClick={() => onScrollToSection('category-3d-directory')}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer bg-black/40 px-3 py-1 rounded-full border border-white/10"
        >
          <span>Scroll to 3D Sector Carousel</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

      {/* FULL-SCREEN EXPANDED PHOTO LIGHTBOX */}
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
              <div className="flex items-center justify-between pb-3 border-b border-white/20 text-white">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold">
                    Ridhvick Precision Uniforms — Master Photography
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
              <div className="flex-1 my-3 relative rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <img
                  src={heroImage}
                  alt="Ridhvick Uniforms Master Photography"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Bottom Bar */}
              <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/20 text-xs text-gray-300">
                <span className="font-mono text-amber-400">Institutional Master Series</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setIsFullImageViewOpen(false);
                      onOpenQuoteModal('institutional');
                    }}
                    className="bg-white text-black font-bold uppercase tracking-wider px-5 py-2 rounded-xs hover:bg-amber-400 transition-colors"
                  >
                    Request Consultation
                  </button>
                  <button
                    onClick={() => setIsFullImageViewOpen(false)}
                    className="bg-white/10 hover:bg-white/20 text-white uppercase tracking-wider px-4 py-2 rounded-xs transition-colors"
                  >
                    Close
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
