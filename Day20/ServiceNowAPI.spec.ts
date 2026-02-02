//To do in POSTMAN API testing for SERVICE NOW:

/* 1. Endpoint
2. Headers
3. Authorization
4. Request Body.
5. HTTP Methods - CRUD operation- POST, GET, PATCH... */


//page fixture we have goto(), locator() ---> UI // It comes from Page Interface from playwright library
//request fixture we have get(), post(), patch() ---> API // It comes from APIRequestContext Interface from playwright library

import { test } from "@playwright/test";

let id : any // Global variables declaration // Explicit inference defining the datatype

test.describe.serial(`Service Now`,async () => {

test(`Service Now - Create Incident`, async ({ request }) => {


    const response = await request.post(`https://dev293266.service-now.com/api/now/table/incident`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic YWRtaW46MkZjNi09VGhmUEZt"
            },
            data: {

                "short_description": "Laptop is working Updated via PLAYWRIGHTAPI by Janani",
                "description": "User can send or receive emails",
                "comments": "Updated by PLAYWRIGHT - API",
                "work_notes": "Checked email server logs",
                "subcategory": "Email",
                "impact": "2",
                "urgency": "2"
        }
        }
    )

    const responseBody  =await response.json();
    console.log(responseBody);

    //Get the sys_id
    id = responseBody.result.sys_id
    console.log(id);
    
    

})


test(`Service Now - Fetch Incident`, async ({ request }) => {


    const response = await request.get(`https://dev293266.service-now.com/api/now/table/incident/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic YWRtaW46MkZjNi09VGhmUEZt"
            }
          
        }
    )

    const responseBody  =await response.json();
    console.log(responseBody);

    

})

test(`Service Now - Update Incident`, async ({ request }) => {


    const response = await request.patch(`https://dev293266.service-now.com/api/now/table/incident/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic YWRtaW46MkZjNi09VGhmUEZt"
            },
            data: {

                "short_description": "Laptop works fine Updated via PLAYWRIGHTAPI",
                "description": "User can send or receive emails",
                "comments": "Updated by PLAYWRIGHT - API",
                "work_notes": "Checked email server logs",
                "subcategory": "Email",
                "impact": "2",
                "urgency": "2"
        }
        }
    )

    const responseBody  =await response.json();
    console.log(responseBody);

 
   

})


test(`Service Now - Delete Incident`, async ({ request }) => {


    const response = await request.get(`https://dev293266.service-now.com/api/now/table/incident/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic YWRtaW46MkZjNi09VGhmUEZt"
            }
          
        }
    )

    

})

})