/*************************************************************
 *  Name:            tableData
 *  Arguments:       None
 *  Return:          workSheet("SalesOrders") from input xlsx file.
 *  Purpose:         Open given xlsx file, fetch specifed worksheet 
 *                   and return the workSheet data in json format.
 */ 
function tableData(){

    var xlsx = require("xlsx");

    //Passing cellDates:true to convert xlsx date convention to javascript dates.
    var workBook = xlsx.readFile("./Data/SampleData.xlsx", {cellDates:true });

    var workSheet = workBook.Sheets["SalesOrders"];

    var data = xlsx.utils.sheet_to_json(workSheet);

    return(data);

}

exports.tableData = tableData;