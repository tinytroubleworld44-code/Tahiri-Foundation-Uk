export interface EventScheduleDay {
  day: string;
  date: string;
  title: string;
  description: string;
}

export type EventClassification = 'fixed-date' | 'recurring';

export interface TahiriEvent {
  id: string;
  title: string;
  subtitle: string;
  arabicTitle?: string;
  eventType: EventClassification; // 'fixed-date' | 'recurring'
  hasConfirmedDate: boolean;      // Only true if confirmed fixed date/time exists
  startDate?: string;             // ISO 8601 with timezone offset, e.g. "2026-11-27T00:00:00+05:00"
  endDate?: string;               // ISO 8601 with timezone offset, e.g. "2026-11-29T23:59:59+05:00"
  dateDisplay: string;            // Human-readable schedule or date (e.g. "27–29 November 2026")
  scheduleNote?: string;          // e.g. "Three-Day Gathering" or "Regular Educational Program"
  timezone?: string;              // Internal timezone identifier (e.g. "Asia/Karachi") - never shown publicly
  timezoneLabel: string;
  location: string;
  city: string;
  country: string;
  type: 'annual' | 'monthly' | 'special';
  isFeatured?: boolean;
  isRecurring?: boolean;
  recurringInterval?: string;
  officialDescription: string;
  detailedSchedule?: EventScheduleDay[];
  organizer: string;
  livestreamAvailable?: boolean;
  livestreamUrl?: string;
  externalLink?: string;
  notes?: string;
}

export type EventStatus = 'UPCOMING' | 'ONGOING' | 'PAST';

export const OFFICIAL_YOUTUBE_LIVESTREAM_URL =
  'https://youtube.com/@alislahofficial?si=AGCx1JzXjVKOrZz8';

// Central events repository
export const TAHIRI_EVENTS: TahiriEvent[] = [
  {
    id: 'urs-mubarak-2026',
    title: 'Annual Urs Mubarak',
    subtitle: 'Huzoor Sohna Saeen',
    arabicTitle: 'العرس المبارك السنوي لحضور سوہنا سائين',
    eventType: 'fixed-date',
    hasConfirmedDate: true,
    startDate: '2026-11-27T00:00:00+05:00',
    endDate: '2026-11-29T23:59:59+05:00',
    dateDisplay: '27–29 November 2026',
    scheduleNote: 'Three-Day Gathering',
    timezone: 'Asia/Karachi',
    timezoneLabel: 'Pakistan Standard Time (PKT / UTC+5)',
    location: 'Dargah Allahabad Sharif',
    city: 'Kandiaro, Sindh',
    country: 'Pakistan',
    type: 'annual',
    isFeatured: true,
    isRecurring: false,
    recurringInterval: 'Annual Gathering (Late November)',
    officialDescription:
      'The Annual Urs Mubarak of Huzoor Sohna Saeen (Allah Almighty’s blessings be upon him) is an occasion filled with Faiz and blessings, which are hard to describe in words, however they need to be felt, one who goes once, wants to keep going.',
    detailedSchedule: [
      {
        day: 'Day 1',
        date: 'Friday, 27 November 2026',
        title: 'Opening Day & Sacred Assembly',
        description:
          'Arrival of pilgrims and seekers from across Pakistan and international branches. Opening Khatm-e-Khwajgan, collective Halqa-e-Zikr, and welcoming discourse under the supervision of Hazrat Khwaja Mahboob Sajjan Saeen.',
      },
      {
        day: 'Day 2',
        date: 'Saturday, 28 November 2026',
        title: 'Spiritual Discourses & Recitation of the Holy Quran',
        description:
          'Full-day gatherings of Quranic recitation, Naat Khawani, discourses on the pristine Sunnah and Naqshbandi Mujaddidi spiritual discipline, followed by continuous Langar hospitality for all attendees.',
      },
      {
        day: 'Day 3',
        date: 'Sunday, 29 November 2026',
        title: 'Concluding Majlis & Final Collective Dua',
        description:
          'Special morning assembly, reading of the sacred Shajra Shareef, renewal of spiritual covenants, and the emotionally profound concluding Dua led by Hazrat Khwaja Mahboob Sajjan Saeen.',
      },
    ],
    organizer: 'Jamaat Islah-ul-Muslimeen & Dargah Allahabad Sharif Administration',
    livestreamAvailable: true,
    livestreamUrl: OFFICIAL_YOUTUBE_LIVESTREAM_URL,
    notes:
      'Langar Sharif (communal meals) and pilgrim hospitality are served continuously throughout the three days for all visitors.',
  },
  {
    id: 'monthly-spiritual-dars-uk',
    title: 'Monthly Dars: The Splendid Abode of the Friend',
    subtitle: 'Systematic Study of Jalwa Gah-e-Dost',
    eventType: 'recurring',
    hasConfirmedDate: false, // Recurring / flexible program - no fixed annual countdown
    dateDisplay: 'Monthly Schedule (As Officially Announced)',
    scheduleNote: 'Regular Spiritual & Educational Program',
    timezone: 'Europe/London',
    timezoneLabel: 'UK Time (London)',
    location: 'Tahiri Foundation Educational Hall & Online Stream',
    city: 'London',
    country: 'United Kingdom',
    type: 'monthly',
    isFeatured: false,
    isRecurring: true,
    recurringInterval: 'Monthly Assembly (Regular Study Sessions)',
    officialDescription:
      'Interactive reading and exposition of selected chapters from Hazrat Khwaja Mahboob Sajjan Saeen’s foundational spiritual manual, focusing on the 23 essential conditions of discipleship, sincerity in worship, and ethical conduct.',
    organizer: 'Tahiri Foundation UK Education Wing',
    livestreamAvailable: true,
    livestreamUrl: OFFICIAL_YOUTUBE_LIVESTREAM_URL,
    notes:
      'Open to all seekers of spiritual knowledge. Study texts and English translation materials are provided to all participants.',
  },
  {
    id: 'monthly-gyarween-shareef',
    title: 'Monthly Gyarween Shareef & Halqa-e-Zikr',
    subtitle: 'Commemoration of Ghous-ul-Azam Shaykh Abdul Qadir Jilani',
    eventType: 'recurring',
    hasConfirmedDate: false, // Recurring program - no fixed annual countdown
    dateDisplay: 'Monthly Gathering (Designated Sundays)',
    scheduleNote: 'Regular Community Assembly',
    timezone: 'Europe/London',
    timezoneLabel: 'UK Time (London)',
    location: 'Tahiri Community Centres & Affiliated UK Halqas',
    city: 'London / Birmingham',
    country: 'United Kingdom',
    type: 'monthly',
    isFeatured: false,
    isRecurring: true,
    recurringInterval: 'Monthly (Designated Sunday)',
    officialDescription:
      'Monthly gathering of Quran recitation, remembrance of the righteous Awliya, Khatm-e-Qadiriyya & Naqshbandiyya, followed by silent heart meditation (Muraqaba) and community meal.',
    organizer: 'Tahiri Foundation UK',
    livestreamAvailable: false,
    notes: 'Open to all brothers and sisters. Please contact local UK coordinators for regional venue details.',
  },
  {
    id: 'urs-mubarak-2025-archive',
    title: 'Annual Urs Mubarak 2025',
    subtitle: 'Huzoor Sohna Saeen',
    eventType: 'fixed-date',
    hasConfirmedDate: true,
    startDate: '2025-11-28T00:00:00+05:00',
    endDate: '2025-11-30T23:59:59+05:00',
    dateDisplay: '28–30 November 2025',
    scheduleNote: 'Concluded Annual Gathering',
    timezone: 'Asia/Karachi',
    timezoneLabel: 'Pakistan Standard Time (PKT / UTC+5)',
    location: 'Dargah Allahabad Sharif',
    city: 'Kandiaro, Sindh',
    country: 'Pakistan',
    type: 'annual',
    isFeatured: false,
    isRecurring: false,
    officialDescription:
      'The blessed Annual Urs Mubarak gathering held at Dargah Allahabad Sharif, Sindh, attended by tens of thousands of devotees, scholars, and spiritual seekers from across the globe.',
    organizer: 'Jamaat Islah-ul-Muslimeen',
    notes: 'Archive record of the previous annual gathering.',
  },
];

/**
 * Checks whether an event qualifies for live countdown rendering.
 * Only fixed-date events with a confirmed start date can use countdowns.
 */
export function canShowCountdown(event: TahiriEvent): boolean {
  return event.eventType === 'fixed-date' && Boolean(event.hasConfirmedDate && event.startDate);
}

/**
 * Parses an ISO date string into UTC milliseconds
 */
export function getTimestampMs(isoString: string): number {
  return new Date(isoString).getTime();
}

/**
 * Calculates current event status based on start/end timestamps.
 * If simulatedNowMs is passed, it computes status relative to that timestamp.
 */
export function getEventStatus(
  event: TahiriEvent,
  simulatedNowMs?: number
): EventStatus {
  // Recurring / flexible programs without a fixed date are active ongoing programs
  if (event.eventType === 'recurring' || !event.startDate || !event.endDate) {
    return 'UPCOMING';
  }

  const now = simulatedNowMs !== undefined ? simulatedNowMs : Date.now();
  const startMs = getTimestampMs(event.startDate);
  const endMs = getTimestampMs(event.endDate);

  if (now < startMs) {
    return 'UPCOMING';
  } else if (now >= startMs && now <= endMs) {
    return 'ONGOING';
  } else {
    return 'PAST';
  }
}

export interface TimeRemaining {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isPast: boolean;
}

/**
 * Computes live countdown time remaining until start (or until end if ongoing).
 * Automatically clamps to 0 to prevent negative numbers.
 */
export function getTimeRemaining(
  event: TahiriEvent,
  simulatedNowMs?: number
): TimeRemaining {
  // If event cannot have a countdown or lacks dates, return zeroed state
  if (!canShowCountdown(event) || !event.startDate) {
    return {
      totalMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isLive: false,
      isPast: false,
    };
  }

  const now = simulatedNowMs !== undefined ? simulatedNowMs : Date.now();
  const startMs = getTimestampMs(event.startDate);
  const endMs = event.endDate ? getTimestampMs(event.endDate) : startMs;

  if (now > endMs) {
    return {
      totalMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isLive: false,
      isPast: true,
    };
  }

  if (now >= startMs && now <= endMs) {
    const diff = Math.max(0, endMs - now);
    return {
      totalMs: diff,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isLive: true,
      isPast: false,
    };
  }

  const diff = Math.max(0, startMs - now);
  return {
    totalMs: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLive: false,
    isPast: false,
  };
}
