export function dateValidation(value: string): boolean {
  return !isNaN(new Date(value).getTime());
}
