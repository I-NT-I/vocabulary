
const  Vocinput = [];


var VocCounter
var Count = 0;
var GuessCount = 0


function addVoc(){
    
    // Vocinput[Count][0] = document.getElementById('InputVoc1').value ;
    Vocinput.push([document.getElementById('InputVoc1').value, document.getElementById('InputVoc2').value])
    // Vocinput[Count][1] = document.getElementById('InputVoc2').value ;

    if (Vocinput[Count][1] != "" && Vocinput[Count][0]) {
        console.log(Vocinput)
        Count++
        $("#Anzahl").text(Vocinput.length);
    }
    else{
        alert("Box empty");
    }



}
function guess(){

    // document.getElementById('Word1').value = Vocinput[CounterVoc][0];


    if(document.getElementById('Guess1').value == Vocinput[GuessCount][1] ){
        $(".Check").text("Right!");
        GuessCount++
        $("#NextWordBtn").prop("disabled",false)
        
    }
    else{
        $(".Check").text("Wrong!");

    }

    //document.getElementById('Guess1')
}
function addword(){
    
    document.getElementById('Word1').value = Vocinput[GuessCount][0];
    console.log( document.getElementById('Word1').value)
    console.log( Vocinput[GuessCount][0])
    $("#NextWordBtn").prop("disabled",true)

}
