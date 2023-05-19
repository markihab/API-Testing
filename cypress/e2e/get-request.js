/// <reference types = "cypress" />

describe("Get Request", () => {
  let result;
  it("Validate status code of /post api", () => {
    result = cy.api("http://localhost:3000/posts");
    result.its("status").should("equal", 200);
  });

  it("Validate /post enpoint contains correct keys and values", () => {
    cy.api({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(body[0]).has.property("title", "Example Json Server after edit");
      expect(body[1]).has.property("author", "Karen Ehab");
      body.forEach(($el) => {
        expect($el).to.have.all.keys("id", "title", "author");
      });

      body.forEach(function (item) {
        expect(item).to.have.all.keys("id", "title", "author");
      });
    });
  });
});
