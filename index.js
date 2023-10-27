let passwordLength = document.getElementById('passwordLength')
let passwordEl = document.getElementById('password-el')
let clippBoardBtn = document.getElementById('clippboard-btn')

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = []
let convertedPassword =''
 const renderPassword =()=>{    
passwordEl.textContent = `your password is: ${convertedPassword}`
 }


passwordLength.addEventListener('click', ()=>{
    for(let i =0; i<12; i++){
        password.push(characters[Math.floor(Math.random()*characters.length)])
        convertedPassword = password.join('').toString()
        renderPassword()
    }
})


clippBoardBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(convertedPassword);
    console.log(convertedPassword)
    //alert('your password is saved to your clipboard' + convertedPassword)
})