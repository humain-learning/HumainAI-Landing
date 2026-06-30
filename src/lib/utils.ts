import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



const supportedCountries = ['in','ae']
export function getLocaleRoute(route: string, country: string): string {
	country = country.toLowerCase()
	let baseRoute = route
	for (const locale of supportedCountries) {
		if (route === `/${locale}`) {
			baseRoute = '/'
			break
		}

		if (route.startsWith(`/${locale}/`)) {
			baseRoute = route.slice(locale.length + 1)
			break
		}
	}

	// Default country (IN) gets no prefix
	if (country === 'in') {
		return baseRoute
	}
	if (country === 'in'){
		return route
	}

	if (!supportedCountries.includes(country)) {
		return route
	}
	if (route.startsWith(`/${country}`)) {
		return route
	}
	const newroute = `/${country}${route.startsWith('/') ? '' : '/'}${route}`
	return newroute
}