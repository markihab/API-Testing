describe("Delete Request", () => {
  it("Delete a post using /posts endpoint", () => {
    cy.api({
      method: "DELETE",
      url: "http://localhost:3000/posts/7",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
