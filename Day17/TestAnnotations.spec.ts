import test from '@playwright/test'

test("Test Runner",async({page})=>{
await page.goto("https://www.amazon.in")
const title =await page.title()
console.log(title)
})

/*test.only("Test Runner .only",async({page})=>{

await page.goto("https://www.hike.com")
const title =await page.title()
console.log(title)
})*/

test.skip("Test Runner .skip",async({page})=>{
await page.goto("https://www.google.com")
const title =await page.title()
console.log(title)
})

test.fixme("Test Runner .fixme",async({page})=>{
await page.goto("https://www.amazon.in")
const title =await page.title()
console.log(title)
})

test.fail("Test Runner .fail",async({page})=>{
await page.goto("https://www.leafground.com/file.xhtml")
const download=page.waitForEvent('download')
await page.click("[id='j_idt93:j_idt95']")
const fileDownload=await download
await fileDownload.saveAs("Data/"+fileDownload.suggestedFilename())
})

test("Test Runner info",async({page})=>{

    test.info().annotations.push({type:'author',description:'Dilip'},{
        type:'type of testing',description:'smoke'})

        /* test.info().attach('snapshot',{
             body: await page.screenshot(),
             contentType: 'img/png',
         })*/

    await page.goto("https://www.leafground.com/file.xhtml")
const download=page.waitForEvent('download')
await page.click("[id='j_idt93:j_idt95']")
const fileDownload=await download
await fileDownload.saveAs("Data/"+fileDownload.suggestedFilename())
})