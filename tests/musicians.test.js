const request = require("supertest");
const app = require("../server");
const db = require("../database/models");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
  await db.Musician.create({
    name: "Test Musician",
    instrument: "Clarinet",
    skillLevel: "Intermediate",
    yearsExperience: 3
  });
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("GET /musicians", () => {
  it("returns all musicians", async () => {
    const res = await request(app).get("/musicians");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
