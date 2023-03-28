import { checkboxValidation } from "@/shared/utils/validators/checkboxValidation";

test("checkbox validation", () => {
  const isValid = checkboxValidation("false");
  expect(isValid).toBeFalsy();
});
