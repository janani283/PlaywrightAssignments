import test, {expect} from '@playwright/test'

import LoginInfo from '../../Utils/Salesforce_Login.json'

for(let value of LoginInfo){
    test(`Read the json file ${value.TestID}`,async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")

await page.locator("//input[@id='username']").fill(value.Username)

await page.locator("//input[@id='password']").fill(value.Password)

await page.locator("//input[@id='Login']").click()

await page.waitForTimeout(5000)

    })
}