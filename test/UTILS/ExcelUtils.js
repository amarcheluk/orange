import excel from "exceljs"
class ExcelUtilityPage{

     readSingleDataFRomExcel = function (filepath,cellno,rowno,sheetname)
    {
         describe ("readingdataFromExcelS",async()=>
        {
        it("readingsingle data fromm excel",async ()=>
        { 
          const book=new excel.Workbook()
           book.xlsx.readFile(filepath)
          const sheet=book.getWorksheet(sheetname)
          let data1=sheet.getRow(rowno).getCell(cellno).toString()
          console.log(data1)
        
           
        
         })
        
        
        
        }) 
   return data1
      }
}

export default new ExcelUtilityPage();