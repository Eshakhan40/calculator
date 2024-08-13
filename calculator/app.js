
//     var display=document.getElementById('display')
//     function appendDisplay(input) {
//         display.input += input
//     }
//     function clearDisplay() {
//         display.value = ""
//     }
    
//     function calculate() {
//        try{
//         display.value = eval(display.value);
//        }
//        catch(error){
//         display.value = "Error"
//        }
       
//     }
//     function deleteDisplay(){
//          display.value = ""
// }
function clearDisplay(){
    document.getElementById("display") . value=""
}
function appendDisplay(){
    document.getElementById("display") .value =+ value;

}
function deleteDisplay(){
    document.getElementById("display") .value=display.value.slice(0,-1)
}
function calculate(){
    document.getElementById("display") .value=eval(display.value)
} 