import React from 'react';
import { cn } from '@/utils';
import { CourseOverviewTab } from './CourseOverviewTab';
import { CoursToolsTab } from './CoursToolsTab';
import { CourseFAQTab } from './CourseFAQTab';
import { CourseReviewsTab } from './CourseReviewsTab';

interface CourseTabsProps {
  currentTab: 'Overview' | 'FAQS' | 'Reviews' | 'Tools';
  onChangeTab: React.Dispatch<
    React.SetStateAction<'Overview' | 'FAQS' | 'Reviews' | 'Tools'>
  >;
}

export const CourseTabs = ({ currentTab, onChangeTab }: CourseTabsProps) => {
  return (
    <section className="w-full rounded-2xl bg-white px-2 pt-2 pb-4">
      <div className="flex items-center gap-2 overflow-x-auto rounded-xl bg-[#EEEEF0] p-1.5 scrollbar">
        <button
          className={cn(
            'w-full rounded-lg p-2 px-4 text-sm text-[#333333]',
            currentTab === 'Overview'
              ? 'border-r-0 border-l-0 bg-white'
              : 'border-r border-l border-gray-300 bg-transparent'
          )}
          onClick={() => onChangeTab('Overview')}
        >
          Overview
        </button>
        <button
          className={cn(
            'w-full rounded-lg bg-white p-2 px-4 text-sm text-[#333333]',
            currentTab === 'Tools'
              ? 'border-r-0 border-l-0 bg-white'
              : 'border-r border-l border-gray-300 bg-transparent'
          )}
          onClick={() => onChangeTab('Tools')}
        >
          Tools
        </button>
        <button
          className={cn(
            'w-full rounded-lg bg-white p-2 px-4 text-sm text-[#333333]',
            currentTab === 'FAQS'
              ? 'border-r-0 border-l-0 bg-white'
              : 'border-r border-l border-gray-300 bg-transparent'
          )}
          onClick={() => onChangeTab('FAQS')}
        >
          FAQS
        </button>
        <button
          className={cn(
            'w-full rounded-lg p-2 px-4 text-sm text-[#333333]',
            currentTab === 'Reviews'
              ? 'border-r-0 border-l-0 bg-white'
              : 'border-r border-l border-gray-300 bg-transparent'
          )}
          onClick={() => onChangeTab('Reviews')}
        >
          Reviews
        </button>
      </div>

      {currentTab === 'Overview' && <CourseOverviewTab />}

      {currentTab === 'Tools' && <CoursToolsTab />}

      {currentTab === 'FAQS' && <CourseFAQTab />}

      {currentTab === 'Reviews' && <CourseReviewsTab />}
    </section>
  );
};
