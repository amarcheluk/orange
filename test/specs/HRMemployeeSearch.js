import { expect } from "chai";
import l from "../pageobjects/HRM_LoginAndLogOutPAGE.js"
import h from "../pageobjects/HRM_HOME_PAGE.js"
import p from "../pageobjects/HRM_PIM_PAGE.js"

describe("EMPLOYEE_SEARCH",async ()=>
{
    it("log in",async ()=>
    {  await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
      await  l.logInToTheApplicationAsAdmin()



    })

    it("searchingEmployee",async ()=>
    {   await h.pimButtom.click()
      let id = p.employeeSEarchOPeration("aaron maaron")

        console.log(id+".....................................................................")
    })

    it("out",async ()=>
    {

       l.logOutFRomTheApplication


    })
})