import React, { useState, useEffect, useRef } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click & escape key for three-dot menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi'
  ) => {
    setMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        id="main-site-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E4E9F2] py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#E4E9F2]/70 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Identity / Logo - Optimized for Tablet & Mobile to prevent squeezing */}
            <button
              id="header-brand-logo"
              onClick={() => handleNavClick('home')}
              className="text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3095] rounded-lg py-1 px-0.5"
              aria-label="Tahiri Foundation UK - Home"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5">
                {/* Official Tahiri Foundation UK Logo Emblem */}
                <img
                  src={IMAGES.logoEmblem}
                  alt="Tahiri Foundation UK Logo"
                  className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                <div className="flex flex-col justify-center">
                  {/* Single-line brand name for Desktop (>= 1025px) */}
                  <span className="hidden min-[1025px]:block font-serif-display text-xl min-[1280px]:text-2xl font-bold tracking-tight text-[#0B3095] group-hover:text-[#1746B8] transition-colors leading-tight whitespace-nowrap">
                    Tahiri Foundation UK
                  </span>
                  {/* Balanced two-line brand name for Tablet & Mobile (< 1025px) prevents collision */}
                  <div className="min-[1025px]:hidden flex flex-col text-left">
                    <span className="font-serif-display text-base sm:text-lg font-bold tracking-tight text-[#0B3095] group-hover:text-[#1746B8] transition-colors leading-none">
                      Tahiri
                    </span>
                    <span className="font-serif-display text-xs sm:text-sm font-semibold tracking-tight text-[#0B3095]/90 group-hover:text-[#1746B8] transition-colors leading-tight mt-0.5">
                      Foundation UK
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* Desktop Navigation (>= 1025px ONLY) */}
            <nav
              id="desktop-primary-nav"
              className="hidden min-[1025px]:flex items-center space-x-1 lg:space-x-1.5 min-[1200px]:space-x-2"
              aria-label="Primary Navigation"
            >
              {/* Home */}
              <button
                id="nav-link-home"
                onClick={() => handleNavClick('home')}
                className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 relative rounded-md ${
                  activePage === 'home'
                    ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/80'
                    : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
                }`}
              >
                Home
                {activePage === 'home' && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#0B3095] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Shajra Shareef */}
              <button
                id="nav-link-shajra"
                onClick={() => handleNavClick('shajra')}
                className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 relative rounded-md ${
                  activePage === 'shajra'
                    ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/80'
                    : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
                }`}
              >
                Shajra Shareef
                {activePage === 'shajra' && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#0B3095] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* The Splendid Abode of the Friend */}
              <button
                id="nav-link-abode"
                onClick={() => handleNavClick('abode')}
                className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 relative rounded-md flex items-center gap-1.5 ${
                  activePage === 'abode'
                    ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/80'
                    : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
                }`}
              >
                <span>The Splendid Abode of the Friend</span>
                <span className="font-arabic text-xs font-semibold text-[#0B3095]/75">جلوہ گاہِ دوست</span>
                {activePage === 'abode' && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#0B3095] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Events & Programs */}
              <button
                id="nav-link-events"
                onClick={() => handleNavClick('events')}
                className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 relative rounded-md flex items-center gap-1.5 ${
                  activePage === 'events'
                    ? 'text-[#0B3095] font-semibold bg-[#EEF3FF]/80'
                    : 'text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF]'
                }`}
              >
                <span>Events &amp; Programs</span>
                {activePage === 'events' && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#0B3095] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Tablet & Mobile Clean Vertical Three-Dot Menu Button (< 1025px) */}
            <div className="flex min-[1025px]:hidden items-center relative">
              <button
                id="three-dot-menu-toggle-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] text-[#0B3095] hover:bg-[#EEF3FF] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#0B3095] shadow-2xs"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-[#0B3095]" aria-hidden="true" focusable="false" />
                ) : (
                  <Menu className="w-5 h-5 text-[#0B3095]" aria-hidden="true" focusable="false" />
                )}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Tablet & Mobile Dropdown Popover with Outside Click Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-2xs min-[1025px]:hidden"
              aria-hidden="true"
            />

            {/* Clean Dropdown / Popover Container */}
            <motion.div
              ref={menuRef}
              id="three-dot-dropdown-menu"
              role="dialog"
              aria-label="Mobile & Tablet Navigation"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 sm:top-18 right-4 sm:right-6 md:right-8 z-50 w-72 sm:w-80 max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-[#E4E9F2] shadow-2xl p-3 min-[1025px]:hidden space-y-1.5"
            >
              {/* Header Label inside Popover */}
              <div className="px-3 pt-2 pb-2 border-b border-[#E4E9F2] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#0B3095]">
                  Tahiri Foundation Navigation
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              </div>

              {/* 1. Home */}
              <button
                id="popover-nav-home"
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-sm sm:text-base font-medium flex items-center justify-between transition-colors ${
                  activePage === 'home'
                    ? 'bg-[#EEF3FF] text-[#0B3095] font-semibold border border-[#0B3095]/20'
                    : 'text-[#111827] hover:bg-[#F7F9FF]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <HomeIcon className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
                  <span>Home</span>
                </div>
                {activePage === 'home' && (
                  <span className="w-2 h-2 rounded-full bg-[#0B3095]" />
                )}
              </button>

              {/* 2. Shajra Shareef */}
              <button
                id="popover-nav-shajra"
                onClick={() => handleNavClick('shajra')}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-sm sm:text-base font-medium flex items-center justify-between transition-colors ${
                  activePage === 'shajra'
                    ? 'bg-[#EEF3FF] text-[#0B3095] font-semibold border border-[#0B3095]/20'
                    : 'text-[#111827] hover:bg-[#F7F9FF]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
                  <span>Shajra Shareef</span>
                </div>
                {activePage === 'shajra' && (
                  <span className="w-2 h-2 rounded-full bg-[#0B3095]" />
                )}
              </button>

              {/* 3. The Splendid Abode of the Friend */}
              <button
                id="popover-nav-abode"
                onClick={() => handleNavClick('abode')}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-sm sm:text-base font-medium flex items-center justify-between transition-colors ${
                  activePage === 'abode'
                    ? 'bg-[#EEF3FF] text-[#0B3095] font-semibold border border-[#0B3095]/20'
                    : 'text-[#111827] hover:bg-[#F7F9FF]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
                  <span>The Splendid Abode of the Friend</span>
                </div>
                {activePage === 'abode' && (
                  <span className="w-2 h-2 rounded-full bg-[#0B3095]" />
                )}
              </button>

              {/* 4. Events & Programs */}
              <button
                id="popover-nav-events"
                onClick={() => handleNavClick('events')}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-sm sm:text-base font-medium flex items-center justify-between transition-colors ${
                  activePage === 'events'
                    ? 'bg-[#EEF3FF] text-[#0B3095] font-semibold border border-[#0B3095]/20'
                    : 'text-[#111827] hover:bg-[#F7F9FF]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
                  <span>Events &amp; Programs</span>
                </div>
                {activePage === 'events' && (
                  <span className="w-2 h-2 rounded-full bg-[#0B3095]" />
                )}
              </button>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

