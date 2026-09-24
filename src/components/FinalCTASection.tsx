import React from 'react';
import { Compass, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface FinalCTASectionProps {
  onNavigate: (page: 'home' | 'shajra' | 'abode') => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="homepage-final-cta-section"
      className="py-24 lg:py-32 bg-[#F7F9FF] text-[#111827] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E4E9F2] shadow-sm text-center space-y-6"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0B3095] block">
            Begin Your Spiritual Journey
          </span>

          <h2
            id="final-cta-heading"
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3095] leading-tight max-w-2xl mx-auto"
          >
            Enter the Sanctuary of Sacred Wisdom &amp; Continuous Grace
          </h2>

          <OrnamentalDivider accent="gold" />

          <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed max-w-2xl mx-auto">
            Whether seeking the spiritual genealogy of the Naqshbandi masters or exploring authentic
            discourses on heart remembrance, the resources of Tahiri Foundation UK are openly
            available for every sincere seeker.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.button
              id="final-cta-shajra-btn"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onNavigate('shajra');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-sm transition-colors duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#0B3095]"
            >
              <Compass className="w-4 h-4 text-white/90" aria-hidden="true" focusable="false" />
              <span>Explore Shajra Shareef</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" focusable="false" />
            </motion.button>

            <motion.button
              id="final-cta-abode-btn"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onNavigate('abode');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#0B3095]/30 text-[#0B3095] hover:bg-[#EEF3FF] hover:border-[#0B3095] font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#0B3095]"
            >
              <BookOpen className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
              <span>The Splendid Abode of the Friend</span>
            </motion.button>
          </div>

          <div className="pt-6">
            <span className="text-xs text-[#5B6472]">
              Dargah Allahabad Sharif • Kandiaro, Sindh • Tahiri Foundation UK
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
