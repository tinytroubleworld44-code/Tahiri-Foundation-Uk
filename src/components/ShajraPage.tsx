import React, { useState, useMemo } from 'react';
import { Search, MapPin, Compass, ShieldCheck, Filter, ArrowRight, BookOpen, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';
import {
  SHAJRA_CHAIN,
  SHAJRA_INTRO,
  SHAJRA_AUTHOR,
  SHAJRA_TRANSLATOR,
  SHAJRA_HONORIFICS,
} from '../data/shajra';
import { OrnamentalDivider } from './OrnamentalDivider';
import { Breadcrumbs } from './Breadcrumbs';

interface ShajraPageProps {
  onNavigate?: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string,
    eventId?: string
  ) => void;
}

export const ShajraPage: React.FC<ShajraPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [eraFilter, setEraFilter] = useState<'all' | 'early' | 'khorasan' | 'mujaddidi' | 'sindh'>('all');

  const filteredNodes = useMemo(() => {
    return SHAJRA_CHAIN.filter((node) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        node.name.toLowerCase().includes(q) ||
        (node.title && node.title.toLowerCase().includes(q)) ||
        (node.restingPlace && node.restingPlace.toLowerCase().includes(q)) ||
        (node.description && node.description.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      if (eraFilter === 'early') return node.number >= 1 && node.number <= 5;
      if (eraFilter === 'khorasan') return node.number >= 6 && node.number <= 23;
      if (eraFilter === 'mujaddidi') return node.number >= 24 && node.number <= 38;
      if (eraFilter === 'sindh') return node.number >= 39 && node.number <= 41;

      return true;
    });
  }, [searchQuery, eraFilter]);

  return (
    <div id="shajra-shareef-page" className="min-h-screen bg-white text-[#111827] pb-24">
      {/* Visible Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            label: 'Shajra Shareef',
            url: '/shajra-shareef',
          },
        ]}
      />
      
      {/* Page Header Hero in Royal Blue */}
      <section className="bg-gradient-to-b from-[#061A4A] to-[#0B3095] text-white py-16 lg:py-20 relative overflow-hidden border-b border-[#0B3095]">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-15 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs text-[#C5A15A] uppercase tracking-wider font-semibold backdrop-blur-xs"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Spiritual Lineage of the Masters</span>
          </motion.div>

          <motion.h1
            id="shajra-page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Shajra Shareef
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-arabic text-2xl sm:text-3xl text-white/90 dir-rtl font-normal"
          >
            شَجَرَہ شَرِيف سِلْسِلَہ عَالِيَہ نَقْشَبَنْدِيَہ مُجَدِّدِيَہ طَاهِرِيَہ
          </motion.p>

          <OrnamentalDivider light accent="gold" />

          {/* Authentic Description Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-2xl mx-auto p-5 rounded-2xl bg-[#061A4A]/60 border border-[#C5A15A]/40 text-sm sm:text-base font-serif-display italic text-white/95 leading-relaxed shadow-sm"
          >
            “{SHAJRA_INTRO}”
          </motion.div>

          {/* Author & Translator Attribution */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-white/90 pt-3">
            <div className="flex items-center gap-1.5">
              <span className="text-white/70">Author:</span>
              <strong className="text-[#C5A15A] font-semibold">{SHAJRA_AUTHOR}</strong>
            </div>
            <span className="hidden sm:inline opacity-40 text-white/50">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-white/70">English Translation:</span>
              <strong className="text-[#C5A15A] font-semibold">{SHAJRA_TRANSLATOR}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Search & Era Filter Controls */}
        <div className="bg-[#F7F9FF] p-5 rounded-2xl border border-[#E4E9F2] shadow-xs flex flex-col gap-4 mb-12">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#5B6472] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="shajra-search-input"
                type="text"
                placeholder="Search master or resting place..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-[#E4E9F2] text-xs sm:text-sm text-[#111827] placeholder-[#5B6472] focus:outline-none focus:border-[#0B3095] focus:ring-1 focus:ring-[#0B3095]"
              />
            </div>

            {/* Counter */}
            <div className="flex items-center gap-2 text-xs text-[#5B6472]">
              <ShieldCheck className="w-4 h-4 text-[#0B3095]" />
              <span>Showing <strong>{filteredNodes.length}</strong> of {SHAJRA_CHAIN.length} Blessed Masters</span>
            </div>
          </div>

          {/* Era Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-[#E4E9F2] text-xs">
            <span className="text-[#5B6472] font-medium flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3 h-3 text-[#0B3095]" />
              <span>Era:</span>
            </span>
            <button
              onClick={() => setEraFilter('all')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                eraFilter === 'all'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'bg-white border border-[#E4E9F2] text-[#5B6472] hover:text-[#0B3095]'
              }`}
            >
              All Masters (1–41)
            </button>
            <button
              onClick={() => setEraFilter('early')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                eraFilter === 'early'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'bg-white border border-[#E4E9F2] text-[#5B6472] hover:text-[#0B3095]'
              }`}
            >
              Early Companions (1–5)
            </button>
            <button
              onClick={() => setEraFilter('khorasan')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                eraFilter === 'khorasan'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'bg-white border border-[#E4E9F2] text-[#5B6472] hover:text-[#0B3095]'
              }`}
            >
              Central Asia &amp; Bukhara (6–23)
            </button>
            <button
              onClick={() => setEraFilter('mujaddidi')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                eraFilter === 'mujaddidi'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'bg-white border border-[#E4E9F2] text-[#5B6472] hover:text-[#0B3095]'
              }`}
            >
              Mujaddidi Revival (24–38)
            </button>
            <button
              onClick={() => setEraFilter('sindh')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                eraFilter === 'sindh'
                  ? 'bg-[#0B3095] text-white font-semibold'
                  : 'bg-white border border-[#E4E9F2] text-[#5B6472] hover:text-[#0B3095]'
              }`}
            >
              Dargah Allahabad Sharif (39–41)
            </button>
          </div>

        </div>

        {/* Vertical Genealogy Timeline / Manuscript Layout */}
        <div className="relative">
          
          {/* Central Vertical Line (hidden on mobile, centered on md+) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#0B3095] via-[#1746B8]/30 to-[#C5A15A]" />
          
          {/* Mobile Left-Hand Line */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-[#E4E9F2]" />

          <div className="space-y-10 sm:space-y-12">
            {filteredNodes.map((node, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={node.number}
                  id={`shajra-node-${node.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Indicator Node with Royal Blue & Gold Ring */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-xl bg-[#0B3095] border-2 border-[#C5A15A] flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:bg-[#1746B8] transition-all">
                    <span className="font-serif-display text-xs font-bold">
                      {node.number}
                    </span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`pl-14 md:pl-0 w-full md:w-1/2 ${
                      isEven ? 'md:pr-10' : 'md:pl-10'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E4E9F2] shadow-xs hover:border-[#0B3095]/40 hover:shadow-md transition-all duration-300 relative space-y-2.5">
                      
                      {/* 1. Station number */}
                      <span className="text-[11px] font-bold text-[#C5A15A] tracking-wider uppercase block">
                        Station #{node.number}
                      </span>

                      {/* 2. Master's English name */}
                      <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B3095] leading-snug">
                        {node.name}
                      </h3>

                      {/* 3. Arabic name */}
                      {node.arabicName && (
                        <div className="pt-0.5 pb-0.5">
                          <span className="font-arabic text-base sm:text-lg text-[#061A4A] font-medium dir-rtl block leading-relaxed" dir="rtl">
                            {node.arabicName}
                          </span>
                        </div>
                      )}

                      {/* 4. Traditional title / epithet */}
                      {node.title && (
                        <p className="text-xs sm:text-sm font-serif-display text-[#C5A15A] font-semibold italic">
                          {node.title}
                        </p>
                      )}

                      {/* 5. Existing verified description */}
                      {node.description && (
                        <p className="text-xs sm:text-sm text-[#111827]/85 leading-relaxed pt-0.5">
                          {node.description}
                        </p>
                      )}

                      {/* 6. Mazaar / Resting Place */}
                      {node.restingPlace && (
                        <div className="pt-2.5 border-t border-[#E4E9F2]/70 flex items-center gap-1.5 text-xs text-[#5B6472]">
                          <MapPin className="w-3.5 h-3.5 text-[#0B3095] shrink-0" />
                          <span>Mazaar / Resting Place: <strong className="text-[#111827]">{node.restingPlace}</strong></span>
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Translator & Honorifics Explanatory Note */}
        <div className="mt-20 p-8 rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] space-y-5 text-center max-w-3xl mx-auto">
          <OrnamentalDivider accent="gold" />
          
          <div className="space-y-1">
            <h4 className="font-serif-display text-lg font-bold text-[#0B3095]">
              Authentication &amp; Translation Notice
            </h4>
            <p className="text-sm text-[#5B6472]">
              Translated into English by: <strong className="text-[#0B3095]">{SHAJRA_TRANSLATOR}</strong>
            </p>
          </div>

          {/* Clean Explanatory Abbreviation Legend */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E4E9F2] text-xs text-[#5B6472] leading-relaxed text-left space-y-2">
            <h5 className="font-semibold text-[#0B3095] text-[11px] uppercase tracking-wider">
              Honorific Abbreviations Legend
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 border-t border-[#E4E9F2]/60">
              <div><strong className="text-[#0B3095]">S.A.W. :</strong> Sallallahu Alayhi Wasallam (Peace and blessings of Allah be upon him)</div>
              <div><strong className="text-[#0B3095]">R.A. :</strong> Radi Allahu Ta&apos;ala Anhu (May Allah be pleased with him)</div>
              <div><strong className="text-[#0B3095]">Rah. :</strong> Rahmatullah Alayh (May Allah&apos;s mercy be upon him)</div>
              <div><strong className="text-[#0B3095]">M.A. :</strong> Maddazilluhul Aali (May his exalted shade be prolonged)</div>
            </div>
          </div>

          <p className="text-xs text-[#5B6472] italic">
            Preserved in exact chronological succession from the official archives of Tahiri Foundation UK &amp; Dargah Allahabad Sharif.
          </p>
        </div>

        {/* Natural Internal Links */}
        {onNavigate && (
          <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E4E9F2] shadow-2xs">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#0B3095] mb-4">
              Explore Further Teachings &amp; Spiritual Guidance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => onNavigate('sajjan-saeen')}
                className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                  <User className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>Learn about Sajjan Saeen</span>
                </div>
                <p className="text-xs text-[#5B6472]">Spiritual successor and guide of the Tahiri lineage.</p>
              </button>

              <button
                onClick={() => onNavigate('abode')}
                className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>Read The Splendid Abode of the Friend</span>
                </div>
                <p className="text-xs text-[#5B6472]">Sacred discourses on Sufism and Tazkiyah.</p>
              </button>

              <button
                onClick={() => onNavigate('events', undefined, 'urs-mubarak-2026')}
                className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>View Annual Urs Mubarak details</span>
                </div>
                <p className="text-xs text-[#5B6472]">Dargah Allahabad Sharif gathering in November 2026.</p>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
