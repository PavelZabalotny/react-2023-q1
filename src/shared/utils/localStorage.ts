import { LOCALHOST_INPUT_KEY } from "@/shared/constants";

export function getInputFromLocalStorage(): string {
  return localStorage.getItem(LOCALHOST_INPUT_KEY) ?? "";
}

export function saveInputToLocalStorage(value: string): void {
  localStorage.setItem(LOCALHOST_INPUT_KEY, value);
}
