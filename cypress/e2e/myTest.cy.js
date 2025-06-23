describe("Next Button Test", () => {
  it("finds next button", () => {
    cy.visit("http://localhost:5500/");
    cy.contains("Next").click();
  });
});

describe("Vocabulary Trainer UI", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("Shuffle all button shuffles and displays words", () => {
    cy.get("#vocabulary-input").invoke("val", "elma\narmut\nmuz");
    cy.get(".btn--shuffle-input").click();
    cy.get(".output-list li").should("have.length", 3);
  });

  it("Show Random Word button displays one word", () => {
    cy.get("#vocabulary-input").invoke("val", "elma\narmut\nmuz");
    cy.get(".btn--show-random-word").click();
    cy.get(".output-list li").should("have.length", 1);
  });

  it("Remove button clears the output list", () => {
    cy.get("#vocabulary-input").invoke("val", "elma\narmut\nmuz");
    cy.get(".btn--shuffle-input").click();
    cy.get(".btn--remove-output").click();
    cy.get(".output-list li").should("have.length", 0);
  });

  it("Next button shows next word", () => {
    cy.get("#vocabulary-input").invoke("val", "elma\narmut\nmuz");
    cy.get(".btn--next").click();
    cy.get(".output-list li").should("have.length", 1);
    cy.get(".btn--next").click();
    cy.get(".output-list li").should("have.length", 1);
  });
});
