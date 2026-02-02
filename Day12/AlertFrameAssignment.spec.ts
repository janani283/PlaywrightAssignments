import test, {expect} from '@playwright/test'
test.only("Alert Frame W3C", async({page})=>
{
    //1: Handle Alert
        page.on('dialog', alertBox=>{
     
       if(alertBox.type()==='confirm') 
       {
         alertBox.accept()
         console.log("Simple alert accepted")
       } 
       console.log("The message from alert box is: "+alertBox.message())
    })

  // 2. Launch url & Click the button inside the frame
  await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
  const frame = page.frameLocator('#iframeResult');
  await frame.locator("//button[text()='Try it']").click()
  await page.waitForTimeout(5000)

// 3. Retrieve the text "You pressed OK!" and verify it
  const resultText = await frame.locator('#demo').textContent();
  console.log("The text we got after clicking OK is: "+resultText)
  await expect(resultText).toBe('You pressed OK!');
  console.log("The text is verified and is the same!!")

  
})