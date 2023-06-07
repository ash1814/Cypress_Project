describe('Property details info Test Suite', () => {
  it('Read Property_ID_NMA from CSV file', () => {
    cy.fixture("testdata.csv").as('testData');
    cy.get('@testData').then((testData) => {
      testData.split('\n').forEach((line, index) => {
        if (index > 0) { // skip header row
          const propertyID = line.trim();

          cy.getPropertySectionInfo(propertyID).then((response) => {
            expect(response.status).to.eq(200);
            if (response.body.length === 0) {
              cy.log('Response has empty data');
            } else {
              cy.wrap(response.body).each((obj) => {
                if (obj.hasOwnProperty('propertyId')) {
                  const value = obj.propertyId;
                  try {
                      expect(value).to.not.be.null;
                      expect(('number')).to.include(typeof value);
                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyId - ${error.message}`);
                  }
                  
                }
                if (obj.hasOwnProperty('propertyIdNma')) {
                  const value = obj.propertyIdNma;
                  try {
                      expect(value).to.not.be.null;
                      expect('number').to.include(typeof value);
                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNma - ${error.message}`);
                  }
                 
                }
                if (obj.hasOwnProperty('propertyIdSection')) {
                  const value = obj.propertyIdSection;
                  try {
                      expect(value).to.not.be.null;
                      expect('number').to.include(typeof value);

                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdSection - ${error.message}`);
                  }
                 
                }
                if (obj.hasOwnProperty('propertyIdNmaSection')) {
                  const value = obj.propertyIdNmaSection;
                  try {
                      expect(value).to.not.be.null;
                      expect('string').to.include(typeof value);
                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNmaSection - ${error.message}`);
                  }
                 
                }
                if (obj.hasOwnProperty('unitTypeCodeName')) {
                  const value = obj.unitTypeCodeName;
                  try {
                      expect(value).to.not.be.null;
                      expect('string').to.include(typeof value);
                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: unitTypeCodeName - ${error.message}`);
                  // cy.log(JSON.stringify(response.body));
                  }

                
                
                }
                if (obj.hasOwnProperty('fullAddress')) {
                  const value = obj.fullAddress;
                  try {
                      expect(value).to.not.be.null;
                      expect('string').to.include(typeof value);

                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: fullAddress - ${error.message}`);
                      // cy.log(JSON.stringify(response.body));
                  }
                 
                }
                
                if (obj.hasOwnProperty('ownerId')) {
                  const value = obj.ownerId;  
                  cy.wrap(value)
                  try {
                      expect(value).not.to.be.null;
                      expect('string').to.include(typeof value);

                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ownerId - ${error.message}`);

                  }
                  
                }
                if (obj.hasOwnProperty('name')) {
                  const value = obj.name;
                  try {
                      expect(value).not.to.be.null;
                      expect('string').to.include(typeof value);

                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: name - ${error.message}`);

                  }
                  
                }
                if (obj.hasOwnProperty('personNumber')) {
                  const value = obj.owners.personNumber;
                  try {
                      expect(value).not.to.be.null;
                      expect('string').to.include(typeof value);

                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: personNumber - ${error.message}`);

                  }
                  
                }
                if (obj.hasOwnProperty('ownerType')) {
                  const value = obj.ownerType;
                  try {
                      expect(value).not.to.be.null;
                      expect('string').to.include(typeof value);

                  } catch (error) {
                      cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ownerType - ${error.message}`);

                  }
                  
                }
              });
            }
          });
        }
      });
    });
  });
});
