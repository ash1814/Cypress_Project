describe('Property details info Test Suite', () => {
    it('Read Property_ID_NMA from CSV file', () => {
      cy.fixture("testdata.csv").as('testData');
      cy.get('@testData').then((testData) => {
        testData.split('\n').forEach((line, index) => {
          if (index > 0) { // skip header row
            const propertyID = line.trim();
  
            cy.getUnitValuation(propertyID).then((response) => {
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
                  if (obj.hasOwnProperty('propertyCount')) {
                    const value = obj.propertyCount;
                    try {
                        expect(value).to.not.be.null;
                        expect('number').to.include(typeof value);
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyCount - ${error.message}`);
                    }
                   
                  }
                  if (obj.hasOwnProperty('transferOfRegistryUnitRightId')) {
                    const value = obj.transferOfRegistryUnitRightId;
                    try {
                        expect(value).to.not.be.null;
                        expect('number').to.include(typeof value);
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: transferOfRegistryUnitRightId - ${error.message}`);
                    }
                   
                  }
                  if (obj.hasOwnProperty('registryUnitRightId')) {
                    const value = obj.registryUnitRightId;
                    try {
                        expect(value).to.not.be.null;
                        expect('number').to.include(typeof value);
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: registryUnitRightId - ${error.message}`);
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
                  if (obj.hasOwnProperty('housingAssociationIdNma')) {
                    const value = obj.housingAssociationIdNma;
                    try {
                        expect(value).to.not.be.null;
                        expect(['string', 'number', 'object']).to.include(typeof value);
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: housingAssociationIdNma - ${error.message}`);
                        // cy.log(JSON.stringify(response.body));
                    }
                   
                  }
                  if (obj.hasOwnProperty('date')) {
                    const value = obj.date;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: date - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('historical')) {
                    const value = obj.historical;
                    try {
                        expect(value).to.be.a('boolean');
                        
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: historical - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('soldOnTheOpenMarket')) {
                    const value = obj.soldOnTheOpenMarket;
                    try {
                      expect(value).to.be.a('boolean');
                       
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: soldOnTheOpenMarket - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('transactionTypeCodeName')) {
                    const value = obj.transactionTypeCodeName;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: transactionTypeCodeName - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('registryUnitRightTypeCodeName')) {
                    const value = obj.registryUnitRightTypeCodeName;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: registryUnitRightTypeCodeName - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('personNumber')) {
                    const value = obj.personNumber;
                    try {
                        expect(value).not.to.be.null;
                        expect('number').to.include(typeof value);
  
                    } catch (error) {
                         cy.log(`Assertion failed for Property ID: ${propertyID}, Field: personNumber - ${error.message}`);
  
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
  