import test from '@playwright/test'

test("Handle Multiple Window",async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")

    //create the Promise
    //do the action
    //resolve Promise

    const [windowALL]=await Promise.all([
context.waitForEvent('page'),
page.locator("//span[text()='Open Multiple']").click()
    ])

    //[windwALL]-[p,ch1,ch2]
    const count=windowALL.context().pages()
    console.log(count.length)
    windowALL.waitForTimeout(4000)

//Title -> best way to handle multiple window
//create variable for child window
let dashboard:any
let webTable:any

for(let i=0;i<count.length;i++){

    const title=await count[i].title()
    console.log(title)
    await windowALL.waitForTimeout(4000)
 if(title==="Web Table"){
        //reslove  -> switch from parent to child
        webTable=count[i]
    }else if(title==="Dashboard"){
        dashboard=count[i]
    }
}

//child page -> dashboard
await dashboard.fill("//input[@id='email']","dilip@testleaf.com")
await dashboard.fill("//textarea[@id='message']","Welcome to TestLeaf!!")

//await dashboard.waitForTimeout(30000)

await page.bringToFront()
await webTable.fill("//input[@placeholder='Search']","GreenWood")


})