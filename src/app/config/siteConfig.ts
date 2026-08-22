/**
 * Centralized site configuration — public values only.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  WORDPRESS URL CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════
 *
 * Production WordPress / Fluent Forms booking URL:
 *   https://wpganesha.kitolit.com/ganesha-booking-form/
 *
 * The trusted origin used for postMessage validation is derived
 * from WORDPRESS_FORM_URL automatically.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  SECURITY NOTICE
 * ═══════════════════════════════════════════════════════════════════
 *
 * This file is for PUBLIC configuration values only — URLs that
 * are visible in the browser anyway (iframe src, etc.).
 *
 * NEVER place any of the following in this file or anywhere in src/:
 *   • Razorpay Key Secret
 *   • API secrets / tokens
 *   • Database credentials
 *   • Private backend URLs with embedded credentials
 *
 * Those belong exclusively in the future backend service.
 * ═══════════════════════════════════════════════════════════════════
 */

// ─── WordPress / Fluent Forms iframe ────────────────────────────

/** Full URL of the WordPress/Fluent Forms booking page loaded in the iframe. */
export const WORDPRESS_FORM_URL =
  "https://wpganesha.kitolit.com/ganesha-booking-form/";

/**
 * Trusted origin(s) for postMessage validation.
 *
 * The primary origin is derived from WORDPRESS_FORM_URL so it
 * stays in sync automatically. In development mode, localhost
 * origins are also accepted to support local testing.
 *
 * Only messages whose `event.origin` matches one of these values
 * will be processed by the React app. All others are silently ignored.
 */
export const TRUSTED_MESSAGE_ORIGINS: readonly string[] = [
  new URL(WORDPRESS_FORM_URL).origin,
  ...(import.meta.env.DEV
    ? ["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:5173"]
    : []),
];

// ─── postMessage protocol ───────────────────────────────────────

/**
 * Known postMessage event types from the WordPress/Fluent Forms iframe.
 * Only these types will be processed; all unrecognized types are ignored.
 */
export const EXPECTED_MESSAGE_TYPES = {
  /** Fired when the Fluent Form is submitted successfully. */
  FORM_SUCCESS: "FLUENT_FORM_SUCCESS",
  /** Fired when the iframe content height changes (for dynamic resizing). */
  FORM_HEIGHT: "GANESHA_FORM_HEIGHT",
} as const;

/**
 * Iframe height constraints (in pixels).
 * Used to validate GANESHA_FORM_HEIGHT messages and prevent
 * unreasonable values from being applied to the DOM.
 */
export const IFRAME_HEIGHT_LIMITS = {
  MIN: 200,
  MAX: 3000,
} as const;
