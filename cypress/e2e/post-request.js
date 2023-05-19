/// <reference types = "cypress" />

describe("Post request", () => {
  let titleOfPosts = new Array();
  let randomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);
  it("Create a new post via /post endpoint", () => {
    cy.api({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: randomTitle,
        author: "Mark Ehab Ayad",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("Validate title of latest post", () => {
    cy.api({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach((object) => {
          titleOfPosts.push(object.title);
        });
      })
      .then(() => {
        expect(titleOfPosts[titleOfPosts.length - 1]).to.eq(randomTitle);
      });
  });
});
