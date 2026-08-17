import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { AnimatedWords, FadeInDelay } from './AnimatedText';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Faithfully matching Image 8) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight">
              <AnimatedWords text="Client Testimonials" delay={0.1} />
            </h2>
            <FadeInDelay delay={0.25} direction="up">
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-700 uppercase mt-2">
                QUALITY &bull; RELIABILITY &bull; CONSISTENCY
              </p>
            </FadeInDelay>
          </div>

          {/* Google Verified Badge (Matching Image 8 top right) */}
          <FadeInDelay delay={0.3} direction="left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold text-gray-800">Google Verified</span>
            </div>
          </FadeInDelay>
        </div>

        {/* 3 Review Cards Grid (Faithfully matching Image 8) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.slice(0, 3).map((item, index) => (
            <FadeInDelay key={item.id} delay={0.15 * index} direction="up">
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full group">
                
                <div>
                  {/* 5 Stars Rating (Gold outlined/filled stars) */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed mb-6 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info & Initial Avatar */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-sm text-slate-800 font-serif border border-gray-200 shrink-0">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-xs text-gray-700 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </FadeInDelay>
          ))}
        </div>

        {/* Enterprise Client Logos Banner */}
        <FadeInDelay delay={0.5} direction="up" className="mt-14 pt-10 border-t border-gray-200/80 text-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-700 uppercase block mb-6">
            Trusted by Leading Educational Networks & Industrial Conglomerates
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-serif text-lg font-bold text-slate-700 tracking-wider">APEX ACADEMIES</span>
            <span className="font-sans text-sm font-black tracking-widest text-slate-700">VANGUARD CORP</span>
            <span className="font-serif text-lg font-bold italic text-slate-700">OAKRIDGE GLOBAL</span>
            <span className="font-sans text-sm font-bold tracking-widest text-slate-700 uppercase">TITAN INDUSTRIAL</span>
            <span className="font-serif text-lg font-semibold text-slate-700">CRESTVIEW SPORTS</span>
          </div>
        </FadeInDelay>

      </div>
    </section>
  );
};
