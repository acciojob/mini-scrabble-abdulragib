//your code here
let displayText=document.getElementById('evaluatedText')
let displayCount=document.getElementById('letterCount')

displayText.onkeyup= () =>{
    displayCount.innerText = displayText.value.length
}
  
