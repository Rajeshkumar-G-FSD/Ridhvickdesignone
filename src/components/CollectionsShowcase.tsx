import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Check, ArrowRight, Eye, Layers, Compass, Award } from 'lucide-react';
import { COLLECTIONS } from '../data/mockData';
import { CollectionItem } from '../types';
import { AnimatedWords, FadeInDelay } from './AnimatedText';

interface CollectionsShowcaseProps {
  onOpenQuoteModal: (category: string) => void;
  onOpenLookbook: (index: number) => void;
}

export const CollectionsShowcase: React.FC<CollectionsShowcaseProps> = ({
  onOpenQuoteModal,
  onOpenLookbook,
}) => {
  const [activeTab, setActiveTab] = useState<string>('institutional');

  const activeCollection = COLLECTIONS.find((c) => c.id === activeTab) || COLLECTIONS[0];
  const activeIndex = COLLECTIONS.findIndex((c) => c.id === activeTab);

  return (
    <section id="collections" className="py-20 lg:py-28 bg-white border-y border-gray-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeInDelay delay={0.1} direction="down">
              <span className="text-xs font-bold tracking-[0.25em] text-gray-700 uppercase block mb-2">
                Curated Institutional Portfolios
              </span>
            </FadeInDelay>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight">
              <AnimatedWords text="Bespoke Uniform Programs" delay={0.2} staggerDuration={0.05} />
            </h2>
            
            <FadeInDelay delay={0.35} direction="up">
              <p className="text-base text-gray-800 mt-3 font-normal">
                Four specialized manufacturing streams engineered for distinct operational requirements, institutional prestige, and high-frequency laundering.
              </p>
            </FadeInDelay>
          </div>

          {/* Quick Stats Pill */}
          <FadeInDelay delay={0.4} direction="left">
            <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg text-xs text-gray-700">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Full In-House Spinning, Weaving & Quality Certifications</span>
            </div>
          </FadeInDelay>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 sm:gap-3 p-1.5 bg-gray-100/90 rounded-xl mb-10 max-w-full">
          {COLLECTIONS.map((col) => {
            const isActive = activeTab === col.id;
            return (
              <button
                key={col.id}
                onClick={() => setActiveTab(col.id)}
                className={`flex-1 min-w-[160px] py-3.5 px-4 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-lg transition-all text-center relative whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-slate-900 shadow-sm'
                    : 'text-gray-700 hover:text-slate-900 hover:bg-gray-200/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white rounded-lg"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{col.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Collection Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCollection.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gray-50/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-xs"
          >
            
            {/* Left: Image Card & Lookbook Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] group bg-slate-900">
                <img
                  src={activeCollection.image}
                  alt={activeCollection.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Tag on Image */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md border border-white/20">
                  {activeCollection.subtitle}
                </div>

                {/* Lookbook Button Overlay */}
                <button
                  onClick={() => onOpenLookbook(activeIndex)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-lg backdrop-blur-md shadow-md flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect High-Res Gallery</span>
                </button>
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                {activeCollection.galleryImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => onOpenLookbook(activeIndex)}
                    className="relative rounded-lg overflow-hidden aspect-[4/3] border border-gray-200 hover:border-gray-900 transition-all cursor-pointer group"
                  >
                    <img
                      src={imgUrl}
                      alt="Gallery Preview"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Specs & Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeCollection.tagline}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-semibold mb-4 leading-snug">
                  {activeCollection.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6 font-normal">
                  {activeCollection.description}
                </p>

                {/* Fabric Specifications Grid */}
                <div className="bg-white rounded-xl p-5 border border-gray-200/90 shadow-2xs mb-6">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-gray-700 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-700" />
                    <span>Technical Textile Specifications</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="border-b sm:border-b-0 sm:border-r border-gray-100 pb-2 sm:pb-0 sm:pr-2">
                      <span className="text-gray-700 block font-medium">Composition</span>
                      <span className="font-semibold text-slate-900">{activeCollection.fabricSpecs.composition}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 block font-medium">Weight & Density</span>
                      <span className="font-semibold text-slate-900">{activeCollection.fabricSpecs.weight}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-2 sm:border-r sm:pr-2">
                      <span className="text-gray-700 block font-medium">Weave Structure</span>
                      <span className="font-semibold text-slate-900">{activeCollection.fabricSpecs.weave}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-2">
                      <span className="text-gray-700 block font-medium">Durability Rating</span>
                      <span className="font-semibold text-slate-900">{activeCollection.fabricSpecs.durability}</span>
                    </div>
                  </div>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5 pt-3.5 border-t border-gray-100">
                    {activeCollection.fabricSpecs.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-md"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Manufacturing Highlights */}
                <div className="space-y-2 mb-6">
                  {activeCollection.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => onOpenQuoteModal(activeCollection.id)}
                  className="bg-[#090d16] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-xs transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Institutional Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-gray-700">
                  <span className="font-semibold text-slate-900">Batch Capacity:</span> {activeCollection.minOrderQty}+ units • <span className="font-semibold text-slate-900">Production Cycle:</span> {activeCollection.leadTime}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
