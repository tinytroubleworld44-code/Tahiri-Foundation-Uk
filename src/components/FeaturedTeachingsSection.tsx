import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface FeaturedTeachingsSectionProps {
  onNavigate: (page: 'home' | 'shajra' | 'abode', articleId?: string) => void;
}

export const FeaturedTeachingsSection: React.FC<FeaturedTeachingsSectionProps> = ({
  onNavigate,
}) => {
  const featured = [
    {
      id: 'need-for-sufism',
      title: 'The Need for Sufism (Tasawwuf)',
      category: 'Foundations of Sufism',
      readTime: '8 min read',
      excerpt:
        'Why the inner purification of the heart (Tazkiyah) is an essential obligation upon every believer, realizing the Prophetic station of Ihsan.',
    },
    {
      id: 'zikr-e-qalbi',
      title: 'Remembering Allah in the Heart',
      category: 'Dhikr & Spiritual Practice',
      readTime: '10 min read',
      excerpt:
        'The method and profound spiritual reality of Zikr-e-Qalbi—invoking the name of Allah silently within the beating heart.',
    },
    {
      id: 'strict-adherence-to-sunnah',
      title: 'Following the Prophetic Sunnah',
      category: 'Foundations of Sufism',
      readTime: '9 min read',
      excerpt:
        'The Naqshbandi principle that true spiritual illumination is strictly bound to emulating the conduct and character of the Holy Prophet (S.A.W.).',
    },
    {
      id: 'superiority-of-naqshbandi-way',
      title: 'The Superiority of the Naqshbandī Way',
      category: 'Foundations of Sufism',
      readTime: '12 min read',
      excerpt:
        'How beginning at the end (Indirāj an-Nihāyah fī al-Bidāyah) and silent spiritual focus (Tawajjuh) distinguish this exalted path.',
    },
    {
      id: 'rabita-sharifa',
      title: 'Connection with the Shaykh (Rabita)',
      category: 'Lessons & Guidance',
      readTime: '11 min read',
      excerpt:
        'The spiritual science of heart-to-heart alignment with the perfected guide (Murshid Kamil) as a conduit for Divine mercy and light.',
    },
    {
      id: 'hosh-dar-dam',
      title: 'The Sacred Maxims: Hosh Dar Dam',
      category: 'Terms of the Path',
      readTime: '7 min read',
      excerpt:
        'Conscious breathing—the first of the eleven foundational principles established by Khwaja Abdul Khaliq Ghijdwani to prevent heedlessness.',
    },
  ];

  return (
    <section
      id="homepage-featured-teachings-section"
      className="py-24 lg:py-32 bg-white text-[#111827] relative border-b border-[#E4E9F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#0B3095] block"
          >
            Sacred Discourses
          </motion.span>

          <motion.h2
            id="featured-teachings-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3095] leading-tight"
          >
            Core Spiritual Teachings
          </motion.h2>

          <OrnamentalDivider accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#5B6472] leading-relaxed max-w-2xl mx-auto"
          >
            Selected foundational essays from <em>The Splendid Abode of the Friend</em> addressing
            the essential inner disciplines of the sincere seeker.
          </motion.p>
        </div>

        {/* 3-Column Grid of 6 Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-7 border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-[#5B6472]">
                  <span className="font-semibold text-[#0B3095] tracking-wide uppercase text-[11px]">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 opacity-80">
                    <Clock className="w-3 h-3" aria-hidden="true" focusable="false" />
                    {item.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B3095] group-hover:text-[#1746B8] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Subtle gold accent line that gently expands on hover */}
                <div className="w-8 group-hover:w-16 h-[2px] bg-[#C5A15A] transition-all duration-300" />

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              {/* Read Action Button */}
              <div className="pt-6 mt-4 border-t border-[#E4E9F2]">
                <button
                  id={`featured-read-btn-${item.id}`}
                  onClick={() => onNavigate('abode', item.id)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B3095] group-hover:text-[#1746B8] transition-colors focus:outline-none focus:underline"
                >
                  <span>Read Treatise</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" focusable="false" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all articles button */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('abode')}
            className="px-7 py-3.5 rounded-xl border border-[#0B3095]/30 text-[#0B3095] hover:bg-[#EEF3FF] hover:border-[#0B3095] font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#0B3095]" aria-hidden="true" focusable="false" />
            <span>Browse Full Catalog in Library</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};
