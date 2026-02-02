import test from '@playwright/test'
import { log } from 'node:console'
import { loadavg } from 'node:os'

test("Window Handling",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")

//create the promise
const parentPage= context.waitForEvent('page')

//do the action
await page.locator("//span[text()='Open']").click()

//resolve move to child page -> switch between parent to child window
const childPage=await parentPage
console.log("Child page title is: "+await childPage.title());


const email =await childPage.locator("#email").fill("sug3686@gmail.com")
console.log("The entered email id is: "+email)

await page.bringToFront()
console.log("Parent page title is: "+await page.title());
//childPage.close()

//In parent page click open multiple
await page.click("//span[text()='Open Multiple']")

await page.waitForTimeout(2000)

})