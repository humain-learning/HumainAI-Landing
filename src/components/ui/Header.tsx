'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '@/app/lib/firebase'; // adjust path as needed

const ROUTES = [
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Technologies',
    href: '/#ai-starter-pack',
  },
  {
    name: 'Discover', 
    href: '/#why-humain',
  },
  {
    name: 'FAQs',
    href: '/#faqs',
  },
];

// "Request a Call Back" modal component
const RequestCallBackModal = ({
  isOpen,
  onClose,
  onSubmit,
  loading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: { name: string; email: string; contact: string }) => void;
  loading: boolean;
}) => {
  const modalContainerRef = useRef<null | HTMLDivElement>(null);
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    contact: false,
  });

  const handleClose = () => {
    setUser({
      name: '',
      email: '',
      contact: '',
    });
    setTouched({
      name: false,
      email: false,
      contact: false,
    });
    document.body.style.overflow = 'auto';
    onClose();
  };

  useEffect(() => {
    const handleCloseModal = (e: MouseEvent) => {
      if (
        modalContainerRef.current &&
        e.target &&
        !modalContainerRef.current.contains(e.target as HTMLElement)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleCloseModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [isOpen]);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidContact = (contact: string) => /^[0-9]{10}$/.test(contact);

  const isFormValid =
    user.name.trim().length > 0 &&
    isValidEmail(user.email) &&
    isValidContact(user.contact);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        ref={modalContainerRef}
        className="animate-fadeIn relative w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <button
          className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-700"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-primary-color mb-2 text-center text-2xl font-bold">
          Request a Call Back
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Please fill in your details and our team will get in touch with you
          soon.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTouched({ name: true, email: true, contact: true });
            if (isFormValid) onSubmit(user);
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input
              type="text"
              className={`focus:ring-primary-color w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none ${touched.name && !user.name.trim() ? 'border-red-400' : 'border-gray-300'}`}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              required
              placeholder="Your Name"
            />
            {touched.name && !user.name.trim() && (
              <span className="text-xs text-red-500">Name is required.</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              className={`focus:ring-primary-color w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none ${touched.email && !isValidEmail(user.email) ? 'border-red-400' : 'border-gray-300'}`}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              required
              placeholder="you@example.com"
            />
            {touched.email && !isValidEmail(user.email) && (
              <span className="text-xs text-red-500">Enter a valid email.</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              className={`focus:ring-primary-color w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none ${touched.contact && !isValidContact(user.contact) ? 'border-red-400' : 'border-gray-300'}`}
              value={user.contact}
              onChange={(e) => setUser({ ...user, contact: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, contact: true }))}
              required
              placeholder="10-digit mobile number"
              maxLength={10}
            />
            {touched.contact && !isValidContact(user.contact) && (
              <span className="text-xs text-red-500">
                Enter a valid 10-digit number.
              </span>
            )}
          </div>
          <button
            type="submit"
            className={`bg-primary-color mt-2 rounded-lg py-2 font-semibold text-white transition ${!isFormValid || loading ? 'cursor-not-allowed opacity-60' : 'hover:bg-primary-color/90'}`}
            disabled={!isFormValid || loading}
          >
            {loading ? 'Submitting...' : 'Request Call Back'}
          </button>
        </form>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 300ms ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

const NavbarSidebar = ({
  isOpen,
  className,
  onClose,
}: {
  onClose: () => void;
  isOpen: boolean;
  className?: string;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isCoursesPage = pathname === '/courses';
  
  // Simulate submit
  const handleSubmit = async (user: {
    name: string;
    email: string;
    contact: string;
  }) => {
    setLoading(true);
    // Simulate API call
    // firebase api call
    try {
      const db = getFirestore(app);
      await addDoc(collection(db, 'callbackRequests'), {
        name: user.name,
        email: user.email,
        contact: user.contact,
        createdAt: new Date(),
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }

    setLoading(false);
    setShowModal(false);
    toast.success('Thank you! We will contact you soon.');
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transform bg-white transition-transform duration-300 ease-in-out md:hidden',
        className,
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Close button */}
      <div className="flex items-center justify-between border-b px-4 py-4">
        <div className="text-lg font-semibold">Menu</div>
        <button onClick={onClose}>
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar links */}
      <div className="flex flex-col space-y-4 px-6 py-6">
        {ROUTES.map((route, i) => (
          <Link
            key={i}
            href={isCoursesPage ? `/${route.href}` : route.href}
            onClick={onClose}
            className="text-left text-lg font-medium text-gray-700 hover:text-black"
          >
            {route.name}
          </Link>
        ))}

        {/* Explore more button */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-full border-2 py-1 pr-1 pl-4"
          >
            Request A Callback
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black">
              <img
                className="w-6"
                src="/assets/icons/arrow-top-right.svg"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
      <RequestCallBackModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isCoursesPage = pathname === '/courses';
  const isPrivacyPage = pathname === '/privacy-policy'
  const handleSubmit = async (user: {
    name: string;
    email: string;
    contact: string;
  }) => {
    setLoading(true);
    try {
      const db = getFirestore(app);
      await addDoc(collection(db, 'callbackRequests'), {
        name: user.name,
        email: user.email,
        contact: user.contact,
        createdAt: new Date(),
      });
      setShowModal(false);
      toast.success('Thank you! We will contact you soon.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="mx-auto w-full md:max-w-7xl">
        <div className="flex items-center justify-between px-2 py-2 md:px-0 md:py-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              className="h-16"
              src="/assets/logo/brain-logo.png"
              alt="Humain AI"
            />
            {/* <div className="text-xl font-semibold">HUMAIN AI</div> */}
          </Link>

          <div className="hidden items-center md:flex gap-2">
            {ROUTES?.map((route, i) => (
              <Link
                href={isCoursesPage || isPrivacyPage ? `/${route?.href}` : route?.href}
                className={cn(
                  "cursor-pointer px-3 text-base ",
                  i % 2 === 0 ? "after:bg-[#aac291]" : "after:bg-[#e8a772]"
                )}
                key={i}
              >
                <span className={cn(
                  "relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:transition-all after:duration-500 hover:after:w-full",
                  i % 2 === 0 ? "after:bg-[#aac291]" : "after:bg-[#e8a772]"
                )}>
                  {route?.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Explore more */}
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border-2 py-1 pr-1 pl-4 md:flex"
            onClick={() => {
              setShowModal(true);
              document.body.style.overflow = 'hidden';
            }}
          >
            Request A Callback
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black">
              <img
                className="w-6"
                src="/assets/icons/arrow-top-right.svg"
                alt=""
              />
            </div>
          </button>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="m-0 inline-flex rounded-lg border border-gray-400 p-1.5 outline-0 hover:border-black md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      <NavbarSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <RequestCallBackModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </>
  );
};

export default Header;
