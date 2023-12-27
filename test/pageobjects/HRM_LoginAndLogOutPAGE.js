import { expect } from "chai"
import fs from "fs"

let adminCreden =JSON.parse(fs.readFileSync('./test/testdata/HRM_test_DATA_Admin_Credentials.json'))
class Loginpage{
//*WEB ELEMENTS */
        get userNameTextField()
                              {
                                return $('//input[@name="username"]')
                              }
        get passwordTextField()
                             {
                                return $('//input[@name="password"]')
                             }
              get loginButton()
                             {
                                return $('//button[@type="submit"]')
                             }   
         get profileDropDown()                
                             {
                                 return $('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]')
                             }
            get LogOutButton()  
                             {
                              return $('//a[text()="Logout"]')
                             }                 
                             
 /*BUSINESS LIBRARY */                            
                       async logInToTheApplicationAsAdmin ()    
                                                   {
                                                     let username=adminCreden.username
                                                     let password=adminCreden.password
                                                   let expectedurl="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
                                                    await browser.maximizeWindow()
                                                   await this.userNameTextField.setValue(username)
                                                    await this.passwordTextField.setValue(password)
                                                    await this.loginButton.click()
                                                     console.log("LOG IN")
                                                    let actualurl = await browser.getUrl() 
                                                     expect(actualurl).to.be.equal(expectedurl)
                                                   }     
                              
                   async logOutFRomTheApplication()
                                                   {
                                                   let  expectedUrl="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
                                                    await  this.profileDropDown.click(); 
                                                    await  this.LogOutButton.click();
                                                    let actualurl =await browser.getUrl()
                                                    expect(actualurl).to.be.equal(expectedUrl)
                                                   
                                                    console.log("LOG OUT")
                                                   }                   
           




}
export default new Loginpage()