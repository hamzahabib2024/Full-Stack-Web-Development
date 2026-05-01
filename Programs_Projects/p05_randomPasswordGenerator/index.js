// random Password Generator

function generatePassword() {

    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = ''; // Clear previous error messages

    const passwordLength = document.getElementById('length').value || 12; // Default length is 12
    const includeLowerCASE = document.getElementById('includeLowercase').checked;
    const includeUpperCASE = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';


    let allowedChars = '';
    let password = '';

    allowedChars += includeLowerCASE ? lowercaseChars : '';
    allowedChars += includeUpperCASE ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (passwordLength<=0) {
        errorMessageElement.textContent = 'Password length must be greater than 0.';
        return '';
    }
    if (allowedChars.length === 0) {
        errorMessageElement.textContent = 'At least one character type must be selected.';
        return '';
    }
    for (let i = 0; i< passwordLength; i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById('passwordDisplay').textContent = password;

}