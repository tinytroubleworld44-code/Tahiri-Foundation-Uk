import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Compass, BookOpen, ChevronRight, Play } from 'lucide-react';
import { TAHIRI_EVENTS, TahiriEvent, getEventStatus, getTimeRemaining, OFFICIAL_YOUTUBE_LIVESTREAM_URL } from '../data/events';
import { IMAGES } from '../assets';
import { OrnamentalDivider } from './OrnamentalDivider';
import { EventDetailsSection } from './EventDetailsSection';
import { Breadcrumbs } from './Breadcrumbs';

interface EventsPageProps {
  selectedEventId: string | null;
  onSelectEvent: (eventId: string | null) => void;
  simulatedTimeMs?: number;
  onNavigate?: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string,
    eventId?: string
  ) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  selectedEventId,
  onSelectEvent,
  simulatedTimeMs,
  onNavigate,
}) => {
  const [nowMs, setNowMs] = useState<number>(simulatedTimeMs ?? Date.now());

  // Update timer every second for real-time live countdown
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

  // If a specific event is selected, render the dedicated event details view
  const foundEvent = selectedEventId
    ? TAHIRI_EVENTS.find(
        (e) =>
          e.id === selectedEventId ||
          (selectedEventId === 'monthly-spiritual-dars' && e.id === 'monthly-spiritual-dars-uk')
      )
    : null;

  if (foundEvent) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventDetailsSection
          event={foundEvent}
          onBack={() => onSelectEvent(null)}
          simulatedTimeMs={simulatedTimeMs}
          onNavigate={onNavigate}
        />
      </div>
    );
  }

  const featuredEvent = TAHIRI_EVENTS.find((e) => e.isFeatured) || TAHIRI_EVENTS[0];
  const featuredStatus = getEventStatus(featuredEvent, nowMs);
  const featuredTime = getTimeRemaining(featuredEvent, nowMs);

  // Categorize events by dynamic status
  const upcomingEvents = TAHIRI_EVENTS.filter(
    (e) => !e.isFeatured && e.type !== 'monthly' && getEventStatus(e, nowMs) === 'UPCOMING'
  );

  const monthlyPrograms = TAHIRI_EVENTS.filter((e) => e.type === 'monthly');

  const pastEvents = TAHIRI_EVENTS.filter(
    (e) => (getEventStatus(e, nowMs) === 'PAST') || (e.id === featuredEvent.id && featuredStatus === 'PAST')
  );

  return (
    <div id="events-and-programs-page" className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visible Breadcrumbs */}
        <div className="mb-3 sm:mb-5">
          <Breadcrumbs
            items={[
              {
                label: 'Events & Programs',
                url: '/events',
              },
            ]}
          />
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EEF3FF] border border-[#0B3095]/15 text-[#0B3095] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#0B3095]" />
            <span>Spiritual Calendar &amp; Assemblies</span>
          </div>

          <h1
            id="events-page-hero-heading"
            className="font-serif-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B3095] leading-tight"
          >
            Events &amp; Programs
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-[#5B6472] leading-relaxed">
            Stay connected with upcoming gatherings, spiritual programs and important occasions.
          </p>
        </div>

        {/* ==================================================
            1. FEATURED EVENT: ANNUAL URS MUBARAK
            ================================================== */}
        <section id="featured-event-section" className="mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C5A15A]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#0B3095]">
              Featured Event
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#F7F9FF] border border-[#E4E9F2] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Left Column: Authentic Dargah Photograph Visual */}
              <div className="lg:col-span-5 relative h-56 sm:h-80 lg:h-full overflow-hidden bg-[#061A4A]">
                <img
                  src={IMAGES.dargahAuthentic}
                  alt="Dargah Allahabad Sharif, Sindh"
                  className="w-full h-full object-cover object-center brightness-95 hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-medium">
                  Dargah Allahabad Sharif, Sindh
                </div>
              </div>

              {/* Right Column: Refined Content & Three Date Presentation */}
              <div className="lg:col-span-7 p-4 sm:p-6 lg:p-12 space-y-4 sm:space-y-6 text-left">
                
                {/* Status Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  {featuredStatus === 'ONGOING' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500 text-white shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Live / Currently Underway
                    </span>
                  ) : featuredStatus === 'UPCOMING' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#C5A15A] text-white shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      Annual Sacred Gathering
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#5B6472] text-white">
                      Past Event
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="font-serif-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B3095] leading-tight">
                    {featuredEvent.title}
                  </h3>
                  <div className="text-base sm:text-xl font-serif-display font-medium text-[#C5A15A]">
                    {featuredEvent.subtitle}
                  </div>
                </div>

                {/* Three Refined Date Blocks (Section 14: 27 NOV, 28 NOV, 29 NOV) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-sm">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white border border-[#E4E9F2] text-center shadow-2xs">
                    <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B3095]">27</div>
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5B6472]">
                      NOV 2026
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white border border-[#E4E9F2] text-center shadow-2xs">
                    <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B3095]">28</div>
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5B6472]">
                      NOV 2026
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white border border-[#E4E9F2] text-center shadow-2xs">
                    <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B3095]">29</div>
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5B6472]">
                      NOV 2026
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#111827] font-medium">
                  <MapPin className="w-4 h-4 text-[#0B3095] shrink-0" />
                  <span>Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan</span>
                </div>

                {/* Live Countdown if Upcoming */}
                {featuredStatus === 'UPCOMING' && (
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-[#E4E9F2] flex items-center justify-between text-xs text-[#5B6472]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#0B3095]">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Starts in:</span>
                    </div>
                    <div className="font-serif-display text-xs sm:text-base font-bold text-[#0B3095]">
                      {featuredTime.days}d : {featuredTime.hours}h : {featuredTime.minutes}m : {featuredTime.seconds}s
                    </div>
                  </div>
                )}

                {/* Exact Verbatim Official Quote from Website */}
                <p className="text-xs sm:text-sm text-[#111827]/80 italic border-l-2 border-[#C5A15A] pl-3 py-1 leading-relaxed bg-white/60 rounded-r-md">
                  “The Annual Urs Mubarak of Huzoor Sohna Saeen (Allah Almighty’s blessings be upon him) is an occasion filled with Faiz and blessings, which are hard to describe in words, however they need to be felt, one who goes once, wants to keep going.”
                </p>

                {/* CTA Action */}
                <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    id="featured-event-view-details-btn"
                    onClick={() => onSelectEvent(featuredEvent.id)}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-11 sm:h-12 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B3095] focus:ring-offset-2"
                  >
                    <span>View Event Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    id="featured-event-youtube-live-btn"
                    href={OFFICIAL_YOUTUBE_LIVESTREAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch live on YouTube — Al Islah Official"
                    className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-11 sm:h-12 rounded-xl bg-[#FF0000] hover:bg-[#E60000] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-900/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-offset-2 w-full sm:w-auto"
                  >
                    <Play className="w-3.5 h-3.5 fill-white text-white group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">Watch Live on YouTube</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        </section>

        <OrnamentalDivider accent="gold" className="py-6" />

        {/* ==================================================
            2. UPCOMING EVENTS
            ================================================== */}
        {upcomingEvents.length > 0 && (
          <section id="upcoming-events-section" className="mb-10 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0B3095]" />
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#0B3095]">
                Upcoming Events
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
              {upcomingEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#E4E9F2] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 sm:space-y-4 text-left flex flex-col justify-between"
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#EEF3FF] text-[#0B3095]">
                        {evt.type.toUpperCase()}
                      </span>
                      <span className="text-xs text-[#5B6472] font-medium">
                        {new Date(evt.startDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-base sm:text-xl font-bold text-[#0B3095]">
                      {evt.title}
                    </h3>
                    <p className="text-xs font-medium text-[#C5A15A]">{evt.subtitle}</p>
                    <p className="text-xs text-[#5B6472] leading-relaxed line-clamp-2">
                      {evt.officialDescription}
                    </p>
                  </div>

                  <div className="pt-2.5 sm:pt-3 border-t border-[#E4E9F2] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#5B6472]">
                      <MapPin className="w-3.5 h-3.5 text-[#0B3095]" />
                      <span>{evt.city}</span>
                    </div>

                    <button
                      onClick={() => onSelectEvent(evt.id)}
                      className="text-xs font-semibold text-[#0B3095] hover:text-[#1746B8] flex items-center gap-1 group"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==================================================
            3. MONTHLY PROGRAMS (Dedicated Section)
            ================================================== */}
        <section id="monthly-programs-section" className="mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A15A]" />
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#0B3095]">
                Monthly Programs &amp; Spiritual Assemblies
              </h2>
            </div>
            <span className="text-xs text-[#5B6472] hidden sm:inline">
              Regular Spiritual Gatherings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
            {monthlyPrograms.map((prog) => (
              <div
                key={prog.id}
                className="p-3.5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] shadow-2xs hover:shadow-sm transition-all duration-300 space-y-2.5 sm:space-y-4 text-left flex flex-col justify-between"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white border border-[#E4E9F2] text-[#0B3095]">
                      {prog.recurringInterval}
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white border border-[#E4E9F2] flex items-center justify-center text-[#0B3095]">
                      {prog.id.includes('dars') ? (
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ) : (
                        <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif-display text-sm sm:text-xl md:text-2xl font-bold text-[#0B3095]">
                    {prog.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#C5A15A] uppercase tracking-wider">
                    {prog.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                    {prog.officialDescription}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-4 border-t border-[#E4E9F2] space-y-1.5 sm:space-y-2 text-xs text-[#5B6472]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0B3095] shrink-0" />
                    <span>{prog.location} ({prog.city})</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#0B3095] shrink-0" />
                    <span>{prog.timezoneLabel}</span>
                  </div>

                  <div className="pt-1.5 sm:pt-2 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] text-[#5B6472]/80 italic">
                      Organized by {prog.organizer}
                    </span>
                    <button
                      onClick={() => onSelectEvent(prog.id)}
                      className="text-xs font-semibold text-[#0B3095] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Program Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            4. PAST EVENTS (Historical Archive)
            ================================================== */}
        <section id="past-events-section" className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5B6472]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5B6472]">
              Past Events &amp; Archive Records
            </h2>
          </div>

          <div className="divide-y divide-[#E4E9F2] bg-white rounded-xl sm:rounded-2xl border border-[#E4E9F2] overflow-hidden">
            {pastEvents.map((pe) => (
              <div
                key={pe.id}
                className="p-3.5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:bg-[#F7F9FF] transition-colors text-left"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#F0F4FA] text-[#5B6472] uppercase">
                      Past Event
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#5B6472]">
                      {pe.timezoneLabel}
                    </span>
                  </div>
                  <h4 className="font-serif-display text-sm sm:text-lg font-bold text-[#111827]">
                    {pe.title}
                  </h4>
                  <p className="text-xs text-[#5B6472]">{pe.location} — {pe.city}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectEvent(pe.id)}
                    className="w-full sm:w-auto px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-[#E4E9F2] hover:border-[#0B3095] text-[#0B3095] text-xs font-semibold transition-colors focus:outline-none text-center"
                  >
                    View Record
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
