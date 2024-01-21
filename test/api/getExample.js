const request = require("supertest");
const url = require("../../env");

describe("Get Request", () => {
  it("Find pet by status", async () => {
    //Optional kalau url nya tidak sama
    //const response = request("https://petstore.swagger.io/v2")
    const response = request(url()).get("/store/inventory");
    console.log((await response).status);
    console.log((await response).body);
  });
});
