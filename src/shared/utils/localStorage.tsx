import { LOCALHOST_INPUT_VALUE } from "../constants";

export function getInputFromLocalStorage(): string {
  return window.localStorage.getItem(LOCALHOST_INPUT_VALUE) ?? "";
}

export function setInputToLocalStorage(value: string): void {
  window.localStorage.setItem(LOCALHOST_INPUT_VALUE, value);
}
