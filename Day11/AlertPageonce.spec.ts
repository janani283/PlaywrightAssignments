
import test, {expect} from '@playwright/test'
test("Alert handling - Using Page.once()", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
    
    page.once('dialog', dialogBox=>{
        console.log("Type of the alert is :"+ dialogBox.type())
        console.log("Message of the alert is :"+ dialogBox.message())
        if(dialogBox.type() === 'confirm'){
             dialogBox.accept()
        }else if(dialogBox.type() === 'prompt'){
            dialogBox.dismiss()
        }
    })
    
//confirm alert
    await page.click("(//span[text()='Show'])[2]")
    await page.waitForTimeout(5000)

//Prompt alert 
await page.click("(//span[text()='Show'])[5]")
await page.waitForTimeout(5000)


})