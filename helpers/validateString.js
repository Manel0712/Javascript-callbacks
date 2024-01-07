/**
 * @param {any} value
 * @returns boolean
 */
const validateString = function (value) {
  if (typeof value === "string" && value.trim().length > 0) {
    return true;
  }
  return false;
};

export default validateString;
