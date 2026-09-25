import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getLocaleRoute } from '@/lib/utils'

// Define the standard UTM parameters to look for
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

const LOCALE_EXEMPT_PREFIXES = ['/hailm-hackathon']

export function proxy(request: NextRequest) {
	const { searchParams, pathname } = request.nextUrl
	let response: NextResponse

	let country : string

	country = request.headers.get('x-vercel-ip-country') || 'in'

	country = country.toLowerCase()

	// Pages that exist in one locale only. Without this, a UAE visitor to /hailm-hackathon is
	// redirected to /ae/hailm-hackathon, which doesn't exist.
	const localeExempt = LOCALE_EXEMPT_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
	const localizedPath = localeExempt ? pathname : getLocaleRoute(pathname, country)

	if (localizedPath !== pathname) {
		const url = request.nextUrl.clone()
		url.pathname = localizedPath
		response = NextResponse.redirect(url)
	} else {
		response = NextResponse.next()
	}

	response.cookies.set({
		name: 'country',
		value: country.toLowerCase(),
		path: '/',
	})
	
	// Loop through parameters and store any that exist in the URL
	UTM_PARAMS.forEach((param) => {
		const value = searchParams.get(param)
		if (value) {
		response.cookies.set({
			name: ('custom_'+param), 
			value: value, 
			path: '/', 
			})
		}
	})

	return response
}


// Ensure this only runs on actual page visits, skipping internal assets/images
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)',
  ],
}