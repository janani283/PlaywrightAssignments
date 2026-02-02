import test from '@playwright/test'  
  
test("StorageState LeafTaps", async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")

await page.locator("#username").fill("Demosalesmanager")

await page.locator("[name='PASSWORD']").fill("crmsfa")

await page.locator(".decorativeSubmit").click()

await page.locator("//div[@id='label']/a").click()

  await page.context().storageState({path: "StorageState/LeafTaps_Login.json"})  
})