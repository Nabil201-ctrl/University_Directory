
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/').get(".header-text").should("contain", "University Directory");
  })


  it('searches by country', ()=>{
    cy.visit('http://localhost:3000/').get(".search_input").type("Abuja", {delay: 100}).should("have.value", "Abuja");
  })
})