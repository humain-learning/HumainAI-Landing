// app/not-found.tsx
import PrimaryButton from '@/components/ui/PrimaryButton';
import Link from 'next/link';

export default function NotFound() {
  return (
    // Ensure the background is white and text is readable
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white text-gray-900">
      <p className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-3">404</p>
      <h1 className="text-4xl font-bold mb-3">Oops!</h1>
      <p className="text-gray-500 mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>

	  <PrimaryButton target="/" text="Go back home" />
	</div>
  );
}
