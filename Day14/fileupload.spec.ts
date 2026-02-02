import test from '@playwright/test'

test("File upload with Input Tag",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")
    await page.setInputFiles("[id='j_idt88:j_idt89_input']","Data/TSLR.pdf")
})

test("File Upload with Event Listener",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")
    const fileUpload= page.waitForEvent('filechooser')
    await page.click("[id='j_idt88:j_idt89_input']")
    const fileChooser=await fileUpload

    //setfiles()
    await fileChooser.setFiles("Data/ServiceHistory.pdf")

})

test.only("Multiple File Upload",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    const multipleFilepage=page.locator("[id='j_idt97:j_idt98_input']")
await multipleFilepage.setInputFiles(["Data/img1.jpg","Data/img2.jpg"])

await page.waitForTimeout(3000) 
})