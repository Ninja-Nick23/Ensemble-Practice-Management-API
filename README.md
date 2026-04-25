A fully functional RESTful API for managing musicians, practice sessions, and rehearsals, featuring authentication, role‑based access control, and complete CRUD operations.

Features
JWT user authentication

Role‑based authorization (admin‑only delete)

Three core resource types:

Musicians

Practice Sessions

Rehearsals

Full CRUD operations for all resources

RESTful routing with proper status codes

Sequelize ORM + SQLite database

Logging middleware

Centralized error handling

Seed script for sample data

Jest + Supertest tests for all major routes

Authentication
Register
Code
POST /auth/register
Body:

json
{
  "email": "example@example.com",
  "password": "yourpassword"
}
Login
Code
POST /auth/login
Returns:

token (JWT)

user object

Use the token in protected routes:

Code
Authorization: Bearer <token>
API Endpoints
Musicians
All musician routes require authentication.

GET /musicians
List all musicians.

GET /musicians/:id
Get musician by ID.

POST /musicians
Create a musician.

PUT /musicians/:id
Update a musician.

DELETE /musicians/:id
Delete a musician.
Admin‑only.

Practice Sessions
All practice session routes require authentication.

GET /practice-sessions
List all practice sessions.

GET /practice-sessions/:id
Get session by ID.

POST /practice-sessions
Create a session.
Requires:

duration

focusArea

date

musicianId

PUT /practice-sessions/:id
Update a session.

DELETE /practice-sessions/:id
Delete a session.

Rehearsals
Rehearsal routes are public.

GET /rehearsals
List all rehearsals.

GET /rehearsals/:id
Get rehearsal by ID.

POST /rehearsals
Create rehearsal.

PUT /rehearsals/:id
Update rehearsal.

DELETE /rehearsals/:id
Delete rehearsal.

Database & Models
SQLite database via Sequelize

Models:

User

Musician

PracticeSession

Rehearsal

RehearsalAttendance

Includes seed script for sample data

Testing
Run all Jest + Supertest tests:

Code
npm test
Covers:

Musicians

Practice Sessions

Rehearsals

Authentication flow

Project Status
✔ Fully functional
✔ All endpoints tested
✔ Authentication working
✔ No missing column errors
✔ Ready for frontend integration