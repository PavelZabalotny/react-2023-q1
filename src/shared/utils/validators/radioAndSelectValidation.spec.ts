import { radioAndSelectValidation } from "@/shared/utils/validators/radioAndSelectValidation";

test("radio validation", () => {
  const isValid = radioAndSelectValidation("1");
  expect(isValid).toBeTruthy();
});
