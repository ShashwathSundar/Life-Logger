function doGet(e) {
    var htmlOutput =  HtmlService.createTemplateFromFile('Index');
    var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("button_list");
    var btns = dataSheet.getRange(2, 1, dataSheet.getLastRow(),1).getValues().join();
    htmlOutput.buttons = btns;
    return htmlOutput.evaluate();
}
function AddRecord(activity) {
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("event_log");
  dataSheet.appendRow([new Date(),activity]);
  return 'Log Updated';
  
}
