//  endpoint testing
const request = require("supertest");
const app = require("./src/app");
const { it, expect, describe } = require("@jest/globals")

describe("./shows endpoint", () => {
    it("test shows endpoint", async () => {
        const response = await request(app).get("/shows");
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty("title");
        expect(response.body[0]).toHaveProperty("genre");
        expect(response.body[0]).toHaveProperty("rating");
        expect(response.body[0]).toHaveProperty("status");
    })
})