import { LOCALHOST_INPUT_KEY } from "@/shared/constants";

export function getInputFromLocalStorage(key: string): string {
  return localStorage.getItem(key) ?? "";
}

export function saveInputToLocalStorage(value: string): void {
  localStorage.setItem(LOCALHOST_INPUT_KEY, value);
}
