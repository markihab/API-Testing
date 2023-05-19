import { faker } from "@faker-js/faker";
describe("Challenge For APIs", () => {
  let randomComment = faker.random.word();
  let commentsArray = new Array();
  let idsOFComments = new Array();
  it("Add a comment using /comments enpoint", () => {
    cy.api({
      method: "POST",
      url: "http://localhost:3000/comments",
      body: {
        body: randomComment,
        postId: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("Assert the most recent comment added", () => {
    cy.api({
      method: "GET",
      url: "http://localhost:3000/comments",
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach((comment) => {
          commentsArray.push(comment.body);
          idsOFComments.push(comment.id);
        });
      })
      .then(() => {
        expect(commentsArray[commentsArray.length - 1]).to.eq(randomComment);
      });
  });

  it("Delete the comment added /comments enpoint", () => {
    cy.api({
      method: "DELETE",
      url: `http://localhost:3000/comments/${
        idsOFComments[idsOFComments.length - 1]
      }`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
