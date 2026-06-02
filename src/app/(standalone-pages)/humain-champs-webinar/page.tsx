import { getWebinarDetails, submitWebinarLead } from '../lib/crmClient';
import WebinarPageClient from './WebinarPageClient';

export const dynamic = 'force-dynamic';

const templateId = 1;

type WebinarDetails = {
	date: Date;
	startTime: Date;
	endTime: Date;
};


export default async function WebinarPage() {
	
	const message = await getWebinarDetails(templateId);
	const webinarDetails = {
		date: message.date,
		startTime: new Date(message.start_time),
		endTime: new Date(message.end_time),
	}
	return (
		<WebinarPageClient
			webinarDetails={webinarDetails}
			onSubmitLead={submitWebinarLead}
		/>
	);
}

