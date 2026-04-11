const request = require("supertest");
const app = require("../server");
const db = require("../database/models");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
  await db.PracticeSession.create({
    duration: 30,
    focusArea: "Scales",
    date: "2026-04-10",
    musicianId: 1
  });
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("GET /practice-sessions", () => {
  it("returns all practice sessions", async () => {
    const res = await request(app).get("/practice-sessions");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
