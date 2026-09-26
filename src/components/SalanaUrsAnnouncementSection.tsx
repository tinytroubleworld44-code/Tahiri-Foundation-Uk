import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { TAHIRI_EVENTS, getEventStatus, getTimeRemaining } from '../data/events';

interface SalanaUrsAnnouncementSectionProps {
  onNavigateToEvents: (eventId?: string) => void;
  simulatedTimeMs?: number;
}

export const SalanaUrsAnnouncementSection: React.FC<SalanaUrsAnnouncementSectionProps> = ({
  onNavigateToEvents,
  simulatedTimeMs,
}) => {
  const [nowMs, setNowMs] = useState<number>(simulatedTimeMs ?? Date.now());
  const shouldReduceMotion = useReducedMotion();

  // Primary event reference for the Annual Urs Mubarak
  const ursEvent = TAHIRI_EVENTS.find((e) => e.id === 'urs-mubarak-2026') || TAHIRI_EVENTS[0];

  // Update timer every second for live countdown
  useEffect(() => {
    if (simulatedTimeMs !== undefined) {
      setNowMs(simulatedTimeMs);
      return;
    }
    const interval = setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [simulatedTimeMs]);

  const status = getEventStatus(ursEvent, nowMs);
  const timeRemaining = getTimeRemaining(ursEvent, nowMs);

  const handleCtaClick = () => {
    onNavigateToEvents(ursEvent.id);
  };

  // Motion variants for Apple-style entry on scroll
  const containerVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="salana-urs-announcement-section"
      aria-label="Salana Urs Mubarak Announcement"
      className="w-full py-4 sm:py-8 lg:py-12 bg-[#F7F9FF]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative rounded-xl sm:rounded-[24px] overflow-hidden bg-gradient-to-br from-[#08216B] via-[#0B3095] to-[#06184A] border border-white/15 shadow-xl shadow-[#0B3095]/15 text-white p-3.5 sm:p-6 md:p-8 lg:p-10"
        >
          {/* Subtle Decorative Texture */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-[#E5B842]/10 blur-3xl" />
            
            <svg
              aria-hidden="true"
              focusable="false"
              className="absolute inset-0 w-full h-full opacity-15"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="salana-dots-pattern"
                  width="28"
                  height="28"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="#FFFFFF" />
                  <circle cx="16" cy="16" r="0.75" fill="#E5B842" opacity="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#salana-dots-pattern)" />
            </svg>
          </div>

          {/* Content Composition */}
          <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
            
            {/* Top Row: Badge & Header Information */}
            <div className="space-y-2 sm:space-y-3">
              {/* Top Badge */}
              <div className="inline-flex items-center">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide border border-[#E5B842]/50 bg-white/10 text-amber-200 backdrop-blur-xs shadow-xs">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E5B842]" aria-hidden="true" focusable="false" />
                  <span>Special Announcement · Upcoming Grand Gathering</span>
                </span>
              </div>

              {/* Main Event Title */}
              <h2
                id="salana-urs-heading"
                className="font-serif-display text-xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.12]"
              >
                SALANA URS MUBARAK
              </h2>

              {/* Date with Calendar Icon */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#E5B842] text-xs sm:text-base md:text-lg font-semibold tracking-wide">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5B842] shrink-0" aria-hidden="true" focusable="false" />
                <span>27 — 28 — 29 November 2026</span>
              </div>

              {/* Location with Pin Icon */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/85 text-[11px] sm:text-sm font-normal">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70 shrink-0" aria-hidden="true" focusable="false" />
                <span>Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan</span>
              </div>
            </div>

            {/* Separator Line */}
            <div className="w-full h-px bg-white/10" />

            {/* Bottom Panel: Two-Column composition on Desktop / Responsive on Tablet & Mobile */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 lg:gap-8">
              
              {/* Left: Countdown Panel */}
              <div className="flex-1 space-y-2.5">
                {status === 'UPCOMING' && (
                  <>
                    <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-200/90 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5B842]" />
                      <span>COUNTDOWN TO EVENT</span>
                    </div>

                    {/* 4 Countdown Boxes */}
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 max-w-xs sm:max-w-md">
                      {/* Days */}
                      <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-center min-w-0 shadow-inner shadow-black/10">
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-mono leading-none">
                          {timeRemaining.days}
                        </div>
                        <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-amber-200/90 font-semibold mt-0.5 sm:mt-1">
                          Days
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-center min-w-0 shadow-inner shadow-black/10">
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-mono leading-none">
                          {String(timeRemaining.hours).padStart(2, '0')}
                        </div>
                        <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-amber-200/90 font-semibold mt-0.5 sm:mt-1">
                          Hours
                        </div>
                      </div>

                      {/* Mins */}
                      <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-center min-w-0 shadow-inner shadow-black/10">
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-mono leading-none">
                          {String(timeRemaining.minutes).padStart(2, '0')}
                        </div>
                        <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-amber-200/90 font-semibold mt-0.5 sm:mt-1">
                          Mins
                        </div>
                      </div>

                      {/* Secs */}
                      <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-center min-w-0 shadow-inner shadow-black/10">
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-mono leading-none">
                          {String(timeRemaining.seconds).padStart(2, '0')}
                        </div>
                        <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-amber-200/90 font-semibold mt-0.5 sm:mt-1">
                          Secs
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {status === 'ONGOING' && (
                  <div className="space-y-2 bg-white/10 backdrop-blur-xs border border-emerald-400/40 rounded-2xl p-4 sm:p-5 max-w-lg">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span>URS MUBARAK IS UNDERWAY</span>
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-emerald-200">
                      27–29 November 2026
                    </div>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                      The sacred gathering is currently in progress at Dargah Allahabad Sharif. Pilgrim hospitality and continuous Zikr assemblies are active.
                    </p>
                  </div>
                )}

                {status === 'PAST' && (
                  <div className="space-y-2 bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-4 sm:p-5 max-w-lg">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white">
                      <span>PAST EVENT</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      This blessed gathering concluded on 29 November 2026. Archives and recorded proceedings are preserved under Events &amp; Programs.
                    </p>
                  </div>
                )}
              </div>

              {/* Right: CTA Button */}
              <div className="w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
                <button
                  id="salana-urs-view-schedule-btn"
                  onClick={handleCtaClick}
                  className="group w-full sm:w-auto h-11 sm:h-12 inline-flex items-center justify-center gap-2.5 px-5 sm:px-8 rounded-xl bg-[#E5B842] hover:bg-[#D4AF37] text-[#0B3095] font-bold text-xs sm:text-sm md:text-base tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3095]"
                >
                  <span>View Urs Schedule &amp; Guidelines</span>
                  <ArrowRight className="w-4 h-4 text-[#0B3095] group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" focusable="false" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
