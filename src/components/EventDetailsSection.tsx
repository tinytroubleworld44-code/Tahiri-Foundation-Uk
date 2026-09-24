import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Users, ExternalLink, ShieldCheck, Heart, Sparkles, User, BookOpen, Compass, Play } from 'lucide-react';
import { TahiriEvent, getEventStatus, getTimeRemaining, canShowCountdown, OFFICIAL_YOUTUBE_LIVESTREAM_URL } from '../data/events';
import { IMAGES } from '../assets';
import { OrnamentalDivider } from './OrnamentalDivider';
import { Breadcrumbs } from './Breadcrumbs';

interface EventDetailsSectionProps {
  event: TahiriEvent;
  onBack: () => void;
  simulatedTimeMs?: number;
  onNavigate?: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string,
    eventId?: string
  ) => void;
}

export const EventDetailsSection: React.FC<EventDetailsSectionProps> = ({
  event,
  onBack,
  simulatedTimeMs,
  onNavigate,
}) => {
  const [nowMs, setNowMs] = useState<number>(simulatedTimeMs ?? Date.now());

  // Tick live timer every second if event qualifies for countdown
  useEffect(() => {
    if (simulatedTimeMs !== undefined) {
      setNowMs(simulatedTimeMs);
      return;
    }
    if (!canShowCountdown(event)) return;

    const interval = setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [simulatedTimeMs, event]);

  const status = getEventStatus(event, nowMs);
  const timeRemaining = getTimeRemaining(event, nowMs);

  return (
    <div id="event-details-view" className="pb-12 pt-1">
      {/* Visible Breadcrumbs */}
      <div className="mb-3 sm:mb-4">
        <Breadcrumbs
          items={[
            {
              label: 'Events & Programs',
              url: '/events',
              onClick: onBack,
            },
            {
              label: event.title,
            },
          ]}
        />
      </div>

      {/* Back button */}
      <div className="mb-6">
        <button
          id="back-to-events-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3095] hover:text-[#1746B8] transition-colors focus:outline-none focus:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events &amp; Programs</span>
        </button>
      </div>

      {/* Main Event Article Container */}
      <div className="bg-white rounded-2xl border border-[#E4E9F2] shadow-sm overflow-hidden">
        
        {/* Visual Hero Header */}
        {event.id === 'urs-mubarak-2026' ? (
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#061A4A]">
            <img
              src={IMAGES.dargahAuthentic}
              alt="Dargah Allahabad Sharif, Sindh, Pakistan"
              width={1200}
              height={600}
              className="w-full h-full object-cover object-center brightness-90"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061A4A] via-[#061A4A]/50 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white max-w-4xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                {status === 'ONGOING' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Live / Currently Underway
                  </span>
                ) : status === 'UPCOMING' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C5A15A] text-white shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    Upcoming Annual Urs
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                    Past Event
                  </span>
                )}
                <span className="text-xs text-white/80 font-medium px-2.5 py-1 rounded-full bg-white/10">
                  {event.timezoneLabel}
                </span>
              </div>

              <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {event.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#C5A15A] mt-1">
                {event.subtitle}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E4E9F2] bg-gradient-to-r from-[#F7F9FF] to-white">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B3095] text-white shadow-xs">
                {event.eventType === 'recurring' ? 'Recurring Program' : 'Special Event'}
              </span>
              <span className="text-xs text-[#5B6472] font-medium px-2.5 py-1 rounded-full bg-[#E4E9F2]">
                {event.timezoneLabel}
              </span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B3095] leading-tight">
              {event.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-[#C5A15A] mt-1">
              {event.subtitle}
            </p>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8 lg:p-12 space-y-10">
          
          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-xl bg-[#F7F9FF] border border-[#E4E9F2]">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white border border-[#E4E9F2] text-[#0B3095] shrink-0 shadow-2xs">
                <Calendar className="w-5 h-5 text-[#0B3095]" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#5B6472]">
                  {event.eventType === 'recurring' ? 'Program Schedule' : 'Dates'}
                </div>
                <div className="text-base font-bold text-[#0B3095] mt-0.5">
                  {event.dateDisplay}
                </div>
                <div className="text-xs text-[#5B6472]">
                  {event.scheduleNote || (event.eventType === 'recurring' ? 'Regular Program' : 'Special Event')}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white border border-[#E4E9F2] text-[#0B3095] shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5 text-[#0B3095]" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#5B6472]">
                  Sacred Location
                </div>
                <div className="text-base font-bold text-[#111827] mt-0.5">
                  {event.location}
                </div>
                <div className="text-xs text-[#5B6472]">{event.city}, {event.country}</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white border border-[#E4E9F2] text-[#0B3095] shrink-0 shadow-2xs">
                <Users className="w-5 h-5 text-[#0B3095]" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#5B6472]">
                  Organizer
                </div>
                <div className="text-sm font-semibold text-[#111827] mt-0.5">
                  {event.organizer}
                </div>
                <div className="text-xs text-[#5B6472]">Under the auspices of Dargah Allahabad Sharif</div>
              </div>
            </div>
          </div>

          {/* Live Countdown ONLY for confirmed fixed-date events (NEVER for recurring / flexible programs) */}
          {canShowCountdown(event) && status === 'UPCOMING' && (
            <div className="bg-[#EEF3FF] rounded-2xl p-6 border border-[#0B3095]/15 text-center space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3095]">
                <Clock className="w-4 h-4" />
                <span>Starts in (Pakistan Standard Time)</span>
              </div>
              <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
                <div className="p-3 rounded-xl bg-white border border-[#E4E9F2] shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0B3095]">
                    {timeRemaining.days}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Days
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E4E9F2] shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0B3095]">
                    {timeRemaining.hours}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Hours
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E4E9F2] shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0B3095]">
                    {timeRemaining.minutes}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Minutes
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E4E9F2] shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0B3095]">
                    {timeRemaining.seconds}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Program Schedule & Format Box for Recurring / Flexible Programs */}
          {event.eventType === 'recurring' && (
            <div className="bg-[#F7F9FF] rounded-2xl p-6 border border-[#E4E9F2] space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3095]">
                <Calendar className="w-4 h-4 text-[#C5A15A]" />
                <span>Program Schedule &amp; Format</span>
              </div>
              <p className="text-sm text-[#111827] leading-relaxed">
                {event.recurringInterval || 'This is a recurring spiritual and educational assembly held regularly.'} Specific dates and times are announced in advance by the Tahiri Foundation UK administration.
              </p>
              {event.livestreamAvailable && (
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#E4E9F2]/80 mt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#0B3095]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Online stream and recorded sessions are broadcast on the official YouTube channel.</span>
                  </div>
                  <a
                    id="event-recurring-youtube-live-btn"
                    href={event.livestreamUrl || OFFICIAL_YOUTUBE_LIVESTREAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch live on YouTube — Al Islah Official"
                    className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#FF0000] hover:bg-[#E60000] text-white font-semibold text-xs tracking-wide transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-offset-1 min-h-[38px] w-full sm:w-auto"
                  >
                    <Play className="w-3 h-3 fill-white text-white group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">Watch Live on YouTube</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {event.eventType === 'fixed-date' && status === 'ONGOING' && (
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Live / Currently Underway</span>
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-emerald-900">
                The Sacred Assembly is in Progress
              </h3>
              <p className="text-sm text-emerald-700 max-w-xl mx-auto">
                Devotees and seekers are currently gathered at Dargah Allahabad Sharif for continuous Zikr, recitation, spiritual discourses, and communal prayers.
              </p>
            </div>
          )}

          {event.eventType === 'fixed-date' && status === 'PAST' && (
            <div className="bg-[#F7F9FF] rounded-2xl p-6 border border-[#E4E9F2] text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B6472] text-white text-xs font-semibold">
                <span>Past Event</span>
              </div>
              <p className="text-sm text-[#5B6472] pt-2">
                This sacred occasion concluded on {event.dateDisplay}. Official recordings and photographic archives are preserved in organizational records.
              </p>
            </div>
          )}

          {/* Official Verbatim Description */}
          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#0B3095]">
              Official Program Overview
            </h2>
            <blockquote className="border-l-4 border-[#C5A15A] pl-5 py-2 text-base sm:text-lg text-[#111827] font-serif-display italic bg-[#F7F9FF] rounded-r-xl leading-relaxed">
              “{event.officialDescription}”
            </blockquote>
          </div>

          <OrnamentalDivider accent="gold" />

          {/* Detailed Confirmed Schedule (if present) */}
          {event.detailedSchedule && event.detailedSchedule.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#0B3095]">
                  Three-Day Program Schedule
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[#0B3095]">
                  Confirmed Daily Assembly
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {event.detailedSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F7F9FF] border border-[#E4E9F2] space-y-3 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C5A15A]">
                        {item.day}
                      </span>
                      <span className="text-xs text-[#5B6472] font-medium">
                        {item.date.split(',')[1]}
                      </span>
                    </div>

                    <h4 className="font-serif-display text-lg font-bold text-[#0B3095]">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practical Guidelines & Adab */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-[#E4E9F2] space-y-3 shadow-2xs">
              <div className="flex items-center gap-2.5 text-[#0B3095]">
                <ShieldCheck className="w-5 h-5 text-[#0B3095]" />
                <h4 className="font-serif-display text-base font-bold">
                  Sacred Etiquette (Adab)
                </h4>
              </div>
              <ul className="text-xs sm:text-sm text-[#5B6472] space-y-2 list-disc pl-4 leading-relaxed">
                <li>Maintain reverent silence and focus on silent heart remembrance (Zikr-e-Qalbi).</li>
                <li>Comply with modest Islamic attire following the Sunnah of the Beloved Messenger ﷺ.</li>
                <li>Respect designated prayer areas and listen attentively during discourses and Khatm.</li>
                <li>Prioritize service to elders, guests, and fellow travelers.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E9F2] space-y-3 shadow-2xs">
              {event.id === 'urs-mubarak-2026' ? (
                <>
                  <div className="flex items-center gap-2.5 text-[#0B3095]">
                    <Heart className="w-5 h-5 text-[#C5A15A]" />
                    <h4 className="font-serif-display text-base font-bold">
                      Hospitality &amp; Langar Sharif
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                    In adherence to the noble tradition founded by Huzoor Sohna Saeen, Langar Sharif (blessed communal meals) is prepared and served generously around the clock to every visitor without distinction.
                  </p>
                  <p className="text-xs text-[#5B6472]/80 italic">
                    “Langar is an open table of blessing for the lovers of Allah.”
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 text-[#0B3095]">
                    <BookOpen className="w-5 h-5 text-[#C5A15A]" />
                    <h4 className="font-serif-display text-base font-bold">
                      Study Materials &amp; Participation
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                    Study texts and English translation materials from <em>The Splendid Abode of the Friend</em> (Jalwa Gah-e-Dost) are provided to participants. Seekers are encouraged to engage reflectively with the spiritual conditions of discipleship.
                  </p>
                  <p className="text-xs text-[#5B6472]/80 italic">
                    “Spiritual knowledge when joined with sincere practice transforms the inward state.”
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#E4E9F2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B3095] focus:ring-offset-2 min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Events &amp; Programs</span>
            </button>

            {event.livestreamAvailable && (
              <a
                id="event-details-youtube-live-btn"
                href={event.livestreamUrl || OFFICIAL_YOUTUBE_LIVESTREAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch live on YouTube — Al Islah Official"
                className="group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl bg-[#FF0000] hover:bg-[#E60000] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-900/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-offset-2 min-h-[44px] w-full sm:w-auto"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Watch Live on YouTube</span>
              </a>
            )}
          </div>

          {/* Internal Links for Sacred Heritage */}
          {onNavigate && (
            <div className="mt-8 pt-8 border-t border-[#E4E9F2]">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#0B3095] mb-4">
                Explore Associated Sacred Knowledge
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
                  <p className="text-xs text-[#5B6472]">The spiritual guide carrying forward the blessed mission.</p>
                </button>

                <button
                  onClick={() => onNavigate('shajra')}
                  className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                    <Compass className="w-3.5 h-3.5 text-[#C5A15A]" />
                    <span>Explore Shajra Shareef</span>
                  </div>
                  <p className="text-xs text-[#5B6472]">The blessed spiritual lineage of the masters.</p>
                </button>

                <button
                  onClick={() => onNavigate('zikr-e-qalbi')}
                  className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                    <Heart className="w-3.5 h-3.5 text-[#C5A15A]" />
                    <span>Learn about Zikr-e-Qalbi</span>
                  </div>
                  <p className="text-xs text-[#5B6472]">Silent heart remembrance practiced at Dargah Allahabad.</p>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
