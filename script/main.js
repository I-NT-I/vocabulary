const Vocinput = [];
var VocCounter
var Count = 0;
var GuessCount = 0;
const VocinputWrong = []

function createTable(tableData) {
    $( "table" ).remove();
    var table = document.createElement('table');
    var table = document.createElement('table');
    
    
    var tableBody = document.createElement('tbody');
    tableBody.classList.add('test');
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
  
function addWord(){
    


    if (document.getElementById('InputVoc1').value != "" && document.getElementById('InputVoc2').value != "") { // check if input is empty 
        Vocinput.push([document.getElementById('InputVoc1').value, document.getElementById('InputVoc2').value]) // add voc in array 

        console.log(Vocinput)
        Count++
        $("#Anzahl").text(Vocinput.length);
        localStorage.setItem('myItem', JSON.stringify(Vocinput));
        createTable(Vocinput)
    }
    else{
        alert("Box empty");
    }



}
function guess(){

    var val = JSON.parse(localStorage.getItem('myItem'));

    if($("#Guess1").text == ""){
        alert("Box empty");
    }
    if(document.getElementById('Guess1').value == val[GuessCount][1] ){
        $(".Check").text("Right!");
        GuessCount++
        $("#NextWordBtn").prop("disabled",false)
        $("#checkwordbtn").prop("disabled",true)
    }
    else{
        $(".Check").text("Wrong!");
        // VocinputWrong.push(val[GuessCount][0],val[GuessCount][1])

    }

}
function NextWord(){
    var val = JSON.parse(localStorage.getItem('myItem'));

console.log(val[GuessCount][1]);

    document.getElementById('Word1').value = val[GuessCount][0];
    console.log( document.getElementById('Word1').value)
    console.log( val[GuessCount][0])
    $("#NextWordBtn").prop("disabled",true)
    $(".Check").text("");
    $("#Guess1").val('');
    $("#checkwordbtn").prop("disabled",false)

}
// navigation 
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
$( document ).ready(function() {
  AOS.init();

});