import excel from "exceljs"
 describe("writing datatoexcel",async()=>
 {
 
    it("writing",async ()=>
    {
       const book = new excel.Workbook
       await book.xlsx.readFile('./test/testdata/testdataexcel.xlsx')
  const sheet=book.getWorksheet("Sheet1")
  sheet.getRow(2).getCell(2).value="amar2"
  await book.xlsx.writeFile('./test/testdata/testdataexcel.xlsx')
  let data2=sheet.getRow(2).getCell(2).toString()
  console.log(data2)
  



    })

 })