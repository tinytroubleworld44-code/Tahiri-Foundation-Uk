import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets';
import { Breadcrumbs } from './Breadcrumbs';
import { OrnamentalDivider } from './OrnamentalDivider';

interface SajjanSaeenPageProps {
  onNavigate: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string,
    eventId?: string
  ) => void;
}

export const SajjanSaeenPage: React.FC<SajjanSaeenPageProps> = ({ onNavigate }) => {
  return (
    <div id="sajjan-saeen-page" className="min-h-screen bg-white text-[#111827] pb-24">
      {/* Visible Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            label: 'Sajjan Saeen',
            url: '/sajjan-saeen',
          },
        ]}
      />

      {/* Hero Header in Royal Blue */}
      <section className="bg-gradient-to-b from-[#061A4A] to-[#0B3095] text-white py-10 sm:py-16 lg:py-20 relative overflow-hidden border-b border-[#0B3095]">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-15 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20 bg-white/10 text-[10px] sm:text-xs text-[#C5A15A] uppercase tracking-wider font-semibold backdrop-blur-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Lineage &amp; Guidance</span>
          </motion.div>

          <motion.h1
            id="sajjan-saeen-h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Sajjan Saeen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif-display text-base sm:text-xl md:text-2xl text-amber-200/90 font-medium"
          >
            Spiritual Guide of the Naqshbandi Mujaddidi Tahiri Lineage
          </motion.p>

          <OrnamentalDivider light accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/85 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Dedicated to the revival of the pristine Prophetic Sunnah, the instruction of silent heart remembrance (Zikr-e-Qalbi), and guiding seekers towards genuine spiritual devotion.
          </motion.p>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-10 sm:space-y-14">
        
        {/* Section 1: Portrait & Spiritual Heritage */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Authentic Photograph Frame */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[240px] sm:max-w-xs md:max-w-sm rounded-xl sm:rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] p-3 sm:p-4 shadow-sm text-center">
              <div className="rounded-lg sm:rounded-xl overflow-hidden bg-white border border-[#E4E9F2] shadow-2xs mb-3">
                <img
                  src={IMAGES.huzoorAuthentic}
                  alt="Sajjan Saeen — Tahiri Foundation UK"
                  width={340}
                  height={420}
                  className="w-full h-auto object-contain block mx-auto max-h-[300px] sm:max-h-[380px]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              <div className="font-serif-display text-base sm:text-lg font-bold text-[#0B3095]">
                Sajjan Saeen
              </div>
              <p className="text-xs text-[#5B6472] mt-0.5 font-medium">
                Hadrat Khwaja Muhammad Tahir Bakhshi
              </p>
            </div>
          </div>

          {/* Text Content: Spiritual Heritage */}
          <div className="md:col-span-7 space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#0B3095] block">
              Continuous Lineage
            </span>
            <h2
              id="sajjan-saeen-heritage-heading"
              className="font-serif-display text-xl sm:text-2xl md:text-3xl font-bold text-[#0B3095] tracking-tight leading-tight"
            >
              Sajjan Saeen — Spiritual Heritage
            </h2>
            <div className="w-12 h-[2px] bg-[#C5A15A]" />
            <p className="text-xs sm:text-sm md:text-base text-[#334155] leading-relaxed">
              In the Naqshbandi Mujaddidi spiritual order, guidance is inherited through continuous, authorized succession (Ijazah) directly linking masters from generation to generation back to Hadhrat Abu Bakr as-Siddiq (R.A.) and the Holy Prophet Muhammad (S.A.W.).
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#334155] leading-relaxed">
              Under the direct spiritual training and authorization of Hadhrat Khwaja Sohna Saeen (R.A.), Sajjan Saeen carries forward the mission of spiritual purification (Tazkiyah al-Nafs), inculcating love for the Divine Creator, and establishing spiritual circles across Pakistan and international communities.
            </p>
            <div className="pt-1 sm:pt-2">
              <button
                id="sajjan-explore-shajra-link"
                onClick={() => onNavigate('shajra')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B3095] hover:text-[#1746B8] hover:underline"
              >
                <Compass className="w-4 h-4 text-[#0B3095]" />
                <span>View Complete Shajra Shareef (Spiritual Lineage)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Dargah Allahabad Sharif Connection */}
        <section className="bg-[#F7F9FF] rounded-xl sm:rounded-2xl border border-[#E4E9F2] p-4 sm:p-6 md:p-8 space-y-3.5 sm:space-y-4">
          <div className="flex items-center gap-2 text-[#0B3095]">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A15A]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
              Spiritual Center
            </span>
          </div>

          <h2
            id="sajjan-saeen-dargah-heading"
            className="font-serif-display text-lg sm:text-2xl md:text-3xl font-bold text-[#0B3095] tracking-tight"
          >
            Dargah Allahabad Sharif, Sindh, Pakistan
          </h2>

          <div className="w-12 h-[2px] bg-[#C5A15A]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-1 items-center">
            <div className="md:col-span-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base text-[#334155] leading-relaxed">
              <p>
                The central seat of the Tahiri order serves as a sanctuary of worship, scholarly instruction, continuous congregational Langar (free communal meals), and daily assemblies of silent Dhikr.
              </p>
              <p>
                Every year, pilgrims gather for the Annual Urs Mubarak, seeking spiritual renewal and deepening their practice of Islamic teachings.
              </p>
            </div>

            <div className="md:col-span-4 bg-white rounded-xl border border-[#E4E9F2] p-3.5 sm:p-4 text-center space-y-2.5">
              <div className="text-[10px] sm:text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                Annual Gathering
              </div>
              <div className="font-serif-display text-base sm:text-lg font-bold text-[#0B3095]">
                Salana Urs Mubarak
              </div>
              <div className="text-xs text-[#0B3095] font-semibold">
                27–29 November 2026
              </div>
              <button
                id="sajjan-view-urs-btn"
                onClick={() => onNavigate('events', undefined, 'urs-mubarak-2026')}
                className="w-full py-2 px-3 rounded-lg bg-[#0B3095] hover:bg-[#1746B8] text-white text-xs font-semibold transition-colors"
              >
                View Urs 2026 Details
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Teachings & Spiritual Guidance */}
        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#0B3095] block">
              Pillars of Practice
            </span>
            <h2
              id="sajjan-saeen-teachings-heading"
              className="font-serif-display text-xl sm:text-2xl md:text-3xl font-bold text-[#0B3095] tracking-tight"
            >
              Sajjan Saeen — Teachings &amp; Spiritual Guidance
            </h2>
            <div className="w-12 h-[2px] bg-[#C5A15A]" />
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#334155] leading-relaxed">
            The core teachings emphasized by Sajjan Saeen are grounded in strict adherence to Islamic Law (Shari’ah) and inward realization (Tariqah). Key elements include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 pt-1">
            <div className="bg-white rounded-xl border border-[#E4E9F2] p-3.5 sm:p-5 shadow-2xs space-y-2">
              <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#0B3095]">
                Pristine Sunnah
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Adhering meticulously to the inward and outward character of the Holy Prophet Muhammad (S.A.W.) as the foundation of all spiritual advancement.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E4E9F2] p-3.5 sm:p-5 shadow-2xs space-y-2">
              <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#0B3095]">
                Zikr-e-Qalbi
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Instructing seekers in silent heart remembrance to purge malice, arrogance, and spiritual negligence through constant divine consciousness.
              </p>
              <button
                onClick={() => onNavigate('zikr-e-qalbi')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3095] hover:underline pt-1"
              >
                <span>Explore Zikr-e-Qalbi</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-white rounded-xl border border-[#E4E9F2] p-3.5 sm:p-5 shadow-2xs space-y-2">
              <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#0B3095]">
                Preserved Knowledge
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Disseminating authentic spiritual literature, notably the comprehensive masterwork <em>The Splendid Abode of the Friend</em> (Jalwah Gah-e-Dost).
              </p>
              <button
                onClick={() => onNavigate('abode')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3095] hover:underline pt-1"
              >
                <span>Read The Splendid Abode</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>

        {/* Navigation back / related */}
        <section className="pt-8 border-t border-[#E4E9F2] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-xs sm:text-sm font-semibold text-[#5B6472] hover:text-[#0B3095] transition-colors"
          >
            ← Return to Home
          </button>
          <button
            onClick={() => onNavigate('zikr-e-qalbi')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <span>Learn about Zikr-e-Qalbi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </main>
    </div>
  );
};
