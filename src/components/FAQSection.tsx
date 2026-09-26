import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  linkText?: string;
  linkAction?: string;
}

interface FAQSectionProps {
  onNavigate?: (page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi', articleId?: string, eventId?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is Tahiri Foundation UK?',
      answer:
        'Tahiri Foundation UK is an Islamic and spiritual educational platform connected with Dargah Allahabad Sharif, Sindh. It is dedicated to illuminating hearts through adherence to the pristine Prophetic Sunnah, sharing authentic Naqshbandi Mujaddidi Tahiri spiritual teachings, and providing genuine educational resources for spiritual purification (Tazkiyah).',
      linkText: 'Learn about our spiritual heritage',
      linkAction: 'sajjan-saeen',
    },
    {
      id: 'faq-2',
      question: 'What is Dargah Allahabad Sharif?',
      answer:
        'Dargah Allahabad Sharif is the blessed central sanctuary and spiritual headquarters established by Hadhrat Khwaja Sohna Saeen (R.A.) in Kandiaro, Sindh, Pakistan. It serves as a sanctuary of continuous silent remembrance (Zikr-e-Qalbi), sacred Islamic education, and continuous pilgrim hospitality (Langar).',
      linkText: 'View Urs Mubarak & Location Details',
      linkAction: 'events',
    },
    {
      id: 'faq-3',
      question: 'What is Shajra Shareef?',
      answer:
        'Shajra Shareef is the sacred, unbroken spiritual lineage (Silsilah) tracing from the Holy Prophet Muhammad (S.A.W.) through Hadhrat Abu Bakr as-Siddiq (R.A.), Hadhrat Salman al-Farsi (R.A.), Imam Qasim ibn Muhammad, through the masters of Central Asia and Khorasan, to the Mujaddidi line and Dargah Allahabad Sharif. It represents the authentic chain of spiritual authorization (Ijazah) and spiritual transmission (Faiz).',
      linkText: 'Explore the full Shajra Shareef',
      linkAction: 'shajra',
    },
    {
      id: 'faq-4',
      question: 'What is Zikr-e-Qalbi?',
      answer:
        'Zikr-e-Qalbi is the silent, internal remembrance of Allah upon the spiritual heart (al-Qalb), performed without vocalization or tongue movement. Anchored in the Naqshbandi Mujaddidi tradition, it focuses the repetition of the Divine Name "ALLAH" directly upon the beating heart, freeing the worshipper from ostentation (Riya) and establishing continuous inward peace (Itmi’nan).',
      linkText: 'Read complete Zikr-e-Qalbi teachings',
      linkAction: 'zikr-e-qalbi',
    },
    {
      id: 'faq-5',
      question: 'What is The Splendid Abode of the Friend?',
      answer:
        'The Splendid Abode of the Friend (Jalwah Gah-e-Dost / جلوہ گاہِ دوست) is an authentic compilation of spiritual treatises, discourses, and letters of the venerable masters of the Naqshbandi Mujaddidi Tahiri path. It provides profound guidance on the foundations of Sufism (Tasawwuf), the role of the spiritual guide (Murshid Kamil), and the disciplines of inward worship.',
      linkText: 'Explore The Splendid Abode of the Friend',
      linkAction: 'abode',
    },
    {
      id: 'faq-6',
      question: 'When is the Salana Urs Mubarak?',
      answer:
        'The Salana Urs Mubarak (Annual Urs of Huzoor Sohna Saeen) is observed annually in late November. The upcoming Salana Urs Mubarak is scheduled for 27, 28, and 29 November 2026 at Dargah Allahabad Sharif, welcoming thousands of pilgrims for three days of collective remembrance, spiritual discourses, and prayers.',
      linkText: 'View Urs 2026 Schedule & Guidelines',
      linkAction: 'urs-mubarak-2026',
    },
    {
      id: 'faq-7',
      question: 'Where is Dargah Allahabad Sharif located?',
      answer:
        'Dargah Allahabad Sharif is located in Kandiaro, District Naushahro Feroze, Sindh, Pakistan. It is easily accessible via the National Highway (N-5) in Sindh, serving as a renowned spiritual destination for seekers from across Pakistan and around the world.',
      linkText: 'View location & travel guidelines',
      linkAction: 'events',
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleActionClick = (action?: string) => {
    if (!onNavigate || !action) return;
    if (action === 'urs-mubarak-2026') {
      onNavigate('events', undefined, 'urs-mubarak-2026');
    } else if (action === 'sajjan-saeen') {
      onNavigate('sajjan-saeen');
    } else if (action === 'zikr-e-qalbi') {
      onNavigate('zikr-e-qalbi');
    } else if (action === 'shajra') {
      onNavigate('shajra');
    } else if (action === 'abode') {
      onNavigate('abode');
    } else if (action === 'events') {
      onNavigate('events');
    }
  };

  return (
    <section
      id="frequently-asked-questions"
      aria-label="Frequently Asked Questions"
      className="py-10 sm:py-14 md:py-18 lg:py-24 bg-[#F7F9FF] border-b border-[#E4E9F2]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E9F2] text-[#0B3095] text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#0B3095]" aria-hidden="true" focusable="false" />
            <span>Essential Knowledge &amp; Guidance</span>
          </div>

          <h2
            id="faq-section-heading"
            className="font-serif-display text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0B3095]"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
            Verified answers regarding Tahiri Foundation UK, Dargah Allahabad Sharif, Shajra Shareef, and the spiritual path.
          </p>

          <OrnamentalDivider accent="gold" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 sm:space-y-3" role="region" aria-labelledby="faq-section-heading">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-200 bg-white overflow-hidden shadow-2xs ${
                  isOpen ? 'border-[#0B3095]/30 ring-1 ring-[#0B3095]/10' : 'border-[#E4E9F2] hover:border-[#0B3095]/20'
                }`}
              >
                <button
                  id={`btn-${faq.id}`}
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${faq.id}`}
                  className="w-full text-left px-3.5 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3095]"
                >
                  <h3 className="font-serif-display text-sm sm:text-base md:text-lg font-bold text-[#111827] tracking-tight">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#0B3095] text-white rotate-180' : 'bg-[#F7F9FF] text-[#5B6472]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" focusable="false" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3.5 sm:px-6 pb-3.5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] space-y-2.5">
                        <p>{faq.answer}</p>
                        {faq.linkText && (
                          <div className="pt-1">
                            <button
                              onClick={() => handleActionClick(faq.linkAction)}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3095] hover:text-[#1746B8] hover:underline focus:outline-none"
                            >
                              <span>{faq.linkText}</span>
                              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" focusable="false" />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
