# Security Policy

## Supported Versions

| Version | Supported |
| :--- | :--- |
| 1.0.x | :white_check_mark: |
| < 1.0 | :x: |

---

## Security Best Practices in this Project

1. **Client-Side Data Sanitization**:
   - Product names submitted through the form are trimmed and validated before being inserted into DOM elements.
   - Text interpolation should utilize `textContent` or sanitized DOM node creation rather than unescaped `innerHTML` to prevent Cross-Site Scripting (XSS).

2. **API Endpoint Privacy**:
   - CrudCrud API endpoints contain random temporary UUIDs. Do not commit sensitive credentials or production database connection strings to public repositories.
   - For production apps, use environment variables (`.env`) served via a backend proxy or serverless function.

3. **Dependency Auditing**:
   - Run `npm audit` periodically to scan external JavaScript dependencies (such as Axios) for vulnerabilities.

---

## Reporting a Vulnerability

If you discover any security-related issues, please avoid public issue trackers.
Instead, send an email directly to:
**aryankumarraj123@gmail.com**

Please include:
- A description of the vulnerability.
- Steps or sample code to reproduce the issue.
- Potential impact and recommended mitigation if available.

We will acknowledge reports within 48 hours and work on a fix promptly.
