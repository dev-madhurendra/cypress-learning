describe('E2E tests to handle Alerts', () => { 
    //* 1) JavaScript Alert : It will have some text and OK button
    it('javascript alert', () => {
        cy.visit('https://vinothqaacademy.com/alertandpopup/')

        cy.get('button[name="alertbox"]').should('be.enabled').click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am an alert box!')
        })

        //& alert window automatically closed by cypress
        cy.get('#demotwo').should('have.text', 'You clicked on OK!')
    });

    //* 2) JavsScript Confirm Alert : It will have some text with OK and Cancel button
    it('javascript confirm alert - OK', () => {
        cy.visit('https://vinothqaacademy.com/alertandpopup/')

        cy.get('button[name="confirmalertbox"]').should('be.enabled').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Confirm pop up with OK and Cancel button')
        })

        //& alert window automatically closed by cypress using OK button
        cy.get('#demo').should('have.text', 'You clicked on OK!')

    });

    it('javascript confirm alert - Cancel', () => {
        cy.visit('https://vinothqaacademy.com/alertandpopup/')

        cy.get('button[name="confirmalertbox"]').should('be.enabled').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Confirm pop up with OK and Cancel button')
        })

        //NOTE - This is how we use to cancel the alert
        cy.on('window:confirm', () => false)

        cy.get('#demo').should('have.text', 'You clicked on Cancel!')

    });

    //* 3) JavsScript Prompt Alert

    // it('javascript confirm alert - OK without entering prompt', () => {
    //     cy.visit('https://vinothqaacademy.com/alertandpopup/')

    //     cy.window().then((win) => {
    //         cy.stub(win, 'prompt').returns("")
    //     })

    //     cy.get('button[name="promptalertbox1234"]').should('be.enabled').click()

    //     cy.on('window:confirm', (t) => {
    //         expect(t).to.contains('Do you like Automation ?')
    //     })

    //     cy.get('#demoone').should('have.text', 'Sad to hear it !')

    // });

    it('javascript confirm alert - Cancel', () => {
        cy.visit('https://vinothqaacademy.com/alertandpopup/')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("")
        })
        cy.get('button[name="promptalertbox1234"]').should('be.enabled').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Do you like Automation ?')
        })

        cy.on('window:alert', () => false)

        cy.get('#demoone').should('have.text', 'User cancelled the prompt.')

    });

    it('javascript confirm alert - OK with entering prompt', () => {
        cy.visit('https://vinothqaacademy.com/alertandpopup/')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("Yes")
        })

        cy.get('button[name="promptalertbox1234"]').should('be.enabled').click()

        // cy.on('window:confirm', (t) => {
        //     expect(t).to.contains('Do you like Automation ?')
            
        // })

        cy.get('#demoone').should('have.text', 'Thanks for Liking Automation')

    });

    //* 4) Authenticated Alert

    it('Authenticated alert', () => {
        cy.visit("", {
            auth: {
                username: "",
                password: ""
            }
        })
    });

 })