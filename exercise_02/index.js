import onSuccess from "./callbacks/onSuccess.js";
import onError from "./callbacks/onError.js";
import createUser from "./createUser.js";

//test with email as empty string and log result

const result = createUser("", onError, onSuccess);
console.log(result);

//test with email as string and log result

const result1 = createUser(
  "maneldelahozrodriguez@gmail.com",
  onError,
  onSuccess,
);
console.log(result1);
