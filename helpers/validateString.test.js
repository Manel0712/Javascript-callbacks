import validateString from "./validateString.js";
describe("Given add fucntion", () => {
  test("when it is invoked with undefined value", () => {
    // Arrange
    const value = undefined;

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });
  test("when it is invoked with number type value", () => {
    // Arrange
    const value = 4;

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });
  test("when it is invoked with array type value", () => {
    // Arrange
    const value = [8, 9, 10, 12];

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });
  test("when it is invoked with boolean type value", () => {
    // Arrange
    const value = false;

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });
  test("when it is invoked with object type value", () => {
    // Arrange
    const value = {
      name: "Manel",
      city: "Mataro",
    };

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });
  test("when it is invoked with empty string type value", () => {
    // Arrange
    const value = "     ";

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });
  test("when it is invoked with string type value", () => {
    // Arrange
    const value = "Hello, my name is Manel";

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(true);
  });
});
