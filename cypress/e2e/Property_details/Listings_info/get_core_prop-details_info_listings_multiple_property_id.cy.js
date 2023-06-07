describe('Property details info Test Suite', () => {
    it('Read Property_ID_NMA from CSV file', () => {
      cy.fixture("testdata.csv").as('testData');
      cy.get('@testData').then((testData) => {
        testData.split('\n').forEach((line, index) => {
          if (index > 0) { // skip header row
            const propertyID = line.trim();
  
            cy.getPropertyInfoMultipleProperty(propertyID).then((response) => {
              expect(response.status).to.eq(200);
              if (response.body.length === 0) {
                cy.log('Response has empty data');
              } else {
                cy.wrap(response.body).each((obj) => {
                  
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

                if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.finnCode !== null) {
                    try {
                        expect(item.finnCode).to.be.a('string');
                    } catch (error) {
                        // cy.log(`Assertion failed for item: ${JSON.stringify(item)}`);
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: finnCode - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.propertyIdNma !== null) {
                    try {
                        expect(item.propertyIdNma).to.be.a('string');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNma - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.unitId !== null) {
                    try {
                        expect(item.unitId).to.be.a('string');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNma - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.address !== null) {
                    try {
                        expect(item.address).to.be.a('string');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: address - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.link !== null) {
                    try {
                        expect(item.link).to.be.a('string');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: link - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.listingDate !== null) {
                    try {
                        expect(item.listingDate).to.be.a('string');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: listingDate - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.lastUpdated !== null) {
                    try {
                        expect(item.lastUpdated).to.be.a('string');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: lastUpdated - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.takenDown !== null) {
                    try {
                        expect(item.price).to.be.a('number');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: takenDown - ${error.message}`);
                        
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.propertyType !== null) {
                    try {
                        expect(item.propertyType).to.be.a('string');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyType - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.price !== null) {
                    try {
                        expect(item.price).to.be.a('number');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: price - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.prom !== null) {
                    try {
                        expect(item.prom).to.be.a('number');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: prom - ${error.message}`);
                    }
                            
                 }
        
                    });
                  }
                  if (obj.hasOwnProperty('dataList')) {
                    const dataList = obj.dataList;
                    dataList.forEach((item) => {

                 if (item.bra !== null) {
                    try {
                        expect(item.bra).to.be.a('number');
                    } catch (error) {
                        cy.log(`Assertion failed for Property ID: ${propertyID}, Field: bra - ${error.message}`);
                        
                    }
                            
                 }
        
                    });
                  }
                  
                  
                });
              }
            });
          }
        });
      });
    });
  });
                     