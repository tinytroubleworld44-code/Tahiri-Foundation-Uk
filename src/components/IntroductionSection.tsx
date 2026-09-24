import React from 'react';
import { motion } from 'motion/react';
import { Compass, BookOpen, Heart } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const IntroductionSection: React.FC = () => {
  return (
    <section
      id="homepage-intro-section"
      className="py-20 lg:py-28 bg-white text-[#111827] relative border-b border-[#E4E9F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow and Editorial Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0B3095] block">
              About the Foundation
            </span>
            
            <h2
              id="intro-heading"
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3095] leading-[1.18]"
            >
              A Beacon of Authentic Sufi Heritage &amp; Sacred Knowledge
            </h2>

            {/* Thin gold decorative line */}
            <div className="w-16 h-[2px] bg-[#C5A15A] my-3" />

            <p className="font-serif-display text-lg sm:text-xl text-[#5B6472] italic font-normal">
              Connecting seekers worldwide with the living spiritual chain of Dargah Allahabad Sharif.
            </p>
          </motion.div>

          {/* Right Column: Authentic Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#111827]/85"
          >
            <p>
              <strong className="text-[#0B3095] font-semibold">Tahiri Foundation UK</strong> serves as a dedicated platform for conveying the pure,
              traditional teachings of Islamic spirituality (Tasawwuf) rooted in the exalted
              Naqshbandi Mujaddidi Tahiri tradition.
            </p>
            <p>
              Connected directly with <strong className="text-[#0B3095] font-semibold">Dargah Allahabad Sharif</strong> in Sindh, Pakistan—founded
              by the illustrious saint Hadhrat Khwaja Allah Bakhsh Abbasi, widely revered as{' '}
              <strong className="text-[#0B3095] font-semibold">Huzoor Sohna Saeen</strong> (Allah’s blessings be upon him)—our mission is to provide
              authentic spiritual nourishment, foster adherence to the Prophetic Sunnah, and revive
              the practice of silent heart remembrance (Zikr-e-Qalbi).
            </p>
            <p className="text-sm sm:text-base text-[#5B6472]">
              Through our comprehensive educational library, <em>The Splendid Abode of the Friend</em>,
              and the faithful preservation of the <em>Shajra Shareef</em>, we offer seekers a dependable
              sanctuary of sacred wisdom providing authentic spiritual guidance rooted in traditional Islamic knowledge.
            </p>
          </motion.div>

        </div>

        {/* Institutional Pillars: Typography & Subtle Geometric Accents (No Photos) */}
        <div className="mt-16 pt-12 border-t border-[#E4E9F2] grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] space-y-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-[#E4E9F2] flex items-center justify-center text-[#0B3095]">
              <Compass className="w-4 h-4" aria-hidden="true" focusable="false" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#0B3095]">Direct Sacred Lineage</h3>
            <p className="text-xs text-[#5B6472] leading-relaxed">
              Preserving the spiritual lineage tracing back to the Holy Prophet Muhammad (peace be upon him) through Dargah Allahabad Sharif.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] space-y-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-[#E4E9F2] flex items-center justify-center text-[#0B3095]">
              <BookOpen className="w-4 h-4" aria-hidden="true" focusable="false" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#0B3095]">Authentic Texts</h3>
            <p className="text-xs text-[#5B6472] leading-relaxed">
              Studying and disseminating the classic treatises authored by the Shaykhs, including the profound chapters of <em>The Splendid Abode of the Friend</em>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] space-y-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-[#E4E9F2] flex items-center justify-center text-[#0B3095]">
              <Heart className="w-4 h-4" aria-hidden="true" focusable="false" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#0B3095]">Zikr-e-Qalbi &amp; Adab</h3>
            <p className="text-xs text-[#5B6472] leading-relaxed">
              Cultivating the contemplative remembrance of the heart, spiritual companionship (Suhba), and service to humanity with sincerity.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

