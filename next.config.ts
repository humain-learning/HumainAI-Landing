import type { NextConfig } from "next";

/**
 * Content-Security-Policy — shipping in REPORT-ONLY mode first.
 *
 * Browser logs violations to DevTools Console (and to any configured
 * report-uri endpoint) but does NOT block resources. After 24-48h of
 * clean traffic, flip the header key from `Content-Security-Policy-
 * Report-Only` to `Content-Security-Policy` to enforce. There is a
 * draft follow-up PR queued for that flip.
 *
 * Allowlist scope: Google Tag Manager + Google Analytics (currently
 * wired), Vercel Analytics (via @vercel/analytics/next in layout),
 * common embeds (YouTube, Instagram, Vimeo for the webinar page),
 * Sanity (forward-compatible — adoption begins W3). Firebase and
 * Razorpay are likely to need additional sources once we observe
 * report-only violations from those paths; will be added in the
 * tighten-CSP commit.
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://googletagmanager.com https://*.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://va.vercel-scripts.com https://cdn.sanity.io https://*.sanity.io https://www.youtube.com https://www.instagram.com https://player.vimeo.com;
  script-src-elem 'self' 'unsafe-inline' https://googletagmanager.com https://*.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://va.vercel-scripts.com https://cdn.sanity.io https://*.sanity.io https://www.youtube.com https://www.instagram.com https://player.vimeo.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https: blob: https://googletagmanager.com https://*.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://stats.g.doubleclick.net;
  font-src 'self' data: https://fonts.gstatic.com;
  connect-src 'self' https://googletagmanager.com https://*.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://*.sanity.io https://api.sanity.io https://*.vimeo.com;
  frame-src 'self' https://www.youtube.com https://www.instagram.com https://*.sanity.io https://player.vimeo.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  {
    // Report-only — does NOT block; logs violations to console.
    // Flip key to "Content-Security-Policy" to enforce (follow-up PR).
    key: "Content-Security-Policy-Report-Only",
    value: ContentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
	allowedDevOrigins: ['172.16.16.*'],
	async headers() {
		return [
		{
			source: "/(.*)",
			headers: securityHeaders,
		},
		];
	},
	async redirects() {
		return [
			{
				source: "/humain-champs-landing",
				destination: "/humain-champs",
				permanent: true,
			},
		];
	}
};
export default nextConfig;
