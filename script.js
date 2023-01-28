let clickHere = document.getElementById("click-here")
let windowDirect=()=>{
    window.open("https://www.google.com")
}
let string = "abcdefghijklmnopqrstuvwxyz"
console.log(string)

let capitalizeEvens = (string) =>{
    let newString = ""
  for (let z =0; z <string.length; z++){
    if(z%2 ===0){

    newString += string[z].toUpperCase();
      
    }
    else newString += string[z].toLowerCase();
}
console.log(newString)
}
capitalizeEvens(string)
clickHere.addEventListener("click", windowDirect)
