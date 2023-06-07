// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
   cy.visit("https://app.propcloud.no") // login// login
    cy.get(':nth-child(1) > .input').type(username)
    cy.get('#psw').type(password)
    cy.get('.h-8').click() // click
})
  
Cypress.Commands.add('LoginNetworkRequest', () =>
{
  
  const environment = 'stage'; // or 'production'
  const baseurl = Cypress.config().baseUrl[environment]
  const endpoint = '/login';
  cy.request({
    method: 'POST',
            url: '${baseurl}{endpoint}',
            form : true,
            headers: {
                'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
                'Cookie': "auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmo5blhQa0NNOUNOamxnVG5ocG9BYlBMSExvZG1hZEhxT0FpamJvdFNjYjA1bHFueVplcmtZV3Zqc2FkdmZZR0VCMDNXT2lVVHdOamhTdFpvVFdGaDVLT2pWa29ha2ZOMU9adWRJQlhnaXZucXpQbTJsU2tLMFZoalc0UzZEWXl1aXU0QVdjNkFvUkhUc0pHd1U4clhTYmxVTUducUVjOTN2ZmtDRF9GYWE2WUlfRzhuWjhSR1lyaFBSNFAtWno2LUtTUEJPQzBUVDRueVVUNWtTTE0xQnlKUnctNVgyNUQweEtLU0Fra0JyTnFleWprOVFKMFctLXkyWUxlQ1RxczAySjRuUTFsUnpId0MxcWNHdE51cmNUMGxibGVCMTQ5d2YtaG1sWVUtdmtxUm5fZFdpWk9WcWktbEJtODE5RkRqYVk3anpkLWI5T0pMajYyWXhGQlRLMTBFOTR2SFBoQVZETGs1QkF0SlR2LVB2VFBaeEJDMHV2TWZrMzlvUXo1OFJWR3pHRHE4eS1ycW5FZjFLTlZwSnpNaWlqek93SEdqcTFYS2FyalRzOXN6NS1XNGphMEhnZnZtakpNX2E3S0FaMG5aeHBqRHljek5ESHVsV0RPbnpLQnJ3YXlqeGkyeEZsbTh6VHN3TEpiektCc1c5RXRySWRNXzFGUnFETndmOVdKeWRPRmp2bWVrNXhqcUJjdG5lYmxac3B0V1RZTGZxVy1FSV9DV1VDV2RDcTNCbFZ0RjFuNVN6T2k4T1JkSjZ0NmlWOHhCb2ZMV01DSHllZDhvVF9IRGkyUTM2b0RyQ3A2dGZlNGVKYkJTeEIyXzJWVXR0OXZmV2l0aDlXWThEOWNBYkVUeHNDemV2VWhVenM5alhPbjVWSGc9PSIsImV4cCI6MTY3NzA5Njk5OX0.vTvY61LvHLlGS8mgqlptTwdgG8LSWceiQ_9RVuM_KM4"
               
            },
            body: {
                email: 'tanvir360911@gmail.com',
                password: 'Test@1234'
            }
           
        }).then((response) => {
          expect(response.status).to.eq(200)
           cy.log(JSON.stringify(response.body))

  })
});
Cypress.Commands.add('loginUsingCsv', (requestBody) =>
{

  cy.request({
    method: 'POST',
    url: 'https://stagingapp.propcloud.no/login',
    form: true,
    headers: {
      'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
      'Cookie': "auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmo5blhQa0NNOUNOamxnVG5ocG9BYlBMSExvZG1hZEhxT0FpamJvdFNjYjA1bHFueVplcmtZV3Zqc2FkdmZZR0VCMDNXT2lVVHdOamhTdFpvVFdGaDVLT2pWa29ha2ZOMU9adWRJQlhnaXZucXpQbTJsU2tLMFZoalc0UzZEWXl1aXU0QVdjNkFvUkhUc0pHd1U4clhTYmxVTUducUVjOTN2ZmtDRF9GYWE2WUlfRzhuWjhSR1lyaFBSNFAtWno2LUtTUEJPQzBUVDRueVVUNWtTTE0xQnlKUnctNVgyNUQweEtLU0Fra0JyTnFleWprOVFKMFctLXkyWUxlQ1RxczAySjRuUTFsUnpId0MxcWNHdE51cmNUMGxibGVCMTQ5d2YtaG1sWVUtdmtxUm5fZFdpWk9WcWktbEJtODE5RkRqYVk3anpkLWI5T0pMajYyWXhGQlRLMTBFOTR2SFBoQVZETGs1QkF0SlR2LVB2VFBaeEJDMHV2TWZrMzlvUXo1OFJWR3pHRHE4eS1ycW5FZjFLTlZwSnpNaWlqek93SEdqcTFYS2FyalRzOXN6NS1XNGphMEhnZnZtakpNX2E3S0FaMG5aeHBqRHljek5ESHVsV0RPbnpLQnJ3YXlqeGkyeEZsbTh6VHN3TEpiektCc1c5RXRySWRNXzFGUnFETndmOVdKeWRPRmp2bWVrNXhqcUJjdG5lYmxac3B0V1RZTGZxVy1FSV9DV1VDV2RDcTNCbFZ0RjFuNVN6T2k4T1JkSjZ0NmlWOHhCb2ZMV01DSHllZDhvVF9IRGkyUTM2b0RyQ3A2dGZlNGVKYkJTeEIyXzJWVXR0OXZmV2l0aDlXWThEOWNBYkVUeHNDemV2VWhVenM5alhPbjVWSGc9PSIsImV4cCI6MTY3NzA5Njk5OX0.vTvY61LvHLlGS8mgqlptTwdgG8LSWceiQ_9RVuM_KM4"
               
    },
    body: requestBody
           
  }).then((response) =>
  {
    

  });
})



Cypress.Commands.add('getAllSectionDetails', (queryParams) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingapp.propcloud.no/get-all-section-details?${queryParams}`),
    headers: {
      'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
      'cookie': "_hp2_ses_props.1771820804=%7B%22ts%22%3A1674720391759%2C%22d%22%3A%22stagingapp.propcloud.no%22%2C%22h%22%3A%22%2F%22%7D; auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmowalNMMlR1OFhBbGJ4UEp0WThSaFktT2ZqN3ZtVTZnbVJZcHYzN2dNdHpfdU13TDVkNGRtWVBqVU9fNkE0dGxOWTRMTlY0OF96QkZ2cXg3NzlIWFRqSTBka09ndXJnV3JvaUZVYlByR0h5c29VektBS0VwNlJ5LWtQTUxsNDdoYzZqNXAwN1FLdzJRYmZHaldMMkhLc0xPQU52Zkw4YUl3QlZ2SnBocUlvX1phdUpBV2hvTlB4ZlJ2ZHNJSWg1QjBiRVp4cFB1SXJTUjVEWkZlZjRxYXNWZEk4SDNCR2xmbmtUTmR4ME45V3I2VFE5Qm5WOEJlNFZYQnpydFFkSXJnRlpobUVtRWpudVZUZHFQT19INFA3U25MUmstakNMOHFTZkN4YlJqcm92eHhWcXVzbEZYMVRWVXJqeFZGSXdEU1hjZ2h6dzFVN1lMQ3ZHYVFOaGROTC1Ic3d1cTM2dmNQSkhqS21jUkVBZVhucktKWUl2RmU3T0dBVExrSDlkVG1OaUJ6Qk5qUUlvVF9jbTd0Tm02YVBCeDRHQnBpdDZhQ0hyS3lxVktGa0M4S1hZRGJ4bUQ3RnhTYzdSNzJIb3QybXphMmdRbWpWWFFrN3d4OTB2czliZV9rZkNaUGVnMXVpczJPc3lqbFNpWDUzbnFYY3dwSy02b0FGSU5FcVVzczYxUEJSQ20wbjZxZGRHTEo4alMwTkZER2J0Nk1rR05CczRPVmQ3UlYxNjJGSlhaYkhrc2VqbGcwcHR0cjlUbnkzbVJJQktkYkxWMVBzNldyLU9GWUtkNEZQanE1RXkwc3pXaU4ySU5OMGF2aEZqUF9lNXlHLXlUV3FyNGhubmk5Qnl3YnpSOHRySkwtNnQyWG9iTWFhM2ZfUXRKM2NVMzhRLUVDbnhBV1lkS3J5R2JpakNwanpZNFR3TW9SMS00ZjIyRk5OTnVMSXl1RW9aTUpQazBIYjlEVGx3PT0iLCJleHAiOjE2NzQ3MjA5OTV9.g18Uy0YiLyv0-nnQyYDpg5j33-suaeThDRhZy01VMtA; _hp2_id.1771820804=%7B%22userId%22%3A%221639240105149223%22%2C%22pageviewId%22%3A%225878238383418888%22%2C%22sessionId%22%3A%224892280652278034%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D"
    },
      
  }).then((response) => {
         
           

           
  })
});


Cypress.Commands.add('getPropertyAllRiskReport', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingapp.propcloud.no/getPropertyAllRiskReport?${id}`),
    headers: {
      'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
      'cookie': "_hp2_ses_props.1771820804=%7B%22ts%22%3A1674720391759%2C%22d%22%3A%22stagingapp.propcloud.no%22%2C%22h%22%3A%22%2F%22%7D; auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmowalNMMlR1OFhBbGJ4UEp0WThSaFktT2ZqN3ZtVTZnbVJZcHYzN2dNdHpfdU13TDVkNGRtWVBqVU9fNkE0dGxOWTRMTlY0OF96QkZ2cXg3NzlIWFRqSTBka09ndXJnV3JvaUZVYlByR0h5c29VektBS0VwNlJ5LWtQTUxsNDdoYzZqNXAwN1FLdzJRYmZHaldMMkhLc0xPQU52Zkw4YUl3QlZ2SnBocUlvX1phdUpBV2hvTlB4ZlJ2ZHNJSWg1QjBiRVp4cFB1SXJTUjVEWkZlZjRxYXNWZEk4SDNCR2xmbmtUTmR4ME45V3I2VFE5Qm5WOEJlNFZYQnpydFFkSXJnRlpobUVtRWpudVZUZHFQT19INFA3U25MUmstakNMOHFTZkN4YlJqcm92eHhWcXVzbEZYMVRWVXJqeFZGSXdEU1hjZ2h6dzFVN1lMQ3ZHYVFOaGROTC1Ic3d1cTM2dmNQSkhqS21jUkVBZVhucktKWUl2RmU3T0dBVExrSDlkVG1OaUJ6Qk5qUUlvVF9jbTd0Tm02YVBCeDRHQnBpdDZhQ0hyS3lxVktGa0M4S1hZRGJ4bUQ3RnhTYzdSNzJIb3QybXphMmdRbWpWWFFrN3d4OTB2czliZV9rZkNaUGVnMXVpczJPc3lqbFNpWDUzbnFYY3dwSy02b0FGSU5FcVVzczYxUEJSQ20wbjZxZGRHTEo4alMwTkZER2J0Nk1rR05CczRPVmQ3UlYxNjJGSlhaYkhrc2VqbGcwcHR0cjlUbnkzbVJJQktkYkxWMVBzNldyLU9GWUtkNEZQanE1RXkwc3pXaU4ySU5OMGF2aEZqUF9lNXlHLXlUV3FyNGhubmk5Qnl3YnpSOHRySkwtNnQyWG9iTWFhM2ZfUXRKM2NVMzhRLUVDbnhBV1lkS3J5R2JpakNwanpZNFR3TW9SMS00ZjIyRk5OTnVMSXl1RW9aTUpQazBIYjlEVGx3PT0iLCJleHAiOjE2NzQ3MjA5OTV9.g18Uy0YiLyv0-nnQyYDpg5j33-suaeThDRhZy01VMtA; _hp2_id.1771820804=%7B%22userId%22%3A%221639240105149223%22%2C%22pageviewId%22%3A%225878238383418888%22%2C%22sessionId%22%3A%224892280652278034%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D"
    },
      
 }).then((response) => {
         
           

           
  })
});

Cypress.Commands.add('getOwnershipData', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingapp.propcloud.no/getOwnership?orgnr=${id}`),
    headers: {
      'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
      'cookie': "_hp2_ses_props.1771820804=%7B%22ts%22%3A1674720391759%2C%22d%22%3A%22stagingapp.propcloud.no%22%2C%22h%22%3A%22%2F%22%7D; auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmowalNMMlR1OFhBbGJ4UEp0WThSaFktT2ZqN3ZtVTZnbVJZcHYzN2dNdHpfdU13TDVkNGRtWVBqVU9fNkE0dGxOWTRMTlY0OF96QkZ2cXg3NzlIWFRqSTBka09ndXJnV3JvaUZVYlByR0h5c29VektBS0VwNlJ5LWtQTUxsNDdoYzZqNXAwN1FLdzJRYmZHaldMMkhLc0xPQU52Zkw4YUl3QlZ2SnBocUlvX1phdUpBV2hvTlB4ZlJ2ZHNJSWg1QjBiRVp4cFB1SXJTUjVEWkZlZjRxYXNWZEk4SDNCR2xmbmtUTmR4ME45V3I2VFE5Qm5WOEJlNFZYQnpydFFkSXJnRlpobUVtRWpudVZUZHFQT19INFA3U25MUmstakNMOHFTZkN4YlJqcm92eHhWcXVzbEZYMVRWVXJqeFZGSXdEU1hjZ2h6dzFVN1lMQ3ZHYVFOaGROTC1Ic3d1cTM2dmNQSkhqS21jUkVBZVhucktKWUl2RmU3T0dBVExrSDlkVG1OaUJ6Qk5qUUlvVF9jbTd0Tm02YVBCeDRHQnBpdDZhQ0hyS3lxVktGa0M4S1hZRGJ4bUQ3RnhTYzdSNzJIb3QybXphMmdRbWpWWFFrN3d4OTB2czliZV9rZkNaUGVnMXVpczJPc3lqbFNpWDUzbnFYY3dwSy02b0FGSU5FcVVzczYxUEJSQ20wbjZxZGRHTEo4alMwTkZER2J0Nk1rR05CczRPVmQ3UlYxNjJGSlhaYkhrc2VqbGcwcHR0cjlUbnkzbVJJQktkYkxWMVBzNldyLU9GWUtkNEZQanE1RXkwc3pXaU4ySU5OMGF2aEZqUF9lNXlHLXlUV3FyNGhubmk5Qnl3YnpSOHRySkwtNnQyWG9iTWFhM2ZfUXRKM2NVMzhRLUVDbnhBV1lkS3J5R2JpakNwanpZNFR3TW9SMS00ZjIyRk5OTnVMSXl1RW9aTUpQazBIYjlEVGx3PT0iLCJleHAiOjE2NzQ3MjA5OTV9.g18Uy0YiLyv0-nnQyYDpg5j33-suaeThDRhZy01VMtA; _hp2_id.1771820804=%7B%22userId%22%3A%221639240105149223%22%2C%22pageviewId%22%3A%225878238383418888%22%2C%22sessionId%22%3A%224892280652278034%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D"
    },
      
 }).then((response) => {
         
           

           
  })
});

Cypress.Commands.add('getSearchfield', (searchField) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingapp.propcloud.no/searchForProperty?searchField=${searchField}`),
    headers: {
      'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
      'cookie': "_hp2_ses_props.1771820804=%7B%22ts%22%3A1674720391759%2C%22d%22%3A%22stagingapp.propcloud.no%22%2C%22h%22%3A%22%2F%22%7D; auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmowalNMMlR1OFhBbGJ4UEp0WThSaFktT2ZqN3ZtVTZnbVJZcHYzN2dNdHpfdU13TDVkNGRtWVBqVU9fNkE0dGxOWTRMTlY0OF96QkZ2cXg3NzlIWFRqSTBka09ndXJnV3JvaUZVYlByR0h5c29VektBS0VwNlJ5LWtQTUxsNDdoYzZqNXAwN1FLdzJRYmZHaldMMkhLc0xPQU52Zkw4YUl3QlZ2SnBocUlvX1phdUpBV2hvTlB4ZlJ2ZHNJSWg1QjBiRVp4cFB1SXJTUjVEWkZlZjRxYXNWZEk4SDNCR2xmbmtUTmR4ME45V3I2VFE5Qm5WOEJlNFZYQnpydFFkSXJnRlpobUVtRWpudVZUZHFQT19INFA3U25MUmstakNMOHFTZkN4YlJqcm92eHhWcXVzbEZYMVRWVXJqeFZGSXdEU1hjZ2h6dzFVN1lMQ3ZHYVFOaGROTC1Ic3d1cTM2dmNQSkhqS21jUkVBZVhucktKWUl2RmU3T0dBVExrSDlkVG1OaUJ6Qk5qUUlvVF9jbTd0Tm02YVBCeDRHQnBpdDZhQ0hyS3lxVktGa0M4S1hZRGJ4bUQ3RnhTYzdSNzJIb3QybXphMmdRbWpWWFFrN3d4OTB2czliZV9rZkNaUGVnMXVpczJPc3lqbFNpWDUzbnFYY3dwSy02b0FGSU5FcVVzczYxUEJSQ20wbjZxZGRHTEo4alMwTkZER2J0Nk1rR05CczRPVmQ3UlYxNjJGSlhaYkhrc2VqbGcwcHR0cjlUbnkzbVJJQktkYkxWMVBzNldyLU9GWUtkNEZQanE1RXkwc3pXaU4ySU5OMGF2aEZqUF9lNXlHLXlUV3FyNGhubmk5Qnl3YnpSOHRySkwtNnQyWG9iTWFhM2ZfUXRKM2NVMzhRLUVDbnhBV1lkS3J5R2JpakNwanpZNFR3TW9SMS00ZjIyRk5OTnVMSXl1RW9aTUpQazBIYjlEVGx3PT0iLCJleHAiOjE2NzQ3MjA5OTV9.g18Uy0YiLyv0-nnQyYDpg5j33-suaeThDRhZy01VMtA; _hp2_id.1771820804=%7B%22userId%22%3A%221639240105149223%22%2C%22pageviewId%22%3A%225878238383418888%22%2C%22sessionId%22%3A%224892280652278034%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D"
    },
      
 }).then((response) => {
	
		
		
        })
});

Cypress.Commands.add('getPropertyInfo', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/properties/${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
  
         
           

           
  })
});
Cypress.Commands.add('getPropertyOwnerInfo', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/owners?property-id-nma=${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
  
         
           

           
  })
});

Cypress.Commands.add('getPropertyTransacIndividual', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/transactions/individual?property-id-nma=${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
  
         
           

           
  })
});



Cypress.Commands.add('getPropertyUnitInfo', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/units/housing-association?property-id-nma=${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
  
         
           

           
  })
});










Cypress.Commands.add('getPropertyLeaseInfo', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/leases/${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
});

Cypress.Commands.add('getPropertyInfoAddress', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/addresses/${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
});

Cypress.Commands.add('getPropertySectionInfo', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/sections/${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
});   

Cypress.Commands.add('getPropertyInfoBuildings', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/buildings/${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
});   
 Cypress.Commands.add('getPropertyTransactionsMain', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/transactions/main/${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
}); 

Cypress.Commands.add('getPropertyInfoListings', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/listings?property-id-nma=${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
});    

Cypress.Commands.add('getPropertyInfoListingImages', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/listings/images?property-id-nma=${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
});    
Cypress.Commands.add('getPropertyInfoMultipleProperty', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/listings/multiple?property-id-nma=${id}%2C${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
}); 

Cypress.Commands.add('getUnitValuation', (id) =>
{ // Send the GET request with the query parameters
  cy.request({
    method: 'GET',
    url: (`https://stagingpropertyvaluation.propcloud.no/api/core/prop-details/info/valuation/units?property-id-nma=${id}`),
    headers: {
      'accept': "application/json",
      'api-key': "605367aeab2b41b9936c5dbac7f5953e403724ebf7f92d1bbed8940a16151208db1367d40083933be89b212c076cd829c20984e9c0894c79d44b79d30dae3d86"
    },
      
 }).then((response) => {
         
           

           
  })
}); 
