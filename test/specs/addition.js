import { expect } from "chai";
describe("example",()=>{            
                         it("opening browser",async ()=>
                         {
                             await  browser.url("http://www.facebook.com")
                             
                             await browser.pause(1000);
                             
                             await browser.$('input#email').setValue("abc.com")
                             await browser.pause(1000);
                             
                             
                             await browser.$('//input[@id="pass"]').setValue("1234")
                             await browser.pause(1000);
                             (await browser.$('//button[@type="submit"]')).click()
                             await browser.pause(1000);
                            
                             let actualtitle = await browser.getTitle()
                              
                              
                             

                                 expect(actualtitle).to.be.contain("succesfully logged in","actual title doesnt contain succesfully loged in")
                              


                         })
                        }

                        


)
                        



                        
