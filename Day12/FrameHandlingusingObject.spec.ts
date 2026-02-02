import test from '@playwright/test'

test("Handle the frame with FrameObject",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

const count=page.frames()
console.log("The total no:on frames are : "+count.length)

//frameObject-> name attribute and url-> src  
//frame({name:''})?
//To handle main page frame
console.log("Handling Main page or outer frame")
await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click").click()

//To handle 4th iframe
await page.frame({name:'frame2'})?.locator("//button[@id='Click']").click()
console.log("4th frame is handled")


})