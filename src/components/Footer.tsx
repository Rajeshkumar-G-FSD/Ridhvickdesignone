import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] text-gray-400 pt-16 pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid (Faithfully matching Image 8) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-gray-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a href="#" className="inline-block mb-4">
              <span className="font-serif tracking-[0.25em] text-2xl font-bold text-white uppercase block">
                RIDHVICK
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gray-500 uppercase font-medium mt-0.5 block">
                Uniforms & Precision Textiles
              </span>
            </a>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-normal">
              Elevating institutional presence through precision manufacturing and bespoke textile solutions.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-xs transition-colors cursor-pointer"
              >
                Institutional Inquiry
              </button>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xs bg-gray-900 hover:bg-gray-800 text-gray-300 transition-colors"
                title="Scroll to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Heritage
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Institutional Sales
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-white transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Links */}
          <div className="md:col-span-3 sm:col-span-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">
              LOCATIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Tirupur Facility
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Chennai Office
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Line (Matching Image 8 bottom) */}
        <div className="pt-8 text-center">
          <p className="text-xs tracking-[0.15em] text-gray-500 uppercase font-medium">
            &copy; 2024 RIDHVICK UNIFORMS. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};
