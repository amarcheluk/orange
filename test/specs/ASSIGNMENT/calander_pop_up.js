/* describe("calander pop ups"), async ()=>{

it("irtc",async ()=>{
console.log("EXECUTION STARTS NOW FOR IRTC POP UP.......................................................................... ")
await browser.url("https://www.irctc.co.in/nget/train-search")


})







} */
describe("cal pop up ", async ()=>
             {
                it("irtc",async () =>
                {
                    console.log("EXECUTION STARTS NOW FOR IRTC POP UP.......................................................................... ")

                    await browser.url('https://www.irctc.co.in/nget/train-search')
                    await browser.$('//*[@id="origin"]/span/input').click()
                    await browser.$('//*[@id="jDate"]/span/input').click()
                    await browser.$('//*[@id="jDate"]/span/div/div/div[2]/table/tbody/tr[2]/td[4]/span').click()



                })



                it("loginToAdmin",async () =>
                {
                    console.log("EXECUTION STARTS NOW FOR spicejet POP UP.......................................................................... ")

                    await browser.url('https://www.spicejet.com/')
                    await browser.maximizeWindow()
                    await browser.pause(5000)
                    await browser.$('//div[text()="round trip"]').click()
                    await browser.$('//div[text()="From"]').click()
                    await browser.$('//div[text()="Chennai"]').click()
                    await browser.$('//div[text()="Amritsar"]').click()
                    await browser.$('//*[@id="main-container"]/div/div[1]/div[3]/div[2]/div[4]/div/div/div[1]/div[1]').click()
                    await browser.$('//*[@id="main-container"]/div/div[1]/div[3]/div[2]/div[4]/div/div[2]/div[2]/div[3]/div[2]/div/div[2]/div/div[3]/div[1]/div[4]/div/div').click()
                    //await browser.$('//div[@data-testid=\"undefined-month-January-2023\"]//div[text()="19"]').click()

                     await browser.$('//div[contains(text(),"Return Date")]/..').click() 
                     await browser.$('//*[@id="main-container"]/div/div[1]/div[3]/div[2]/div[4]/div/div[2]/div[2]/div[3]/div[2]/div/div[3]/div/div[3]/div[2]/div[5]/div/div').click()
                    
  
                })

            })