import { imageValidation } from "@/shared/utils/validators/imageValidation";

describe("image validation", () => {
  test("image validation to be falsy", () => {
    const isValid = imageValidation("0");
    expect(isValid).toBeFalsy();
  });
  test("image validation to be truthy", () => {
    const isValid = imageValidation("10");
    expect(isValid).toBeTruthy();
  });
});
