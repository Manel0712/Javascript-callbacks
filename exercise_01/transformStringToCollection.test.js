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
  describe("When the function is called with a value of type array", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = [8, 9, 10, 11, 12, 13];

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result).toEqual([]);
    });
  });
  describe("When the function is called with a value of type boolean", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = true;

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result).toEqual([]);
    });
  });
  describe("When the function is called with an empty string value", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = "";

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result).toEqual([]);
    });
  });
  describe("When the function is called with a value of type string", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = "Hello, my name is Manel";

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result).toEqual(["Hello,", "my", "name", "is", "Manel"]);
    });
  });
});
