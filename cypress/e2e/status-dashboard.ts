/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-status-dashboard`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should have correct html[lang] attribute`, () => {
    cy.get(`html`).should(`have.attr`, `lang`, `en`)
  })
  it(`should render the description`, () => {
    cy.findByText(/showing the statuses of my netlify deploys & circleci tests./i)
  })
  it(`should render the info`, () => {
    cy.findByText(/circleci projects/i)
  })
  it(`should render the repository title`, () => {
    cy.findByText(/chakra-ui-advanced-components/i)
  })
  it(`should render the github icon`, () => {
    cy.findByLabelText(/view chakra-ui-advanced-components source on github/i)
  })
  it(`should render the netlify status badge`, () => {
    cy.findByAltText(/netlify deploy status of chakra-ui-advanced-components/i)
  })
})
