const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'tes.xlsx'
});

console.log(result);