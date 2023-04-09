import { describe, expect, test } from "vitest";
import { getInputFromLocalStorage, saveInputToLocalStorage } from "./localStorage";

const mockValue = "some_value";

describe("local storage", () => {
  test(`get empty value`, () => {
    const value = getInputFromLocalStorage();
    expect(value).toEqual("");
  });
  test(`get mock value`, () => {
    saveInputToLocalStorage(mockValue);
    const value = getInputFromLocalStorage();
    expect(value).toEqual(mockValue);
  });
});
