const request = require("supertest");
const url = require("../../env");

describe("Post Request", () => {
  it("Succes Create User", async () => {
    //Optional kalau url nya tidak sama
    //const response = request("https://petstore.swagger.io/v2")
    const response = request(url()).post("/user").send({
      id: 1,
      username: "123",
      firstName: "123",
      lastName: "123",
      email: "123@mail.com",
      password: "123",
      phone: "123",
      userStatus: 1,
    });
    console.log((await response).status);
    console.log((await response).body);
  });
});
