import { TArrayOfCallbacks } from "@/interfaces/arrayOfCallbacks.type";

export function validateAllFields(arrayOfValidateFn: TArrayOfCallbacks): boolean {
  let isAllValid = true;
  arrayOfValidateFn.forEach((fn) => {
    const isValid = fn();
    if (!isValid) {
      isAllValid = isValid;
    }
  });

  return isAllValid;
}
