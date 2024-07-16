const passwordBox = document.getElementById("password");
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "*/-#$*&%!(){}[]<>?=+~@";

const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword(){
    let password = "";

    while (length > password.length)
    {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}






