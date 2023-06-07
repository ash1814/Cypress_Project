

describe('Property details info Test Suite', () =>
{
	
it('Read Property_ID_NMA from CSV file', () => {
	cy.fixture("testdata.csv").as('testData')
	cy.get('@testData').then((testData) => {
  testData.split('\n').forEach((line, index) => {
    if (index > 0) { // skip header row
      const propertyID = line.trim()
      
      
	  
     cy.getPropertyInfoBuildings(propertyID).then((response) => {

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
          if (obj.hasOwnProperty('buildingId')) {
            const value = obj.buildingId;
            try {
                expect(value).to.not.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: buildingId - ${error.message}`);
                
            }
            
          }
          if (obj.hasOwnProperty('buildingNumber')) {
            const value = obj.buildingNumber;
            try {
                expect(value).to.not.be.null;
                expect('string').to.include(typeof value);
            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: buildingNumber - ${error.message}`);
                
            }
           
          }
          if (obj.hasOwnProperty('hasSefrakArtifact')) {
            const value = obj.hasSefrakArtifact;
            try {
                expect(value).to.be.a('boolean');
                
              
            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: hasSefrakArtifact - ${error.message}`);
                
            
            }

          
          
          }
          if (obj.hasOwnProperty('hasCulturalArtifact')) {
            const value = obj.hasCulturalArtifact;
            try {
              expect(value).to.be.a('boolean');
            

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: hasCulturalArtifact - ${error.message}`);
                
            }
           
          }
          if (obj.hasOwnProperty('hasElevator')) {
            const value = obj.hasElevator;
            try {
                expect(value).to.be.a('boolean');
               

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: hasElevator - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('unitsHome')) {
            const value = obj.unitsHome;
            try {
              expect(value).not.to.be.null;
              expect('number').to.include(typeof value);
                

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: unitsHome - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('builtArea')) {
            const value = obj.builtArea;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: builtArea - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('gbaTotal')) {
            const value = obj.gbaTotal;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: gbaTotal - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('ufsTotal')) {
            const value = obj.ufsTotal;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: ufsTotal - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('buildingStatusCodeName')) {
            const value = obj.buildingStatusCodeName;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: buildingStatusCodeName - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('industryGroupCodeName')) {
            const value = obj.industryGroupCodeName;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: industryGroupCodeName - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('buildingTypeCodeValue')) {
            const value = obj.buildingTypeCodeValue;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: buildingTypeCodeValue - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('buildingChangeCodeName')) {
            const value = obj.buildingChangeCodeName;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: buildingChangeCodeName - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('industryGroupCodeValue')) {
            const value = obj.industryGroupCodeValue;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: industryGroupCodeValue - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('address')) {
            const value = obj.address;
            try {
                expect(value).not.to.be.null;
                expect('string').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: address - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('serialNumber')) {
            const value = obj.serialNumber;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: serialNumber - ${error.message}`);

            }
            
          }
          if (obj.hasOwnProperty('floors')) {
            const value = obj.floors;
            try {
                expect(value).not.to.be.null;
                expect('number').to.include(typeof value);

            } catch (error) {
                cy.log(`Assertion failed for Property ID: ${propertyID}, Field: floors - ${error.message}`);

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