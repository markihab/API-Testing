/// <reference types = "cypress" />

describe("Post request", () => {
  it("Create a new post via /post endpoint", () => {
    cy.api("");
  });
  it("Validate title of latest post", () => {
    cy.api({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      body.forEach(($el) => {});
      expect(body[body.size() - 1])
        .key("title")
        .to.equal("Want to learnAutomation testing");
    });
  });
});
