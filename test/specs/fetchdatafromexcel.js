import excel from "exceljs"
import k from "../UTILS/ExcelUtils.js"
describe ("readingdataFromExcel",async()=>
{
/* it("reading",async ()=>
{
  const book=new excel.Workbook()
  await book.xlsx.readFile('test/testdata/testdataexcel.xlsx')
  const sheet=book.getWorksheet("Sheet1")
  let data=sheet.getRow(1).getCell(1).toString()
  console.log(data)



}) */

 it("readingfrom util",async ()=>
{
   let path ='test/testdata/testdataexcel.xlsx'

  let data =k.readSingleDataFRomExcel(path,1,1,"Sheet1");
  console.log(data)



})
 


})