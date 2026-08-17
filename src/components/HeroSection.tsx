import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Share2, Camera, Users, MessageSquare, ArrowDown, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
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

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-[#F9FAFB]">
      {/* Subtle Background Pattern Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Action */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Tag / Eyebrow */}
            <FadeInDelay delay={0.1} direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-2xs mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
                <span className="text-[11px] font-semibold tracking-widest text-gray-700 uppercase">
                  Institutional Textile Excellence • Est. 1998
                </span>
              </div>
            </FadeInDelay>

            {/* Main Headline with Staggered Word Load Animation */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-[#0f172a] font-normal leading-[1.1] tracking-tight mb-6">
              <AnimatedWords
                text="Connect with Excellence"
                staggerDuration={0.06}
                delay={0.15}
                className="font-serif font-medium text-slate-900"
              />
            </h1>

            {/* Description Subtitle with Delayed Fade */}
            <FadeInDelay delay={0.4} direction="up">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-lg mb-8 font-normal">
                Reach out to our dedicated institutional team to discuss bespoke uniform programs, manufacturing capabilities, and bulk inquiries.
              </p>
            </FadeInDelay>

            {/* Action Buttons */}
            <FadeInDelay delay={0.55} direction="up">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal('institutional')}
                  id="hero-request-consultation-btn"
                  className="bg-[#0b0f19] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-xs transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Request Uniform Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onScrollToSection('collections')}
                  id="hero-view-collections-btn"
                  className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-xs sm:text-sm font-medium tracking-wide px-6 py-3.5 rounded-xs transition-all hover:border-gray-400"
                >
                  Explore Collections
                </button>
              </div>
            </FadeInDelay>

            {/* Micro Highlights */}
            <FadeInDelay delay={0.7} direction="up">
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-gray-200/80">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-serif text-slate-900">450+</div>
                  <div className="text-[11px] text-gray-700 tracking-wider uppercase font-medium mt-0.5">Institutions</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-serif text-slate-900">500K</div>
                  <div className="text-[11px] text-gray-700 tracking-wider uppercase font-medium mt-0.5">Monthly Capacity</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-serif text-slate-900">100%</div>
                  <div className="text-[11px] text-gray-700 tracking-wider uppercase font-medium mt-0.5">In-House Quality</div>
                </div>
              </div>
            </FadeInDelay>

          </div>

          {/* Right Column: Hero Image with Floating Action Glass Pill (Matching Image 8) */}
          <div className="lg:col-span-7 relative">
            <FadeInDelay delay={0.25} direction="left">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-200/60 aspect-[16/11] group">
                
                {/* School Uniforms Image (Direct match to Image 1 / Image 8) */}
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=85"
                  alt="Students in prestigious academy school uniforms walking through hallway"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                {/* Bottom Left Badge on Image */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/40 shadow-lg flex items-center gap-3 max-w-[260px] sm:max-w-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-700 animate-pulse shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Apex Institutional Series</p>
                    <p className="text-[10px] text-gray-700">Twill Weave • Stain Resistant • Tailored Cuts</p>
                  </div>
                </div>

                {/* Floating Glass Tool Action Pill (Right Edge - As seen in Image 8) */}
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3 bg-white/30 hover:bg-white/40 backdrop-blur-xl border border-white/50 p-2 sm:p-2.5 rounded-full shadow-xl transition-all duration-300">
                  
                  {/* Share Tool */}
                  <button
                    onClick={handleShare}
                    title="Share Page Link"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xs relative"
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
                    onClick={() => onOpenLookbook(0)}
                    title="Open Lookbook Gallery"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xs"
                    aria-label="View Lookbook"
                  >
                    <Camera className="w-4 h-4" />
                  </button>

                  {/* Institutional Programs / Team Tool */}
                  <button
                    onClick={() => onScrollToSection('testimonials')}
                    title="View Client Testimonials"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xs"
                    aria-label="Institutional Partners"
                  >
                    <Users className="w-4 h-4" />
                  </button>

                  {/* Inquiry / Chat Tool */}
                  <button
                    onClick={() => onScrollToSection('locations')}
                    title="Request Consultation"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xs"
                    aria-label="Message Inquiry"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </FadeInDelay>
          </div>

        </div>
      </div>
    </section>
  );
};
