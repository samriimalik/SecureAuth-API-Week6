# SecureAuth API — Week 6

Secure Express REST API implementing authentication, authorization, password hashing, JWT access tokens, RBAC, Helmet and rate limiting.

## Requirements

- Node.js 18+
- MongoDB Atlas
- Postman or Bruno

## Setup

1. Open this folder in VS Code.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Put your MongoDB Atlas URI and a strong JWT secret in `.env`.
5. Run `npm run dev`.

## Endpoints

- `POST /api/auth/register` — create user
- `POST /api/auth/login` — returns JWT access token
- `GET /api/auth/me` — protected; Bearer token required
- `GET /api/admin/users` — protected; admin only

## Expected status codes

- 201 registration success
- 200 login/profile/admin success
- 400 validation/duplicate input
- 401 missing/invalid/expired token or invalid login
- 403 authenticated user lacks required role
- 404 route/resource not found
- 500 unexpected server error

## Security

- bcryptjs hashes passwords before save.
- Password field is excluded from normal queries.
- JWTs are verified in authentication middleware.
- RBAC uses `authorize(...roles)`.
- Helmet adds security headers.
- Auth routes are rate limited to 10 requests per 15 minutes per IP.
- `.env` is ignored by Git.

## Postman

Register, login, copy `accessToken`, then use Authorization → Bearer Token for `/api/auth/me`.

For `/api/admin/users`, use a token belonging to an admin user.