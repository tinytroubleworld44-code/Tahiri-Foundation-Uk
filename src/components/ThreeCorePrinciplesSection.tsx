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
      description:
        'Strict adherence to Islamic Law (Shari’ah) as the indispensable vessel and prerequisite of Tariqah. In the Naqshbandi tradition, spiritual attainment is measured solely by conformity to the inward and outward conduct of the Holy Prophet (S.A.W.).',
      icon: ShieldCheck,
      page: 'abode' as const,
      linkText: 'Explore Treatises',
    },
    {
      number: '02',
      title: 'Zikr-e-Qalbi',
      arabic: 'الذِّكْرُ الْقَلْبِيُّ الْخَفِيُّ',
      description:
        'The silent, continuous invocation of the Divine Name upon the beating spiritual heart. Free from vocalization and ostentation, this sober method anchors divine awareness within the core of human consciousness through every breath.',
      icon: HeartHandshake,
      page: 'zikr-e-qalbi' as const,
      linkText: 'Learn About Zikr-e-Qalbi',
    },
    {
      number: '03',
      title: 'Living Chain',
      arabic: 'السِّلْسِلَةُ الْمُتَّصِلَةُ',
      description:
        'Continuous authorization (Ijazah) tracing unbroken from the noble Companions and the Prophet (S.A.W.) to Dargah Allahabad Sharif. The student receives direct spiritual transmission (Faiz) under the guidance of an authorized Murshid Kamil.',
      icon: Compass,
      page: 'shajra' as const,
      linkText: 'Explore Shajra Shareef',
    },
  ];

  return (
    <section
      id="homepage-principles-section"
      className="py-24 lg:py-32 bg-[#F7F9FF] text-[#111827] relative border-b border-[#E4E9F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#0B3095] block"
          >
            Pillars of the Spiritual Path
          </motion.span>

          <motion.h2
            id="principles-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3095] leading-tight"
          >
            Three Foundational Principles
          </motion.h2>

          <OrnamentalDivider accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#5B6472] leading-relaxed max-w-2xl mx-auto"
          >
            The following principles reflect key themes of the Naqshbandi Mujaddidi Tahiri tradition,
            guiding the seeker toward inner peace, moral excellence, and Divine remembrance.
          </motion.p>
        </div>

        {/* The 3 Editorial Feature Blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {principles.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white p-8 sm:p-9 rounded-2xl border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:-translate-y-1 shadow-xs hover:shadow-md transition-all duration-500 ease-out flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Elegant Large Number + Minimal Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E4E9F2]">
                    <span className="font-serif-display text-4xl sm:text-5xl font-bold text-[#0B3095]/40 group-hover:text-[#0B3095] group-hover:translate-x-1 transition-all duration-500">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F7F9FF] border border-[#E4E9F2] flex items-center justify-center text-[#0B3095] group-hover:bg-[#0B3095] group-hover:text-white transition-colors duration-500">
                      <IconComponent className="w-4 h-4" aria-hidden="true" focusable="false" />
                    </div>
                  </div>

                  {/* Title & Arabic */}
                  <div className="space-y-1">
                    <h3 className="font-serif-display text-2xl font-bold text-[#111827] group-hover:text-[#0B3095] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-arabic text-sm text-[#0B3095]/75 font-normal">
                      {item.arabic}
                    </p>
                  </div>

                  {/* Thin Heritage Gold Accent Line */}
                  <div className="w-8 h-[1.5px] bg-[#C5A15A] group-hover:w-16 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Marker / Action */}
                <div className="pt-6 mt-4 border-t border-[#E4E9F2]/70 flex items-center justify-between">
                  {onNavigate ? (
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3095] group-hover:text-[#1746B8] group-hover:translate-x-0.5 transition-all"
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
