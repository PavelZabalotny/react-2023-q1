import { describe, expect, test } from "vitest";
import { getInputFromLocalStorage, saveInputToLocalStorage } from "./localStorage";

const mockKey = "some_key";
const mockValue = "some_value";

describe("local storage", () => {
  test(`get value by invalid ${mockKey}`, () => {
    const value = getInputFromLocalStorage(mockKey);
    expect(value).toBeNull();
  });
  test(`get value by existing ${mockKey}`, () => {
    saveInputToLocalStorage(mockValue);
    const value = getInputFromLocalStorage(mockKey);
    expect(value).toEqual(value);
  });
});
