import { textValidation } from "@/shared/utils/validators/textValidation";

describe("text validation", () => {
  test("text validation to be truthy", () => {
    const isValid = textValidation("Hello World!");
    expect(isValid).toBeTruthy();
  });
  test("text validation to be falsy", () => {
    const isValid = textValidation("hello World!");
    expect(isValid).toBeFalsy();
  });
});
