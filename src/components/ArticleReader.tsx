import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ChevronRight,
  Share2,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { OrnamentalDivider } from './OrnamentalDivider';

interface ArticleReaderProps {
  article: Article;
  onBackToLibrary: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onBackToLibrary,
  onSelectArticle,
}) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  // Track Apple-style scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  // Find index for Prev / Next
  const currentIndex = ARTICLES.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  // Resolve related articles
  const relatedArticles = (article.relatedArticleIds || [])
    .map((id) => ARTICLES.find((a) => a.id === id))
    .filter((a): a is Article => a !== undefined);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Apple-style Reading Progress Bar at Top of Viewport */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-[#0B3095] transition-all duration-150 ease-out shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article
        id={`article-reader-${article.id}`}
        className="bg-white rounded-3xl border border-[#E4E9F2] shadow-sm p-6 sm:p-10 lg:p-14"
      >
        {/* Top Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E4E9F2] text-xs sm:text-sm">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[#5B6472]">
            <button
              onClick={onBackToLibrary}
              className="hover:text-[#0B3095] transition-colors focus:outline-none focus:underline"
            >
              The Splendid Abode of the Friend
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B3095] font-semibold">{article.category}</span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E4E9F2] hover:bg-[#F7F9FF] text-xs text-[#111827] transition-colors"
              title="Copy article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#0B3095]" />
                  <span className="font-semibold text-[#0B3095]">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#5B6472]" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F7F9FF] hover:bg-[#EEF3FF] text-xs font-semibold text-[#0B3095] border border-[#E4E9F2] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Library</span>
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="pt-8 pb-8 space-y-4 max-w-[760px] mx-auto text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#0B3095] text-white font-semibold tracking-wider uppercase text-[11px]">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-[#5B6472]">
              <Clock className="w-3.5 h-3.5 text-[#C5A15A]" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1
            id="active-article-title"
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3095] leading-[1.18]"
          >
            {article.title}
          </h1>

          {article.arabicTitle && (
            <p className="font-arabic text-2xl sm:text-3xl text-[#0B3095]/80 font-normal dir-rtl pt-1">
              {article.arabicTitle}
            </p>
          )}

          <p className="text-base sm:text-lg text-[#5B6472] font-normal leading-relaxed">
            {article.subtitle}
          </p>

          <OrnamentalDivider accent="gold" className="py-2" />
        </header>

        {/* Article Body Content — constrained to comfortable reading width 680-820px */}
        <div className="max-w-[760px] mx-auto space-y-10 text-base sm:text-lg leading-[1.8] text-[#111827]/90">
          
          {/* Executive Summary Card */}
          <div className="p-6 rounded-2xl bg-[#F7F9FF] border-l-4 border-[#0B3095] space-y-2 text-sm sm:text-base border border-[#E4E9F2]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3095] block">
              Chapter Synopsis
            </span>
            <p className="font-serif-display italic text-[#111827] leading-relaxed">
              {article.summary}
            </p>
          </div>

          {/* Dynamic Sections */}
          {article.sections.map((sec, sIdx) => (
            <section key={sIdx} className="space-y-6">
              
              {sec.heading && (
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0B3095] pt-4 border-b border-[#E4E9F2] pb-2">
                  {sec.heading}
                </h2>
              )}

              {/* Arabic / Quranic / Hadith Quotation with proper RTL rendering */}
              {sec.arabicText && (
                <div className="p-6 sm:p-7 rounded-2xl bg-[#F7F9FF] border border-[#0B3095]/20 text-center space-y-3">
                  <p className="font-arabic text-xl sm:text-2xl lg:text-3xl text-[#0B3095] font-normal leading-[2] dir-rtl">
                    {sec.arabicText}
                  </p>
                  {sec.translation && (
                    <p className="text-xs sm:text-sm text-[#5B6472] italic pt-2 border-t border-[#E4E9F2] font-serif-display max-w-xl mx-auto">
                      {sec.translation}
                    </p>
                  )}
                </div>
              )}

              {/* Paragraphs */}
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[#111827]/85">
                  {p}
                </p>
              ))}

              {/* Key Quote Callout */}
              {sec.keyQuote && (
                <blockquote className="my-6 p-6 sm:p-7 rounded-2xl bg-[#061A4A] text-white font-serif-display text-lg sm:text-xl italic text-center leading-relaxed border border-[#C5A15A]/40 shadow-sm">
                  “{sec.keyQuote}”
                </blockquote>
              )}

              {/* Bullet Points */}
              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 my-4 pl-2">
                  {sec.bulletPoints.map((pt, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-3 text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B3095] mt-2.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

            </section>
          ))}

        </div>

        {/* Article Navigation: Previous & Next */}
        <div className="max-w-[760px] mx-auto mt-16 pt-8 border-t border-[#E4E9F2] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => onSelectArticle(prevArticle.id)}
              className="text-left p-4 rounded-xl border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:bg-[#F7F9FF] transition-all group"
            >
              <span className="text-[11px] font-semibold text-[#5B6472] uppercase tracking-wider flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 text-[#0B3095]" />
                Previous Chapter
              </span>
              <p className="font-serif-display font-bold text-sm sm:text-base text-[#0B3095] group-hover:text-[#1746B8] mt-1 line-clamp-1">
                {prevArticle.title}
              </p>
            </motion.button>
          ) : (
            <div />
          )}

          {nextArticle && (
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => onSelectArticle(nextArticle.id)}
              className="text-right p-4 rounded-xl border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:bg-[#F7F9FF] transition-all group"
            >
              <span className="text-[11px] font-semibold text-[#5B6472] uppercase tracking-wider flex items-center justify-end gap-1">
                Next Chapter
                <ArrowRight className="w-3 h-3 text-[#0B3095]" />
              </span>
              <p className="font-serif-display font-bold text-sm sm:text-base text-[#0B3095] group-hover:text-[#1746B8] mt-1 line-clamp-1">
                {nextArticle.title}
              </p>
            </motion.button>
          )}
        </div>

        {/* Related Chapters */}
        {relatedArticles.length > 0 && (
          <div className="max-w-[760px] mx-auto mt-12 pt-8 border-t border-[#E4E9F2]">
            <h3 className="font-serif-display text-xl font-bold text-[#0B3095] mb-4">
              Related Sacred Discourses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.id)}
                  className="p-4 rounded-xl border border-[#E4E9F2] hover:border-[#0B3095]/40 hover:bg-[#F7F9FF] cursor-pointer transition-all group"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C5A15A]">
                    {rel.category}
                  </span>
                  <h4 className="font-serif-display font-bold text-sm text-[#0B3095] group-hover:text-[#1746B8] mt-0.5 line-clamp-1">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#5B6472] mt-1 line-clamp-2">
                    {rel.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </article>
    </>
  );
};
