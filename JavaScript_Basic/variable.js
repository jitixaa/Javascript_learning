const accountId = 4040
let account_email = "testJ@gmail.com"
var accountPassword = "1234"
/*
        Prefer not to use var
        because of issue in block scope and functional scope
*/
accountCity = "A'bad"
let accountState;

//accountId = 2 // not allowed
account_email="test@gmail.com"
accountPassword="3636"
accountCity="Surat"

console.log(accountId);


console.table([accountId,account_email,accountPassword,accountCity,accountState])

