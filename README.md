Ensemble-Practice-Management-API

A RESTful API for managing musicians, practice sessions, and rehearsals.


3 resource types (Musicians, Practice Sessions, Rehearsals)

Proper database relationships and constraints

Full CRUD operations for all resources

RESTful routing and correct status codes

Logging middleware, JSON parsing, and error handling middleware

Basic Jest + Supertest unit tests

Database setup + seed scripts

GitHub repository with full source code

README documentation

Basic unit tests


API Endpoints
Musicians
GET /musicians: List all musicians

GET /musicians/:id Get musician by ID

POST /musicians: Create musician

PUT /musicians/:id Update musician

DELETE /musicians/:id Delete musician


Practice Sessions
GET /practice-sessions: List all sessions

GET /practice-sessions/:id Get session by ID

POST /practice-sessions: Create session

PUT /practice-sessions/:id Update session

DELETE /practice-sessions/:id Delete session



Rehearsals
GET /rehearsals: List all rehearsals

GET /rehearsals/:id Get rehearsal by ID

POST /rehearsals: Create rehearsal

PUT /rehearsals/:id Update rehearsal

DELETE /rehearsals/:id Delete rehearsal