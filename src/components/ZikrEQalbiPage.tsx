import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Heart, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { OrnamentalDivider } from './OrnamentalDivider';

interface ZikrEQalbiPageProps {
  onNavigate: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string,
    eventId?: string
  ) => void;
}

export const ZikrEQalbiPage: React.FC<ZikrEQalbiPageProps> = ({ onNavigate }) => {
  return (
    <div id="zikr-e-qalbi-page" className="min-h-screen bg-white text-[#111827] pb-24">
      {/* Visible Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            label: 'Zikr-e-Qalbi',
            url: '/zikr-e-qalbi',
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
            <Heart className="w-3.5 h-3.5 text-[#C5A15A]" />
            <span>Islamic Spiritual Remembrance</span>
          </motion.div>

          <motion.h1
            id="zikr-e-qalbi-h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Zikr-e-Qalbi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-arabic text-xl sm:text-3xl text-amber-200/90 dir-rtl font-normal"
          >
            الذِّكْرُ الْقَلْبِيُّ الْخَفِيُّ
          </motion.p>

          <OrnamentalDivider light accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/85 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Silent heart remembrance is the cornerstone of the Naqshbandi Mujaddidi spiritual methodology, establishing perpetual divine awareness within the human heart through every breath.
          </motion.p>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12">
        
        {/* Section 1: The Essence of Silent Heart Remembrance */}
        <article className="space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#0B3095] block">
            Core Concept
          </span>
          <h2
            id="essence-heading"
            className="font-serif-display text-lg sm:text-2xl md:text-3xl font-bold text-[#0B3095] tracking-tight"
          >
            The Essence of Silent Heart Remembrance
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A15A]" />
          
          <p className="text-xs sm:text-sm md:text-base text-[#334155] leading-relaxed">
            In the Islamic spiritual tradition, remembrance (Dhikr) possesses both vocal and silent dimensions. <strong>Zikr-e-Qalbi</strong> (also referred to as <em>Zikr e Qalbi</em> or <em>al-Dhikr al-Khafi</em>) is the silent, inward remembrance that resonates directly within the spiritual heart without moving the tongue or emitting sound.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-[#334155] leading-relaxed">
            Because this practice is conducted internally, it is shielded from ostentation (Riya) and distraction. The noble Companions (Sahabah), particularly Hadhrat Abu Bakr as-Siddiq (R.A.), practiced silent contemplation while actively engaging in their daily obligations as righteous family members and community leaders.
          </p>

          {/* Quotation Callout */}
          <div className="bg-[#F7F9FF] rounded-xl sm:rounded-2xl border-l-4 border-[#0B3095] p-3.5 sm:p-5 my-3 sm:my-4 border border-[#E4E9F2]">
            <p className="font-serif-display text-sm sm:text-base md:text-lg italic text-[#0B3095] leading-snug">
              “Beware! There is a piece of flesh in the body: if it is sound, the whole body is sound; if it is corrupt, the whole body is corrupt. Truly, it is the heart.”
            </p>
            <span className="text-[10px] sm:text-xs font-semibold text-[#5B6472] block mt-1.5">
              — Sahih al-Bukhari &amp; Sahih Muslim
            </span>
          </div>
        </article>

        {/* Section 2: Method and Inward Focus in the Naqshbandi Tradition */}
        <article className="space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0B3095] block">
            Spiritual Discipline
          </span>
          <h2
            id="method-heading"
            className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0B3095] tracking-tight"
          >
            Method and Inward Focus in the Naqshbandi Tradition
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A15A]" />

          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            According to the authentic teachings preserved at Dargah Allahabad Sharif and outlined in <em>The Splendid Abode of the Friend</em>, the seeker approaches silent heart remembrance with specific etiquettes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white rounded-xl border border-[#E4E9F2] p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#0B3095] font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#0B3095]" />
                <span>1. Ritual Purification &amp; Posture</span>
              </div>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Performing ablution (Wudu), sitting facing the Qiblah with physical composure and humility, and seeking sincere forgiveness (Istighfar).
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E4E9F2] p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#0B3095] font-semibold text-sm">
                <Heart className="w-4 h-4 text-[#0B3095]" />
                <span>2. Inscription upon the Heart</span>
              </div>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Directing inward attention downward to the physical heart, resting the tongue, and silently repeating the Divine Name “ALLAH” in rhythm with each pulse.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E4E9F2] p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#0B3095] font-semibold text-sm">
                <Compass className="w-4 h-4 text-[#0B3095]" />
                <span>3. Solitude in the Crowd</span>
              </div>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Practicing <em>Khalwat dar Anjuman</em>: outwardly busy with worldly duties, while inwardly the heart remains anchored in continuous divine remembrance.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E4E9F2] p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#0B3095] font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-[#0B3095]" />
                <span>4. Heart-to-Heart Transmission</span>
              </div>
              <p className="text-xs text-[#5B6472] leading-relaxed">
                Receiving spiritual focus (Tawajjuh) through the authorized chain of Murshids tracing directly to the Prophetic fountainhead.
              </p>
            </div>
          </div>
        </article>

        {/* Section 3: Virtues of Silent Remembrance */}
        <article className="space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0B3095] block">
            Spiritual Benefits
          </span>
          <h2
            id="virtues-heading"
            className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0B3095] tracking-tight"
          >
            Virtues of Silent Remembrance (al-Dhikr al-Khafi)
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A15A]" />

          <ul className="space-y-3 text-sm sm:text-base text-[#334155] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B3095] mt-2 shrink-0" />
              <span>
                <strong>Attainment of Inward Peace:</strong> As Allah Almighty states: <em>“Unquestionably, by the remembrance of Allah hearts are assured.”</em> (Surah Ar-Ra’d, 13:28).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B3095] mt-2 shrink-0" />
              <span>
                <strong>Protection from Hypocrisy:</strong> Silent heart remembrance cleanses the subconscious of malice, pride, and heedlessness, nurturing true sincerity (Ikhlas).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B3095] mt-2 shrink-0" />
              <span>
                <strong>Continuity in all States:</strong> Unlike vocal remembrance, Zikr-e-Qalbi can be maintained while working, walking, sitting with family, and even resting.
              </span>
            </li>
          </ul>
        </article>

        {/* Section 4: Connection to The Splendid Abode & Dargah Allahabad Sharif */}
        <article className="bg-[#F7F9FF] rounded-2xl border border-[#E4E9F2] p-6 sm:p-8 space-y-4">
          <h2
            id="connection-heading"
            className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B3095]"
          >
            Deepen Your Study in The Splendid Abode of the Friend
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Detailed treatises on the methods, stages, and spiritual fruits of Zikr-e-Qalbi are meticulously expounded in <em>The Splendid Abode of the Friend</em> (Jalwah Gah-e-Dost), alongside the guidance of Sajjan Saeen and the heritage of Dargah Allahabad Sharif.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('abode', 'zikr-e-qalbi')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Chapter on Zikr-e-Qalbi</span>
            </button>
            <button
              onClick={() => onNavigate('sajjan-saeen')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#0B3095]/30 text-[#0B3095] hover:bg-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>About Sajjan Saeen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </article>

      </main>
    </div>
  );
};
