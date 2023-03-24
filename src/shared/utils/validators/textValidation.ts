export function textValidation(value: string): boolean {
  const clearTitle = value.trim();
  return clearTitle.length > 0 && clearTitle[0] === clearTitle[0].toUpperCase();
}
