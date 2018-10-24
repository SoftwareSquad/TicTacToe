const request = require("supertest");
const api = require("./api");

describe("GET / endpoint", () => {
    it("Should return a 200 OK status code", async () =>{
        const res = await request(api).get("/");
        expect(res.status).toBe(200);
    });
});
