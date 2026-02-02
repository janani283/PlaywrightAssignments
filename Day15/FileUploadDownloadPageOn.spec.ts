import test from '@playwright/test'
test("Fileupload using Page.on",async({page})=>{
    page.on("filechooser", async(filechoose)=>{

    await filechoose.setFiles("Data/ServiceHistory.pdf")

})
await page.goto("https://www.leafground.com/file.xhtml")
await page.click("[id='j_idt88:j_idt89_input']")

})

test.only("FileDownload using Page.on",async({page})=>{
 page.on("download", async(down)=>{

await down.saveAs("Data/"+down.suggestedFilename())

 })

await page.goto("https://www.leafground.com/file.xhtml")
await page.click("//span[text()='Download']")
await page.waitForTimeout(3000)
})