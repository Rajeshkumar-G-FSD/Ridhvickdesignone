import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Building2, Factory, CheckCircle, Send, Sparkles, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LOCATIONS } from '../data/mockData';
import { ConsultationFormState } from '../types';
import { AnimatedWords, FadeInDelay } from './AnimatedText';

export const LocationsAndContact: React.FC = () => {
  const [activeLocationTab, setActiveLocationTab] = useState<'tirupur' | 'chennai'>('tirupur');
  const [formState, setFormState] = useState<ConsultationFormState>({
    fullName: '',
    businessName: '',
    email: '',
    requirementType: 'Corporate Uniforms',
    estimatedQuantity: '250 - 500 pcs',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const generatedRef = `RDV-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(generatedRef);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
        // Safe fallback
      }
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      fullName: '',
      businessName: '',
      email: '',
      requirementType: 'Corporate Uniforms',
      estimatedQuantity: '250 - 500 pcs',
      message: ''
    });
  };

  return (
    <section id="locations" className="py-20 lg:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Our Locations (Matching Image 8) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal tracking-tight mb-8">
                <AnimatedWords text="Our Locations" delay={0.1} />
              </h2>

              {/* Interactive Stylized Regional Map Preview (Matching Image 8 map container) */}
              <FadeInDelay delay={0.2} direction="up">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white p-4 mb-8">
                  
                  {/* Stylized Vector Map of South India (Tamil Nadu Hub) */}
                  <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#e9edf2] overflow-hidden border border-gray-200/80 flex items-center justify-center">
                    
                    {/* SVG Map Canvas with Geographic Outline & Pins */}
                    <svg
                      viewBox="0 0 500 300"
                      className="w-full h-full object-contain"
                    >
                      {/* State / Coastline contours */}
                      <path
                        d="M 120,40 Q 240,60 380,50 Q 420,110 390,180 Q 360,250 280,280 Q 180,270 140,200 Q 100,120 120,40 Z"
                        fill="#dbe2ea"
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 170,80 Q 260,95 350,90 Q 370,140 330,220 Q 260,250 210,210 Q 160,150 170,80 Z"
                        fill="#c8d3e0"
                        stroke="#94a3b8"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                      />

                      {/* Chennai Node & Label (Top Right) */}
                      <g
                        className="cursor-pointer group"
                        onClick={() => setActiveLocationTab('chennai')}
                      >
                        <circle cx="370" cy="110" r="14" fill="#0f172a" fillOpacity="0.15" />
                        <circle cx="370" cy="110" r="7" fill={activeLocationTab === 'chennai' ? '#b45309' : '#0f172a'} />
                        <circle cx="370" cy="110" r="3" fill="#ffffff" />
                        <text x="382" y="114" fontSize="11" fontWeight="bold" fill="#0f172a" fontFamily="sans-serif">
                          Chennai (HQ & Suites)
                        </text>
                      </g>

                      {/* Tirupur Node & Label (West Hub) */}
                      <g
                        className="cursor-pointer group"
                        onClick={() => setActiveLocationTab('tirupur')}
                      >
                        <circle cx="230" cy="190" r="18" fill="#b45309" fillOpacity="0.2" className="animate-ping" />
                        <circle cx="230" cy="190" r="8" fill={activeLocationTab === 'tirupur' ? '#b45309' : '#0f172a'} />
                        <circle cx="230" cy="190" r="3.5" fill="#ffffff" />
                        <text x="145" y="210" fontSize="11" fontWeight="bold" fill="#0f172a" fontFamily="sans-serif">
                          Tirupur (Mfg Plant)
                        </text>
                      </g>

                      {/* Connection Route Line */}
                      <line
                        x1="230"
                        y1="190"
                        x2="370"
                        y2="110"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                      />
                    </svg>

                    {/* Quick Badge in map */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-gray-700 border border-gray-200 flex items-center gap-1.5">
                      <Navigation className="w-3 h-3 text-amber-600" />
                      <span>Tamil Nadu Textile Corridor</span>
                    </div>
                  </div>

                </div>
              </FadeInDelay>

              {/* Location Detail Cards (Matching Image 8 layout: Tirupur & Chennai) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                
                {/* Tirupur Card */}
                <FadeInDelay delay={0.3} direction="up">
                  <div
                    onClick={() => setActiveLocationTab('tirupur')}
                    className={`p-5 rounded-xl border transition-all cursor-pointer ${
                      activeLocationTab === 'tirupur'
                        ? 'bg-white border-slate-900 shadow-md'
                        : 'bg-white/60 border-gray-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Factory className="w-4 h-4 text-amber-700" />
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                        Tirupur
                      </h3>
                    </div>
                    <p className="text-[11px] font-bold tracking-widest text-amber-700 uppercase mb-2">
                      MANUFACTURING FACILITY
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed font-normal">
                      SIPCOT Industrial Complex, Tirupur, Tamil Nadu 641603
                    </p>
                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-1 text-[11px] text-gray-700 font-medium">
                      <span>• 120,000 sq.ft Automated Mill</span>
                    </div>
                  </div>
                </FadeInDelay>

                {/* Chennai Card */}
                <FadeInDelay delay={0.4} direction="up">
                  <div
                    onClick={() => setActiveLocationTab('chennai')}
                    className={`p-5 rounded-xl border transition-all cursor-pointer ${
                      activeLocationTab === 'chennai'
                        ? 'bg-white border-slate-900 shadow-md'
                        : 'bg-white/60 border-gray-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-amber-700" />
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                        Chennai
                      </h3>
                    </div>
                    <p className="text-[11px] font-bold tracking-widest text-amber-700 uppercase mb-2">
                      CORPORATE OFFICE
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed font-normal">
                      Level 4, Prestige Polygon, Mount Road, Chennai 600035
                    </p>
                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-1 text-[11px] text-gray-700 font-medium">
                      <span>• Design Lounge & Client Suites</span>
                    </div>
                  </div>
                </FadeInDelay>

              </div>
            </div>

            {/* Direct Contact Details (Matching Image 8 bottom left) */}
            <FadeInDelay delay={0.5} direction="up">
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-200">
                <a
                  href="tel:+919500111321"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-700" />
                  <span>+91 95001 11321</span>
                </a>

                <a
                  href="mailto:info@ridhvick.com"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-700" />
                  <span>info@ridhvick.com</span>
                </a>
              </div>
            </FadeInDelay>

          </div>

          {/* Right Column: Request a Consultation Form (Faithfully matching Image 8) */}
          <div className="lg:col-span-6">
            <FadeInDelay delay={0.25} direction="left">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-xl relative">
                
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-medium mb-6">
                  Request a Consultation
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                      Inquiry Received
                    </h4>
                    <p className="text-sm text-gray-700 max-w-sm mx-auto mb-4 font-normal">
                      Thank you, <span className="font-semibold text-slate-900">{formState.fullName}</span>. Our institutional uniform director will reach out within 2 business hours.
                    </p>
                    <div className="inline-block bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg font-mono text-xs text-gray-700 mb-6">
                      Reference ID: <span className="font-bold text-slate-900">{refId}</span>
                    </div>
                    <div>
                      <button
                        onClick={handleReset}
                        className="text-xs font-semibold uppercase tracking-wider text-slate-900 underline hover:text-amber-700"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Top Row: Full Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1.5">
                          FULL NAME <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.fullName}
                          onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-gray-50/50 hover:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1.5">
                          BUSINESS NAME
                        </label>
                        <input
                          type="text"
                          value={formState.businessName}
                          onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                          placeholder="Institution Ltd."
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-gray-50/50 hover:bg-white"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1.5">
                        EMAIL ADDRESS <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-gray-50/50 hover:bg-white"
                      />
                    </div>

                    {/* Requirement Type Dropdown */}
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1.5">
                        REQUIREMENT TYPE
                      </label>
                      <select
                        value={formState.requirementType}
                        onChange={(e) => setFormState({ ...formState, requirementType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-gray-50/50 hover:bg-white cursor-pointer"
                      >
                        <option value="Corporate Uniforms">Corporate Uniforms</option>
                        <option value="Institutional & School Uniforms">Institutional & School Uniforms</option>
                        <option value="Industrial & Safety Workwear">Industrial & Safety Workwear</option>
                        <option value="Sports & Athletic Apparel">Sports & Athletic Apparel</option>
                        <option value="Fabric Swatch Box Request">Fabric Swatch Box Request</option>
                      </select>
                    </div>

                    {/* Message / Details */}
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1.5">
                        MESSAGE / DETAILS
                      </label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Please provide details about volume and timeline..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-gray-50/50 hover:bg-white resize-none"
                      />
                    </div>

                    {/* Submit Button (Matching Image 8 dark block button) */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-consultation-btn"
                      className="w-full bg-[#0a0d14] hover:bg-[#1a2233] text-white text-xs font-bold tracking-[0.18em] uppercase py-4 rounded-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-99 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>PROCESSING INQUIRY...</span>
                        </>
                      ) : (
                        <span>SUBMIT INQUIRY</span>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </FadeInDelay>
          </div>

        </div>

      </div>
    </section>
  );
};
