import test from '@playwright/test'

test("Window Handling",async({page,context})=>{

await page.goto("https://www.amazon.in/")
const value= page.locator("#twotabsearchtextbox")
value.fill("Iphone 17 pro")
value.press("Enter")

//create the promise
const parentPage= context.waitForEvent('page')

//do the action
await page.locator("//span[contains(text(),'iPhone 17 Pro 256 GB')]").first().click()

//resolve move to child page -> switch between parent to child window
const childPage=await parentPage

const price =await childPage.locator("//span[@class='a-price-whole']").first().innerText()
console.log(price)

await page.bringToFront()

//childPage.close()

//parent page
await page.click("//a[text()='Sell']")

await page.waitForTimeout(4000)

})