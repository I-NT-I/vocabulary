const Vocinput = [];
var VocCounter
var Count = 0;
var GuessCount = 0;
const VocinputWrong = []


function addWord(){
    


    if (document.getElementById('InputVoc1').value != "" && document.getElementById('InputVoc2').value != "") { // check if input is empty 
        Vocinput.push([document.getElementById('InputVoc1').value, document.getElementById('InputVoc2').value]) // add voc in array 

        console.log(Vocinput)
        Count++
        $("#Anzahl").text(Vocinput.length);
        localStorage.setItem('myItem', JSON.stringify(Vocinput));
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
