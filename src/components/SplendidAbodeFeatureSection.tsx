import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../data/categories';
import { OrnamentalDivider } from './OrnamentalDivider';

interface SplendidAbodeFeatureSectionProps {
  onNavigate: (page: 'home' | 'shajra' | 'abode', articleId?: string) => void;
}

export const SplendidAbodeFeatureSection: React.FC<SplendidAbodeFeatureSectionProps> = ({
  onNavigate,
}) => {
  return (
    <section
      id="homepage-abode-feature-section"
      className="py-10 sm:py-14 md:py-18 lg:py-24 bg-[#F7F9FF] text-[#111827] relative border-b border-[#E4E9F2]"
    >
      {/* Subtle Islamic pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0B3095]/20 bg-white text-[11px] sm:text-xs text-[#0B3095] font-semibold tracking-wider uppercase"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#0B3095]" aria-hidden="true" focusable="false" />
            <span>Sacred Knowledge Library</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-1 sm:space-y-1.5"
          >
            <h2
              id="abode-feature-heading"
              className="font-serif-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3095] leading-tight"
            >
              The Splendid Abode of the Friend
            </h2>
            <p className="font-arabic text-lg sm:text-2xl md:text-3xl text-[#0B3095]/85 font-normal pt-0.5">
              جلوہ گاہِ دوست
            </p>
          </motion.div>

          <OrnamentalDivider accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-[#5B6472] leading-relaxed max-w-2xl mx-auto"
          >
            A repository of classical spiritual treatises, letters (Maktubat), and practical
            discourses compiled for earnest seekers traversing the Naqshbandi Mujaddidi path.
          </motion.p>
        </div>

        {/* Categories Grid: Responsive columns */}
        <div className="mt-6 sm:mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-7 border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2.5 sm:space-y-3">
                {/* Header: Badge & Arabic */}
                <div className="flex items-center justify-between gap-3">
                  <span className="px-2 py-0.5 rounded-md bg-[#EEF3FF] text-[10px] sm:text-[11px] font-semibold text-[#0B3095] tracking-wide">
                    Treatises
                  </span>
                  <span className="font-arabic text-xs sm:text-sm text-[#0B3095]/70 font-semibold">
                    {cat.arabicTitle}
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="font-serif-display text-base sm:text-lg lg:text-xl font-bold text-[#0B3095] group-hover:text-[#1746B8] transition-colors leading-snug">
                  {cat.title}
                </h3>

                {/* Thin gold decorative accent */}
                <div className="w-7 sm:w-8 h-[1.5px] bg-[#C5A15A]" />

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed line-clamp-3">
                  {cat.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-3 sm:pt-4 mt-2.5 sm:mt-3 border-t border-[#E4E9F2]">
                <button
                  onClick={() => onNavigate('abode')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B3095] group-hover:text-[#1746B8] transition-colors focus:outline-none"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" focusable="false" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Complete Catalog Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group bg-[#0B3095] text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-7 border border-[#0B3095] hover:bg-[#1746B8] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="px-2 py-0.5 rounded-md bg-white/15 text-[10px] sm:text-[11px] font-semibold text-white tracking-wide">
                  Complete Catalog
                </span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A15A]" aria-hidden="true" focusable="false" />
              </div>

              <h3 className="font-serif-display text-base sm:text-lg lg:text-xl font-bold text-white leading-snug">
                Browse Full Catalog
              </h3>

              <div className="w-7 sm:w-8 h-[1.5px] bg-[#C5A15A]" />

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Access the complete searchable repository with thematic tags, Arabic script quotations,
                and chapter progression.
              </p>
            </div>

            <div className="pt-3 sm:pt-4 mt-2.5 sm:mt-3 border-t border-white/20">
              <button
                onClick={() => onNavigate('abode')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#C5A15A] transition-colors focus:outline-none"
              >
                <span>Enter Library</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" focusable="false" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
