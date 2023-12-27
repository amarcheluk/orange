import fs from 'fs';

let creden =JSON.parse(fs.readFileSync('./test/testdata/multtestData.json'))
describe("fetchdata",async ()=>
{


    creden.forEach(  data => {
        
   
        
  
 


   it("usingdata",async ()=>
   {

    let un=data.username
    let pwd=data.password
     console.log(un+"  "+pwd)
     await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                   await browser.$('//input[@name="username"]').setValue(un)
                   await browser.$('//input[@name="password"]').setValue(pwd)
                
                   await browser.$('//button[@type="submit"]').click()
                   await browser.pause(3000)

                })
   })

}
)

 

