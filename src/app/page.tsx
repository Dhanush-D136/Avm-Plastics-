'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion as motionClient, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  User, 
  Menu, 
  X, 
  Lock,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Package,
  Award,
  ChevronDown,
  Layers,
  ArrowUpRight,
  ChevronLeft,
  Maximize2,
  Play,
  Pause,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { translations, t, type Language } from './translations';

// Static Data
const CATEGORIES = [
  {
    id: "household",
    title: "Household Products",
    image: "/images/mm.jpeg",
    desc: "Premium plastic organizers, kitchenware, dining accessories, and daily utilities.",
    details: "Our household collection features food-grade containers, elegant organizers, dishware, and functional home storage solutions designed to last for years. We source from the country's leading manufacturers to guarantee durability and safety.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your Household Products range."
  },
  {
    id: "brooms",
    title: "Brooms & Mops",
    image: "/images/hh.jpeg",
    desc: "High-density clean utilities, soft & hard brooms, premium cotton mops, and dusters.",
    details: "Designed for commercial, household, and industrial cleaning. Our brooms and mops are built with premium materials to ensure high durability, efficient dust trapping, and comfortable ergonomics.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your Brooms & Mops cleaning items."
  },
  {
    id: "buckets",
    title: "Buckets & Storage",
    image: "/images/ee.jpeg",
    desc: "Heavy-duty plastic buckets, basins, mugs, dustbins, and commercial storage drums.",
    details: "From standard 10L household buckets to 200L commercial water drums, our storage range handles high loads and weather extremes. Perfect for homes, construction sites, and warehouses.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your Buckets & Storage containers."
  },
  {
    id: "borewell",
    title: "Borewell Ropes",
    image: "/images/overal.jpeg",
    desc: "Ultra-tensile strength borewell safety ropes, nylon hoisting cords, and braided cables.",
    details: "Specially treated ropes designed to support heavy submersible pumps in deep borewells. Resists moisture, chemical corrosion, and high friction, ensuring decades of safe deployment.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your high-tensile Borewell Ropes."
  },
  {
    id: "nandi",
    title: "Nandi Brand Ropes",
    image: "/images/jj.jpeg",
    desc: "Flagship premium ropes, weather-resistant polymer ropes, and heavy hauling cables.",
    details: "Authorized dealer of Nandi ropes - the industry standard for durability, tight weave, and tear resistance. Trusted by logistic companies and heavy contractors across South India.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your flagship Nandi Brand Ropes."
  },
  {
    id: "agriculture",
    title: "Agriculture Utility Ropes",
    image: "/images/kk.jpeg",
    desc: "High-grade HDPE ropes, crop binding threads, and tractor pulling cables.",
    details: "Affordable, lightweight, and incredibly strong ropes tailored specifically for agricultural applications like climbing support, crop bunching, and livestock management.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your Agricultural Utility Ropes."
  },
  {
    id: "jallikattu",
    title: "Jallikattu Specialty Ropes",
    image: "/images/aruaru.jpeg",
    desc: "Handcrafted traditional cotton, hemp, and jute ceremonial ropes.",
    details: "Preserving Tamil heritage with specially made, soft-weave colorful ropes designed for traditional cattle festivals. Combines cultural authenticity with maximum animal safety.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your traditional Jallikattu Specialty Ropes."
  },
  {
    id: "industrial",
    title: "Industrial Utility Products",
    image: "/images/nn.jpeg",
    desc: "Packing nets, industrial tarpaulins, safety belts, and bulk packaging materials.",
    details: "Equipping manufacturing and logistics businesses with reliable packing cords, heavy cargo nets, waterproof tarpaulins, and safety straps built for heavy-duty commercial transit.",
    waMessage: "Hi AVM Plastics, I am interested in inquiring about your Industrial Utility Products."
  }
];

const TESTIMONIALS = [
  {
    name: "K. Selvam",
    role: "Agriculturalist, Krishnagiri",
    quote: "We have been buying borewell and agricultural ropes from AVM Plastics for over 20 years. The Nandi brand ropes they supply are extremely durable and survive years of harsh weather. Their advice is highly valuable.",
    rating: 5
  },
  {
    name: "R. Prakash",
    role: "Retail Dealer, Salem",
    quote: "As a retail dealer of plastic goods, finding a wholesaler who is both honest and has immediate stock is tough. Mr. Dhamodharan manages operations so smoothly, and their automatic WhatsApp billing makes bookkeeping easy.",
    rating: 5
  },
  {
    name: "Meenakshi Sundaram",
    role: "Homemaker, Krishnagiri",
    quote: "AVM Plastics is a household name here. Whether it's buckets, organizers, or cleaning mops, we know we will get premium quality that doesn't break in two months. Friendly owners and fair prices.",
    rating: 5
  }
];

const TRUST_REASONS = [
  {
    title: "38+ Years Legacy",
    desc: "Established in 1986, AVM Plastics has stood the test of time, serving multiple generations with honor, discipline, and customer-first values.",
    size: "md"
  },
  {
    title: "Trusted Wholesale Dealer",
    desc: "We support retail stores, distributors, and bulk buyers across Tamil Nadu with fast supply lines, wholesale price brackets, and robust inventory.",
    size: "sm"
  },
  {
    title: "Premium Quality Products",
    desc: "Every item in our catalogue is handpicked and quality-verified. We deal only with brands that promise durability and top-tier materials.",
    size: "sm"
  },
  {
    title: "Agricultural Product Expertise",
    desc: "We understand farming requirements intimately. Our custom agricultural ropes and tools are designed to assist farmers under harsh field conditions.",
    size: "md"
  },
  {
    title: "Competitive Honest Pricing",
    desc: "We believe in transparent billing and honest trade. Enjoy wholesale advantages and fair pricing on both single and bulk purchases.",
    size: "sm"
  },
  {
    title: "Unmatched Customer Satisfaction",
    desc: "Over 10,000 families, retailers, and farmers return to us annually because of our friendly service, direct phone support, and lifetime trust.",
    size: "lg"
  }
];

const GALLERY_IMAGES = [
  { src: "/images/aa.jpg", category: "store", featured: true, alt: "AVM Plastics Storefront Photo" },
  { src: "/images/bb.jpg", category: "product", featured: true, alt: "Agricultural utility pipes and drums" },
  { src: "/images/cc.jpg", category: "warehouse", featured: true, alt: "AVM Plastics wholesale inventory storage" },
  { src: "/images/dd.jpg", category: "store", featured: true, alt: "Showroom interior and display aisles" },
  { src: "/images/ee.jpeg", category: "product", featured: true, alt: "Premium rope coil bundles" },
  { src: "/images/ff.jpeg", category: "store", featured: true, alt: "Showroom storage rack display" },
  { src: "/images/gg.jpeg", category: "product", featured: true, alt: "High density polymer ropes" },
  { src: "/images/hh.jpeg", category: "warehouse", featured: true, alt: "AVM wholesale bulk inventory space" },
  { src: "/images/ii.jpeg", category: "product", featured: false, alt: "Colorful domestic plastics display" },
  { src: "/images/jj.jpeg", category: "product", featured: false, alt: "Heavy duty plastic drums and containers" },
  { src: "/images/kk.jpeg", category: "product", featured: false, alt: "Cargo utility and packing nets" },
  { src: "/images/kodam.jpeg", category: "product", featured: true, alt: "Traditional colorful plastic kodams" },
  { src: "/images/mm.jpeg", category: "product", featured: false, alt: "AVM high-tensile agricultural ropes" },
  { src: "/images/nn.jpeg", category: "product", featured: false, alt: "Heavy duty storage basins" },
  { src: "/images/oo.jpeg", category: "product", featured: false, alt: "Crop binding and polymer hauling threads" },
  { src: "/images/pp.jpeg", category: "product", featured: false, alt: "Premium domestic brooms and mops" },
  { src: "/images/qq.jpeg", category: "product", featured: false, alt: "Heavy load nylon cargo ropes" },
  { src: "/images/rr.jpeg", category: "warehouse", featured: false, alt: "Logistics loading zone and warehouse stocks" },
  { src: "/images/ss.jpeg", category: "product", featured: false, alt: "Heavy weather tarpaulins and crop covers" },
  { src: "/images/tt.jpeg", category: "store", featured: true, alt: "Showroom product counters and display racks" },
  { src: "/images/overal.jpeg", category: "store", featured: true, alt: "Overall view of AVM Plastics showroom" },
  { src: "/images/mat.jpeg", category: "product", featured: false, alt: "Premium floor mats and utilities" },
  { src: "/images/chair.jpeg", category: "product", featured: false, alt: "Premium molded plastic chairs" }
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[0] | null>(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Language State
  const [lang, setLang] = useState<Language>('en');
  const [langTransitioning, setLangTransitioning] = useState(false);

  // Gallery Category Filter State
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<'all' | 'store' | 'product' | 'warehouse'>('all');

  const filteredGalleryImages = GALLERY_IMAGES.filter(img => 
    selectedGalleryCategory === 'all' ? true : img.category === selectedGalleryCategory
  );

  // Dynamic gallery filter for hero slides
  const heroImages = GALLERY_IMAGES.filter(img => img.featured).map(img => img.src);
  const slidesToUse = heroImages.length > 0 ? heroImages : GALLERY_IMAGES.map(img => img.src);

  // Load saved language from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('avm-lang');
    if (saved === 'ta' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  // Update html lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Language switch handler with smooth transition
  const switchLanguage = useCallback((newLang: Language) => {
    if (newLang === lang) return;
    setLangTransitioning(true);
    setTimeout(() => {
      setLang(newLang);
      localStorage.setItem('avm-lang', newLang);
      setTimeout(() => {
        setLangTransitioning(false);
      }, 50);
    }, 200);
  }, [lang]);

  // Automatic transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesToUse.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slidesToUse.length]);

  // Monitor scroll for navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for the 85px navbar
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Navigation items with translations
  const navItems = [
    { id: 'home', label: translations.nav.home },
    { id: 'about', label: translations.nav.about },
    { id: 'products', label: translations.nav.products },
    { id: 'leadership', label: translations.nav.leadership },
    { id: 'gallery', label: translations.nav.gallery },
    { id: 'contact', label: translations.nav.contact }
  ];

  return (
    <div 
      className={`min-h-screen bg-[#F8F9FB] text-[#1E293B] font-sans antialiased overflow-x-hidden transition-opacity duration-200 ${langTransitioning ? 'opacity-0' : 'opacity-100'} ${lang === 'ta' ? 'lang-ta' : ''}`}
    >
      
      {/* HEADER SECTION (Sticky Navbar, Height: 85px) */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 h-[85px] flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-[#F8F9FB]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(10,77,140,0.08)] border-b border-[#0A4D8C]/15' 
            : 'bg-[#F8F9FB] border-b border-[#0A4D8C]/5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo & Legacy (Left Side) */}
          <div className="flex flex-col cursor-pointer group shrink-0" onClick={() => scrollToSection('home')}>
            <span className={`text-xl sm:text-2xl font-extrabold tracking-tight text-[#0A4D8C] font-heading flex items-center gap-1.5 transition-colors duration-300 ${lang === 'ta' ? 'font-tamil' : ''}`}>
              {t(translations.companyName, lang)}
            </span>
            <span className={`text-[11px] text-[#D4AF37] font-bold tracking-widest uppercase transition-all duration-300 group-hover:tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal group-hover:tracking-normal' : ''}`}>
              {t(translations.tagline, lang)}
            </span>
          </div>

          {/* Navigation Links (Center) */}
          <nav className="hidden md:flex items-center flex-nowrap gap-2.5 lg:gap-5 xl:gap-7 text-[12px] lg:text-[14px] xl:text-[15px] font-bold text-[#1E293B] shrink-0">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`hover:text-[#0A4D8C] relative py-1 transition-colors duration-300 cursor-pointer group whitespace-nowrap shrink-0 ${lang === 'ta' ? 'font-tamil' : ''}`}
                style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {t(item.label, lang)}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Language Switcher + Call Now Button & Owner Icon (Right Side) */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#0A4D8C]/5 border border-[#0A4D8C]/10 rounded-full p-[1px] lg:p-[3px] relative shrink-0">
              <button
                onClick={() => switchLanguage('en')}
                className={`relative z-10 px-2 lg:px-3.5 py-1 lg:py-1.5 rounded-full text-[11px] lg:text-[12px] font-bold transition-all duration-300 cursor-pointer flex items-center gap-1 lg:gap-1.5 whitespace-nowrap shrink-0 ${
                  lang === 'en'
                    ? 'bg-[#0A4D8C] text-white shadow-md'
                    : 'text-[#1E293B] hover:text-[#0A4D8C]'
                }`}
                style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                <span className="text-[14px]">🇬🇧</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => switchLanguage('ta')}
                className={`relative z-10 px-2 lg:px-3.5 py-1 lg:py-1.5 rounded-full text-[11px] lg:text-[12px] font-bold transition-all duration-300 cursor-pointer flex items-center gap-1 lg:gap-1.5 whitespace-nowrap shrink-0 ${
                  lang === 'ta'
                    ? 'bg-[#0A4D8C] text-white shadow-md'
                    : 'text-[#1E293B] hover:text-[#0A4D8C]'
                }`}
                style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                <span className="text-[14px]">🇮🇳</span>
                <span className="font-tamil">தமிழ்</span>
              </button>
            </div>

            <a 
              href="tel:+916379455162"
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-full bg-[#0A4D8C] text-[#F8F9FB] hover:bg-[#0A4D8C]/90 hover:scale-[1.03] active:scale-[0.98] font-bold text-[12px] lg:text-[14px] transition-all duration-300 shadow-[0_4px_14px_rgba(10,77,140,0.15)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.25)] border border-[#D4AF37]/35 cursor-pointer whitespace-nowrap shrink-0"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              <Phone size={14} className="text-[#D4AF37] animate-pulse" />
              <span>+91 63794 55162</span>
            </a>
            <Link 
              href="/owner-login" 
              className="p-2.5 rounded-full bg-[#0A4D8C]/5 hover:bg-[#0A4D8C]/10 text-[#0A4D8C] border border-[#0A4D8C]/10 hover:border-[#D4AF37]/30 transition-all duration-300 shrink-0"
              title={t(translations.footer.ownerPortal, lang)}
            >
              <Lock size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-[#0A4D8C]/5 border border-[#0A4D8C]/10 rounded-full p-[2px]">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#0A4D8C] text-white shadow-sm'
                    : 'text-[#1E293B]'
                }`}
              >
                🇬🇧
              </button>
              <button
                onClick={() => switchLanguage('ta')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300 cursor-pointer ${
                  lang === 'ta'
                    ? 'bg-[#0A4D8C] text-white shadow-sm'
                    : 'text-[#1E293B]'
                }`}
              >
                🇮🇳
              </button>
            </div>
            <a 
              href="tel:+916379455162" 
              className="p-2.5 rounded-full bg-[#0A4D8C] text-white border border-[#D4AF37]/25"
            >
              <Phone size={16} />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#0A4D8C] hover:bg-[#0A4D8C]/5 border border-[#0A4D8C]/10 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motionClient.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden absolute top-[85px] inset-x-0 bg-[#F8F9FB] border-b border-[#0A4D8C]/15 shadow-lg overflow-hidden px-6 py-6 space-y-4"
            >
              <div className={`flex flex-col gap-4 text-[15px] font-bold text-[#1E293B] ${lang === 'ta' ? 'font-tamil' : ''}`}>
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="text-left py-1.5 hover:text-[#0A4D8C] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {t(item.label, lang)}
                  </button>
                ))}
              </div>
              <div className="h-[1px] bg-[#0A4D8C]/10 my-3" />
              <div className="flex flex-col gap-3">
                <a 
                  href="tel:+916379455162" 
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0A4D8C] text-[#F8F9FB] font-bold text-sm shadow-md ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <Phone size={14} className="text-[#D4AF37]" />
                  {t(translations.mobile.callNow, lang)}
                </a>
                <Link 
                  href="/owner-login" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0A4D8C]/5 border border-[#0A4D8C]/10 text-xs font-bold text-[#0A4D8C] ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <Lock size={12} />
                  {t(translations.mobile.ownerPortal, lang)}
                </Link>
              </div>
            </motionClient.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION (Full Screen Height, Showroom Background, Subtle Gradient Overlay) */}
      <section 
        id="home" 
        className="relative min-h-[95vh] md:min-h-screen pt-[85px] flex items-center overflow-hidden bg-[#1E293B]"
      >
        {/* Progress Bar at the top of Hero section */}
        <div className="absolute top-[85px] left-0 right-0 h-1 bg-white/25 z-[5] pointer-events-none">
          <motionClient.div
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-[#D4AF37]"
          />
        </div>

        {/* Background Showroom Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false}>
            <motionClient.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 5, ease: "linear" }
              }}
              className="absolute inset-0"
            >
              <Image
                src={slidesToUse[currentSlide]}
                alt="AVM Plastics Hero Background Showcase"
                fill
                priority={currentSlide === 0}
                className="object-cover object-center brightness-[1.05] contrast-[1.05]"
                sizes="100vw"
                quality={90}
              />
            </motionClient.div>
          </AnimatePresence>
        </div>

        {/* Subtle Dark Gradient Overlay (20-25% opacity) */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none" 
          style={{ 
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.20) 100%)' 
          }}
        />

        {/* Elegant subtle gold floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {[...Array(6)].map((_, i) => (
            <motionClient.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/35"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + (i * 25) % 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT SIDE (Aligned Left, floating directly over background for maximum image visibility) */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6 md:pr-4">
              
              {/* Small Badge */}
              <motionClient.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-black tracking-widest uppercase backdrop-blur-md ${lang === 'ta' ? 'font-tamil tracking-wider' : ''}`}
              >
                <Sparkles size={12} className="animate-spin-slow" />
                {t(translations.hero.badge, lang)}
              </motionClient.div>

              {/* Main Heading */}
              <motionClient.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#F8F9FB] font-heading leading-[1.1] drop-shadow-md ${lang === 'ta' ? 'font-tamil text-3xl sm:text-4xl lg:text-[46px] leading-[1.25]' : ''}`}
              >
                {t(translations.hero.headingStart, lang)}<span className="text-[#D4AF37]">{t(translations.hero.headingHighlight, lang)}</span>{t(translations.hero.headingSuffix, lang)}
              </motionClient.h1>

              {/* Subheading */}
              <motionClient.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`text-base sm:text-lg text-slate-100/90 leading-relaxed font-medium max-w-2xl drop-shadow ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}
              >
                {t(translations.hero.subheading, lang)}
              </motionClient.p>

              {/* Action Buttons */}
              <motionClient.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button 
                  onClick={() => scrollToSection('products')}
                  className={`h-12 px-6 rounded-full bg-[#0A4D8C] hover:bg-[#0A4D8C]/90 text-white font-bold text-sm shadow-[0_4px_14px_rgba(10,77,140,0.3)] hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-1.5 border border-[#D4AF37]/35 cursor-pointer ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <span>{t(translations.hero.exploreProducts, lang)}</span>
                  <ChevronRight size={16} />
                </button>
                <a 
                  href="tel:+916379455162"
                  className={`h-12 px-6 rounded-full bg-white hover:bg-slate-100 text-[#0A4D8C] font-bold text-sm shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-1.5 border border-slate-200 ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <Phone size={14} className="text-[#D4AF37]" />
                  <span>{t(translations.hero.callNow, lang)}</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=AVM+Plastics+Salem+Main+Road+Krishnagiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-12 px-6 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F9FB] border border-white/20 hover:border-[#D4AF37]/50 font-bold text-sm backdrop-blur-sm hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-1.5 ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <MapPin size={14} className="text-[#D4AF37]" />
                  <span>{t(translations.hero.getDirections, lang)}</span>
                </a>
              </motionClient.div>
            </div>

            {/* RIGHT SIDE (Transparent Matte Finish Glassmorphic Credentials Panel) */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
              <motionClient.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-[420px]"
              >
                <div className="bg-[#0A4D8C]/50 backdrop-blur-lg border-2 border-white/20 rounded-[32px] p-8 shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500">
                  {/* Glowing decoration inside the card */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />

                  <h3 className={`text-xs font-black tracking-widest text-[#D4AF37] uppercase border-b border-white/20 pb-4 mb-6 flex items-center gap-2 ${lang === 'ta' ? 'font-tamil tracking-wider text-[11px]' : ''}`}>
                    <Sparkles className="text-[#D4AF37] animate-pulse" size={14} />
                    <span>{t(translations.hero.credentialsTitle, lang)}</span>
                  </h3>

                  <div className="space-y-6">
                    {translations.credentials.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                        <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-[#D4AF37] font-extrabold text-sm shrink-0 group-hover/item:bg-[#D4AF37] group-hover/item:text-[#0A4D8C] transition-all duration-300">
                          {idx === 0 ? "38+" : idx === 1 ? "10K+" : idx === 2 ? "1K+" : "TN"}
                        </div>
                        <div>
                          <h4 className={`text-base font-bold text-[#F8F9FB] leading-tight ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(stat.value, lang)} {t(stat.label, lang)}</h4>
                          <p className={`text-xs text-slate-200/90 ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(stat.desc, lang)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motionClient.div>
            </div>

          </div>
        </div>

        {/* Dots and Counter Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-6">
          {/* Current image counter: 01 / 11 */}
          <div className="text-white text-xs font-bold font-num bg-slate-950/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slidesToUse.length).padStart(2, '0')}
          </div>

          {/* Small slider dots */}
          <div className="flex space-x-2">
            {slidesToUse.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx 
                    ? 'bg-[#D4AF37] w-6' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM TRUST SECTION (Immediately Below Hero, 4 Trust Cards with Icons) */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[Award, Package, Layers, ShieldCheck].map((IconComp, idx) => (
            <motionClient.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-[24px] bg-white border border-[#0A4D8C]/10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(10,77,140,0.1)] hover:border-[#D4AF37] hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0A4D8C]/5 text-[#0A4D8C] group-hover:bg-[#0A4D8C] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 shadow-sm border border-[#0A4D8C]/5">
                <IconComp size={22} />
              </div>
              <h3 className={`text-base font-bold text-[#1E293B] group-hover:text-[#0A4D8C] transition-colors mb-1.5 font-heading ${lang === 'ta' ? 'font-tamil' : ''}`}>
                {t(translations.trustCards[idx].title, lang)}
              </h3>
              <p className={`text-xs text-slate-500 leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil' : ''}`}>
                {t(translations.trustCards[idx].desc, lang)}
              </p>
            </motionClient.div>
          ))}
        </div>
      </section>

      {/* ABOUT / FOUNDER SECTION (Heritage circular format) */}
      <section id="about" className="py-24 bg-[#F8F9FB] relative overflow-hidden">
        {/* Soft background glow decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
              <Award size={12} />
              {t(translations.about.badge, lang)}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.about.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#D4AF37] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.about.subheading, lang)}
            </p>
          </div>

          {/* Founder Presentation Block */}
          <motionClient.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white border border-[#D4AF37]/35 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(10,77,140,0.04)] relative overflow-hidden mt-8 max-w-6xl mx-auto"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-[100px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
              {/* Founder Photo (Enlarged frame, Gold accent border) */}
              <div className="shrink-0 relative">
                <div className="w-[460px] max-w-full h-[360px] rounded-[28px] overflow-hidden border-4 border-[#D4AF37] shadow-2xl relative z-10 group">
                  <img 
                    src="/images/aruphoto.png" 
                    alt="Mr. K. Arumugam"
                    className="w-full h-full object-cover object-top transition-transform duration-[600ms] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute -inset-2 bg-[#D4AF37]/15 rounded-[28px] blur-lg z-0" />
              </div>
 
              {/* Founder Details & Story */}
              <div className="flex-grow space-y-5 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-[11px] font-black uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                    {t(translations.about.founderBadge, lang)}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-[11px] font-bold tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                    {t(translations.about.founderTitle, lang)}
                  </span>
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3.5xl font-extrabold text-[#0A4D8C] font-heading ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.about.founderName, lang)}</h3>
                  <p className={`text-xs text-slate-400 font-bold tracking-widest uppercase mt-1 ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                    {t(translations.about.founderSubtitle, lang)}
                  </p>
                </div>
                <div className="h-[2px] w-14 bg-[#D4AF37] mx-auto lg:mx-0 rounded-full" />
                
                {/* Thirukkural callout with custom design */}
                <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#D4AF37] text-left space-y-2">
                  <p className="text-[#0A4D8C] font-bold text-sm sm:text-base font-tamil italic leading-relaxed">
                    &quot;ஒழுக்கம் விழுப்பம் தரலான்; ஒழுக்கம் உயிரினும் ஓம்பப்பட வேண்டும்.&quot;
                  </p>
                  <p className="text-[#D4AF37] text-xs font-black tracking-wider">— திருக்குறள் 131</p>
                  <p className="text-slate-500 text-xs font-tamil font-semibold leading-relaxed pt-1">
                    <span className="text-[#0A4D8C] font-bold">பொருள்:</span> ஒழுக்கம் மனிதனுக்கு உயர்வையும் மதிப்பையும் அளிக்கிறது. அதனால் ஒழுக்கம் உயிரைவிட மேலானதாகக் கருதி பாதுகாக்கப்பட வேண்டும்.
                  </p>
                </div>

                <p className={`text-sm sm:text-base text-[#1E293B] leading-relaxed font-medium italic ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
                  {t(translations.about.founderQuote, lang)}
                </p>
                <div className="pt-2 text-right lg:text-left">
                  <p className={`text-sm font-bold text-[#0A4D8C] ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.about.founderSignName, lang)}</p>
                  <p className={`text-xs text-slate-400 font-semibold ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.about.founderSignTitle, lang)}</p>
                </div>
              </div>
            </div>
          </motionClient.div>
        </div>
      </section>
 
      {/* LEADERSHIP SECTION (Managing Director Modern Premium Card) */}
      <section id="leadership" className="py-24 bg-white border-y border-[#0A4D8C]/10 relative overflow-hidden">
        {/* Soft background blue glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#0A4D8C]/5 rounded-full blur-3xl pointer-events-none" />
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
              <Layers size={12} />
              {t(translations.leadership.badge, lang)}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.leadership.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#0A4D8C] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.leadership.subheading, lang)}
            </p>
          </div>
 
          {/* MD Modern Premium Card */}
          <motionClient.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F8F9FB] border border-[#D4AF37]/35 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(10,77,140,0.04)] relative overflow-hidden max-w-6xl mx-auto"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0A4D8C]/10 to-transparent rounded-tr-[100px] pointer-events-none" />
 
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-14">
              {/* MD Photo (Enlarged modern portrait) */}
              <div className="shrink-0 relative">
                <div className="w-[460px] max-w-full h-[360px] rounded-[28px] overflow-hidden border-4 border-[#D4AF37] shadow-2xl relative z-10 group">
                  <img 
                    src="/images/dhamuphoto.png" 
                    alt="Mr. Dhamodharan Arumugam"
                    className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-103"
                  />
                </div>
                <div className="absolute -inset-2 bg-[#D4AF37]/15 rounded-[28px] blur-lg z-0" />
              </div>
 
          {/* MD Details & Operations */}
              <div className="flex-grow space-y-5 text-center lg:text-left">
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-[11px] font-black uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                  {t(translations.leadership.mdBadge, lang)}
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3.5xl font-extrabold text-[#0A4D8C] font-heading ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.leadership.mdName, lang)}</h3>
                  <p className={`text-xs text-slate-400 font-bold tracking-widest uppercase mt-1 ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                    {t(translations.leadership.mdSubtitle, lang)}
                  </p>
                </div>
                <div className="h-[2px] w-14 bg-[#0A4D8C] mx-auto lg:mx-0 rounded-full" />
                
                {/* Tamil Proverb callout with custom design */}
                <div className="p-5 rounded-2xl bg-white border-l-4 border-[#0A4D8C] text-left space-y-1">
                  <p className="text-[#0A4D8C] font-bold text-sm sm:text-base font-tamil italic leading-relaxed">
                    &quot;பொறுமை கடலினும் பெரிது&quot;
                  </p>
                  <p className={`text-slate-500 text-xs font-semibold leading-relaxed ${lang === 'ta' ? 'font-tamil' : ''}`}>
                    {t(translations.leadership.mdProverbTranslation, lang)}
                  </p>
                </div>

                <p className={`text-sm sm:text-base text-[#1E293B] leading-relaxed font-medium italic ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
                  {t(translations.leadership.mdQuote, lang)}
                </p>
                <div className="pt-2 text-right lg:text-left">
                  <p className={`text-sm font-bold text-[#0A4D8C] ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.leadership.mdSignName, lang)}</p>
                  <p className={`text-xs text-slate-400 font-semibold ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.leadership.mdSignTitle, lang)}</p>
                </div>
              </div>
            </div>
          </motionClient.div>
        </div>
      </section>

      {/* DIRECTOR – ADMINISTRATION & FINANCE SECTION */}
      <section className="py-24 bg-[#F8F9FB] border-y border-[#D4AF37]/10 relative overflow-hidden">
        {/* Soft background gold glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
              <Layers size={12} />
              {t(translations.director.badge, lang)}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.director.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#D4AF37] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.director.subheading, lang)}
            </p>
          </div>

          {/* Director Card */}
          <motionClient.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white border border-[#D4AF37]/35 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(10,77,140,0.04)] relative overflow-hidden max-w-6xl mx-auto"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-[100px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
              {/* Director Photo */}
              <div className="shrink-0 relative">
                <div className="w-[460px] max-w-full h-[360px] rounded-[28px] overflow-hidden border-4 border-[#D4AF37] shadow-2xl relative z-10 group">
                  <img 
                    src="/images/anusha.png" 
                    alt="Mrs. Anusha Dhamodharan"
                    className="w-full h-full object-cover object-top transition-transform duration-[600ms] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute -inset-2 bg-[#D4AF37]/15 rounded-[28px] blur-lg z-0" />
              </div>

              {/* Director Details */}
              <div className="flex-grow space-y-5 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-[11px] font-black uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                    {t(translations.director.directorBadge, lang)}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-[11px] font-bold tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                    {t(translations.director.directorDept, lang)}
                  </span>
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3.5xl font-extrabold text-[#0A4D8C] font-heading ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.director.directorName, lang)}</h3>
                  <p className={`text-xs text-slate-400 font-bold tracking-widest uppercase mt-1 ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                    {t(translations.director.directorSubtitle, lang)}
                  </p>
                </div>
                <div className="h-[2px] w-14 bg-[#D4AF37] mx-auto lg:mx-0 rounded-full" />
                
                {/* Thirukkural callout */}
                <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#D4AF37] text-left space-y-2">
                  <p className="text-[#0A4D8C] font-bold text-sm sm:text-base font-tamil italic leading-relaxed">
                    &quot;எண்ணித் துணிக கருமம்; துணிந்தபின் எண்ணுவம் என்பது இழுக்கு.&quot;
                  </p>
                  <p className="text-[#D4AF37] text-xs font-black tracking-wider">— திருக்குறள் 467</p>
                  <p className="text-slate-500 text-xs font-tamil font-semibold leading-relaxed pt-1">
                    <span className="text-[#0A4D8C] font-bold">பொருள்:</span> எந்த ஒரு செயலை மேற்கொள்வதற்கும் முன் அதன் நன்மை, தீமை, செலவு, பயன் மற்றும் விளைவுகளை நன்கு ஆராய்ந்து திட்டமிட வேண்டும். ஒரு செயலைத் தொடங்கிய பிறகு அதை பற்றி சிந்திப்பது குறையாகும். முன்னோக்கிய திட்டமிடலும் சரியான கணக்கீடும் வெற்றியின் அடிப்படையாகும்.
                  </p>
                </div>

                <p className={`text-sm sm:text-base text-[#1E293B] leading-relaxed font-medium italic ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
                  {t(translations.director.directorQuote, lang)}
                </p>
                <div className="pt-2 text-right lg:text-left">
                  <p className={`text-sm font-bold text-[#0A4D8C] ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.director.directorSignName, lang)}</p>
                  <p className={`text-xs text-slate-400 font-semibold ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.director.directorSignTitle, lang)}</p>
                </div>
              </div>
            </div>
          </motionClient.div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-[#F8F9FB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
              <Package size={12} />
              {t(translations.products.badge, lang)}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.products.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#D4AF37] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.products.subheading, lang)}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <motionClient.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-white rounded-[24px] overflow-hidden border border-[#0A4D8C]/10 hover:border-[#D4AF37] shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(10,77,140,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url('${cat.image}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className={`text-[10px] font-black uppercase tracking-widest text-[#D4AF37] ${lang === 'ta' ? 'font-tamil tracking-wider' : ''}`}>{t(translations.products.premiumQuality, lang)}</span>
                    <h3 className={`text-lg font-bold text-[#0A4D8C] font-heading group-hover:text-[#D4AF37] transition-colors duration-300 ${lang === 'ta' ? 'font-tamil text-base' : ''}`}>
                      {t(translations.categories[idx].title, lang)}
                    </h3>
                    <p className={`text-xs text-slate-500 line-clamp-3 leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil' : ''}`}>
                      {t(translations.categories[idx].desc, lang)}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#0A4D8C]/5 hover:bg-[#0A4D8C] text-[#0A4D8C] hover:text-white font-bold text-xs transition-all duration-300 cursor-pointer border border-[#0A4D8C]/10 ${lang === 'ta' ? 'font-tamil' : ''}`}
                  >
                    {t(translations.products.learnDetails, lang)}
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motionClient.div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CUSTOMERS TRUST US (BENTO GRID) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
              <ShieldCheck size={12} />
              {t(translations.trust.badge, lang)}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.trust.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#0A4D8C] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.trust.subheading, lang)}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {TRUST_REASONS.map((reason, idx) => {
              const gridSpan = 
                reason.size === 'lg' ? 'md:col-span-4' : 
                reason.size === 'md' ? 'md:col-span-3' : 
                'md:col-span-2';

              const isHighlighted = idx === 0 || idx === 5;
              const borderStyle = isHighlighted ? 'border-[#D4AF37]/50 bg-[#0A4D8C]/5' : 'border-[#0A4D8C]/10 bg-[#F8F9FB]';
              const textAccent = isHighlighted ? 'text-[#D4AF37]' : 'text-[#0A4D8C]';

              return (
                <motionClient.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`${gridSpan} p-8 rounded-[24px] border ${borderStyle} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md`}
                >
                  <div className="space-y-4">
                    <span className={`text-[10px] uppercase tracking-widest font-black text-slate-400 block ${lang === 'ta' ? 'font-tamil tracking-wider' : ''}`}>
                      {t(translations.trust.valueCorePrefix, lang)} 0{idx + 1}
                    </span>
                    <h3 className={`text-xl font-bold ${textAccent} font-heading ${lang === 'ta' ? 'font-tamil text-lg' : ''}`}>
                      {t(translations.trustReasons[idx].title, lang)}
                    </h3>
                    <p className={`text-xs sm:text-sm text-slate-500 leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
                      {t(translations.trustReasons[idx].desc, lang)}
                    </p>
                  </div>
                </motionClient.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-[#F8F9FB] border-t border-[#0A4D8C]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
              {t(translations.timeline.badge, lang)}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.timeline.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#D4AF37] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.timeline.subheading, lang)}
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0A4D8C]/5 via-[#D4AF37]/45 to-[#0A4D8C]/5 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
              {translations.milestones.map((milestone, idx) => (
                <motionClient.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center lg:pt-8"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-[#0A4D8C] flex items-center justify-center text-xs font-bold text-[#D4AF37] shadow-md z-10 hover:border-[#D4AF37] transition-colors duration-300 mb-4">
                    {milestone.year}
                  </div>

                  <div className="p-6 rounded-[20px] bg-white border border-[#0A4D8C]/15 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
                    <h4 className={`text-sm sm:text-base font-bold text-[#0A4D8C] font-heading mb-2 ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(milestone.title, lang)}</h4>
                    <p className={`text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>{t(milestone.desc, lang)}</p>
                  </div>
                </motionClient.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-white relative overflow-hidden">
        {/* Expanded container for wide display (max-w-[92rem]) */}
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
              {t(translations.gallery.badge, lang)}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.gallery.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#0A4D8C] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.gallery.subheading, lang)}
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { id: 'all', label: translations.gallery.filterAll, icon: Layers },
              { id: 'store', label: translations.gallery.filterStore, icon: MapPin },
              { id: 'product', label: translations.gallery.filterProduct, icon: Package },
              { id: 'warehouse', label: translations.gallery.filterWarehouse, icon: Clock }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = selectedGalleryCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedGalleryCategory(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer ${lang === 'ta' ? 'font-tamil' : ''} ${
                    isActive
                      ? 'bg-[#0A4D8C] border-[#D4AF37] text-white shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-[#1E293B] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <TabIcon size={14} className={isActive ? 'text-[#D4AF37]' : 'text-slate-400'} />
                  <span>{t(tab.label, lang)}</span>
                </button>
              );
            })}
          </div>

          {/* Static Gallery Grid spread wide (5 columns layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredGalleryImages.map((img, i) => (
              <motionClient.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-300 border border-[#0A4D8C]/10 cursor-pointer aspect-[4/3] bg-slate-100"
                onClick={() => setActiveLightboxImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `AVM Plastics Showcase ${i + 1}`}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Premium matte gradient overlay with aligned details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className={`self-start px-2 py-0.5 rounded bg-[#D4AF37] text-[#0A4D8C] text-[9px] font-black uppercase tracking-wider mb-1 ${lang === 'ta' ? 'font-tamil' : ''}`}>
                    {img.category === 'store' ? t(translations.gallery.categoryShowroom, lang) : img.category === 'product' ? t(translations.gallery.categoryProduct, lang) : t(translations.gallery.categoryWarehouse, lang)}
                  </span>
                  <h4 className="text-white text-xs sm:text-sm font-bold font-heading line-clamp-2">
                    {img.alt}
                  </h4>
                  <div className={`mt-2 text-[#D4AF37] text-[10px] font-bold flex items-center gap-1 ${lang === 'ta' ? 'font-tamil' : ''}`}>
                    <Maximize2 size={10} />
                    <span>{t(translations.gallery.clickToView, lang)}</span>
                  </div>
                </div>
              </motionClient.div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#F8F9FB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[36px] leading-[1.3]' : ''}`}>
              {t(translations.testimonials.heading, lang)}
            </h2>
            <div className="h-[3px] w-20 bg-[#D4AF37] mx-auto rounded-full" />
            <p className={`text-slate-500 text-sm sm:text-base leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
              {t(translations.testimonials.subheading, lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((tItem, idx) => (
              <motionClient.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-[#0A4D8C]/15 rounded-[24px] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(tItem.rating)].map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed font-medium italic ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
                    &quot;{t(translations.testimonialItems[idx].quote, lang)}&quot;
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#0A4D8C]/10">
                  <div className="w-10 h-10 rounded-full bg-[#0A4D8C]/5 text-[#0A4D8C] flex items-center justify-center border border-[#0A4D8C]/10">
                    <User size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0A4D8C] font-heading">{tItem.name}</h4>
                    <p className={`text-[10px] text-slate-500 font-semibold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>{t(translations.testimonialItems[idx].role, lang)}</p>
                  </div>
                </div>
              </motionClient.div>
            ))}
          </div>

        </div>
      </section>

      {/* PREMIUM CONTACT CTA */}
      <section className="py-20 bg-[#0A4D8C] text-center relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(248,249,251,0.05),transparent_45%)]" />
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8">
          <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/45 text-[#D4AF37] text-xs font-bold uppercase tracking-widest ${lang === 'ta' ? 'font-tamil tracking-wider' : ''}`}>
            <Sparkles size={12} fill="currentColor" />
            {t(translations.cta.badge, lang)}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-[45px] font-extrabold tracking-tight text-white font-heading leading-tight ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl lg:text-[38px] leading-[1.3]' : ''}`}>
            {t(translations.cta.heading, lang)}
          </h2>
          <p className={`text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
            {t(translations.cta.subheading, lang)}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a 
              href="tel:+916379455162"
              className={`w-full sm:w-auto h-14 px-8 rounded-full bg-[#D4AF37] hover:bg-[#B5932C] hover:scale-[1.03] active:scale-[0.98] text-[#0A4D8C] font-bold text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#0A4D8C]/10 ${lang === 'ta' ? 'font-tamil' : ''}`}
            >
              <Phone size={16} />
              {t(translations.cta.callNow, lang)}
            </a>
            <a 
              href="https://wa.me/916379455162?text=Hi AVM Plastics, I would like to inquire about your products."
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto h-14 px-8 rounded-full bg-[#10B981] hover:bg-[#10B981]/90 hover:scale-[1.03] active:scale-[0.98] text-white font-bold text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${lang === 'ta' ? 'font-tamil' : ''}`}
            >
              <MessageSquare size={16} />
              {t(translations.cta.whatsappInquiry, lang)}
            </a>
            <a 
              href="https://maps.google.com/?q=AVM+Plastics+Salem+Main+Road+Krishnagiri"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] text-white border border-white/20 hover:border-[#D4AF37]/50 font-bold text-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${lang === 'ta' ? 'font-tamil' : ''}`}
            >
              <MapPin size={16} />
              {t(translations.cta.getDirections, lang)}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT & DIRECTION SECTION (Business Information Grid) */}
      <section id="contact" className="py-24 bg-[#F8F9FB] border-t border-[#0A4D8C]/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Info Cards Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A4D8C]/10 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider ${lang === 'ta' ? 'font-tamil tracking-normal' : ''}`}>
                  {t(translations.contact.badge, lang)}
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B] font-heading ${lang === 'ta' ? 'font-tamil text-2xl sm:text-3xl leading-[1.3]' : ''}`}>
                  {t(translations.contact.heading, lang)}
                </h2>
                <p className={`text-slate-500 text-sm leading-relaxed font-medium ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
                  {t(translations.contact.subheading, lang)}
                </p>

                {/* Direct Address & Business Information Details */}
                <div className="space-y-4">
                  {/* Address & Categories Block */}
                  <div className="p-5 bg-white border border-[#0A4D8C]/15 rounded-[20px] shadow-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                      <div className={`text-xs sm:text-sm font-medium ${lang === 'ta' ? 'font-tamil' : ''}`}>
                        <h4 className="font-bold text-[#0A4D8C] text-sm mb-1 font-heading">{t(translations.contact.addressTitle, lang)}</h4>
                        <p className="text-slate-600">{t(translations.contact.addressLine1, lang)}</p>
                        <p className="text-slate-600">{t(translations.contact.addressLine2, lang)}</p>
                        <p className="text-slate-600">{t(translations.contact.addressLine3, lang)}</p>
                      </div>
                    </div>
                    
                    <div className="h-[1px] bg-slate-100" />
                    
                    {/* Business Categories List as Badges */}
                    <div className="space-y-2">
                      <span className={`text-[10px] font-black tracking-widest text-[#D4AF37] uppercase block ${lang === 'ta' ? 'font-tamil tracking-wider' : ''}`}>
                        {t(translations.contact.registeredDomains, lang)}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {translations.contact.domains.map((domain, index) => (
                          <span 
                            key={index} 
                            className={`inline-block px-2.5 py-1 bg-[#0A4D8C]/5 border border-[#0A4D8C]/10 text-[#0A4D8C] text-[10px] font-bold rounded-md ${lang === 'ta' ? 'font-tamil' : ''}`}
                          >
                            {t(domain, lang)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hours, Contact, Legacy Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-[#0A4D8C]/15 rounded-[20px] shadow-sm flex items-start gap-3">
                      <Clock className="text-[#0A4D8C] shrink-0 mt-0.5" size={18} />
                      <div className={`text-xs font-medium ${lang === 'ta' ? 'font-tamil' : ''}`}>
                        <h4 className="font-bold text-[#0A4D8C] mb-1 font-heading">{t(translations.contact.businessHours, lang)}</h4>
                        <p className="text-slate-600">{t(translations.contact.monSat, lang)}</p>
                        <p className="text-slate-600">{t(translations.contact.hours, lang)}</p>
                        <p className="text-slate-400 text-[10px] italic">{t(translations.contact.closedSundays, lang)}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white border border-[#0A4D8C]/15 rounded-[20px] shadow-sm flex items-start gap-3">
                      <Phone className="text-[#D4AF37] shrink-0 mt-0.5" size={18} />
                      <div className={`text-xs font-medium ${lang === 'ta' ? 'font-tamil' : ''}`}>
                        <h4 className="font-bold text-[#0A4D8C] mb-1 font-heading">{t(translations.contact.directContact, lang)}</h4>
                        <p className="text-slate-600 font-bold">63794 55162</p>
                        <p className="text-slate-500">{t(translations.contact.contactPerson, lang)}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-[#D4AF37]/15 text-[#D4AF37] text-[9px] font-bold rounded">
                          {t(translations.contact.yearsInBusiness, lang)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <a 
                  href="tel:+916379455162"
                  className={`inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-[#0A4D8C] hover:bg-[#0A4D8C]/90 text-white font-bold text-sm shadow-md transition-colors ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <Phone size={14} className="text-[#D4AF37]" />
                  {t(translations.contact.callBtn, lang)}
                </a>
                <a 
                  href="https://wa.me/916379455162?text=Hi AVM Plastics, I would like to inquire about your products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold text-sm shadow-md transition-colors ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <MessageSquare size={14} />
                  {t(translations.contact.whatsappBtn, lang)}
                </a>
              </div>
            </div>

            {/* Map Section (7 cols) */}
            <div className="lg:col-span-7 rounded-[32px] border border-[#0A4D8C]/15 overflow-hidden shadow-md bg-white flex flex-col justify-between">
              <div className="w-full flex-grow relative min-h-[360px] lg:min-h-0 bg-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6433367119266!2d78.2045564!3d12.5186358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac1427506941bf%3A0xe54d9241fc9a770!2sSalem%20Main%20Road%20Krishnagiri!5e0!3m2!1sen!2sin!4v1780204908000" 
                  className="absolute inset-0 w-full h-full border-none"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-5 bg-white border-t border-[#0A4D8C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className={`text-xs font-medium text-slate-500 ${lang === 'ta' ? 'font-tamil' : ''}`}>
                  <h4 className="font-bold text-[#0A4D8C] text-sm">{t(translations.contact.mapTitle, lang)}</h4>
                  <p>{t(translations.contact.mapSubtitle, lang)}</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=AVM+Plastics+Salem+Main+Road+Krishnagiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#B5932C] text-[#F8F9FB] font-bold text-xs shadow-md transition-colors ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <span>{t(translations.contact.openInMaps, lang)}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E293B] text-slate-300 py-12 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left border-b border-white/10 pb-8 mb-8">
            <div className="space-y-2">
              <h3 className={`text-white font-extrabold text-xl font-heading tracking-tight ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.footer.companyName, lang)}</h3>
              <p className={`text-xs text-slate-400 font-medium ${lang === 'ta' ? 'font-tamil' : ''}`}>{t(translations.footer.footerTagline, lang)}</p>
            </div>

            <div className={`flex flex-wrap justify-center gap-6 text-xs font-bold ${lang === 'ta' ? 'font-tamil' : ''}`}>
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t(item.label, lang)}
                </button>
              ))}
              <Link href="/owner-login" className="hover:text-[#D4AF37] text-[#D4AF37] transition-colors cursor-pointer">
                {t(translations.footer.ownerPortal, lang)}
              </Link>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center ${lang === 'ta' ? 'font-tamil' : ''}`}>
            <p>&copy; {new Date().getFullYear()} {t(translations.footer.copyright, lang)}</p>
            <p className="text-[10px] text-slate-500">{t(translations.footer.footerAddress, lang)}</p>
          </div>

          {/* Spiritual Divider & Text */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <motionClient.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center font-tamil font-semibold text-[#D4AF37] tracking-wider text-sm sm:text-base select-none"
            >
              <span>ஸ்ரீ நஞ்சுண்டேஸ்வரர் துணை</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>அருள்மிகு பழனி ஆண்டவர் துணை</span>
            </motionClient.div>
          </div>
        </div>
      </footer>

      {/* DETAILED CATEGORY MODAL */}
      <AnimatePresence>
        {activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motionClient.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCategory(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motionClient.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-lg bg-[#F8F9FB] border border-[#0A4D8C]/15 rounded-[28px] overflow-hidden shadow-2xl z-10 p-6 flex flex-col justify-between max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setActiveCategory(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#1E293B] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div 
                  className="aspect-video w-full rounded-xl bg-cover bg-center border border-[#0A4D8C]/10"
                  style={{ backgroundImage: `url('${activeCategory.image}')` }}
                />

                <div className="space-y-3">
                  <span className={`inline-block px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-[10px] font-black uppercase rounded-full ${lang === 'ta' ? 'font-tamil' : ''}`}>
                    {t(translations.modal.wholesaleProfile, lang)}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-extrabold text-[#0A4D8C] font-heading pt-1 ${lang === 'ta' ? 'font-tamil text-lg sm:text-xl' : ''}`}>
                    {(() => {
                      const catIdx = CATEGORIES.findIndex(c => c.id === activeCategory.id);
                      return catIdx >= 0 ? t(translations.categories[catIdx].title, lang) : activeCategory.title;
                    })()}
                  </h3>
                  <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pt-2 ${lang === 'ta' ? 'font-tamil leading-loose' : ''}`}>
                    {(() => {
                      const catIdx = CATEGORIES.findIndex(c => c.id === activeCategory.id);
                      return catIdx >= 0 ? t(translations.categories[catIdx].details, lang) : activeCategory.details;
                    })()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-[#0A4D8C]/10">
                <button 
                  onClick={() => setActiveCategory(null)}
                  className={`py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-[#1E293B] cursor-pointer ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  {t(translations.modal.closeWindow, lang)}
                </button>
                <a 
                  href={`https://wa.me/916379455162?text=${encodeURIComponent(activeCategory.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-3 rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 ${lang === 'ta' ? 'font-tamil' : ''}`}
                >
                  <MessageSquare size={14} />
                  {t(translations.modal.whatsappInquiry, lang)}
                </a>
              </div>
            </motionClient.div>
          </div>
        )}
      </AnimatePresence>

      {/* GALLERY LIGHTBOX POPUP */}
      <AnimatePresence>
        {activeLightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motionClient.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <button 
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            >
              <X size={20} />
            </button>

            <motionClient.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center z-10"
            >
              <img 
                src={activeLightboxImage} 
                alt={t(translations.modal.expandedView, lang)}
                className="max-w-full max-h-[85vh] rounded-2xl object-contain border border-white/10"
              />
            </motionClient.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
