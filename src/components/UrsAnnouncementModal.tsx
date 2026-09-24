import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { TAHIRI_EVENTS, getEventStatus, getTimeRemaining } from '../data/events';
import { IMAGES } from '../assets';

interface UrsAnnouncementModalProps {
  onViewEvent: (eventId: string) => void;
  simulatedTimeMs?: number;
}

const STORAGE_KEY = 'tahiri_urs_popup_session_dismissed';

export const UrsAnnouncementModal: React.FC<UrsAnnouncementModalProps> = ({
  onViewEvent,
  simulatedTimeMs,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nowMs, setNowMs] = useState<number>(simulatedTimeMs ?? Date.now());

  const ursEvent = TAHIRI_EVENTS.find((e) => e.id === 'urs-mubarak-2026')!;

  // Update timer every second
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

  // Check whether to show the popup based on session & event timing
  useEffect(() => {
    // If the event is in the PAST, popup must NEVER appear (requirement 4 & 7)
    if (status === 'PAST') {
      setIsOpen(false);
      return;
    }

    // Check session storage to avoid annoying visitors
    const isDismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      // Delay showing by 1.2s for pleasant, non-jarring page load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleViewDetails = () => {
    handleClose();
    onViewEvent(ursEvent.id);
  };

  // If the event is over, stop showing the modal completely
  if (status === 'PAST') {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="urs-mubarak-popup-container"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="urs-popup-heading"
        >
          {/* Backdrop Click */}
          <div
            className="fixed inset-0 transition-opacity"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white rounded-2xl border border-[#E4E9F2] shadow-2xl overflow-hidden z-10 my-auto text-left"
          >
            {/* Top Visual Header: Authentic Dargah Photograph */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#061A4A]">
              <img
                src={IMAGES.dargahAuthentic}
                alt="Dargah Allahabad Sharif, Sindh"
                className="w-full h-full object-cover object-center brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3095]/90 via-[#0B3095]/40 to-transparent" />

              {/* Close Button */}
              <button
                id="urs-popup-close-btn"
                onClick={handleClose}
                aria-label="Close Urs Mubarak Announcement"
                className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Status Tag & Dates */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  {status === 'ONGOING' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-emerald-500/90 text-white uppercase shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Live / Currently Underway
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-[#C5A15A] text-white uppercase shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      Official Event Announcement
                    </span>
                  )}
                </div>
                <h3
                  id="urs-popup-heading"
                  className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight"
                >
                  ANNUAL URS MUBARAK
                </h3>
                <p className="text-sm font-semibold text-[#C5A15A] tracking-wide">
                  Huzoor Sohna Saeen
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-5">
              
              {/* Event Metadata (Date & Location) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 border-y border-[#E4E9F2]">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-[#F0F4FA] text-[#0B3095] shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#5B6472]">
                      Dates
                    </div>
                    <div className="text-sm font-bold text-[#0B3095]">
                      27–29 November 2026
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-[#F0F4FA] text-[#0B3095] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#5B6472]">
                      Location
                    </div>
                    <div className="text-sm font-bold text-[#111827]">
                      Dargah Allahabad Sharif
                    </div>
                    <div className="text-[11px] text-[#5B6472]">Kandiaro, Sindh</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Countdown or Ongoing Banner */}
              {status === 'UPCOMING' ? (
                <div className="bg-[#F7F9FF] rounded-xl p-3.5 border border-[#E4E9F2] text-center">
                  <div className="text-[11px] font-semibold text-[#5B6472] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0B3095]" />
                    <span>Starts in</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] shadow-2xs">
                      <div className="text-xl sm:text-2xl font-bold font-serif-display text-[#0B3095]">
                        {timeRemaining.days}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider font-semibold text-[#5B6472]">
                        DAYS
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] shadow-2xs">
                      <div className="text-xl sm:text-2xl font-bold font-serif-display text-[#0B3095]">
                        {timeRemaining.hours}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider font-semibold text-[#5B6472]">
                        HOURS
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] shadow-2xs">
                      <div className="text-xl sm:text-2xl font-bold font-serif-display text-[#0B3095]">
                        {timeRemaining.minutes}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider font-semibold text-[#5B6472]">
                        MINUTES
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] shadow-2xs">
                      <div className="text-xl sm:text-2xl font-bold font-serif-display text-[#0B3095]">
                        {timeRemaining.seconds}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider font-semibold text-[#5B6472]">
                        SECONDS
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-50 rounded-xl p-3.5 border border-emerald-200 text-center">
                  <div className="flex items-center justify-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Urs Mubarak is currently underway</span>
                  </div>
                  <p className="text-xs text-emerald-700 mt-1">
                    27–29 November 2026 · Dargah Allahabad Sharif, Sindh
                  </p>
                </div>
              )}

              {/* Exact Verbatim Official Quote from Tahiri Foundation UK */}
              <blockquote className="border-l-2 border-[#C5A15A] pl-3.5 py-1 text-xs sm:text-sm text-[#111827]/80 italic leading-relaxed bg-[#F7F9FF]/60 rounded-r-lg">
                “The Annual Urs Mubarak of Huzoor Sohna Saeen (Allah Almighty’s blessings be upon him) is an occasion filled with Faiz and blessings, which are hard to describe in words, however they need to be felt, one who goes once, wants to keep going.”
              </blockquote>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  id="urs-popup-view-details-btn"
                  onClick={handleViewDetails}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-sm flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#0B3095] focus:ring-offset-2"
                >
                  <span>View Event Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="urs-popup-dismiss-btn"
                  onClick={handleClose}
                  className="py-3 px-4 rounded-xl border border-[#E4E9F2] text-[#5B6472] hover:text-[#111827] hover:bg-[#F7F9FF] font-medium text-xs sm:text-sm transition-colors focus:outline-none"
                >
                  Dismiss
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
