import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CollectionsShowcase } from './components/CollectionsShowcase';
import { FabricInspector } from './components/FabricInspector';
import { ManufacturingPillars } from './components/ManufacturingPillars';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationsAndContact } from './components/LocationsAndContact';
import { Footer } from './components/Footer';
import { LookbookModal } from './components/LookbookModal';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteCategory, setSelectedQuoteCategory] = useState('institutional');
  const [lookbookModalOpen, setLookbookModalOpen] = useState(false);
  const [lookbookInitialIndex, setLookbookInitialIndex] = useState(0);

  const handleOpenQuoteModal = (category: string = 'institutional') => {
    setSelectedQuoteCategory(category);
    setQuoteModalOpen(true);
  };

  const handleOpenLookbook = (index: number = 0) => {
    setLookbookInitialIndex(index);
    setLookbookModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111827] flex flex-col selection:bg-slate-900 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenLookbook={handleOpenLookbook}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* 1. Hero / Connect with Excellence (Matches Image 8 & Image 1) */}
        <HeroSection
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenLookbook={handleOpenLookbook}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Collections Portfolio (Matches Image 1, 3, 4, 5) */}
        <CollectionsShowcase
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenLookbook={handleOpenLookbook}
        />

        {/* 3. Weave Precision & Fabric Laboratory (Matches Image 2) */}
        <FabricInspector
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 4. Manufacturing Infrastructure & Capacity */}
        <ManufacturingPillars />

        {/* 5. Client Testimonials (Matches Image 8) */}
        <TestimonialsSection />

        {/* 6. Our Locations & Request a Consultation (Matches Image 8) */}
        <LocationsAndContact />
      </main>

      {/* 7. Footer (Matches Image 8) */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive High-Res Lookbook Modal */}
      <LookbookModal
        isOpen={lookbookModalOpen}
        onClose={() => setLookbookModalOpen(false)}
        initialIndex={lookbookInitialIndex}
        onSelectCategoryForQuote={(category) => {
          handleOpenQuoteModal(category);
        }}
      />

      {/* Interactive Quote & Swatch Estimator Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialCategory={selectedQuoteCategory}
      />
    </div>
  );
}
