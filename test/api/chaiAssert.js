const { expect } = require("chai");
const request = require("supertest");
const url = require("../../env");
const data = require("../../Data/userData.js");

describe("Post Response Example", () => {
  const response = request(url()).post("/user").send(data.USER_DATA);
  it("Success 200", async () => {
    //check apakah status response nya 200
    expect((await response).status).to.equal(200);
  });
  it("Response have message", async () => {
    //check apakah status response nya 200
    expect((await response).body).to.haveOwnProperty("message");
  });

  //Reporting in mochawesome
  //npx mocha --spec test/api/chaiAssert.js --reporter mochawesome
});
