import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// Define the standard UTM parameters to look for
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

export function proxy(request: NextRequest) {
	const { searchParams } = request.nextUrl
	const response = NextResponse.next()

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
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}