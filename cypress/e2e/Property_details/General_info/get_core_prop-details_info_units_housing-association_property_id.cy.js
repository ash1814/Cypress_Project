describe('Property details info Test Suite', () => {
    it('Read Property_ID_NMA from CSV file', () => {
      cy.fixture("testdata.csv").as('testData');
      cy.get('@testData').then((testData) => {
        testData.split('\n').forEach((line, index) => {
          if (index > 0) { // skip header row
            const propertyID = line.trim();
  
            cy.getPropertyUnitInfo(propertyID).then((response) => {
              expect(response.status).to.eq(200);
              if (response.body.length === 0) {
                cy.log('Response has empty data');
              } else {
                cy.wrap(response.body).each((obj) => {
                  if (obj.hasOwnProperty('registryUnitId')) {
                    const value = obj.registryUnitId;
                    try {
                        expect(value).to.not.be.null;
                        expect(('number')).to.include(typeof value);
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: registryUnitId - ${error.message}`);
                    }
                    
                  }
                  if (obj.hasOwnProperty('unitId')) {
                    const value = obj.unitId;
                    try {
                        expect(value).to.not.be.null;
                        expect('number').to.include(typeof value);
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: unitId - ${error.message}`);
                    }
                   
                  }
                  if (obj.hasOwnProperty('addressId')) {
                    const value = obj.addressId;
                    try {
                        expect(value).to.not.be.null;
                        expect('number').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: addressId - ${error.message}`);
                    }
                   
                  }
                  if (obj.hasOwnProperty('propertyId')) {
                    const value = obj.propertyId;
                    try {
                        expect(value).to.not.be.null;
                        expect('number').to.include(typeof value);
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyId - ${error.message}`);
                    }
                   
                  }
                  if (obj.hasOwnProperty('propertyIdNma')) {
                    const value = obj.propertyIdNma;
                    try {
                        expect(value).to.not.be.null;
                        expect('string').to.include(typeof value);
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNma - ${error.message}`);
                    // cy.log(JSON.stringify(response.body));
                    }
  
                  
                  
                  }
                  if (obj.hasOwnProperty('address')) {
                    const value = obj.address;
                    try {
                        expect(value).to.not.be.null;
                        expect(['string', 'number', 'object']).to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: address - ${error.message}`);
                        // cy.log(JSON.stringify(response.body));
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
                  if (obj.hasOwnProperty('identificationNumber')) {
                    const value = obj.identificationNumber;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: identificationNumber - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('housingAssociationIdNma')) {
                    const value = obj.x[0].housingAssociationIdNma;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: housingAssociationIdNma - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('housingAssociationShareNumber')) {
                    const value = obj.housingAssociationShareNumber;
                    try {
                        expect(value).not.to.be.null;
                        expect('number').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: housingAssociationShareNumber - ${error.message}`);
  
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
  