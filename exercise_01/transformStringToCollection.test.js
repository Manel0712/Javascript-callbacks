import transformStringToArray from "./transformStringToCollection.js";
import validateString from "../helpers/validateString.js";

describe("Given function transformStringToArray", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockOnError = jest.fn().mockImplementation(() => []);
  const mockOnSuccess = jest
    .fn()
    .mockImplementation((value) => value.split(" "));
  describe("When the function is called with a value of type number", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = 8;

      // Act
      const result = transformStringToArray(value, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
    });
  });
  describe("When the function is called with a value of type array", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = [8, 9, 10, 11, 12, 13];

      // Act
      const result = transformStringToArray(value, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
    });
  });
  describe("When the function is called with a value of type boolean", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = true;

      // Act
      const result = transformStringToArray(value, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
    });
  });
  describe("When the function is called with an empty string value", () => {
    test("Then an empty array should be returned.", () => {
      // Arrange
      const value = "";

      // Act
      const result = transformStringToArray(value, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
    });
  });
  describe("When the function is called with a value of type string", () => {
    test("Then array should be returned.", () => {
      // Arrange
      const value = "Hello, my name is Manel";

      // Act
      const result = transformStringToArray(value, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toEqual(["Hello,", "my", "name", "is", "Manel"]);
      expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      expect(mockOnError).not.toHaveBeenCalled();
    });
  });
  describe("When the function is called with a value of type string", () => {
    test("Then a boolean should be returned.", () => {
      // Arrange
      const value = "Hello, my name is Manel";

      // Act
      const result = validateString(value);

      // Assert
      expect(result).toEqual(true);
    });
  });
});
