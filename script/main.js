
const  Vocinput = [];


var VocCounter
var Count = 0;
var GuessCount = 0


function addVoc(){
    


    if (document.getElementById('InputVoc1').value != "" && document.getElementById('InputVoc2').value != "") { // check if input is empty 
        Vocinput.push([document.getElementById('InputVoc1').value, document.getElementById('InputVoc2').value]) // add voc in array 

        console.log(Vocinput)
        Count++
        $("#Anzahl").text(Vocinput.length);
    }
    else{
        alert("Box empty");
    }



}
function guess(){



    if(document.getElementById('Guess1').value == Vocinput[GuessCount][1] ){
        $(".Check").text("Right!");
        GuessCount++
        $("#NextWordBtn").prop("disabled",false)
        $("#checkwordbtn").prop("disabled",true)
    }
    else{
        $(".Check").text("Wrong!");

    }

}
function addword(){
    if($(".Check").text == ""){
        alert("Box empty");
    }
    document.getElementById('Word1').value = Vocinput[GuessCount][0];
    console.log( document.getElementById('Word1').value)
    console.log( Vocinput[GuessCount][0])
    $("#NextWordBtn").prop("disabled",true)
    $(".Check").text("");
    $("#Guess1").val('');
    $("#checkwordbtn").prop("disabled",false)

}
