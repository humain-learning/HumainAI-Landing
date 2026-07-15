'use client';

import Image from 'next/image';
import { isRegistrationClosed } from '@/utils/helpers';

export default function Header() {
	const registrationClosed = isRegistrationClosed(new Date('2026-07-14T11:20:00Z'));
	return (
		<>
	{/* Orange announcement strip */}

			<div className="fixed inset-x-0 top-0 z-[101] flex items-center justify-center bg-[#E7A572] px-4 py-2 text-center">

			<p className="flex items-center gap-2 text-[0.75rem] font-medium text-white md:text-[0.85rem]">

				<span className="hidden h-1.5 w-1.5 rounded-full bg-white sm:inline-block" />

				Limited seats per batch — registrations close when a batch fills or 2 hours before start

			</p>

			</div>

			<nav className="fixed inset-x-0 top-[36px] z-[100] flex h-[75px] items-center justify-between px-5 md:px-16 bg-white/95 backdrop-blur-md border-b border-[#E6E6E6] shadow-[0_2px_16px_rgba(0,0,0,0.07)]">        
				<Image src="/assets/logo/brain-logo.png" alt="Humain Learning Logo" width={240} height={60} className="object-contain w-40 md:w-52 h-auto" priority />
				
				<div className="flex items-center gap-6">
					<a
						className="inline-flex items-center gap-2 font-display font-extrabold border-none cursor-pointer rounded-md transition-all duration-150 hover:-translate-y-[1px] bg-[#E7A572] text-white px-7 py-3.5 text-[0.9rem] shadow-[0_2px_14px_rgba(231,165,114,0.3)] hover:bg-[#C97D49] hover:shadow-[0_4px_20px_rgba(231,165,114,0.4)]"
						href="#reserve-now"	
					>
						{registrationClosed ? 'Registrations Closed' : 'Reserve My Seat'}
					</a>
				</div>
			</nav>
		</>
	);
}