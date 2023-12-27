describe("buy",async()=>{

it("ec log in ",async ()=>{

await browser.url('https://www.shoppersstack.com/')
await browser.maximizeWindow()
 await browser.pause(10000)
 await $('//button[@id="loginBtn"]').waitForDisplayed({timeout:10000},"timedout")
 
await browser.$('//button[@id="loginBtn"]').click()
await browser.pause(2000)


await browser.$('//input[@id="Email"]').setValue("pikku@gmail.com")
await browser.pause(2000)

await browser.$('//input[@id="Password"]').setValue("123456aA@")
await browser.pause(2000)

await browser.$('//span[normalize-space()="Login"]').click()
await browser.pause(2000)

await browser.$('//input[@id="search"]').setValue("levis")
await browser.pause(2000)
await browser.$('//div[@class="navbar_searchContainer__OTL+U"]//*[name()="svg"]').click()
await browser.pause(2000)
await browser.$('//a[@id="men"]').click()
await browser.pause(2000)



await browser.$('//div[@data-aos="zoom-in"]//span[text()="puma"]/../..//button').click()
await browser.pause(2000)
await browser.$('//a[@id="cart"]//*[name()="svg"]').click()
await browser.pause(2000)
await browser.$('//span[normalize-space()="Buy Now"]').click()
await browser.pause(2000)
await browser.$('//input[@id="13265"]').click()
await browser.pause(2000)
await browser.$('//button[@class="selectaddress_proceed__Dh8xG"]').click()






})



})