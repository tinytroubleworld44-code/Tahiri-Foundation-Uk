import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Compass, Home as HomeIcon, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../assets';

interface HeaderProps {
  activePage: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi' | 'not-found';
  onNavigate: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string
  ) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi'
  ) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      id="main-site-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E4E9F2] py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E4E9F2]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Logo */}
          <button
            id="header-brand-logo"
            onClick={() => handleNavClick('home')}
            className="text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3095] rounded-lg p-1"
            aria-label="Tahiri Foundation UK - Home"
          >
            <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4">
              {/* Official Tahiri Foundation UK Logo Emblem */}
              <img
                src={IMAGES.logoEmblem}
                alt="Tahiri Foundation UK Official Logo Emblem"
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              <div className="flex flex-col justify-center">
                <span className="block font-serif-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#0B3095] group-hover:text-[#1746B8] transition-colors leading-tight">
                  Tahiri Foundation UK
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation - STRICT: ONLY 3 items */}
          <nav
            id="desktop-primary-nav"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Primary Navigation"
          >
            {/* Home */}
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative rounded-md ${
                activePage === 'home'
                  ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/70'
                  : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
              }`}
            >
              Home
              {activePage === 'home' && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0B3095] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Shajra Shareef */}
            <button
              id="nav-link-shajra"
              onClick={() => handleNavClick('shajra')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative rounded-md ${
                activePage === 'shajra'
                  ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/70'
                  : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
              }`}
            >
              Shajra Shareef
              {activePage === 'shajra' && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0B3095] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* The Splendid Abode of the Friend */}
            <button
              id="nav-link-abode"
              onClick={() => handleNavClick('abode')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative rounded-md flex items-center gap-2 ${
                activePage === 'abode'
                  ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/70'
                  : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
              }`}
            >
              <span>The Splendid Abode of the Friend</span>
              <span className="font-arabic text-xs font-semibold text-[#0B3095]/75">جلوہ گاہِ دوست</span>
              {activePage === 'abode' && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0B3095] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Events & Programs */}
            <button
              id="nav-link-events"
              onClick={() => handleNavClick('events')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative rounded-md flex items-center gap-1.5 ${
                activePage === 'events'
                  ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/70'
                  : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
              }`}
            >
              <span>Events &amp; Programs</span>
              {activePage === 'events' && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0B3095] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </nav>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#E4E9F2] text-[#0B3095] hover:bg-[#F7F9FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B3095]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel with Apple-style smooth reveal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white border-b border-[#E4E9F2] shadow-xl px-4 pt-3 pb-6 space-y-2"
          >
            {/* Mobile Drawer Brand Identity */}
            <div className="pb-3 border-b border-[#E4E9F2] px-2 flex items-center gap-3">
              <img
                src={IMAGES.logoEmblem}
                alt="Tahiri Foundation UK Official Logo Emblem"
                className="h-9 w-auto object-contain flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="block font-serif-display text-base font-bold text-[#0B3095] leading-tight">
                  Tahiri Foundation UK
                </span>
                <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#5B6472]">
                  DARGAH ALLAHABAD SHARIF, SINDH
                </span>
              </div>
            </div>

            <div className="pt-1 pb-1 px-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A]">
              Navigation
            </div>
            
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium flex items-center gap-3 transition-colors ${
                activePage === 'home'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'text-[#111827] hover:bg-[#F7F9FF]'
              }`}
            >
              <HomeIcon className="w-4 h-4 opacity-80" />
              <span>Home</span>
            </button>

            <button
              id="mobile-nav-shajra"
              onClick={() => handleNavClick('shajra')}
              className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium flex items-center gap-3 transition-colors ${
                activePage === 'shajra'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'text-[#111827] hover:bg-[#F7F9FF]'
              }`}
            >
              <Compass className="w-4 h-4 opacity-80" />
              <span>Shajra Shareef</span>
            </button>

            <button
              id="mobile-nav-abode"
              onClick={() => handleNavClick('abode')}
              className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                activePage === 'abode'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'text-[#111827] hover:bg-[#F7F9FF]'
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 opacity-80" />
                <span>The Splendid Abode of the Friend</span>
              </div>
              <span className="font-arabic text-sm opacity-90">جلوہ گاہِ دوست</span>
            </button>

            <button
              id="mobile-nav-events"
              onClick={() => handleNavClick('events')}
              className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium flex items-center gap-3 transition-colors ${
                activePage === 'events'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'text-[#111827] hover:bg-[#F7F9FF]'
              }`}
            >
              <Calendar className="w-4 h-4 opacity-80" />
              <span>Events &amp; Programs</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
