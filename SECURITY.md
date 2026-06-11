# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| Latest `main` branch | ✅ |
| Older commits | ❌ |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT** open a public GitHub issue for security vulnerabilities
2. Use the [contact form on the website](https://mub-1r.com/#contact) with subject "Security Report"
3. Include a clear description of the vulnerability, steps to reproduce, and potential impact

### What to expect

- **Acknowledgment** within 48 hours
- **Assessment** within 1 week
- **Fix timeline** communicated after assessment

## Scope

The following are in scope for security reports:

- XSS vulnerabilities in the website
- SQL injection or database exposure
- Authentication/authorization bypasses
- Sensitive data exposure (API keys, database credentials)
- Server-side request forgery (SSRF)

## Out of Scope

- Denial of service attacks
- Social engineering
- Physical security
- Issues in third-party dependencies (report to the upstream project)

## Best Practices

This project follows these security practices:

- Environment variables for all secrets (never committed to repo)
- Server-side validation on all API endpoints
- Input sanitization and length limits on user inputs
- No client-side exposure of API keys or secrets
- Parameterized database queries via Prisma ORM
