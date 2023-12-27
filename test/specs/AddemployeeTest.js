import { expect } from "chai"
describe("log in ", async ()=>
             {
                it("loginToAdmin",async () =>
                {

                    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                    await browser.$('//input[@name="username"]').setValue("Admin")
                    await browser.$('//input[@name="password"]').setValue("admin123")
                 
                    await browser.$('//button[@type="submit"]').click()
                   // await browser.$('//a[@href="/web/index.php/pim/viewPimModule"]').click()

                })

                it("addingemployeeWithcredentials",async () =>
                {
                    await browser.maximizeWindow()
                    await browser.$('//a[@href="/web/index.php/pim/viewPimModule"]').click()
                    await browser.$('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
                    
                    await browser.$('//input[@name="firstName"]').setValue("jigarthanda"+Math.ceil((Math.random()*1000)))
                    await browser.$('//input[@name="middleName"]').setValue("jigarthanda"+Math.ceil((Math.random()*1000)))
                     await browser.$('//input[@name="lastName"]').setValue("jigarthanda"+Math.ceil((Math.random()*1000)))
                    
                    
                    
                    
                    await browser.$('//label[text()="Employee Id"]/..//following-sibling::div/input').setValue(500)
                    await browser.$('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]').click()
                    await browser.$('//div[@class="oxd-form-row user-form-header"]/following-sibling::div[@class="oxd-form-row"]//input[@class="oxd-input oxd-input--active"]').setValue("arnold"+(Math.ceil((Math.random())*10000)))
                    await browser.pause(5000)
                    await browser.$('//p[@class="oxd-text oxd-text--p user-password-hint"]/..//input').setValue("1234567a")
                    await browser.pause(5000)

                    await browser.$('//div[@class="oxd-grid-item oxd-grid-item--gutters"]//input[@class="oxd-input oxd-input--active"  and @type="password"]').setValue("1234567a")
                    await browser.pause
                    await browser.$('//button[@type="submit"]').click
                     

                })

               
                it("logout",async () =>
                {
                   let  expectedUrl="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
                    await browser.$('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click(); 

                   
                    //a[text()="Logout"]
                    await browser.$('//a[text()="Logout"]').click(); 
                   
                    let actual =await browser.getUrl()
                    await expect(actual).to.be.contain("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login","failedlogout")
                  


                })
               


             })