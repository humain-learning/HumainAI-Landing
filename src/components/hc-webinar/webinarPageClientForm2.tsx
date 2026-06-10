'use client'
import { useForm } from 'react-hook-form'
import { crmLeadSchema } from '@/lib/schemas/crmLead';
import { X } from 'lucide-react';
import { z } from 'zod';
type WebinarPageClientForm2Props = {
	open: boolean;
	onClose: () => void;
}

type FormData = z.infer<typeof crmLeadSchema>;

export const WebinarPageClientForm2 = ({open, onClose}:WebinarPageClientForm2Props) => {
	const { register } = useForm<FormData>();

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm">
			<form className="relative bg-white rounded-lg p-6 pt-12 w-full max-w-md gap-4 grid grid-cols-2">
				<button
				type="button"
				aria-label="Close form"
				onClick={onClose}
				className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-charcoal transition hover:bg-[#ebebeb]"
				>
					<X aria-hidden="true" className="h-6 w-6 text-gray-500 font-light" strokeWidth={1}/>
				</button>

				
				<input {...register('firstName')} placeholder="First Name" className="w-full border p-2 rounded" />
				<input {...register('lastName')} placeholder="Last Name" className="w-full border p-2 rounded" />
				<input {...register('email')} placeholder="Email" className="w-full border p-2 rounded" />
			</form>
    	</div>
	)
}