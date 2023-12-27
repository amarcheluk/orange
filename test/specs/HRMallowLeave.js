import { expect } from "chai";
import H from "../pageobjects/HRM_HOME_PAGE.js"
import L from "../pageobjects/HRM_LoginAndLogOutPAGE.js"
describe("",async ()=>{

it("log in",async ()=>{

    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await L.logInToTheApplicationAsAdmin();

    await browser.$('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"][normalize-space()="Leave"]').click()    


})    

it("",async ()=>{

          
        
          await browser.$('//a[@class="oxd-main-menu-item active"]').click()
          await browser.pause(5000)
          await browser.$('//span[normalize-space()="Entitlements"]').click()
          await browser.pause(5000)
          await browser.$('//a[normalize-space()="Add Entitlements"]').click()
          await browser.pause(5000)
          //add entitlements page
          //individualradio button
          await browser.$('//label[normalize-space()="Individual Employee"]//span[@class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"]').click()
         //name
         await browser.$('//input[@placeholder="Type for hints..."]').setValue("aaron maaron laaron")
         //leavetypedropdown
         (await browser.$('//div[contains(text(),"- Select --"]')).click()




        })






})