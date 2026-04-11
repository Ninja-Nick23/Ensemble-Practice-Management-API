const request = require("supertest");
const app = require("../server");
const db = require("../database/models");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
  await db.Rehearsal.create({
    date: "2026-04-20",
    location: "Band Hall",
    conductor: "Mr. Smith",
    pieces: "Holst Suite"
  });
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("GET /rehearsals", () => {
  it("returns all rehearsals", async () => {
    const res = await request(app).get("/rehearsals");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
