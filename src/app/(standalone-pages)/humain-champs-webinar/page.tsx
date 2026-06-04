import { getWebinarDetails, submitWebinarLead } from '@/app/lib/crmClient';
import WebinarPageClient from './WebinarPageClient';

export const dynamic = 'force-dynamic';

const templateId = 1;

type WebinarDetails = {
	date: string;
	startTime: string;
	endTime: string;
};


export default async function WebinarPage() {
	
	const message = await getWebinarDetails(templateId);
	const date = new Date(message.start_time).toLocaleDateString('en-IN', { day : 'numeric', month : 'long', weekday: 'long', year: 'numeric' });
	const startTime = new Date(message.start_time).toLocaleTimeString('en-IN', {hour: "numeric", minute: "numeric", hour12: true}).toUpperCase();
	const endTime = new Date(message.end_time).toLocaleTimeString('en-IN', {hour: "numeric", minute: "numeric", hour12: true}).toUpperCase();
	
	const webinarDetails: WebinarDetails = {
		date,
		startTime,
		endTime
	}
	
	return (
		<WebinarPageClient
			webinarDetails={webinarDetails}
			onSubmitLead={submitWebinarLead}
		/>
	);
}

