'use client';

import { useEffect, useState } from 'react';

// Phone-only bar. Hides while the form itself is on screen, so it never covers the fields.
export default function StickyCta({ label }: { label: string }) {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const target = document.getElementById('register');
		if (!target || !('IntersectionObserver' in window)) return;
		const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.15 });
		io.observe(target);
		return () => io.disconnect();
	}, []);

	return (
		<div
			aria-hidden={hidden}
			className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#eeeeee] bg-white/95 p-3 backdrop-blur-sm transition-transform duration-300 sm:hidden ${
				hidden ? 'translate-y-full' : 'translate-y-0'
			}`}
		>
			<a
				href="#register"
				tabIndex={hidden ? -1 : 0}
				className="flex items-center justify-center rounded-full bg-terracotta py-3 font-display text-sm font-bold text-white shadow-md shadow-terracotta/20"
			>
				{label}
			</a>
		</div>
	);
}
