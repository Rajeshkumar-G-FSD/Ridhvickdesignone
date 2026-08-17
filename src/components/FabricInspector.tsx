import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ZoomIn, Sparkles, ShieldCheck, Flame, Zap, Droplets, CheckCircle, Package } from 'lucide-react';
import { FABRIC_DETAILS } from '../data/mockData';
import { AnimatedWords, FadeInDelay } from './AnimatedText';

interface FabricInspectorProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const FabricInspector: React.FC<FabricInspectorProps> = ({ onOpenQuoteModal }) => {
  const [selectedFabricIndex, setSelectedFabricIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const activeFabric = FABRIC_DETAILS[selectedFabricIndex];

  // Fabric texture visuals
  const fabricImages = [
    // Image 2 representation: Luxury Navy Blazer Twill with White Oxford Weave
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85",
    // Corporate Suiting Wool Sharkskin
    "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=1200&q=85",
    // Industrial Hi-Vis Ripstop Drill
    "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=1200&q=85",
    // Athletic Honeycomb Mesh
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
  ];

  return (
    <section id="fabrics" className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeInDelay delay={0.1} direction="down">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-700 uppercase block mb-2">
              Micro-Engineered Textiles
            </span>
          </FadeInDelay>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight">
            <AnimatedWords text="Weave Precision & Fabric Laboratory" delay={0.2} />
          </h2>

          <FadeInDelay delay={0.3} direction="up">
            <p className="text-sm sm:text-base text-gray-800 mt-4 leading-relaxed font-normal">
              Inspect the high-density yarns, herringbone oxfords, and proprietary finishes that give Ridhvick uniforms their superior longevity and tactile luxury.
            </p>
          </FadeInDelay>
        </div>

        {/* Interactive Fabric Inspector Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left / Top: Interactive Texture Microscope & Zoom */}
          <div className="lg:col-span-7 bg-[#0b0f19] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Texture Viewport */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-inner group">
              <motion.img
                key={selectedFabricIndex}
                src={fabricImages[selectedFabricIndex]}
                alt={activeFabric.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover origin-center transition-transform duration-300"
              />

              {/* Magnifier Grid Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Zoom Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 text-white text-xs">
                <div className="flex items-center gap-2">
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-[11px]">{activeFabric.code}</span>
                  <span className="text-slate-400 hidden sm:inline">•</span>
                  <span className="text-slate-300 hidden sm:inline">{activeFabric.weight}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400">MAGNIFICATION:</span>
                  {[1, 1.25, 1.5].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setZoomLevel(lvl)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        zoomLevel === lvl
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      {lvl}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Texture Description Pill (Top Left) */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md border border-white/20">
                <span className="text-amber-400 font-semibold">{activeFabric.category} Grade</span> • {activeFabric.warpWeft}
              </div>
            </div>

            {/* Fabric Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {FABRIC_DETAILS.map((fab, i) => (
                <button
                  key={fab.name}
                  onClick={() => {
                    setSelectedFabricIndex(i);
                    setActiveColorIndex(0);
                  }}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    selectedFabricIndex === i
                      ? 'bg-slate-800 border-amber-400/80 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <p className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold">{fab.category}</p>
                  <p className="text-xs font-medium text-slate-200 truncate">{fab.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">{fab.weight}</p>
                </button>
              ))}
            </div>

          </div>

          {/* Right: Laboratory Technical Specs */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest text-gray-700 uppercase">
                  Technical Specsheet
                </span>
                <span className="text-[11px] font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                  ISO-13934 Verified
                </span>
              </div>

              <h3 className="font-serif text-2xl text-slate-900 font-semibold mb-2">
                {activeFabric.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-800 mb-6 font-normal">
                Engineered for continuous institutional laundering cycles, wrinkle recovery, and color fastness.
              </p>

              {/* Spec Rows */}
              <div className="space-y-3 border-y border-gray-100 py-4 mb-6 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Composition</span>
                  <span className="font-semibold text-slate-900 text-right max-w-[60%]">{activeFabric.composition}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Yarn Count (Warp × Weft)</span>
                  <span className="font-mono font-semibold text-slate-900">{activeFabric.warpWeft}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Areal Weight</span>
                  <span className="font-semibold text-slate-900">{activeFabric.weight}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Functional Coating</span>
                  <span className="font-semibold text-emerald-800">{activeFabric.finish}</span>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider block mb-2">
                  Institutional Vat-Dyed Colorways
                </span>
                <div className="flex items-center gap-2.5">
                  {activeFabric.colorway.map((hex, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveColorIndex(idx)}
                      style={{ backgroundColor: hex }}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        activeColorIndex === idx ? 'scale-110 border-slate-900 shadow-sm' : 'border-gray-300 hover:scale-105'
                      }`}
                      title={hex}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Box */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:flex-1 bg-[#090d16] hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase py-3 px-4 rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Package className="w-4 h-4" />
                <span>Request Institutional Fabric Swatches</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
