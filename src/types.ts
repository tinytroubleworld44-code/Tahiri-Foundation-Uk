export interface ArticleSection {
  heading?: string;
  arabicText?: string;
  urduText?: string;
  translation?: string;
  paragraphs: string[];
  keyQuote?: string;
  bulletPoints?: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  subtitle: string;
  arabicTitle?: string;
  readTime: string;
  summary: string;
  sections: ArticleSection[];
  relatedArticleIds?: string[];
}

export interface CategoryInfo {
  id: string;
  slug: string;
  title: string;
  arabicTitle?: string;
  description: string;
  articleCount: number;
}

export type { TahiriEvent, EventScheduleDay, EventStatus } from './data/events';
