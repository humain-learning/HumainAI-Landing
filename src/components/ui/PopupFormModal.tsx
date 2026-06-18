'use client';

import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type PopupModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	maxWidthClassName?: string;
};

export function PopupFormModal({
	isOpen,
	children,
	maxWidthClassName = 'max-w-[90vw] md:max-w-xl',
	onClose,
}: PopupModalProps) {
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[200] flex items-center justify-center  bg-black/70 backdrop-blur-sm">
					<div className="absolute inset-0 cursor-default"/>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.2 }}
						className={`relative z-10 w-full ${maxWidthClassName} max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl md:rounded-[3rem] md:p-8`}
						role="dialog"
						aria-modal="true"
					>
						<button
							onClick={onClose}
							className="absolute top-3 right-3 cursor-pointer rounded-full p-2 text-charcoal transition-colors duration-200 hover:bg-gray-100 md:top-6 md:right-6"
							aria-label="Close modal"
						>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						{children}
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}