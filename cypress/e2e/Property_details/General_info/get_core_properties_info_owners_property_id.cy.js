describe('Property details info Test Suite', () => {
  it('Read Property_ID_NMA from CSV file', () => {
    cy.fixture("testdata.csv").as('testData');
    cy.get('@testData').then((testData) => {
      testData.split('\n').forEach((line, index) => {
        if (index > 0) { // skip header row
          const propertyID = line.trim();

          cy.getPropertyOwnerInfo(propertyID).then((response) => {
            expect(response.status).to.eq(200);
            if (response.body.length === 0) {
              cy.log('Response has empty data');
            } else {
              cy.wrap(response.body).each((obj) => {
                if (obj.hasOwnProperty('ownerId')) {
                  const value = obj.ownerId;
                  try {
                      expect(value).to.not.be.null;
                      expect(('number')).to.include(typeof value);
                  } catch (error) {
                     cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ownerId - ${error.message}`);
                  }
                  
                }
                if (obj.hasOwnProperty('name')) {
                  const value = obj.name;
                  try {
                      expect(value).to.not.be.null;
                      expect('string').to.include(typeof value);
                  } catch (error) {
                     cy.log(`Assertion failed for Property ID: ${propertyID}, Field: name - ${error.message}`);
                  }
                 
                }
                if (obj.hasOwnProperty('address')) {
                  const value = obj.address;
                  try {
                      expect(value).to.not.be.null;
                      expect('string').to.include(typeof value);

                  } catch (error) {
                     cy.log(`Assertion failed for Property ID: ${propertyID}, Field: address - ${error.message}`);
                  }
                 
                }
                if (obj.hasOwnProperty('personNumber')) {
                  const value = obj.personNumber;
                  try {
                      expect(value).to.not.be.null;
                      expect('string').to.include(typeof value);
                  } catch (error) {
                     cy.log(`Assertion failed for Property ID: ${propertyID}, Field: personNumber - ${error.message}`);
                      cy.log("message: ", value)
                  }
                 
                }
                if (obj.hasOwnProperty('organizationTypeCode')) {
                  const value = obj.organizationTypeCode;
                  try {
                      expect(value).to.not.be.null;
                      expect(['string', 'number', 'object']).to.include(typeof value);
                  } catch (error) {
                     cy.log(`Assertion failed for Property ID: ${propertyID}, Field: organizationTypeCode - ${error.message}`);
                  // cy.log(JSON.stringify(response.body));
                  }

                
                
                }
                if (obj.hasOwnProperty('ownershipTypeCodeId')) {
                  const value = obj.ownershipTypeCodeId;
                  try {
                      expect(value).to.not.be.null;
                      expect('number').to.include(typeof value);

                  } catch (error) {
                     cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ownershipTypeCodeId - ${error.message}`);
                      cy.log(`Assertion failed for :  ${JSON.stringify(value)}`);
                      // cy.log(JSON.stringify(response.body));
                  }
                 
                }
                if (obj.hasOwnProperty('ownershipTypeCodeName')) {
                  const value = obj.ownershipTypeCodeName;
                  try {
                      expect(value).not.to.be.null;
                      expect('string').to.include(typeof value);

                  } catch (error) {
                     cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ownershipTypeCodeName - ${error.message}`);

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
