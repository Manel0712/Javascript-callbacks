import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToArray from "./transformStringToCollection.js";

describe("Given function transformStringToArray", () => {
  describe("When the function is called with a value of type number", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = 8;

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result).toEqual([]);
    });
  });
});
