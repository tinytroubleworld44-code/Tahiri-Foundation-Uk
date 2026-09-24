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
    { num: 1, title: 'Sayyiduna Muhammad al-Mustafa', arabic: 'سيدنا محمد المصطفى ﷺ', role: 'Seal of the Prophets & Source of Gnosis' },
    { num: 2, title: 'Hadhrat Abu Bakr as-Siddiq', arabic: 'سيدنا أبو بكر الصديق رضى الله عنه', role: 'Foremost Companion & Custodian of Zikr-e-Khafi' },
    { num: 17, title: 'Khwaja Bahauddin Naqshband', arabic: 'الخواجه بهاء الدين نقشبند رحمه الله', role: 'The Master of the Imprint & Name of the Order' },
    { num: 25, title: 'Imam Rabbani Mujaddid Alf Thani', arabic: 'الإمام الرباني مجدد ألف ثاني رحمه الله', role: 'Reviver of the Second Millennium' },
    { num: 40, title: 'Hadhrat Khwaja Allah Bakhsh (Sohna Saeen)', arabic: 'خواجه الله بخش سوہڻا سائين رحمه الله', role: 'Founder of Dargah Allahabad Sharif' },
    { num: 41, title: 'Khwaja Muhammad Tahir (Mahboob Sajjan Saeen)', arabic: 'خواجه محمد طاهر سڄڻ سائين مدظله العالي', role: 'Current Living Spiritual Guide' },
  ];

  return (
    <section
      id="homepage-shajra-feature-section"
      className="py-24 lg:py-32 bg-white text-[#111827] relative border-b border-[#E4E9F2]"
    >
      {/* Extremely subtle Islamic geometric background pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context, Author Credential, CTA */}
          <div className="lg:col-span-6 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-widest text-[#0B3095] block"
            >
              The Spiritual Lineage
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1.5"
            >
              <h2
                id="shajra-feature-heading"
                className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3095] leading-[1.18]"
              >
                Shajra Shareef
              </h2>
              <p className="font-serif-display text-xl sm:text-2xl text-[#5B6472] font-normal">
                The Blessed Spiritual Genealogy
              </p>
            </motion.div>

            {/* Tiny Heritage Gold Divider */}
            <div className="w-12 h-[2px] bg-[#C5A15A]" />

            {/* Manuscript-inspired Official Introductory Box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] space-y-3 shadow-xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A15A]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3095]">
                  Official Lineage Introduction
                </span>
              </div>
              <p className="text-sm sm:text-base font-serif-display text-[#111827] leading-relaxed italic">
                “{SHAJRA_INTRO}”
              </p>
              <div className="text-xs text-[#5B6472] space-y-1 pt-2 border-t border-[#E4E9F2]">
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-[#5B6472] leading-relaxed"
            >
              The 41-link Shajra Shareef preserves the spiritual lineage of the Naqshbandi Mujaddidi Tahiri tradition.
            </motion.p>

            {/* Premium Explore Shajra Shareef Interaction */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <button
                id="shajra-feature-explore-btn"
                onClick={() => onNavigate('shajra')}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B3095]"
              >
                <Compass className="w-4 h-4 text-white/90" aria-hidden="true" focusable="false" />
                <span>Explore Shajra Shareef</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" focusable="false" />
                <span className="absolute bottom-1.5 left-7 right-7 h-[1px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Refined Vertical Lineage Preview with Connecting Line */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#F7F9FF] border border-[#E4E9F2] rounded-2xl p-6 sm:p-8 relative shadow-xs">
              
              {/* Thin Royal Blue Vertical Line with Gold Accent */}
              <div className="absolute left-[38px] sm:left-[46px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-[#0B3095] via-[#0B3095]/40 to-[#C5A15A]" />

              <div className="space-y-5 relative">
                {milestones.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Node circle with gold border on hover */}
                    <div className="relative z-10 flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#0B3095]/30 group-hover:border-[#C5A15A] shadow-xs flex items-center justify-center text-xs sm:text-sm font-bold text-[#0B3095] transition-all duration-300">
                      {item.num}
                    </div>

                    {/* Node Details */}
                    <div className="flex-1 bg-white p-3.5 sm:p-4 rounded-xl border border-[#E4E9F2] group-hover:border-[#0B3095]/40 transition-all duration-300 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-serif-display font-bold text-base text-[#111827] group-hover:text-[#0B3095] transition-colors">
                          {item.title}
                        </h4>
                        <span className="font-arabic text-xs font-semibold text-[#0B3095]/80">
                          {item.arabic}
                        </span>
                      </div>
                      <p className="text-xs text-[#5B6472] mt-1 leading-relaxed">
                        {item.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Notice */}
              <div className="mt-6 pt-4 border-t border-[#E4E9F2] text-center">
                <span className="text-xs text-[#5B6472]">
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
