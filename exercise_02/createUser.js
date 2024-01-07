/**
 * Define 'createUser' function and signature (JSDocs)
 *
 * input:
 *  - email: string
 *  - onError: function
 *  - onSuccess: function
 *
 * It will generate a random number in between 0 and 1
 * If random number is less than 0.5 or email is empty, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - string
 */
/**
 * It will generate a random number in between 0 and 1
   If random number is less than 0.5 or email is empty, then call onError callback
   Otherwise, call onSuccess function
 * @param {string} email
 * @param {Function} onError
 * @param {Function} onSuccess
 * @returns string
 */

const createUser = function (email, onError, onSuccess) {
  let value = Math.random();
  if (value >= 0.5 && email != "") {
    return onSuccess(email);
  }
  return onError();
};

export default createUser;
