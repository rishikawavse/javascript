const accountId=34562
let accountEmail="rishika19@mail.com"
// prefer not to use var
// because of issue in block scope and functional scope
 var accountPassword="9103" 
accountCity="Gwalior"
let  accountState;

// accountId=2345 // not allowed 
console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity ,accountState])