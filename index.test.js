//  endpoint testing
const request = require("supertest");
const users = require("./src/app");
const shows = require("./src/app");
const { it, expect, describe } = require("@jest/globals")

describe("./users endpoint", () => {
    it("test users endpoint", async () => {
        const response = await request(users).get("/users");
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty("username");
        expect(response.body[0]).toHaveProperty("password");
    })
})


describe("./shows endpoint", () => {
    it("test shows endpoint", async () => {
        const response = await request(shows).get("/shows");
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty("title");
        expect(response.body[0]).toHaveProperty("genre");
        expect(response.body[0]).toHaveProperty("rating");
        expect(response.body[0]).toHaveProperty("status");
    })
})