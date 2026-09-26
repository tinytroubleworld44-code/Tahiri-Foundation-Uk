import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets';

interface HuzoorSohnaSaeenFeatureProps {
  onNavigate: (page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi') => void;
}

export const HuzoorSohnaSaeenFeatureSection: React.FC<HuzoorSohnaSaeenFeatureProps> = ({ onNavigate }) => {
  return (
    <section
      id="huzoor-sohna-saeen-feature"
      aria-labelledby="sajjan-saeen-heading"
      className="py-10 sm:py-14 md:py-18 lg:py-24 bg-white border-b border-[#E4E9F2] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Composition: ~40% Image Column, ~60% Content Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* LEFT: Authentic Sajjan Saeen Photograph (Main Visual Anchor, ~40%) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1"
          >
            <div className="relative mx-auto max-w-[240px] sm:max-w-xs md:max-w-sm lg:max-w-none">
              {/* Archival Mount Frame with Restrained Border Treatment - No caption underneath */}
              <div className="rounded-xl sm:rounded-2xl bg-[#F7F9FF] p-2.5 sm:p-3.5 border border-[#E4E9F2] shadow-xs">
                <div className="overflow-hidden rounded-lg sm:rounded-xl bg-white border border-[#E4E9F2]">
                  <img
                    src={IMAGES.huzoorAuthentic}
                    alt="Sajjan Saeen"
                    width={480}
                    height={600}
                    className="w-full h-auto object-contain block mx-auto max-h-[280px] sm:max-h-[380px] lg:max-h-[460px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Compact Editorial Profile (~60%) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-2 space-y-3.5 sm:space-y-4 lg:space-y-5"
          >
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#0B3095]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              <span>SPIRITUAL HERITAGE</span>
            </div>

            {/* Names & Titles */}
            <div className="space-y-1 sm:space-y-1.5">
              <h2
                id="sajjan-saeen-heading"
                className="font-serif-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3095] tracking-tight leading-tight"
              >
                Sajjan Saeen
              </h2>

              <p className="font-serif-display text-sm sm:text-lg md:text-xl text-[#111827] font-medium">
                Hadrat Khwaja Muhammad Tahir Bakhshi Naqshbandi
              </p>

              {/* Authentic Arabic/Urdu Identity Line */}
              <p
                className="font-serif-display text-xs sm:text-base md:text-lg text-[#0B3095]/75 pt-0.5"
                dir="rtl"
              >
                خواجه محمد طاهر سڄڻ سائين مدظله العالي
              </p>
            </div>

            {/* Subtle Heritage Gold Divider */}
            <div className="w-12 sm:w-14 h-[2px] bg-[#C5A15A]" />

            {/* Restrained Source-Based Introductory Copy */}
            <div className="space-y-2 text-xs sm:text-sm md:text-base text-[#111827]/85 leading-relaxed">
              <p>
                Hadrat Khwaja Muhammad Tahir Bakhshi Naqshbandi, known as Sajjan Saeen, is a spiritual guide associated with the Naqshbandi Mujaddidi tradition.
              </p>
              <p>
                His teachings emphasize Islamic knowledge, adherence to the Prophetic Sunnah, Tasawwuf, and Zikr-e-Qalbi.
              </p>
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                id="card-learn-sajjan-saeen-btn"
                onClick={() => onNavigate('sajjan-saeen')}
                className="h-11 sm:h-12 inline-flex items-center justify-center gap-2 px-5 sm:px-6 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xs hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B3095] focus:ring-offset-2"
              >
                <span>Learn About Sajjan Saeen</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
              </button>

              <button
                id="card-explore-heritage-btn"
                onClick={() => onNavigate('shajra')}
                className="h-11 sm:h-12 inline-flex items-center justify-center gap-2 px-4 sm:px-5 rounded-xl bg-white hover:bg-[#F7F9FF] text-[#0B3095] border border-[#E4E9F2] hover:border-[#0B3095]/30 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-2xs hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0B3095]/20 focus:ring-offset-1"
              >
                <span>Explore Shajra Shareef</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

