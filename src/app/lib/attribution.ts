export type AttributionData = {
  fbclid: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

export function extractFbclidFromFbc(fbc: string): string {
  if (!fbc) return '';
  const parts = fbc.split('.');
  // Expected format: fb.1.<timestamp>.<fbclid>
  return parts.length >= 4 ? parts.slice(3).join('.') : '';
}

function getCookieValue(name: string): string {
  if (typeof document === 'undefined') return '';
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
}

/**
 * Resolves fbclid and all UTM params from URL search params, sessionStorage,
 * and the _fbc cookie — in that priority order.
 * Safe to call only in browser contexts (inside useEffect).
 */
export function resolveAttribution(params: URLSearchParams): AttributionData {
  const fbclidFromUrl = params.get('fbclid') ?? '';
  const fbclidFromFbc = extractFbclidFromFbc(getCookieValue('_fbc'));
  let fbclidFromSession = '';

  try {
    fbclidFromSession = window.sessionStorage.getItem('fbclid') ?? '';
  } catch {
    // sessionStorage unavailable (e.g. private browsing restrictions)
  }

  const resolvedFbclid = fbclidFromUrl || fbclidFromSession || fbclidFromFbc;

  try {
    if (resolvedFbclid) {
      window.sessionStorage.setItem('fbclid', resolvedFbclid);
    }
  } catch {
    // Ignore storage errors — resolved value is still usable in memory
  }

  return {
    fbclid: resolvedFbclid,
    utm_source: params.get('utm_source') ?? '',
    utm_medium: params.get('utm_medium') ?? '',
    utm_campaign: params.get('utm_campaign') ?? '',
    utm_term: params.get('utm_term') ?? '',
    utm_content: params.get('utm_content') ?? '',
  };
}
