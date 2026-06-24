'use server';
import { cookies } from 'next/headers'



const ATTRIBUTION_KEYS = [
	'custom_utm_source',
	'custom_utm_medium',
	'custom_utm_campaign',
	'custom_utm_term',
	'custom_utm_content',
	'custom_fbclid',
	'custom_fbp',
	'custom_fbc'
] as const;

type AttributionData = {
	custom_utm_source?: string,
	custom_utm_medium?: string,
	custom_utm_campaign?: string,
	custom_utm_term?: string,
	custom_utm_content?: string,
	custom_fbclid?: string,
	custom_fbp?: string,
	custom_fbc?: string,
}

export async function getAttribution():Promise<AttributionData> {
	
	const attribution: AttributionData = {};
	const cookieStore = await cookies();

	ATTRIBUTION_KEYS.forEach((key) => {
		const cookieValue = cookieStore.get(key)?.value;
		
		if (cookieValue) {
			attribution[key] = cookieValue;
		}
	});
	return attribution;
}