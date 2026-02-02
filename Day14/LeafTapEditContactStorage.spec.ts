import test from '@playwright/test'

test.use({storageState:"StorageState/LeafTaps_Login.json"}) //this line should be above the test function in every testcase

test("Use Storage State for Lead",async({page})=>{

   await page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL14683172578")
await page.locator("//a[text()='Leads']").click()
await page.waitForTimeout(5000)

})

test("Use Storage State for Contacts",async({page})=>{
await page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL14683172578")
await page.locator("//a[text()='Contacts']").click()
await page.waitForTimeout(5000)

})
