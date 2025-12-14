import React from 'react';
import Image from 'next/image';
import { BellRing, Heart, Share2, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';

const course_criteria = [
  {
    id: 1,
    icon: '/assets/icons/student.svg',
    title: 'For Students from 13+ age group',
  },
  {
    id: 2,
    icon: '/assets/icons/file.svg',
    title: 'Live interactive sessions',
  },
  {
    id: 3,
    icon: '/assets/icons/student.svg',
    title: '50 students per batch',
  },
  {
    id: 4,
    icon: '/assets/icons/file.svg',
    title: '6 Modules',
  },
  {
    id: 5,
    icon: '/assets/icons/time.svg',
    title: '3 Weeks',
  },
  {
    id: 6,
    icon: '/assets/icons/time.svg',
    title: '4 Hrs / Week',
  },
  {
    id: 7,
    icon: '/assets/icons/levels.svg',
    title: 'LMS & Community access for one year',
  },
  {
    id: 8,
    icon: '/assets/icons/rupees.svg',
    title: <div className='flex items-center gap-1'><span className="text-3xl font-bold align-middle">11,800</span>incl. GST</div>
  },
];

export const CourseSidePanel = () => {

  const router = useRouter();

  return (
    <div className="order-1 col-span-1 h-fit rounded-2xl bg-white p-2 lg:order-2 lg:col-span-2">
      <div>
        <div className="relative h-[250px] w-full overflow-hidden rounded-2xl">
          <Image
            fill
            alt="course-img"
            src="/assets/images/ai-image-learn.png"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-y-4 px-2 pt-4 pb-2">
          {/* Title of the Program */}
          <h2 className="text-xl font-bold text-primary-color px-2">Humain Champs</h2>

          {/* <div className="bg-secondary-color/20 flex items-center justify-between rounded-full p-1">
            <button className="flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 transition-all duration-100 hover:bg-white">
              <BellRing className="size-5" />
              Get Notified
            </button>
            <button className="flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 transition-all duration-100 hover:bg-white">
              <span className="bg-secondary-color flex items-center justify-center rounded-full p-1">
                <Video className="size-5 text-white" fill="#fff" />
              </span>
              Live Session
            </button>
          </div> */}

          <div className="flex flex-col gap-y-3">
            {course_criteria?.map((item) => (
              <div className="flex items-center gap-1.5" key={item?.id}>
                <Image src={item?.icon} alt="criteria-icon" width={20} height={20} />
                <div className="text-base font-normal text-[#666666]">
                  {item?.title}
                </div>
              </div>
            ))}
          </div>
          <button 
          onClick={() => router.push(`https://pages.razorpay.com/humainchamps`)}
          className="bg-primary-color cursor-pointer rounded-full py-2.5 text-base font-medium text-white">
            Start Learning
          </button>

          {/* <div className="flex items-center gap-5">
            <button className="flex cursor-pointer items-center gap-1.5">
              <Heart className="text-primary-color size-5" />
              <p className="text-base font-medium text-[#666666]">Wishlist</p>
            </button>
            <button className="text-primary-color flex cursor-pointer items-center gap-1.5">
              <Share2 className="size-5" />
              <p className="text-base font-medium">Share</p>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
