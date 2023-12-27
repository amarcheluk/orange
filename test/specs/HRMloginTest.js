import L from "../pageobjects/HRM_LoginAndLogOutPAGE.js";
import allure from "allure-commandline"




describe("usual log in ",()=>
             {
               it("loginToAdmin",async () =>
               {

                   await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                   await L.logInToTheApplication("Admin","admin123")

               })
               it("logout",async ()=>
               {
                   
                  L.logOutFRomTheApplication()
                   
               })

             })