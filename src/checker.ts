function isPalindrome(text:string):boolean{
    console.log('isPalindrome/start');
    console.log(text);
    let bPalindrome: boolean = true;
    for(let i = 0; i < text.length; i++){
        console.log(text.charAt(i).toLowerCase(), '\t', text.charAt(text.length - i - 1).toLowerCase());
        bPalindrome = bPalindrome && text.charAt(i).toLowerCase() == text.charAt(text.length - i - 1)
    }

    return bPalindrome;
}
export default isPalindrome;