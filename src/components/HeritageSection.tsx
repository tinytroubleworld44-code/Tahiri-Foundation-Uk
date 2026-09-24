import React from 'react';
import { motion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const HeritageSection: React.FC = () => {
  return (
    <section
      id="homepage-heritage-section"
      className="py-24 lg:py-32 bg-[#0B3095] text-white relative overflow-hidden"
    >
      {/* Ambient background styling & subtle geometric overlay */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1746B8] rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#061A4A] rounded-full blur-3xl pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Large Confident Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#C5A15A] block"
          >
            Spiritual Genealogy &amp; Tradition
          </motion.span>
          
          <motion.h2
            id="heritage-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Spiritual Heritage. Sacred Knowledge. Living Tradition.
          </motion.h2>

          <OrnamentalDivider light accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            A luminous lineage bridging the earliest generation of Islam with contemporary seekers
            of peace, spiritual purification, and intimate Divine presence.
          </motion.p>
        </div>

        {/* Narrative Flow / Three Foundations */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Station 1: The Siddiqi Origin */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 rounded-2xl bg-[#061A4A]/70 border border-white/15 backdrop-blur-xs space-y-4 hover:border-[#C5A15A]/60 hover:-translate-y-1 transition-all duration-500 ease-out"
          >
            <span className="font-serif-display text-3xl font-bold text-[#C5A15A] block">
              ۰۱
            </span>
            <h3 className="font-serif-display text-xl font-bold text-white">
              The Siddiqi Origin
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Traced back primarily to <strong>Hadhrat Abu Bakr as-Siddiq (R.A.)</strong>, who received
              the silent inward remembrance (Zikr-e-Khafi) from the Holy Prophet (S.A.W.) inside the Cave of Thawr.
              This sober way avoids noise and ostentation, establishing quiet intimacy between the servant and the Creator.
            </p>
          </motion.div>

          {/* Station 2: The Mujaddidi Renewal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 rounded-2xl bg-[#061A4A]/70 border border-white/15 backdrop-blur-xs space-y-4 hover:border-[#C5A15A]/60 hover:-translate-y-1 transition-all duration-500 ease-out"
          >
            <span className="font-serif-display text-3xl font-bold text-[#C5A15A] block">
              ۰۲
            </span>
            <h3 className="font-serif-display text-xl font-bold text-white">
              The Mujaddidi Renewal
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Revitalized at the dawn of the second Islamic millennium by <strong>Imam Rabbani Mujaddid Alf Thani</strong>{' '}
              (Shaikh Ahmad Sirhindi Rah.), who harmonized the inner states of Tariqah under the undisputed supremacy of Shari’ah,
              affirming that spiritual ecstasy without the Sunnah is a perilous illusion.
            </p>
          </motion.div>

          {/* Station 3: The Tahiri Heritage */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 rounded-2xl bg-[#061A4A]/70 border border-white/15 backdrop-blur-xs space-y-4 hover:border-[#C5A15A]/60 hover:-translate-y-1 transition-all duration-500 ease-out"
          >
            <span className="font-serif-display text-3xl font-bold text-[#C5A15A] block">
              ۰۳
            </span>
            <h3 className="font-serif-display text-xl font-bold text-white">
              The Tahiri Heritage
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Carried into modern times through <strong>Pir Mitha Saeen</strong> and <strong>Huzoor Sohna Saeen</strong>{' '}
              at Dargah Allahabad Sharif, and today nurtured by <strong>Mahboob Sajjan Saeen</strong>, making sacred
              contemplation and heart awakening accessible to seekers worldwide.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
