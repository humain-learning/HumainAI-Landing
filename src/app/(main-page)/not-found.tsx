// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    // Ensure the background is white and text is readable
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white text-gray-900">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">This page could not be found.</p>
      <Link href="/">
        Go back home →
      </Link>
    </div>
  );
}
