import test from '@playwright/test'

test.use({storageState:"StorageState/SF_Login.json"}) //this line should be above the test function in every testcase

test("Use Storage State",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.click("//span[text()='Accounts']")
await page.waitForTimeout(5000)

})


test("Use Storage State File",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.click("//span[text()='Files']")
await page.waitForTimeout(5000)

})