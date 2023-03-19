export function getInputFromLocalStorage(key: string): string | null {
  return localStorage.getItem(key);
}

export function setInputToLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}
