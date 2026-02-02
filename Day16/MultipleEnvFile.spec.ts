import test from '@playwright/test'
import dotenv from 'dotenv'

const fileName= process.env.env_File ||"SF_LoginQA"
dotenv.config({path:`Utils/${fileName}.env`})


test('Read the Value From ENV file',async({page})=>{

    //process.env.variableName
    //process -> global object
    //env-> read value from env file
    //variableName -> key name in env file

    let url =process.env.SF_url as string
    let username=process.env.SF_username as string
    let password=process.env.SF_password as string

await page.goto(url)
await page.locator("#username").fill(username)
await page.locator("#password").fill(password)
await page.locator("#Login").click()
await page.waitForTimeout(3000)

})