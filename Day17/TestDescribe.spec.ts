import test from '@playwright/test'


test.describe.only("Test Runner Smoke",async()=>{

    test.describe.configure({mode:'serial',retries:1})

    test("Test Runner1",async({page})=>{
    await page.goto("https://www.amazon.in")
    const title =await page.title()
    console.log(title)
    })
    
    test("Test Runner2",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    const download=page.waitForEvent('download')
    await page.click("[id='j_idt93:j_idt80']")
    const fileDownload=await download
    await fileDownload.saveAs("Data/"+fileDownload.suggestedFilename())
    })


    test("Test Runner3",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    const download=page.waitForEvent('download')
    await page.click("[id='j_idt93:j_idt95']")
    const fileDownload=await download
    await fileDownload.saveAs("Data/"+fileDownload.suggestedFilename())
    })

})


test.describe("Test Runner sanity",async()=>{

    test.describe.configure({mode:'default',retries:1})

    test("Test Runner1",async({page})=>{
    await page.goto("https://www.amazon.in")
    const title =await page.title()
    console.log(title)
    })
    
    test("Test Runner2",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    const download=page.waitForEvent('download')
    await page.click("[id='j_idt93:j_idt80']")
    const fileDownload=await download
    await fileDownload.saveAs("Data/"+fileDownload.suggestedFilename())
    })


    test("Test Runner3",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    const download=page.waitForEvent('download')
    await page.click("[id='j_idt93:j_idt95']")
    const fileDownload=await download
    await fileDownload.saveAs("Data/"+fileDownload.suggestedFilename())
    })

})