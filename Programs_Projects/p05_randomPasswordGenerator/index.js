// random Password Generator

function generatePassword(length, lowerCASE, upperCASE, numbers, symbols) {

    return 'helloWorld123!@#';
}

const passwordLength = 12;
const includeLowerCASE = true;
const includeUpperCASE = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                    includeLowerCASE, 
                                    includeUpperCASE, 
                                    includeNumbers, 
                                    includeSymbols);

console.log(`Generated Password: ${password}`);