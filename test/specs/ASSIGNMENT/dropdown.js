
describe("dropdown",async ()=>{

    it("",async()=>{



 await browser.url('https://formstone.it/components/dropdown/demo/')
const element =await $('//button[@id="demo_basic-dropdown-selected"]')
const options =await element.$$('options')
for (const option of options)
{

await console.log(option.getText()+"----------------------------------------------------------------------------------------")

}
console.log(element.selectByIndex(0))
})
})
