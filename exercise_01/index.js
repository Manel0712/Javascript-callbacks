import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToArray from "./transformStringToCollection.js";

//test with value as number and log result

const result = transformStringToArray(8, onError, onSuccess);
console.log(result);

//test with value as array and log result

const result2 = transformStringToArray([8, 9, 10, 11], onError, onSuccess);
console.log(result2);

//test with value as boolean and log result

const result3 = transformStringToArray(true, onError, onSuccess);
console.log(result3);

//test with value as empty string and log result

const result4 = transformStringToArray("", onError, onSuccess);
console.log(result4);

//test with value as string and log result

const result5 = transformStringToArray("Hello, my name is Manel", onError, onSuccess);
console.log(result5);