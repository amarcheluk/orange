import excel from "exceljs"

class Utilities{
 generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

 readSingleValueFromExcel = (filePath, sheetName, cellAddress) => {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  const cell = worksheet[cellAddress];
  return cell.v;
};

 readMultipleValuesFromExcel = (filePath, sheetName, startCell, endCell) => {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  const range = XLSX.utils.decode_range(worksheet['!ref']);
  const startRow = startCell.charCodeAt(0);
  const startCol = parseInt(startCell.substring(1));
  const endRow = endCell.charCodeAt(0);
  const endCol = parseInt(endCell.substring(1));
  const values = [];

  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      const cellAddress = String.fromCharCode(row) + col;
      const cellValue = worksheet[cellAddress];
      if (cellValue) {
        values.push(cellValue.v);
      }
    }
  }

  return values;
};

 getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};



}
export default  new Utilities();