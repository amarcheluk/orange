 import fs from "fs"



 let creden =JSON.parse(fs.readFileSync('./test/testdata/testdata.json'))
 describe("fetchdata",async ()=>
 {

    let un=creden.username
    let pwd=creden.password


    it("usingdata",async ()=>
    {


      console.log(un+"  "+pwd)
      await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                    await browser.$('//input[@name="username"]').setValue(un)
                    await browser.$('//input[@name="password"]').setValue(pwd)
                 
                    await browser.$('//button[@type="submit"]').click()
      


    })

 }
 )