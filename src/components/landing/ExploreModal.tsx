'use client';

import Link from 'next/link';
import { X } from 'lucide-react';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExploreModal = ({ isOpen, onClose }: ExploreModalProps) => {
  if (!isOpen) return null;

  const options = [
    {
      id: 1,
      title: "I'm a Student",
      description: 'Explore AI literacy courses designed for school students',
      href: '/courses/students/humain-champs',
      iconSrc: '/assets/images/homepage/popup/Student.svg',
    },
    {
      id: 2,
      title: "I'm an Educator",
      description: 'Professional development courses for teachers',
      href: '/courses/educators/humain-educators',
      iconSrc: '/assets/images/homepage/popup/Educator.svg',
    },
    {
      id: 3,
      title: "I'm a School",
      description: 'Bring AI literacy to your school or organization',
      href: '/schools',
      iconSrc: '/assets/images/homepage/popup/School.svg',
    },
    {
      id: 4,
      title: "I'm a Parent",
      description: 'Support your child with AI-ready learning pathways',
      href: '/parenthub',
      iconSrc: '/assets/images/homepage/popup/Parent.svg',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-10 shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-lg p-1 transition-colors hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#011813] mb-2">
            Welcome to Humain Learning
          </h2>
          <p className="text-gray-600">
            Choose your path and start your AI literacy journey
          </p>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {options.map((option) => (
            <Link
              key={option.id}
              href={option.href}
              onClick={onClose}
              className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 hover:border-[#AAC191] hover:bg-[#AAC191]/5 transition-all duration-300"
            >
              <div className="mb-4 h-12 w-12 group-hover:scale-110 transition-transform">
                <img src={option.iconSrc} alt={option.title} className="h-full w-full object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-[#011813] mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {option.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[#AAC191] font-medium group-hover:gap-3 transition-all">
                Explore
                <svg
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExploreModal;
