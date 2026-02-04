// App Script Web App Code


// utility functions 
function selectCellByIndices(i, j) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getRange(i, j);
  cell.activate();
  return cell.getValue();
}

function writeToSpecificCellByIndices(i, j, val) {
  var sheet = SpreadsheetApp.getActiveSheet(); 
  var cell = sheet.getRange(i, j);     
  cell.setValue(val);                
}


// function doGet(e) {
// }

function doPost(e){
  // Data received
  var previousVal = e.postData.contents;
  // write previous period on current cell 
  writeToSpecificCellByIndices(1,2, previousVal);
  
  // Response 
   return ContentService.createTextOutput(selectCellByIndices(2,2));
}


