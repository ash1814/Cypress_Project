

describe('Property details info Test Suite', () =>
{
	
it('Read Property_ID_NMA from CSV file', () => {
	cy.fixture("testdata.csv").as('testData')
	cy.get('@testData').then((testData) => {
  testData.split('\n').forEach((line, index) => {
    if (index > 0) { // skip header row
      const propertyID = line.trim()
      
      
	  
     cy.getPropertyLeaseInfo(propertyID).then((response) => {
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
          if (obj.hasOwnProperty('PROPERTY_ID_LEASE')) {
            const value = obj.PROPERTY_ID_LEASE;
            try {
                expect(value).to.not.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: PROPERTY_ID_LEASE - ${error.message}`);
            }
           
          }
          if (obj.hasOwnProperty('propertyIdNmaLease')) {
            const value = obj.propertyIdNmaLease;
            try {
                expect(value).to.not.be.null;
                expect('string').to.include(typeof value);
            } catch (error) {
               cy.log(`Assertion failed for Property ID: ${propertyID}, Field: propertyIdNmaLease - ${error.message}`);
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