
import k from "../pageobjects/HRM_LoginAndLogOutPAGE.js"
describe("log in ", async ()=>
             {
                 
                it("loginToAdminagain",async () =>
                {
                     let expectedUrl="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
                    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                    await browser.pause(5000)
                     
                    await k.logInToTheApplication("Admin","admin123")
                    await browser.pause(5000)
                    await expect(browser).toHaveUrl(expectedUrl)
                    
              
                    
                })

                it("logout",async () =>
                {
                    let  expectedUrl="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
                    /* await browser.$('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click(); 

                   
                    //a[text()="Logout"]
                    await browser.$('//a[text()="Logout"]').click();  */
                    await k.logOutFRomTheApplication()
                   
                    let actual =await browser.getUrl()
                    await expect(actual).toContain(expectedUrl) 

                    //await k.logOutFRomTheApplication()
                  


                })


                
                 

            })  