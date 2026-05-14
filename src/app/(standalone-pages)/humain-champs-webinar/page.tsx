import { getWebinarDetails } from '../lib/crmClient';
import WebinarPageClient from './WebinarPageClient';

const templateId = '1';

const fallbackWebinarDetails = {
	date: 'Coming Soon',
	startTime: '11:00 AM',
	endTime: '12:00PM',
};

export default async function WebinarPage() {
	let webinarDetails = fallbackWebinarDetails;
	webinarDetails = await getWebinarDetails(templateId).catch((error) => {
		console.error('Error fetching webinar details:', error instanceof Error ? error.message : String(error));
		return fallbackWebinarDetails;
	});
	return <WebinarPageClient webinarDetails={webinarDetails} />;
}

