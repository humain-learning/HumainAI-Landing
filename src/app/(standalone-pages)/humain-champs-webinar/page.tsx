import { getWebinarDetails } from '../lib/crmClient';
import WebinarPageClient from './WebinarPageClient';

export const dynamic = 'force-dynamic';

const templateId = 1;

type WebinarDetails = {
	date: string;
	startTime: string;
	endTime: string;
};

const fallbackWebinarDetails: WebinarDetails = {
	date: 'Coming Soon',
	startTime: '11:00 AM',
	endTime: '12:00 PM',
};

function isWebinarDetails(value: unknown): value is WebinarDetails {
	if (!value || typeof value !== 'object') {
		return false;
	}

	const candidate = value as Partial<WebinarDetails>;
	return (
		typeof candidate.date === 'string' &&
		typeof candidate.startTime === 'string' &&
		typeof candidate.endTime === 'string'
	);
}

export default async function WebinarPage() {
	let webinarDetails = fallbackWebinarDetails;

	try {
		const response = await getWebinarDetails(templateId);
		const responseWithMessage = response as { message?: unknown };

		if (isWebinarDetails(responseWithMessage.message)) {
			webinarDetails = responseWithMessage.message;
		} else if (isWebinarDetails(response)) {
			webinarDetails = response;
		}
	} catch (error) {
		console.error(
			'Error fetching webinar details:',
			error instanceof Error ? error.message : String(error)
		);
	}

	return <WebinarPageClient webinarDetails={webinarDetails} />;
}

