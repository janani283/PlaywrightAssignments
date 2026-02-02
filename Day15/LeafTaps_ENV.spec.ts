import test from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({path:`Utils/LT_LoginQA.env`}) //give backtick or double quotes


test(`Read the Value From ENV file`,async({page})=>{

    //process.env.variableName
    //process -> global object
    //env-> read value from env file
    //variableName -> key name in env file

    let url =process.env.LT_url as string
    let username=process.env.LT_username as string
    let password=process.env.LT_password as string

await page.goto(url)
await page.locator("#username").fill(username)
await page.locator("#password").fill(password)
await page.locator(".decorativeSubmit").click()
await page.waitForTimeout(3000)

})