'use client';
import { useState } from 'react';
import { CourseHeader } from './CourseHeader';
import { CourseSidePanel } from './CourseSidePanel';
import { CourseTabs } from './courseTabs/CourseTabs';
import { CourseTabDetails } from './courseTabs/CourseTabDetails';

export const CoursesPage = () => {
  const [currentTab, setCurrentTab] = useState<
    'Overview' | 'FAQS' | 'Reviews' | 'Tools'
  >('Overview');
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-7 lg:px-0">
        <div className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-5">
          <CourseHeader />
          <CourseTabs currentTab={currentTab} onChangeTab={setCurrentTab} />
        </div>
        <CourseSidePanel />
      </div>

      <CourseTabDetails currentTab={currentTab} />
    </div>
  );
};
