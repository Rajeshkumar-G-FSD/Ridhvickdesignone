export interface CollectionItem {
  id: string;
  category: 'institutional' | 'corporate' | 'industrial' | 'athletic';
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  galleryImages: string[];
  fabricSpecs: {
    composition: string;
    weight: string; // e.g. "240 GSM"
    weave: string; // e.g. "Herringbone Oxford"
    durability: string; // e.g. "50,000 Martindale Cycles"
    features: string[];
  };
  keyFeatures: string[];
  recommendedSectors: string[];
  minOrderQty: number;
  leadTime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initial: string;
  rating: number;
  verified: boolean;
  sector: string;
}

export interface LocationDetail {
  id: string;
  city: string;
  type: string;
  address: string;
  details: string[];
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  highlights: string[];
}

export interface ConsultationFormState {
  fullName: string;
  businessName: string;
  email: string;
  requirementType: string;
  estimatedQuantity: string;
  message: string;
}

export interface QuoteCalculationState {
  category: string;
  garmentType: string;
  fabricQuality: 'standard' | 'premium' | 'bespoke_luxury';
  quantity: number;
  customBranding: boolean;
  embroideryPositions: number;
  expressDelivery: boolean;
}
