import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (category?: string) => void;
  onOpenLookbook: (index?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenLookbook }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Quality & Fabrics', href: '#fabrics' },
    { label: 'Heritage', href: '#testimonials' },
    { label: 'Locations', href: '#locations' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-xs py-3.5'
            : 'bg-white/80 backdrop-blur-xs border-b border-gray-100 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-sm bg-[#0a0d14] flex items-center justify-center text-white font-serif font-bold text-lg tracking-wider group-hover:bg-amber-950 transition-colors">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-xl font-bold text-[#0a0d14] leading-none uppercase">
                RIDHVICK
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gray-700 uppercase font-medium mt-1">
                Uniforms & Textiles
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenLookbook(0)}
              className="text-xs font-semibold uppercase tracking-wider text-gray-700 hover:text-black transition-colors px-3 py-2"
            >
              Lookbook
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              id="header-get-quote-btn"
              className="bg-[#090b10] hover:bg-[#1a1f2c] text-white text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-xs transition-all duration-200 shadow-sm hover:shadow flex items-center gap-1.5 group cursor-pointer active:scale-95"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#090b10] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white border-b border-gray-200 shadow-xl md:hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-800 hover:text-black py-1 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLookbook();
                  }}
                  className="w-full text-center py-2.5 border border-gray-300 text-xs font-semibold tracking-wider uppercase text-gray-800"
                >
                  Browse Lookbook Gallery
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-[#090b10] text-white text-xs font-semibold tracking-widest uppercase py-3 rounded-xs text-center"
                >
                  REQUEST CUSTOM QUOTE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
