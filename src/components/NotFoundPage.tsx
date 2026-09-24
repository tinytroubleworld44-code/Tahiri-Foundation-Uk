import React from 'react';
import { Home, Compass, Calendar, BookOpen, ArrowLeft, Search } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface NotFoundPageProps {
  onNavigate: (
    page: 'home' | 'shajra' | 'abode' | 'events' | 'sajjan-saeen' | 'zikr-e-qalbi',
    articleId?: string,
    eventId?: string
  ) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div id="not-found-page" className="min-h-[70vh] flex flex-col justify-center items-center bg-white text-[#111827] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3FF] border border-[#0B3095]/15 text-[#0B3095] text-xs font-semibold uppercase tracking-wider">
          <Search className="w-3.5 h-3.5" />
          <span>Error 404</span>
        </div>

        {/* Heading */}
        <h1
          id="not-found-h1"
          className="font-serif-display text-4xl sm:text-5xl font-bold text-[#0B3095] tracking-tight leading-tight"
        >
          Page Not Found
        </h1>

        {/* Explanatory Text */}
        <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
          The page or address you requested could not be located. It may have moved or the URL may be mistyped. Please use the direct links below to explore authentic content from Tahiri Foundation UK:
        </p>

        {/* Primary Return Home Action */}
        <div className="pt-1 flex justify-center">
          <button
            id="not-found-primary-return-home-btn"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B3095] min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>
        </div>

        {/* Useful Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-left">
          
          <button
            onClick={() => onNavigate('home')}
            className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-sm transition-all duration-200 group flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] text-[#0B3095] group-hover:bg-[#0B3095] group-hover:text-white transition-colors">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B3095] group-hover:underline">Home</div>
              <div className="text-xs text-[#5B6472]">Return to the main portal</div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('shajra')}
            className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-sm transition-all duration-200 group flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] text-[#0B3095] group-hover:bg-[#0B3095] group-hover:text-white transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B3095] group-hover:underline">Shajra Shareef</div>
              <div className="text-xs text-[#5B6472]">Explore the spiritual lineage</div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('events')}
            className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-sm transition-all duration-200 group flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] text-[#0B3095] group-hover:bg-[#0B3095] group-hover:text-white transition-colors">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B3095] group-hover:underline">Events &amp; Programs</div>
              <div className="text-xs text-[#5B6472]">Urs Mubarak &amp; gatherings</div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('abode')}
            className="p-4 rounded-xl border border-[#E4E9F2] bg-[#F7F9FF] hover:bg-white hover:border-[#0B3095]/30 hover:shadow-sm transition-all duration-200 group flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-white border border-[#E4E9F2] text-[#0B3095] group-hover:bg-[#0B3095] group-hover:text-white transition-colors">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B3095] group-hover:underline">The Splendid Abode</div>
              <div className="text-xs text-[#5B6472]">Authentic spiritual treatises</div>
            </div>
          </button>

        </div>

      </div>
    </div>
  );
};
