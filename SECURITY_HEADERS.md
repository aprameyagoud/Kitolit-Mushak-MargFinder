# Security Headers — Deployment Configuration Reference

This document describes recommended HTTP security headers for the
Ganesha Workshop React frontend. These headers **must be configured at the
hosting/server/CDN level** (e.g. Netlify `_headers`, Vercel `vercel.json`,
Nginx config, Cloudflare rules) — they cannot be effectively set from
React source code.

---

## Recommended Headers

### X-Content-Type-Options

```
X-Content-Type-Options: nosniff
```

Prevents the browser from MIME-type sniffing responses. Ensures that
scripts and stylesheets are only executed/applied if the server sends
the correct `Content-Type`.

---

### Referrer-Policy

```
Referrer-Policy: strict-origin-when-cross-origin
```

Sends the full URL as referrer for same-origin requests, but only the
origin (no path) for cross-origin requests. Balances analytics needs
with user privacy.

---

### X-Frame-Options

```
X-Frame-Options: DENY
```

Prevents **this website** from being embedded inside an iframe on other
sites (clickjacking protection). This does NOT affect the outgoing
iframe that loads WordPress/Fluent Forms — that is controlled by the
WordPress site's own headers.

---

### Permissions-Policy

```
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```

Disables access to sensitive browser APIs that this application does
not use. When Razorpay is integrated in the future, you may need to
review the `payment` permission depending on the Razorpay SDK's
requirements.

---

### Content-Security-Policy

This is the most complex header. The CSP must allow the WordPress
iframe to load while restricting everything else.

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
  frame-src https://wpganesha.kitolit.com;
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
```

**IMPORTANT — When adding Razorpay:**

You will need to add Razorpay's domains to `script-src`, `frame-src`,
and `connect-src`. Refer to Razorpay's CSP documentation at the time
of integration for the exact domains required.

---

## Platform-Specific Examples

### Netlify (`public/_headers`)

```
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; frame-src https://wpganesha.kitolit.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
```

### Vercel (`vercel.json`)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=()" }
      ]
    }
  ]
}
```

---

## Notes

- Test headers using [securityheaders.com](https://securityheaders.com/)
  after deployment.
- Start with a `Content-Security-Policy-Report-Only` header in staging
  to identify any blocked resources before enforcing in production.
- The `frame-ancestors 'none'` directive in CSP provides the same
  protection as `X-Frame-Options: DENY` — both are included for
  browser compatibility.
