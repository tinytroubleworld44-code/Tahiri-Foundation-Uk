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
      className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#F7F9FF] via-white to-white text-[#111827] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle ambient lighting and geometric watermark */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#EEF3FF] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0B3095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Sacred Tagline with Staggered Motion */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* 1. Small Location Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E9F2] bg-white shadow-xs text-xs text-[#0B3095] tracking-widest uppercase font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              <span>DARGAH ALLAHABAD SHARIF, SINDH</span>
            </motion.div>

            {/* 2. Main Display Headline & Supporting Line */}
            <div className="space-y-3">
              <motion.h1
                id="hero-title"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-[#0B3095]"
              >
                Tahiri Foundation UK
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-display text-xl sm:text-2xl text-[#5B6472] font-normal leading-snug"
              >
                Naqshbandi Mujaddidi Spiritual Heritage &amp; Sacred Knowledge
              </motion.p>
            </div>

            {/* Subtle Accent Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-[2px] bg-[#C5A15A] mx-auto lg:mx-0 origin-left"
            />

            {/* 3. Exact Required Urs Mubarak Quotation */}
            <motion.blockquote
              id="hero-sacred-quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-0 lg:border-l-2 border-[#C5A15A] pl-0 lg:pl-5 py-2 text-sm sm:text-base leading-relaxed text-[#111827]/90 font-serif-display italic bg-[#F7F9FF] lg:bg-transparent rounded-xl lg:rounded-none p-5 lg:p-0 border border-[#E4E9F2] lg:border-t-0 lg:border-r-0 lg:border-b-0"
            >
              “The Annual Urs Mubarak of Huzoor Sohna Saeen (Allah Almighty’s blessings be upon him) is an occasion filled with Faiz and blessings, which are hard to describe in words, however they need to be felt, one who goes once, wants to keep going.”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-xs sm:text-sm text-[#5B6472] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Illuminating hearts through adherence to the pristine Sunnah, silent heart remembrance (Zikr-e-Qalbi), and the sacred treatises preserved in <em>The Splendid Abode of the Friend</em>.
            </motion.p>

            {/* 4. Action CTAs with Apple-style Restrained Motion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              {/* Primary Royal Blue Button */}
              <button
                id="hero-cta-shajra"
                onClick={() => onNavigate('shajra')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#0B3095] focus:ring-offset-2"
              >
                <Compass className="w-4 h-4 text-white/90" aria-hidden="true" focusable="false" />
                <span>Explore Shajra Shareef</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" focusable="false" />
              </button>

              {/* Secondary Clean Button */}
              <button
                id="hero-cta-abode"
                onClick={() => onNavigate('abode')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#0B3095]/30 text-[#0B3095] hover:bg-[#EEF3FF] hover:border-[#0B3095] font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#0B3095]"
              >
                <BookOpen className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
                <span>Explore Spiritual Teachings</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Authentic Dargah Allahabad Sharif Photograph Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 1.02 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Premium Editorial Image Frame (22px corner radius, subtle shadow, thin border) */}
              <div className="relative rounded-[22px] overflow-hidden border border-white/80 ring-1 ring-[#0B3095]/10 shadow-md bg-white group">
                <img
                  src={IMAGES.dargahAuthentic}
                  alt="Dargah Allahabad Sharif, Sindh"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle natural vignette at base for caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A4A]/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Official Institutional Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/70 text-[#111827] shadow-xs">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#0B3095]" />
                    <span className="font-serif-display text-[#0B3095] text-base sm:text-lg font-bold tracking-tight">
                      Dargah Allahabad Sharif, Sindh
                    </span>
                  </div>
                  <span className="text-[#5B6472] text-xs block pl-4 font-medium">
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
