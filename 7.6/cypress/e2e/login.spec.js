describe('template spec', () => {
  it('Should open the main page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.text-light > .ml-2').should(`be.visible`)
  })
})
describe('template spec', () => {
  it('test login', () => {
      cy.visit('/')
      cy.contains('Log in').click()
      cy.get('#mail').type(`test@test.com`)
      cy.get('#pass').type(`test`)
      cy.get('[type=submit]').click()
      cy.contains('Добро пожаловать test@test.com').should(`be.visible`)
  })
  it('test empty email', () => {
      cy.visit('/')
      cy.contains('Log in').click()
      cy.get('#mail').type(` `)
      cy.get('#pass').type(`test`)
      cy.get('[type=submit]').click()
      cy.get('#mail').then((elements) => {
          expect(elements[0].checkValidity()).to.be.false
      })
  })
  it('test empty pass', () => {
      cy.visit('/')
      cy.contains('Log in').click()
      cy.get('#mail').type(`test@test.com`)
      cy.get('#pass').type(` `)
      cy.get('[type=submit]').click()
      cy.get('#pass').then((elements) => {
          expect(elements[0].checkValidity()).to.be.true
      })
  })
})
describe('template func work book', () => {
  beforeEach(() => {
      cy.visit('/')
      cy.contains('Log in').click()
      cy.get('#mail').type(`bropet@mail.ru`)
      cy.get('#pass').type(`123`)
      cy.get('[type=submit]').click()
  })
  it('test delete book in favorites', () => {
      cy.get('.p-0 > .btn').click()
      cy.get('#title').type(`Война и мир`)
      cy.get('#description').type(`роман`)
      cy.get('.form-check-label').click()
      cy.get('.form-check-label').click()
      cy.get('form > .ml-2').click()
      cy.contains('Delete from favorite').last().click()
      cy.contains('Log out').click()
  })
  it('test add book in favorites', () => {
      cy.contains('Add new').click()
      cy.get('#title').type(`1984`)
      cy.get('#description').type(`роман`)
      cy.get('.form-check-label').click()
      cy.get('.form-check-label').click()
      cy.get('form > .ml-2').click()
  })
  it('test log out', () => {
      cy.contains('Log out').click()
      cy.contains('Log in').should(`be.visible`)
  })
})