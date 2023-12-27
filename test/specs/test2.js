import L from "../pageobjects/HRM_LoginAndLogOutPAGE.js"



describe("log in ", async ()=>
             {

                it("loginToAdmin",async () =>
                {
                  await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                  await  L.logInToTheApplicationAsAdmin()
                   // await browser.$('//a[@href="/web/index.php/pim/viewPimModule"]').click()

                })










             })    
             
             function findNthProduct(index) {
               return `(//div[@class='s-result-item s-asin'])[${index}]`;
           }
           
           const secondProduct = await browser.$(findNthProduct(2));
           