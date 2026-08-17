import React from 'react';
import { motion } from 'motion/react';
import { Factory, Cpu, ShieldCheck, Recycle, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { MANUFACTURING_METRICS } from '../data/mockData';
import { AnimatedWords, FadeInDelay } from './AnimatedText';

export const ManufacturingPillars: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Yarn Sourcing & Spinning",
      desc: "Procuring long-staple combed cotton and high-tenacity synthetic filaments to ensure tensile strength."
    },
    {
      num: "02",
      title: "Computerized Weaving & Knitting",
      desc: "High-speed air-jet looms produce consistent twill, oxford, and ripstop weaves with zero structural defects."
    },
    {
      num: "03",
      title: "Eco-Vat Dyeing & Finishes",
      desc: "Zero Liquid Discharge (ZLD) dyeing facility delivering 100+ wash colorfastness and fluorocarbon finishes."
    },
    {
      num: "04",
      title: "Automated Precision Cutting",
      desc: "Gerber and Lectra CNC cutters minimize fabric waste and ensure 100% geometric dimensional accuracy."
    },
    {
      num: "05",
      title: "Ergonomic Sewing & Tailoring",
      desc: "Specialized production lines for structured suiting, heavy-duty industrial overalls, and athletic gear."
    },
    {
      num: "06",
      title: "7-Point Quality Assurance",
      desc: "Every single batch is audited for seam strength, dimensional stability, color delta-E, and trim durability."
    }
  ];

  return (
    <section id="manufacturing" className="py-20 lg:py-28 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <FadeInDelay delay={0.1} direction="down">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-700 uppercase block mb-2">
              Industrial Infrastructure
            </span>
          </FadeInDelay>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight">
            <AnimatedWords text="Tirupur Precision Manufacturing Hub" delay={0.2} />
          </h2>

          <FadeInDelay delay={0.35} direction="up">
            <p className="text-base text-gray-800 mt-4 leading-relaxed font-normal">
              Spanning 120,000 square feet in the textile capital of India, our integrated manufacturing plant bridges traditional textile craftsmanship with advanced industrial automation.
            </p>
          </FadeInDelay>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {MANUFACTURING_METRICS.map((metric, i) => (
            <FadeInDelay key={metric.label} delay={0.15 * i} direction="up">
              <div className="bg-gray-50/90 rounded-xl p-5 sm:p-6 border border-gray-200/80 hover:border-slate-900 transition-colors">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 block">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-gray-800 uppercase tracking-wider block mt-1">
                  {metric.label}
                </span>
                <span className="text-[11px] text-gray-700 block mt-0.5 font-medium">
                  {metric.unit}
                </span>
              </div>
            </FadeInDelay>
          ))}
        </div>

        {/* 6 Stage Production Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <FadeInDelay key={st.num} delay={0.1 * idx} direction="up">
              <div className="h-full bg-white rounded-xl p-6 border border-gray-200/80 hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                      PHASE {st.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-slate-900 transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standardized ISO Protocol</span>
                </div>
              </div>
            </FadeInDelay>
          ))}
        </div>

      </div>
    </section>
  );
};
