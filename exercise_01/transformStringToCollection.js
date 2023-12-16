/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */
/**
 * If received value is not a string or it is an empty string, then call onError callback
   Otherwise, call onSuccess function
 * @param {any} value
 * @param {Function} onError
 * @param {Function} onSuccess
 * @returns array
 */

const transformStringToArray = function (value, onError, onSuccess) {
  if (typeof value === "string" && value !== "") {
    return onSuccess(value);
  }
  return onError();
};

export default transformStringToArray;
