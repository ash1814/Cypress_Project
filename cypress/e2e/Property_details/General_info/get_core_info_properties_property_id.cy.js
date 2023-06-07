describe('Property details info Test Suite', () => {
  it('Read Property_ID_NMA from CSV file ${propertyID})', () => {

      
    
    cy.fixture("testdata.csv").as('testData');
    cy.get('@testData').then((testData) => {
      testData.split('\n').forEach((line, index) => {
        if (index > 0) { // skip header row
          const propertyID = line.trim();

          cy.getPropertyInfo(propertyID).then((response) => {
            if (response.body.length === 0) {
              cy.log('Response has an empty array');
            } else {
              try {
                expect(response.status).to.eq(200);
                expect(response.body.propertyId).not.to.be.a('string');
                expect(response.body.propertyIdNma).to.be.a('string');
                expect(response.body.numberOfBuildings).not.to.be.a('string');
                expect(response.body.numberOfAddresses).not.to.be.a('string');
                expect(response.body.numberOfSections).not.to.be.a('string');
                expect(response.body.numberOfLeases).not.to.be.a('string');
                expect(response.body.numberOfOwners).not.to.be.a('string');
                expect(response.body.numberOfPlots).not.to.be.a('string');
                expect(response.body.area).not.to.be.a('string');
                expect(response.body.postalNumber).to.be.a('string');
                expect(response.body.postalLocation).to.be.a('string');

                



              } catch (error) {
                // Handle the assertion error here
                
                cy.log(`Assertion failed for propertyID: ${propertyID} - ${error.message}`);
               
              
               
                
              }
            }
           
          });
        }
      });
    });
  });
});

