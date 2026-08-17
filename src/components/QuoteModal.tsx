import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, Check, Send, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'institutional',
}) => {
  const [category, setCategory] = useState<string>(initialCategory);
  const [volumeBracket, setVolumeBracket] = useState<string>('500 - 1,500 units');
  const [fabricPreference, setFabricPreference] = useState<string>('High-Density Premium Twill & Oxford');
  const [customizationNeeds, setCustomizationNeeds] = useState<string[]>(['Institutional Crest Embroidery', 'Custom Woven Necktags']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const toggleCustomization = (item: string) => {
    if (customizationNeeds.includes(item)) {
      setCustomizationNeeds(customizationNeeds.filter(c => c !== item));
    } else {
      setCustomizationNeeds([...customizationNeeds, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const generatedRef = `RDV-INST-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Safe fallback
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-auto border border-gray-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F9FAFB]">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-slate-800" />
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 leading-tight">
                  Institutional Program Inquiry
                </h3>
                <p className="text-[11px] text-gray-700 font-medium">
                  Direct manufacturing consultation & bespoke sample dossier
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                Consultation Request Received
              </h4>
              <p className="text-sm text-gray-700 max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our institutional uniform director from the Tirupur/Chennai facility will connect with <span className="font-semibold text-slate-900">{email}</span> within 2 business hours.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl max-w-sm mx-auto mb-6 text-left text-xs space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-700">Reference:</span>
                  <span className="font-bold text-slate-900">{refId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Program:</span>
                  <span className="font-semibold text-slate-900 capitalize">{category} Uniforms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Volume Bracket:</span>
                  <span className="font-semibold text-slate-900">{volumeBracket}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-[#0b0f19] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-8 py-3 rounded-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              
              {/* Category Selector */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                  1. Uniform Program Requirement
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'institutional', label: 'Academy & Schools' },
                    { id: 'corporate', label: 'Corporate Suiting' },
                    { id: 'industrial', label: 'Industrial Safety' },
                    { id: 'athletic', label: 'Athletic & Track' }
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium text-center transition-all ${
                        category === cat.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-white'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Volume Bracket Selector */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                  2. Approximate Program Scale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    '100 - 250 units',
                    '250 - 500 units',
                    '500 - 1,500 units',
                    '1,500+ institutional units'
                  ].map((bracket) => (
                    <button
                      type="button"
                      key={bracket}
                      onClick={() => setVolumeBracket(bracket)}
                      className={`py-2 px-2.5 rounded-lg border text-xs text-center font-medium transition-all ${
                        volumeBracket === bracket
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-white'
                      }`}
                    >
                      {bracket}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customization Options */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                  3. Specification & Customization Needs
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Institutional Crest Embroidery',
                    'Custom Woven Necktags',
                    'Water & Stain Repellent Finish',
                    'Pre-Production Master Sample'
                  ].map((item) => (
                    <div
                      key={item}
                      onClick={() => toggleCustomization(item)}
                      className={`p-2.5 rounded-lg border text-xs flex items-center gap-2 cursor-pointer transition-all ${
                        customizationNeeds.includes(item)
                          ? 'border-slate-900 bg-slate-50 text-slate-900 font-semibold'
                          : 'border-gray-200 bg-white text-gray-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                        customizationNeeds.includes(item) ? 'bg-slate-900 border-slate-900 text-white' : 'border-gray-300'
                      }`}>
                        {customizationNeeds.includes(item) && <Check className="w-3 h-3" />}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institution Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-xs focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1">
                    Institution / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="School / Corporate Name"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-xs focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="official@institution.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-xs focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-gray-700 uppercase mb-1">
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-xs focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#0b0f19] hover:bg-slate-800 text-white text-xs font-bold tracking-widest uppercase py-3.5 rounded-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                <Send className="w-4 h-4" />
                <span>Submit Institutional Request</span>
              </button>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
