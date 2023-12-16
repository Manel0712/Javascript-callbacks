import onSuccess from "./callbacks/onSuccess.js";
import onError from "./callbacks/onError.js";
import createUser from "./createUser.js";
import validateString from "../helpers/validateString.js";

describe("Given function createUser", () => {
   beforeEach(() => {
     jest.clearAllMocks();
   });

   const mockOnError = jest
     .fn()
     .mockImplementation(() => "Error: user not created");
   const mockOnSuccess = jest
     .fn()
     .mockImplementation(
       (email) => `User with email ${email} has been correctly created`
     );
  describe("When the function is called with an empty string value", () => {
    test("Then the text Error: user not created should be returned.", () => {
      // Arrange
      const email = "";

      // Act
      const result = createUser(email, mockOnError, mockOnSuccess);

      // Assert
      expect(result).toBe("Error: user not created");
      expect(mockOnError).toHaveBeenCalledTimes(1);
    });
  });
  describe("When the function is called with a value of type string", () => {
    const email = "maneldelahozrodriguez@gmail.com";
    test(
      "Then the text User with email " +
        email +
        " has been correctly created should be returned.",
      () => {
        // Arrange
        const email = "maneldelahozrodriguez@gmail.com";
        const spyOnMathRandom = jest.spyOn(Math, "random");
        spyOnMathRandom.mockReturnValueOnce(0.2456322);

        // Act
        const result = createUser(email, mockOnError, mockOnSuccess);

        // Assert
        expect(result).toBe("Error: user not created");
        expect(mockOnError).toHaveBeenCalledTimes(1);
      },
    );
    test(
      "Then the text User with email " +
        email +
        " has been correctly created should be returned.",
      () => {
        // Arrange
        const email = "maneldelahozrodriguez@gmail.com";
        const spyOnMathRandom = jest.spyOn(Math, "random");
        spyOnMathRandom.mockReturnValueOnce(0.5);

        // Act
        const result = createUser(email, mockOnError, mockOnSuccess);

        // Assert
        expect(result).toBe(
          `User with email ${email} has been correctly created`
        );
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      }
    );
    test(
      "Then the text User with email " +
        email +
        " has been correctly created should be returned.",
      () => {
        // Arrange
        const email = "maneldelahozrodriguez@gmail.com";
        const spyOnMathRandom = jest.spyOn(Math, "random");
        spyOnMathRandom.mockReturnValueOnce(0.9);

        // Act
        const result = createUser(email, mockOnError, mockOnSuccess);

        // Assert
        expect(result).toBe(
          `User with email ${email} has been correctly created`
        );
        expect(mockOnError).not.toHaveBeenCalled();
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      }
    );
  });
  describe("When the function is called with a value of type string", () => {
    test("Then a boolean should be returned.", () => {
      // Arrange
      const value = "maneldelahozrodriguez@gmail.com";

      // Act
      const result = validateString(value);

      // Assert
      expect(result).toBe(true);
    });
  });
});
