import React from 'react';
import { motion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SpiritualReflectionSection: React.FC = () => {
  return (
    <section
      id="homepage-spiritual-reflection-section"
      className="py-10 sm:py-14 md:py-18 lg:py-24 bg-[#061A4A] text-white relative overflow-hidden"
    >
      {/* Subtle slow glowing ambient light and geometric star watermark */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0B3095]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#C5A15A] block"
        >
          Sacred Contemplation
        </motion.span>

        {/* The Noble Qur'anic Verse in Classical Arabic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="my-3.5 sm:my-6 md:my-8 py-1 sm:py-3"
        >
          <p
            id="quranic-verse-arabic"
            dir="rtl"
            className="font-arabic text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-[1.8] tracking-wide"
          >
            أَلَا بِذِكْرِ اللّٰهِ تَطْمَئِنُّ الْقُلُوبُ
          </p>
        </motion.div>

        {/* Surah Reference & Gold Accent */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-8 sm:w-12 bg-[#C5A15A]/40" />
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C5A15A] font-semibold">
            Surah Ar-Ra’d • 13:28
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-[#C5A15A]/40" />
        </div>

        {/* English Translation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif-display text-base sm:text-xl md:text-2xl lg:text-3xl text-white/95 italic font-normal my-4 sm:my-6 md:my-8 max-w-3xl mx-auto leading-relaxed"
        >
          “Unquestionably, by the remembrance of Allah hearts are assured.”
        </motion.blockquote>

        {/* Contemplative Commentary on Zikr-e-Qalbi */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/75 leading-relaxed"
        >
          <p>
            The venerable masters of the Naqshbandi Mujaddidi way explain that when the tongue falls
            silent and the consciousness is turned inward, the Name of Allah penetrates into the beating
            heart. In that quiet chamber, the turbulence of worldly anxiety recedes, giving way to profound
            inner tranquillity (Itminan) and Divine peace.
          </p>
          <p className="font-serif-display text-sm sm:text-base md:text-lg text-[#C5A15A] italic">
            “Cleanse the vessel of the heart through silent invocation, and it shall reflect the light of the eternal Beloved.”
          </p>
        </motion.div>

        <OrnamentalDivider light accent="gold" className="mt-8 sm:mt-10" />

      </div>
    </section>
  );
};
