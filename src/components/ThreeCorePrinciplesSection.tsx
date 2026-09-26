import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Compass, ArrowRight } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface ThreeCorePrinciplesProps {
  onNavigate?: (page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi') => void;
}

export const ThreeCorePrinciplesSection: React.FC<ThreeCorePrinciplesProps> = ({ onNavigate }) => {
  const principles = [
    {
      number: '01',
      title: 'Pristine Sunnah',
      arabic: 'اتِّبَاعُ السُّنَّةِ الشَّرِيفَةِ',
      description: 'Adherence to the Prophetic Sunnah as the foundation of the spiritual path.',
      icon: ShieldCheck,
      page: 'abode' as const,
      linkText: 'Explore Treatises',
    },
    {
      number: '02',
      title: 'Zikr-e-Qalbi',
      arabic: 'الذِّكْرُ الْقَلْبِيُّ الْخَفِيُّ',
      description: 'Silent remembrance of Allah through inward awareness and attentive remembrance.',
      icon: HeartHandshake,
      page: 'zikr-e-qalbi' as const,
      linkText: 'Learn About Zikr-e-Qalbi',
    },
    {
      number: '03',
      title: 'Living Chain',
      arabic: 'السِّلْسِلَةُ الْمُتَّصِلَةُ',
      description: 'The spiritual lineage connecting the Naqshbandi Mujaddidi tradition through its authorized guides.',
      icon: Compass,
      page: 'shajra' as const,
      linkText: 'Explore Shajra Shareef',
    },
  ];

  return (
    <section
      id="homepage-principles-section"
      className="py-10 sm:py-14 md:py-18 lg:py-24 bg-[#F7F9FF] text-[#111827] relative border-b border-[#E4E9F2]"
    >
      <div className="desktop-container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Responsive Typography & Spacing */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#0B3095] block"
          >
            Pillars of the Spiritual Path
          </motion.span>

          <motion.h2
            id="principles-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-display text-xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0B3095] leading-tight"
          >
            Three Foundational Principles
          </motion.h2>

          <OrnamentalDivider accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-[16px] text-[#5B6472] leading-relaxed max-w-2xl mx-auto"
          >
            The following principles reflect key themes of the Naqshbandi Mujaddidi Tahiri tradition,
            guiding the seeker toward inner peace, moral excellence, and Divine remembrance.
          </motion.p>
        </div>

        {/* Responsive Grid: Mobile 1-col, Tablet 2-col balanced, Desktop (>=1025px) 3-col ONE ROW */}
        <div className="mt-6 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 desktop-grid-3 gap-3 sm:gap-5 lg:gap-8">
          {principles.map((item, idx) => {
            const IconComponent = item.icon;
            const isThirdCard = idx === 2;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative bg-white p-3.5 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:-translate-y-1 shadow-xs hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between ${
                  isThirdCard
                    ? 'md:col-span-2 md:max-w-md md:mx-auto desktop-col-span-1 w-full'
                    : 'w-full'
                }`}
              >
                <div className="space-y-2 sm:space-y-3">
                  {/* Top Bar: Large Number + Icon */}
                  <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-[#E4E9F2]">
                    <span className="font-serif-display text-xl sm:text-3xl lg:text-4xl font-bold text-[#0B3095]/35 group-hover:text-[#0B3095] group-hover:translate-x-0.5 transition-all duration-300">
                      {item.number}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F7F9FF] border border-[#E4E9F2] flex items-center justify-center text-[#0B3095] group-hover:bg-[#0B3095] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" focusable="false" />
                    </div>
                  </div>

                  {/* Title & Arabic */}
                  <div className="space-y-0.5">
                    <h3 className="font-serif-display text-base sm:text-lg lg:text-[22px] font-bold text-[#111827] group-hover:text-[#0B3095] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="font-arabic text-xs sm:text-sm lg:text-base text-[#0B3095]/75 font-normal">
                      {item.arabic}
                    </p>
                  </div>

                  {/* Gold Accent Line */}
                  <div className="w-6 sm:w-7 h-[1.5px] bg-[#C5A15A] group-hover:w-12 transition-all duration-300" />

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm lg:text-[15px] lg:leading-relaxed text-[#5B6472]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="pt-2.5 sm:pt-3.5 mt-2 sm:mt-2.5 border-t border-[#E4E9F2]/70 flex items-center justify-between">
                  {onNavigate ? (
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold text-[#0B3095] group-hover:text-[#1746B8] group-hover:translate-x-0.5 transition-all py-0.5"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A15A]" aria-hidden="true" focusable="false" />
                    </button>
                  ) : (
                    <span className="text-[11px] font-semibold text-[#0B3095] uppercase tracking-wider">
                      Foundational Discipline
                    </span>
                  )}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B3095]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
