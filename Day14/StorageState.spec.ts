//Common resue codes are stored in Starage State  
import test, { expect } from '@playwright/test'  
  
test("Storage State", async ({page}) => {  
  
  await page.goto("https://login.salesforce.com/?locale=in")  
  await page.locator("#username").fill("jananisjmhss.d7af8e0dd6b7@agentforce.com")  
  await page.locator("#password").fill("Aathira@1011")  
  await page.locator("#Login").click()  
  await page.waitForTimeout(20000)
  await expect(page).toHaveTitle("Lightning Experience | Salesforce")
// when line 11 executes, it created the Storage State folder with json file  
  await page.context().storageState({path: "StorageState/SF_Login.json"})  
})