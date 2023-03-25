import { radioValidation } from "@/shared/utils/validators/radioValidation";

test("radio validation", () => {
  const isValid = radioValidation("1");
  expect(isValid).toBeTruthy();
});
