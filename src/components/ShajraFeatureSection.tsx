import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { SHAJRA_AUTHOR, SHAJRA_TRANSLATOR, SHAJRA_INTRO } from '../data/shajra';

interface ShajraFeatureSectionProps {
  onNavigate: (page: 'home' | 'shajra' | 'abode') => void;
}

export const ShajraFeatureSection: React.FC<ShajraFeatureSectionProps> = ({ onNavigate }) => {
  // 6 selected milestones representing the golden transmission
  const milestones = [
    { num: 1, title: 'Sayyiduna Muhammad al-Mustafa', role: 'Seal of the Prophets' },
    { num: 2, title: 'Hadrat Abu Bakr as-Siddiq', role: 'Custodian of Zikr-e-Khafi' },
    { num: 17, title: 'Khwaja Bahauddin Naqshband', role: 'Master of the Naqshbandi tradition' },
    { num: 25, title: 'Imam Rabbani Mujaddid Alf Thani', role: 'Reviver of the Second Millennium' },
    { num: 40, title: 'Hadrat Khwaja Allah Bakhsh', role: 'Huzoor Sohna Saeen' },
    { num: 41, title: 'Hadrat Khwaja Muhammad Tahir', role: 'Mahboob Sajjan Saeen' },
  ];

  return (
    <section
      id="homepage-shajra-feature-section"
      className="py-10 sm:py-14 md:py-18 lg:py-24 bg-white text-[#111827] relative border-b border-[#E4E9F2]"
    >
      {/* Extremely subtle Islamic geometric background pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />

      <div className="desktop-container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Context, Author Credential, CTA */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 lg:space-y-5">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#0B3095] block"
            >
              The Spiritual Lineage
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h2
                id="shajra-feature-heading"
                className="font-serif-display text-xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0B3095] leading-[1.18]"
              >
                Shajra Shareef
              </h2>
              <p className="font-serif-display text-base sm:text-xl md:text-2xl text-[#5B6472] font-normal">
                The Blessed Spiritual Genealogy
              </p>
            </motion.div>

            {/* Tiny Heritage Gold Divider */}
            <div className="w-12 sm:w-14 h-[2px] bg-[#C5A15A]" />

            {/* Manuscript-inspired Official Introductory Box */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-3.5 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] space-y-2 sm:space-y-2.5 shadow-xs"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0B3095]">
                  Official Lineage Introduction
                </span>
              </div>
              <p className="text-xs sm:text-sm lg:text-[15px] font-serif-display text-[#111827] leading-relaxed italic">
                “{SHAJRA_INTRO}”
              </p>
              <div className="text-[10px] sm:text-[11px] lg:text-xs text-[#5B6472] space-y-0.5 pt-1.5 border-t border-[#E4E9F2]">
                <p>
                  Author: <strong className="text-[#0B3095]">{SHAJRA_AUTHOR}</strong>
                </p>
                <p>
                  English Translation: <strong className="text-[#0B3095]">{SHAJRA_TRANSLATOR}</strong>
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base lg:text-[16px] text-[#5B6472] leading-relaxed"
            >
              The 41-link Shajra Shareef preserves the spiritual lineage of the Naqshbandi Mujaddidi Tahiri tradition.
            </motion.p>

            {/* Explore Shajra Shareef CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-1"
            >
              <button
                id="shajra-feature-explore-btn"
                onClick={() => onNavigate('shajra')}
                className="w-full sm:w-auto h-11 sm:h-12 inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xs hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B3095]"
              >
                <Compass className="w-4 h-4 text-white/90" aria-hidden="true" focusable="false" />
                <span>Explore Shajra Shareef</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Compact Selected Masters Preview */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#F7F9FF] border border-[#E4E9F2] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 lg:p-6 shadow-xs">
              
              <div className="pb-2.5 border-b border-[#E4E9F2] flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0B3095]">
                  Selected Masters Preview
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#5B6472] font-medium">
                  6 of 41 Masters
                </span>
              </div>

              {/* Compact List: 2-column on tablet, 1-column on mobile & desktop right column */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
                {milestones.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-2.5 sm:gap-3 bg-white p-2 sm:p-2.5 rounded-xl border border-[#E4E9F2] hover:border-[#0B3095]/30 transition-all shadow-2xs"
                  >
                    {/* Node circle badge */}
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F7F9FF] border border-[#0B3095]/20 flex items-center justify-center text-[11px] sm:text-xs font-bold text-[#0B3095]">
                      {String(item.num).padStart(2, '0')}
                    </div>

                    {/* Node Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-display font-bold text-xs sm:text-sm text-[#111827] truncate">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#5B6472] truncate">
                        {item.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Notice */}
              <div className="mt-3 pt-2.5 border-t border-[#E4E9F2] text-center">
                <span className="text-[10px] sm:text-xs text-[#5B6472]">
                  Chronological succession from the Seal of the Prophets (S.A.W.) to Dargah Allahabad Sharif.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
