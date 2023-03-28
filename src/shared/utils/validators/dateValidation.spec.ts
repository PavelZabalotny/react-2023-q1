import { dateValidation } from "@/shared/utils/validators/dateValidation";

describe("date validation", () => {
  test("date validation to be truthy", () => {
    const date = new Date();
    const isValid = dateValidation(date.toDateString());
    expect(isValid).toBeTruthy();
  });
  test("date validation to be falsy", () => {
    const date = new Date("12151646");
    const isValid = dateValidation(date.toDateString());
    expect(isValid).toBeFalsy();
  });
});
