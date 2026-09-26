import React, { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Filter,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  User,
  Heart,
  Calendar,
  Compass,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../data/categories';
import { ARTICLES } from '../data/articles';
import { ArticleReader } from './ArticleReader';
import { OrnamentalDivider } from './OrnamentalDivider';
import { Breadcrumbs } from './Breadcrumbs';

interface SplendidAbodePageProps {
  selectedArticleId: string | null;
  onSelectArticle: (articleId: string | null) => void;
  onNavigate?: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string,
    eventId?: string
  ) => void;
}

export const SplendidAbodePage: React.FC<SplendidAbodePageProps> = ({
  selectedArticleId,
  onSelectArticle,
  onNavigate,
}) => {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Active article if one is selected
  const activeArticle = useMemo(() => {
    if (!selectedArticleId) return null;
    return ARTICLES.find((a) => a.id === selectedArticleId) || null;
  }, [selectedArticleId]);

  // Filtered articles for library view
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        activeCategorySlug === 'all' || article.categorySlug === activeCategorySlug;
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.arabicTitle && article.arabicTitle.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategorySlug, searchQuery]);

  return (
    <div id="splendid-abode-page" className="min-h-screen bg-white text-[#111827] pb-24">
      {/* Visible Breadcrumbs */}
      <Breadcrumbs
        items={
          activeArticle
            ? [
                {
                  label: 'The Splendid Abode of the Friend',
                  url: '/splendid-abode-of-the-friend',
                  onClick: () => onSelectArticle(null),
                },
                {
                  label: activeArticle.title,
                },
              ]
            : [
                {
                  label: 'The Splendid Abode of the Friend',
                  url: '/splendid-abode-of-the-friend',
                },
              ]
        }
      />
      
      {/* Header Banner in Royal Blue */}
      <section className="bg-gradient-to-b from-[#061A4A] to-[#0B3095] text-white py-10 sm:py-16 lg:py-20 relative overflow-hidden border-b border-[#0B3095]">
        <div className="absolute inset-0 bg-islamic-pattern-dark opacity-15 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20 bg-white/10 text-[10px] sm:text-xs text-[#C5A15A] uppercase tracking-wider font-semibold backdrop-blur-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Islamic &amp; Sufi Educational Sanctuary</span>
          </motion.div>

          <motion.h1
            id="abode-page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            The Splendid Abode of the Friend
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-arabic text-xl sm:text-3xl text-white/90 dir-rtl font-normal"
          >
            جلوہ گاہِ دوست
          </motion.p>

          <OrnamentalDivider light accent="gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xs sm:text-sm text-white/85 max-w-2xl mx-auto leading-relaxed font-light"
          >
            The phrase <strong>“جلوہ گاہِ دوست”</strong> may be rendered poetically as{' '}
            <strong>“The Splendid Abode of the Friend”</strong> and carries a profound Sufi
            connotation referring to experiencing the spiritual presence, beauty, and intimacy of the
            Divine through sacred knowledge and righteous emulation of the Sunnah.
          </motion.p>
        </div>
      </section>

      {/* Main Reading & Navigation Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-12">
        
        {/* If an article is active, show the focused article reading view */}
        {activeArticle ? (
          <div className="space-y-6">
            <ArticleReader
              article={activeArticle}
              onBackToLibrary={() => onSelectArticle(null)}
              onSelectArticle={(id) => onSelectArticle(id)}
            />
          </div>
        ) : (
          /* Library Index View: Sidebar + Article Catalog */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Desktop Left Sidebar / Mobile Collapsible Drawer */}
            <aside className="lg:col-span-4 bg-[#F7F9FF] rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#E4E9F2] p-4 sm:p-5 lg:p-6 shadow-xs sticky top-24 space-y-4 sm:space-y-6">
              
              {/* Search Bar */}
              <div className="space-y-2">
                <label
                  htmlFor="library-search"
                  className="text-xs font-bold uppercase tracking-wider text-[#0B3095] flex items-center justify-between"
                >
                  <span>Search Teachings</span>
                  <span className="text-[11px] text-[#5B6472] font-normal lowercase">
                    {filteredArticles.length} found
                  </span>
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#5B6472] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="library-search"
                    type="text"
                    placeholder="Search titles, concepts, keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-[#E4E9F2] text-xs sm:text-sm text-[#111827] placeholder-[#5B6472] focus:outline-none focus:border-[#0B3095] focus:ring-1 focus:ring-[#0B3095]"
                  />
                </div>
              </div>

              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#E4E9F2] bg-white text-xs font-semibold flex items-center justify-between text-[#0B3095]"
                >
                  <span className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-[#0B3095]" />
                    <span>Browse by Category</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileFilterOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Category Filter Menu */}
              <div className={`space-y-1.5 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B6472] block pb-1">
                  Categories
                </span>

                {/* All Articles option */}
                <button
                  onClick={() => {
                    setActiveCategorySlug('all');
                    setMobileFilterOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    activeCategorySlug === 'all'
                      ? 'bg-[#0B3095] text-white font-semibold shadow-xs'
                      : 'text-[#111827] hover:bg-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 opacity-80" />
                    <span>All Discourses</span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      activeCategorySlug === 'all'
                        ? 'bg-white text-[#0B3095] font-bold'
                        : 'bg-[#EEF3FF] text-[#0B3095]'
                    }`}
                  >
                    {ARTICLES.length}
                  </span>
                </button>

                {/* Individual Categories */}
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategorySlug(cat.slug);
                      setMobileFilterOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                      activeCategorySlug === cat.slug
                        ? 'bg-[#0B3095] text-white font-semibold shadow-xs'
                        : 'text-[#111827] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <BookOpen className="w-3.5 h-3.5 shrink-0 opacity-80" />
                      <span className="truncate">{cat.title}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] shrink-0 ${
                        activeCategorySlug === cat.slug
                          ? 'bg-white text-[#0B3095] font-bold'
                          : 'bg-[#EEF3FF] text-[#0B3095]'
                      }`}
                    >
                      {cat.articleCount}
                    </span>
                  </button>
                ))}
              </div>

              {/* Spiritual Advice Callout */}
              <div className="p-4 rounded-2xl bg-white border border-[#E4E9F2] space-y-2 text-xs">
                <span className="font-serif-display font-bold text-[#0B3095] block text-sm">
                  How to Study the Teachings
                </span>
                <p className="text-[#5B6472] leading-relaxed">
                  We advise reading with ritual purity (Wudu) and quiet contemplation. True benefit lies
                  in practicing one teaching consistently before proceeding to the next.
                </p>
              </div>

            </aside>

            {/* Right Main Articles Column */}
            <main className="lg:col-span-8 space-y-6">
              
              {/* Category Title & Banner */}
              <div className="bg-[#F7F9FF] p-4 sm:p-6 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#E4E9F2] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C5A15A]">
                    Active Collection
                  </span>
                  <h2 className="font-serif-display text-lg sm:text-2xl font-bold text-[#0B3095]">
                    {activeCategorySlug === 'all'
                      ? 'All Educational & Spiritual Teachings'
                      : CATEGORIES.find((c) => c.slug === activeCategorySlug)?.title}
                  </h2>
                  <p className="text-xs text-[#5B6472] mt-1">
                    {activeCategorySlug === 'all'
                      ? 'The complete repository of chapters preserved from the official Tahiri Foundation website.'
                      : CATEGORIES.find((c) => c.slug === activeCategorySlug)?.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white text-[11px] sm:text-xs font-semibold text-[#0B3095] border border-[#E4E9F2]">
                    {filteredArticles.length} Chapters
                  </span>
                </div>
              </div>

              {/* Articles List */}
              {filteredArticles.length === 0 ? (
                <div className="p-8 sm:p-12 text-center bg-white rounded-xl sm:rounded-3xl border border-[#E4E9F2] space-y-3">
                  <BookOpen className="w-8 h-8 text-[#5B6472] mx-auto opacity-50" />
                  <p className="font-serif-display text-base sm:text-lg text-[#111827]">
                    No treatises match your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategorySlug('all');
                    }}
                    className="text-xs text-[#0B3095] font-semibold hover:underline"
                  >
                    Reset filters to show all chapters
                  </button>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {filteredArticles.map((art, idx) => (
                    <motion.div
                      key={art.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      onClick={() => onSelectArticle(art.id)}
                      className="group bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:shadow-md cursor-pointer transition-all duration-300 relative space-y-2 sm:space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-xs">
                        <span className="font-semibold text-[#0B3095] uppercase tracking-wider text-[10px] sm:text-[11px]">
                          {art.category}
                        </span>
                        <div className="flex items-center gap-2.5 sm:gap-3 text-[#5B6472]">
                          {art.arabicTitle && (
                            <span className="font-arabic text-xs sm:text-sm text-[#0B3095]/80 font-normal dir-rtl">
                              {art.arabicTitle}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-[11px] sm:text-xs">
                            <Clock className="w-3 h-3 text-[#C5A15A]" />
                            <span>{art.readTime}</span>
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif-display text-base sm:text-xl lg:text-2xl font-bold text-[#111827] group-hover:text-[#0B3095] transition-colors leading-snug">
                        {art.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed line-clamp-2">
                        {art.summary}
                      </p>

                      <div className="pt-1.5 sm:pt-2 flex items-center justify-between text-xs font-semibold text-[#0B3095]">
                        <span className="flex items-center gap-1.5 group-hover:underline">
                          <span>Read Full Treatise</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

            </main>

          </div>
        )}

        {/* Natural Internal Linking for Spiritual Knowledge */}
        {onNavigate && (
          <div className="mt-10 sm:mt-16 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#F7F9FF] border border-[#E4E9F2]">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#0B3095] mb-3 sm:mb-4">
              Related Sacred Topics &amp; Lineage
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
              <button
                onClick={() => onNavigate('zikr-e-qalbi')}
                className="p-3 sm:p-4 rounded-xl border border-[#E4E9F2] bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                  <Heart className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>Learn about Zikr-e-Qalbi</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#5B6472]">Silent heart remembrance method &amp; virtues.</p>
              </button>

              <button
                onClick={() => onNavigate('sajjan-saeen')}
                className="p-3 sm:p-4 rounded-xl border border-[#E4E9F2] bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                  <User className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>Learn about Sajjan Saeen</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#5B6472]">Spiritual guide and successor of the Tahiri path.</p>
              </button>

              <button
                onClick={() => onNavigate('shajra')}
                className="p-3 sm:p-4 rounded-xl border border-[#E4E9F2] bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                  <Compass className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>Explore Shajra Shareef</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#5B6472]">Complete 41-node golden chain of masters.</p>
              </button>

              <button
                onClick={() => onNavigate('events', undefined, 'urs-mubarak-2026')}
                className="p-3 sm:p-4 rounded-xl border border-[#E4E9F2] bg-white hover:border-[#0B3095]/30 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3095] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A15A]" />
                  <span>View Annual Urs Mubarak details</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#5B6472]">Gathering at Dargah Allahabad Sharif in Nov 2026.</p>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
