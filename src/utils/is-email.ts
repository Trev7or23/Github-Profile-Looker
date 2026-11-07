const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isEmail(value: string) {
  return EMAIL_REGEX.test(value.trim())
}
