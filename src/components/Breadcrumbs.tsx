import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  url?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      id="site-breadcrumbs-nav"
      aria-label="Breadcrumb"
      className="w-full py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#5B6472]">
        <li className="inline-flex items-center">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              if (items[0]?.onClick) {
                items[0].onClick();
              } else {
                window.location.hash = '#/';
              }
            }}
            className="inline-flex items-center gap-1 text-[#5B6472] hover:text-[#0B3095] transition-colors font-medium focus:outline-none focus:underline"
          >
            <Home className="w-3.5 h-3.5 text-[#0B3095]/75" aria-hidden="true" />
            <span>Home</span>
          </a>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className="w-3.5 h-3.5 text-[#5B6472]/50 shrink-0"
                aria-hidden="true"
              />
              {isLast || !item.url ? (
                <span
                  className="font-semibold text-[#0B3095] truncate max-w-[220px] sm:max-w-md"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.url ? (item.url.startsWith('#') ? item.url : `#${item.url.startsWith('/') ? item.url : '/' + item.url}`) : '#/'}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.onClick) {
                      item.onClick();
                    } else if (item.url) {
                      const cleanUrl = item.url.startsWith('#') ? item.url : `#${item.url.startsWith('/') ? item.url : '/' + item.url}`;
                      window.location.hash = cleanUrl;
                    }
                  }}
                  className="text-[#5B6472] hover:text-[#0B3095] transition-colors font-medium focus:outline-none focus:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
