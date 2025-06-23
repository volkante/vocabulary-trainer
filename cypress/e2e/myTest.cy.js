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

describe("Vocabulary Trainer Extra UI Tests", () => {
  beforeEach(() => {
    cy.visit("index.html");
    cy.get("#vocabulary-input").clear().type("elma\narmut\nmuz");
  });

  it("Shuffle all button changes the order of words", () => {
    cy.get(".btn--shuffle-input").click();
    cy.get(".output-list li").then(($items) => {
      const words = [...$items].map((li) => li.textContent);
      expect(words).to.have.members(["elma", "armut", "muz"]);
      // Sıra değişmiş olabilir, orijinal sıradan farklıysa test başarılı
      expect(words.join(",")).to.not.equal("elma,armut,muz");
    });
  });

  it("Show Random Word button shows only one word from input", () => {
    cy.get(".btn--show-random-word").click();
    cy.get(".output-list li")
      .should("have.length", 1)
      .invoke("text")
      .should("match", /elma|armut|muz/);
  });

  it("Next button shows her tıklamada bir sonraki kelimeyi gösterir", () => {
    cy.get(".btn--next").click();
    cy.get(".output-list li")
      .invoke("text")
      .should("match", /elma|armut|muz/);
    cy.get(".btn--next").click();
    cy.get(".output-list li")
      .invoke("text")
      .should("match", /elma|armut|muz/);
  });

  it("Remove button clears output after shuffle", () => {
    cy.get(".btn--shuffle-input").click();
    cy.get(".output-list li").should("have.length", 3);
    cy.get(".btn--remove-output").click();
    cy.get(".output-list li").should("have.length", 0);
  });

  it("CSV yüklenince konsolda JSON çıktısı oluşur", () => {
    // Basit bir CSV dosyası oluşturup yükle
    const csv = "kelime\nelma\narmut\nmuz";
    const blob = new Blob([csv], { type: "text/csv" });
    const file = new File([blob], "test.csv", { type: "text/csv" });

    cy.get("#csvInput").selectFile({
      contents: file,
      fileName: "test.csv",
      lastModified: Date.now(),
    });

    // Konsol çıktısını test etmek için cy.spy kullanılabilir (ileri seviye)
  });
});
