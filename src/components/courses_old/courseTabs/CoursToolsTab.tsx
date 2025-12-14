import React from 'react';
import Image from 'next/image';

export const CoursToolsTab = () => {
  return (
    <div className="px-4 pt-5 pb-4">
      <h4 className="pb-4 text-2xl font-medium">About this Course</h4>

      <div className="relative h-[180px] w-full">
        <Image
          fill
          alt="tools-images"
          src="/assets/images/all-tools.png"
          className="aspect-square"
        />
      </div>
    </div>
  );
};
