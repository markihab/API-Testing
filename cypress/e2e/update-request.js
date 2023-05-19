describe("Update Request", () => {
  it("Update an existing post via /posts endpoint", () => {
    cy.api({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      body: {
        title: "To a new amazing title",
        author: "This is a new author",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
