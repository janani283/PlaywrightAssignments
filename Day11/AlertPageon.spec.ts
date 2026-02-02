import test, {expect} from '@playwright/test'
test.only("Page.on() Alert", async({page})=>
{
    await page.goto("https://www.leafground.com/alert.xhtml")

    page.on('dialog', alertBox=>{
     
       if(alertBox.type()==='confirm') 
       {
         alertBox.accept()
         console.log("Simple alert accepted")
       } else if(alertBox.type()==='prompt')

       {
        alertBox.accept("Hi")
        console.log("Prompt alert accepted")
       } 

    })
    
    //confirm alert
    await page.click("(//span[text()='Show'])[2]")
    await page.waitForTimeout(5000)

//Prompt alert 
await page.click("(//span[text()='Show'])[5]")
await page.waitForTimeout(5000)


})