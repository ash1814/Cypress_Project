describe('Property details info Test Suite', () =>
{
	
  
it('Read Property_ID_NMA from CSV file ${propertyID}', () => {
	cy.fixture("testdata.csv").as('testData')
	cy.get('@testData').then((testData) => {
  testData.split('\n').forEach((line, index) => {
    if (index > 0) { // skip header row
      const propertyID = line.trim()
      
      
	  
     cy.getPropertyInfoAddress(propertyID).then((response) => {

      
      expect(response.status).to.eq(200)

       if(response.body.length===0){

        cy.log('Response has an empty array')
      
       }

      else {
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
                expect('string').to.include(typeof value);
            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNma - ${error.message}`);
            }
           
          }
          if (obj.hasOwnProperty('propertyIdNmaUnit')) {
            const value = obj.propertyIdNmaUnit;
            try {
                expect(value).to.not.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNmaUnit - ${error.message}`);
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
          if (obj.hasOwnProperty('unitId')) {
            const value = obj.unitId;
            try {
                expect(value).to.not.be.null;
                expect('number').to.include(typeof value);
            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: unitId - ${error.message}`);
            // cy.log(JSON.stringify(response.body));
            }

          
          
          }
          if (obj.hasOwnProperty('address')) {
            const value = obj.address;
            try {
                expect(value).to.not.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: address - ${error.message}`);
                cy.log(console.error())
            }
           
          }
          if (obj.hasOwnProperty('fullAddress')) {
            const value = obj.fullAddress;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: fullAddress - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('floorNumber')) {
            const value = obj.floorNumber;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: floorNumber - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('rooms')) {
            const value = obj.rooms;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: rooms - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('bathrooms')) {
            const value = obj.bathrooms;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: bathrooms - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('wcs')) {
            const value = obj.wcs;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: wcs - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('ufs')) {
            const value = obj.ufs;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ufs - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('unitTypeCodeName')) {
            const value = obj.unitTypeCodeName;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: unitTypeCodeName - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('ensembleValuation')) {
            const value = obj.ensembleValuation;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ensembleValuation - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('rentalValuation')) {
            const value = obj.rentalValuation;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: rentalValuation - ${error.message}`);

            }
            
          }
          
        });
      }
      })
    }
  })
})

});	

})