describe("Pet store tests", () => {
    it("Should create a user", () => {
        cy.createUser()
        .then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    });

    it("Should edit a user", () => {
        cy.createUser();
        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/Sosiska",
            body: {
                "id": 1,
                "username": "Sosiska",
                "firstName": "Ann",
                "lastName": "Kowalski",
                "email": "annsmith@gmail.com",
                "password": "123",
                "phone": "+1 526 369 8989",
                "userStatus": 0
            }
        })        
        .then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });

    });

    it("Should delete a user", () => {
        cy.createUser();
        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/Sosiska",
        })        
        .then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });

    });

})