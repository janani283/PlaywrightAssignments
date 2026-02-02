import test from '@playwright/test'

test("Handle the frame with FrameLocator",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
//inbuilt function to handle frame with FrameLocator
//frameLocator->it will not switch the control to frame but it will access the frame directly

await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
await page.waitForTimeout(3000);
})

// nested frmae -> await page.outerframe().innerframe("#iframe").locator().click()