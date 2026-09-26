import React from 'react';
import { ArrowRight, Compass, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets';

interface HeroSectionProps {
  onNavigate: (page: 'home' | 'shajra' | 'abode') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="homepage-hero-section"
      className="relative flex items-center justify-center bg-gradient-to-b from-[#F7F9FF] via-white to-white text-[#111827] overflow-hidden pt-3 pb-6 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16"
    >
      {/* Subtle ambient lighting and geometric watermark */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#EEF3FF] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0B3095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Sacred Tagline with Staggered Motion */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 lg:space-y-5 text-center lg:text-left">
            
            {/* 1. Small Location Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full border border-[#E4E9F2] bg-white shadow-xs text-[10px] sm:text-xs text-[#0B3095] tracking-widest uppercase font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              <span>DARGAH ALLAHABAD SHARIF, SINDH</span>
            </motion.div>

            {/* 2. Main Display Headline & Supporting Line */}
            <div className="space-y-1.5 sm:space-y-2">
              <motion.h1
                id="hero-title"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-[#0B3095]"
              >
                Tahiri Foundation UK
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-display text-sm sm:text-lg md:text-xl lg:text-2xl text-[#5B6472] font-normal leading-snug"
              >
                Naqshbandi Mujaddidi Spiritual Heritage &amp; Sacred Knowledge
              </motion.p>
            </div>

            {/* Subtle Accent Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-12 sm:w-14 h-[2px] bg-[#C5A15A] mx-auto lg:mx-0 origin-left"
            />

            {/* 3. Exact Required Urs Mubarak Quotation */}
            <motion.blockquote
              id="hero-sacred-quote"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-0 lg:border-l-2 border-[#C5A15A] pl-0 lg:pl-4 py-1 text-xs sm:text-sm md:text-base leading-relaxed text-[#111827]/90 font-serif-display italic bg-[#F7F9FF] lg:bg-transparent rounded-xl lg:rounded-none p-2.5 sm:p-4 lg:p-0 border border-[#E4E9F2] lg:border-t-0 lg:border-r-0 lg:border-b-0 text-left"
            >
              “The Annual Urs Mubarak of Huzoor Sohna Saeen (Allah Almighty’s blessings be upon him) is an occasion filled with Faiz and blessings, which are hard to describe in words, however they need to be felt, one who goes once, wants to keep going.”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-xs sm:text-sm text-[#5B6472] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Illuminating hearts through adherence to the pristine Sunnah, silent heart remembrance (Zikr-e-Qalbi), and the sacred treatises preserved in <em>The Splendid Abode of the Friend</em>.
            </motion.p>

            {/* 4. Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1"
            >
              {/* Primary Royal Blue Button */}
              <button
                id="hero-cta-shajra"
                onClick={() => onNavigate('shajra')}
                className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xs hover:shadow-sm hover:-translate-y-0.5 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#0B3095] focus:ring-offset-2"
              >
                <Compass className="w-4 h-4 text-white/90" aria-hidden="true" focusable="false" />
                <span>Explore Shajra Shareef</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" focusable="false" />
              </button>

              {/* Secondary Clean Button */}
              <button
                id="hero-cta-abode"
                onClick={() => onNavigate('abode')}
                className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-xl border border-[#0B3095]/30 text-[#0B3095] hover:bg-[#EEF3FF] hover:border-[#0B3095] font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#0B3095]"
              >
                <BookOpen className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
                <span>Explore Spiritual Teachings</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Authentic Dargah Allahabad Sharif Photograph Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"
            >
              {/* Editorial Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/80 ring-1 ring-[#0B3095]/10 shadow-sm bg-white group">
                <img
                  src={IMAGES.dargahAuthentic}
                  alt="Dargah Allahabad Sharif, Sindh"
                  className="w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[420px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle natural vignette at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A4A]/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Official Institutional Caption Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/70 text-[#111827] shadow-xs">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B3095]" />
                    <span className="font-serif-display text-[#0B3095] text-xs sm:text-sm md:text-base font-bold tracking-tight">
                      Dargah Allahabad Sharif, Sindh
                    </span>
                  </div>
                  <span className="text-[#5B6472] text-[10px] sm:text-xs block pl-3 font-medium">
                    Authentic photograph of the sacred sanctuary
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
