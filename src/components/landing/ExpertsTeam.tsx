import React from 'react';
import { cn } from '@/utils';
import { RollerCoaster } from 'lucide-react';
import { profile } from 'console';

const EXPERTS_LIST = [
  {
    name: 'Manit jain',
    role: 'Co-founder',
    profileImg: 'e1.png',
    bio: 'Co-founder, Heritage Group of Schools \n Pioneered Experiential Learning in India \n M.Ed, Harvard University',
  },
  {
    name: 'Smriti Jain',
    role: 'Co-founder',
    profileImg: 'e2.png',
    bio: 'Co-founder, I Am A Teacher \nSpearheaded India’s first practice based teacher education model \nM.Ed, Harvard University',
  },
  {
    name: 'Dr. Tapaswini Sahu',
    role: 'Academic Director',
    profileImg: 'e3.png',
    bio: 'Recognised leader in curriculum design, assessment and teacher development \nPhD. Educational Psychology, JNU \nM.Phil, Cambridge University',
  },
  {
    name: 'Rambabu Kondru',
    role: 'COO',
    profileImg: 'e4.png',
    bio: 'Business development & strategy expert \nPassionate about the education sector of India \nPGDM, IIM Calcutta',
  },
  {
    name: 'Ankur Dahiya',
    role: 'Program Head',
    profileImg: 'e5.png',
    bio: 'DTU graduate \nshaping the future of education by driving AI-powered innovations that empower schools, teachers, and learners.',
  },
  {
    name: 'Dr. Sannjay Pandit',
    role: 'Operations Manager',
    profileImg: 'e8.jpg',
    bio: 'A decade of experience in education with both private and public schools. \nExperience ranging from partnership to program design, implementation, and training on existing curricula.',
  },
  {
    name: 'Rashmi Bhaskaran',
    role: 'Lead - Ai Curriculum and Training',
    profileImg: 'e8.jpg',
    bio: 'Engineer turned Educator at the intersection of education, innovation, and technology \n Engineering in Electrical and Electronics, VTU',
  }
];

const ExpertsTeam = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 pt-5 pb-12 text-[#011813] md:px-0 lg:space-y-[50px] lg:pt-12">
      <h3 className="text-center text-4xl font-semibold md:text-5xl">
        Meet Our Expert Team
      </h3>

      <div className="">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {EXPERTS_LIST?.map((item, idx) => (
            <div
              className={cn(
                'group col-span-1 space-y-3 cursor-pointer',
                idx % 2 === 0 ? 'lg:pt-12' : ''
              )}
              key={idx}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  alt={item.name}
                  className="h-full w-full transition-all duration-500 group-hover:opacity-20"
                  src={`/assets/images/${item?.profileImg}`}
                />
                
                {/* Bio overlay with alternating colors */}
                <div 
                  className={cn(
                    "absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-500 group-hover:opacity-100",
                    idx % 2 === 0 ? 'bg-[#aac291]' : 'bg-[#e8a772]'
                  )}
                >
                  <p className="text-center text-[1rem] text-white translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    {item?.bio}
                  </p>
                </div>
              </div>

              <div className="">
                <h6 className="w-full max-w-[180px] text-center text-2xl font-medium text-black">
                  {item?.name}
                </h6>
                <p className="text-center text-base font-normal text-[#4E5255]">
                  {item?.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertsTeam;