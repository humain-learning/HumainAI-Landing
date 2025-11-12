import React from 'react';
import { CourseToolsDetails } from './CourseToolsDetails';
import { YourAiJourney } from './CourseFAQDetails';

interface CourseTabDetailsProps {
  currentTab: 'Overview' | 'FAQS' | 'Reviews' | 'Tools';
}

export const CourseTabDetails = ({ currentTab }: CourseTabDetailsProps) => {
  return (
    <div>
      {currentTab === 'Tools' && <CourseToolsDetails />}
      <YourAiJourney />
    </div>
  );
};
