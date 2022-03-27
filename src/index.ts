import './style.css';
import isPalindrome from './checker';

console.log("index.ts/start");

function buttonSubmitClick(){
    const inputText = <HTMLInputElement>document.getElementById('inputText');
    let bPalindrome = null;
    if (inputText){
        const bPalindrome = isPalindrome(inputText.value);
        console.log(bPalindrome);
    }

    const divResult = <HTMLDivElement>document.getElementById('divResult');
    if(divResult){
        if(bPalindrome){
            divResult.innerText = 'The word is palindrome!';
            divResult.className = "palindrome";
        }else{
            divResult.innerText = 'The word is not palindrome, sorry!';
            divResult.className = 'notPalindrome';
        }
    }
}

const btn = document.querySelector('button');
if (btn){
    console.log('attaching listener');
    btn.addEventListener('click', buttonSubmitClick);
}