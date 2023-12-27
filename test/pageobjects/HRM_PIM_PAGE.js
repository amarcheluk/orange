import { expect } from "chai"
import fs from "fs"
let empcreden=JSON.parse(fs.readFileSync('./test/testdata/HRM_test_DATA_EmployeeCredentials.json'))
let empdetails =JSON.parse(fs.readFileSync('./test/testdata/HRM_test_DATA_EmployeeINfo.json'))

class Pim{
            get addButton()
                         {
                         return $('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]')
                         }
   get firstNameTextField()
                         {
                         return $('//input[@name="firstName"]')
                         }          
   get middleNameTextField()
                         {
                         return $('//input[@name="middleName"]')
                         }          
     get LastNameTextField()
                         {
                         return $('//input[@name="lastName"]')
                         }
   get employeeidTextField()  
                         {
                        return $('//label[text()="Employee Id"]/..//following-sibling::div/input')
                         }  
get createCredentialToggle()
                         {
                        return $('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]')
                         }    
     get userNameTextField()    
                         {
                         return $('//div[@class="oxd-form-row user-form-header"]/following-sibling::div[@class="oxd-form-row"]//input[@class="oxd-input oxd-input--active"]')
                         } 
     get passwordTextfield()
                         {
                         return $('//p[@class="oxd-text oxd-text--p user-password-hint"]/..//input')
                         } 
get confirmPasswordTextField()
                         {
                          return $('//div[@class="oxd-grid-item oxd-grid-item--gutters"]//input[@class="oxd-input oxd-input--active"  and @type="password"]') 
                         }  
            get saveButton()                                                                             
                         {
                           return $('//button[@type="submit"]')
                         }
   get succesfulMsgElement()  
                          {
                            return $('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
                          }
get searchEmpNameTextfield()  
                          {
////*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div//////label[text()="Employee Name"]/../..//input
                           return $('//label[text()="Employee Name"]/../..//input')
                          }    
get searchEMPdetailsButton()
                          {
                           return $('//button[@type="submit"]')
                          }     
     get matchingEmployees()  
                          {
                          let  ename=employeename

                           return $$('//div[@class="oxd-table-cell oxd-padding-cell"]//div[contains(text(), "'+ename+'")]')
                          }                                                         
     async addEmployeeFormFilling()
                          {
                           let username =empcreden.username
                           let password=empcreden.password
                           let firstname=empdetails.firstname
                           let middlename=empdetails.middlename
                           let lastname=empdetails.lastname
                           let exployeeId=empdetails.employeeid
                          

                            await this.firstNameTextField.setValue(firstname);
                            await this.middleNameTextField.setValue(middlename);
                            await this.LastNameTextField.setValue(lastname)
                            await this.employeeidTextField.setValue(exployeeId)
                            await this.createCredentialToggle.click()
                            await browser.pause(5000)
                            let  usernamee= await "aaron"+Math.ceil((Math.random()*1000))
                            await this.userNameTextField.setValue(usernamee)
                            await browser.pause(5000)
                            await this.passwordTextfield.setValue(password)
                            await this.confirmPasswordTextField.setValue(password)
                            await this.saveButton.click()
                            await this.succesfulMsgElement.waitForDisplayed({timeout:5000},"delayinsuccflmsg")
                            let b=await this.succesfulMsgElement.isDisplayedInViewport()
                            expect(b).to.be.equal(true,"ERRORwhileADDemPLOYEE")
                           
                            

                         }

     async employeeSEarchOPeration(employeename)
                          {
                           console.log(employeename)
                           await (await this.searchEmpNameTextfield).click().setValue(employeename)
                           await this.pause(5000)
                           await this.searchEMPdetailsButton.click()
                           await this.pause(10000)
                    let id=await this.$$('//div[text()="aaron maaron"]/../../div[2]/div').getText()
                            return id

                          }



}
export default new Pim()