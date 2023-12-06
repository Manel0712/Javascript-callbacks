import onSuccess from "./callbacks/onSuccess.js";
import onError from "./callbacks/onError.js";
import createUser from "./createUser.js";
describe("Given function createUser", () => {
  describe("When the function is called with an empty string value", () => {
    test("Then the text Error: user not created should be returned.", () => {
      // Arrange
      const email = "";

      // Act
      const result = createUser(email, onError, onSuccess);

      // Assert
      expect(result).toEqual("Error: user not created");
    });
  });
  describe("When the function is called with a value of type string", () => {
    const email = "maneldelahozrodriguez@gmail.com";
    test("Then the text User with email " + email + " has been correctly created should be returned.", () => {
      // Arrange
      const email = "maneldelahozrodriguez@gmail.com";

      // Act
      const result = createUser(email, onError, onSuccess);

      // Assert
      expect(result).toEqual(
        "User with email " + email + " has been correctly created");
    });
  });
});
