export function isRegistrationClosed(date:Date) {
	// Check if the current date and time is greater than or equal to the provided date: Always Pass UTC
	return Date.now() >= date.getTime()
}