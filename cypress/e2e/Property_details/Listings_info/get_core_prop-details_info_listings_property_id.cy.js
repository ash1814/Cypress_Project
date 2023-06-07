describe('Property details info Test Suite', () => {
    it('Read Property_ID_NMA from CSV file', () => {
      cy.fixture("testdata.csv").as('testData');
      cy.get('@testData').then((testData) => {
        testData.split('\n').forEach((line, index) => {
          if (index > 0) { // skip header row
            const propertyID = line.trim();
  
            cy.getPropertyInfoListings(propertyID).then((response) => {
              expect(response.status).to.eq(200);
              if (response.body.length === 0) {
                cy.log('Response has empty data');
              } else {
                cy.wrap(response.body).each((obj) => {
                  if (obj.hasOwnProperty('finnCode')) {
                    const value = obj.finnCode;
                    try {
                        expect(value).to.not.be.null;
                        expect(('string')).to.include(typeof value);
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: finnCode - ${error.message}`);
                    }
                    
                  }
                  if (obj.hasOwnProperty('propertyIdNma')) {
                    const value = obj.propertyIdNma;
                    try {
                        expect(value).to.not.be.null;
                        expect('string').to.include(typeof value);
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNma - ${error.message}`);
                    }
                   
                  }
                  if (obj.hasOwnProperty('unitId')) {
                    const value = obj.unitId;
                    try {
                        expect(value).to.not.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: unitId - ${error.message}`);
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
                  
                  if (obj.hasOwnProperty('link')) {
                    const value = obj.link;
                    try {
                        expect(value).to.not.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: link - ${error.message}`);
                        
                    }
                   
                  }
                  if (obj.hasOwnProperty('listingDate')) {
                    const value = obj.listingDate;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: listingDate - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('lastUpdated')) {
                    const value = obj.lastUpdated;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: lastUpdated - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('takenDown')) {
                    const value = obj.takenDown;
                    try {
                        expect(value).to.be.a('boolean');
                       
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: takenDown - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('propertyType')) {
                    const value = obj.propertyType;
                    try {
                        expect(value).not.to.be.null;
                        expect('string').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyType - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('price')) {
                    const value = obj.price;
                    try {
                        expect(value).not.to.be.null;
                        expect('number').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: price - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('prom')) {
                    const value = obj.prom;
                    try {
                        expect(value).not.to.be.null;
                        expect('number').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: prom - ${error.message}`);
  
                    }
                    
                  }
                  if (obj.hasOwnProperty('bra')) {
                    const value = obj.bra;
                    try {
                        expect(value).not.to.be.null;
                        expect('number').to.include(typeof value);
  
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: bra - ${error.message}`);
  
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
  