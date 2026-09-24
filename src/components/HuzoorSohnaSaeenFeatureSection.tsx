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
      className="py-16 sm:py-20 lg:py-24 bg-[#F7F9FF] border-b border-[#E4E9F2] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Subtle section label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0B3095]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
            <span>SPIRITUAL HERITAGE</span>
          </div>
        </div>

        {/* Dedicated Premium Heritage Profile Card: Image First, Name Directly Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md sm:max-w-lg bg-white rounded-[14px] border border-[#E4E9F2] shadow-xs hover:shadow-md hover:-translate-y-[3px] transition-all duration-300 overflow-hidden"
        >
          {/* Top: Authentic Portrait Photograph */}
          <div className="w-full bg-[#F7F9FF] p-6 sm:p-8 flex justify-center items-center border-b border-[#E4E9F2]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-48 sm:w-56 overflow-hidden rounded-[10px] bg-white border border-[#E4E9F2] shadow-2xs"
            >
              <img
                src={IMAGES.huzoorAuthentic}
                alt="Sajjan Saeen — Tahiri Foundation UK"
                width={400}
                height={500}
                className="w-full h-auto object-contain block"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Bottom: Name Directly Below The Photograph with Official Content */}
          <div className="p-6 sm:p-8 text-center space-y-3">
            
            {/* Primary Name */}
            <h2
              id="sajjan-saeen-heading"
              className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0B3095] tracking-tight leading-tight"
            >
              Sajjan Saeen
            </h2>

            {/* Subtle Heritage Gold line/accent underneath */}
            <div className="w-12 h-[2px] bg-[#C5A15A] mx-auto pt-0.5" />

            {/* Official Introduction from existing content */}
            <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed max-w-sm mx-auto pt-2">
              Spiritual lineage of Dargah Allahabad Sharif, Sindh. Dedicated to reviving the pristine Sunnah, silent heart remembrance (Zikr-e-Qalbi), and conveying authentic sacred knowledge.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5">
              <button
                id="card-learn-sajjan-saeen-btn"
                onClick={() => onNavigate('sajjan-saeen')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xs hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B3095] focus:ring-offset-2"
              >
                <span>Learn About Sajjan Saeen</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
              </button>

              <button
                id="card-explore-heritage-btn"
                onClick={() => onNavigate('shajra')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F9FF] hover:bg-white text-[#0B3095] border border-[#E4E9F2] font-semibold text-xs sm:text-sm transition-all duration-300 shadow-2xs hover:shadow-xs focus:outline-none"
              >
                <span>Explore Shajra Shareef</span>
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

