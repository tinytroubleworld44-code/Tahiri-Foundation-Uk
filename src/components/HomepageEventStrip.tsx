import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, MapPin, Clock, Sparkles } from 'lucide-react';
import { TAHIRI_EVENTS, getEventStatus, getTimeRemaining } from '../data/events';

interface HomepageEventStripProps {
  onNavigateToEvents: (eventId?: string) => void;
  simulatedTimeMs?: number;
}

export const HomepageEventStrip: React.FC<HomepageEventStripProps> = ({
  onNavigateToEvents,
  simulatedTimeMs,
}) => {
  const [nowMs, setNowMs] = useState<number>(simulatedTimeMs ?? Date.now());
  const ursEvent = TAHIRI_EVENTS.find((e) => e.id === 'urs-mubarak-2026')!;

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

  return (
    <div
      id="homepage-event-strip"
      className="w-full bg-[#0B3095] text-white border-y border-[#1746B8] py-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Tag & Event Title */}
          <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
            {status === 'ONGOING' ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Currently Underway
              </span>
            ) : status === 'UPCOMING' ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C5A15A] text-white shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Upcoming Event
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                Recent Event
              </span>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-serif-display text-base sm:text-lg font-bold tracking-wide text-white">
                Annual Urs Mubarak
              </span>
              <span className="text-xs sm:text-sm text-white/80 font-medium hidden sm:inline">
                •
              </span>
              <span className="text-xs sm:text-sm text-[#C5A15A] font-medium">
                Huzoor Sohna Saeen
              </span>
            </div>
          </div>

          {/* Center/Right: Date & Countdown / Location */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-white/90">
              <Calendar className="w-4 h-4 text-[#C5A15A]" />
              <span className="font-medium">27–29 November 2026</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#C5A15A]" />
              <span>Dargah Allahabad Sharif, Sindh</span>
            </div>

            {status === 'UPCOMING' && (
              <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 text-white text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-[#C5A15A]" />
                <span>
                  Starts in {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m
                </span>
              </div>
            )}

            {/* CTA Button */}
            <button
              id="event-strip-cta-btn"
              onClick={() => onNavigateToEvents(ursEvent.id)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#F7F9FF] text-[#0B3095] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>View Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
