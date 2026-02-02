import test from '@playwright/test';
import fs from 'fs'
import { parse } from 'csv-parse/sync';


const value:any[]=parse(fs.readFileSync("Utils/LT_Login.csv"),{
    columns:true,
    skip_empty_lines:true
})


const data=value[0]


//for(let data of value){
test(`Read value from CSV ${data.testID}`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill(data.username)
await page.locator("#password").fill(data.password)
await page.locator(".decorativeSubmit").click()
await page.waitForTimeout(3000)


})