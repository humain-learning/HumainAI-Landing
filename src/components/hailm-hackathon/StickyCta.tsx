'use client';

import { useEffect, useState } from 'react';
import s from './hailm.module.css';

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
		<div className={`${s.sticky} ${hidden ? s.stickyHidden : ''}`} aria-hidden={hidden}>
			<a className={s.btn} href='#register' tabIndex={hidden ? -1 : 0}>
				{label}
			</a>
		</div>
	);
}
