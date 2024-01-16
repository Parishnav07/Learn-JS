const accountId = 60405750
let accountEmail = "paris@gmail.com"
var accountPassword = "123456"
accountCity = "Yavatmal"
let accountState;


// accountId = 40609050 not allowed
accountEmail = "pdt@pdt.com"
accountPassword = "678910"
accountCity = "Nagpur"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



