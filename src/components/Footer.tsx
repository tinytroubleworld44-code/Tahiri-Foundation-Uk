import React from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { IMAGES } from '../assets';

interface FooterProps {
  onNavigate: (page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="main-site-footer"
      className="bg-[#061A4A] text-white relative overflow-hidden pt-16 pb-12 border-t border-[#0B3095]"
    >
      {/* Subtle Islamic pattern overlay */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Organization identity and mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-1 rounded-xl bg-white border border-[#C5A15A]/40 shadow-xs flex items-center justify-center flex-shrink-0">
                <img
                  src={IMAGES.logoEmblem}
                  alt="Tahiri Foundation UK Official Logo Emblem"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif-display text-2xl font-bold tracking-wide text-white">
                  Tahiri Foundation UK
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#C5A15A] font-semibold">
                  Dargah Allahabad Sharif, Sindh
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-white/75 max-w-lg">
              Dedicated to preserving and presenting the blessed teachings of the Naqshbandi Mujaddidi
              Tahiri spiritual order, fostering sacred knowledge, adherence to the Prophetic Sunnah,
              the practice of silent heart remembrance (Zikr-e-Qalbi), and spiritual guidance under the
              auspices of Dargah Allahabad Sharif.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-xs text-[#C5A15A] font-serif-display">
                سلسلة عالية نقشبندية مجددية طاهرية
              </span>
            </div>
          </div>

          {/* Quick primary links (STRICTLY ONLY 3 core items) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A15A]">
              Primary Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-shajra"
                  onClick={() => {
                    onNavigate('shajra');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors focus:outline-none"
                >
                  Shajra Shareef
                </button>
              </li>
              <li>
                <button
                  id="footer-link-abode"
                  onClick={() => {
                    onNavigate('abode');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors focus:outline-none flex items-center gap-1.5"
                >
                  <span>The Splendid Abode of the Friend</span>
                  <span className="font-arabic text-xs text-[#C5A15A]">جلوہ گاہِ دوست</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-events"
                  onClick={() => {
                    onNavigate('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors focus:outline-none"
                >
                  Events &amp; Programs
                </button>
              </li>
              <li>
                <button
                  id="footer-link-sajjan-saeen"
                  onClick={() => {
                    onNavigate('sajjan-saeen');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors focus:outline-none"
                >
                  Sajjan Saeen
                </button>
              </li>
              <li>
                <button
                  id="footer-link-zikr-e-qalbi"
                  onClick={() => {
                    onNavigate('zikr-e-qalbi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors focus:outline-none"
                >
                  Zikr-e-Qalbi
                </button>
              </li>
            </ul>
          </div>

          {/* Spiritual Center & Heritage */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A15A]">
              Spiritual Center
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Grand Mosque &amp; Shrine of Huzoor Sohna Saeen (Allah’s mercy be upon him)
            </p>
            <p className="text-xs text-white/60">
              Kandiaro, Naushahro Feroze District, Sindh, Pakistan
            </p>
            <div className="pt-2 text-xs italic text-[#C5A15A]/90 font-serif-display">
              “One who goes once, wants to keep going.”
            </div>
          </div>
        </div>

        {/* Divider */}
        <OrnamentalDivider light accent="gold" className="py-6" />

        {/* Copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Tahiri Foundation UK. All rights reserved.</p>
          <p className="text-white/50">
            Preserving Sacred Islamic Tradition &amp; Spiritual Gnosis
          </p>
        </div>
      </div>
    </footer>
  );
};
