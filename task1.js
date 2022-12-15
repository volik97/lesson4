function getPasswordChecker(password){
    return (userPassword => password === userPassword);
}

const truePassword = getPasswordChecker('******');
console.log(truePassword('111111')) // false
console.log(truePassword('******')) // true