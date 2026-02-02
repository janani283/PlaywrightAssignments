import test,{expect} from '@playwright/test'
import fs from 'fs'

test.only("File upload with Input Tag",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.setInputFiles("[id='file-upload']","Data/TSLR.pdf")
     await page.waitForTimeout(10000) 
     // Assertion A: Check for a success message
const successMessage = page.locator('uploaded-files');
await expect(successMessage).toHaveText('TSLR.pdf');
console.log("File upload successful!!!")
     //expect(fileDownload.suggestedFilename()).toBe('Strawberry.jpg');

})

test("ImageFile Upload with Event Listener",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    const fileUpload= page.waitForEvent('filechooser')
    await page.click("[id='drag-drop-upload']")
    const fileChooser=await fileUpload
    //setfiles()
    await fileChooser.setFiles("Data/img1.jpg")

    await page.waitForTimeout(10000) 

})


test("Download File",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/download")

const download=page.waitForEvent('download')
await page.click("//a[text()='Strawberry.jpg']")
const fileDownload=await download

await fileDownload.saveAs("Data/pic1.jpg")
 // 4. Verify or save (Optional but recommended)
    console.log(await fileDownload.path()); 
      await fileDownload.saveAs("./my-downloaded-file.json");
      expect(fileDownload.suggestedFilename()).toBe('Strawberry.jpg');


})

