/**
 * Converts the first letter of each word in a string to uppercase.
 * @param str - The input string.
 * @returns The string with each word's first letter capitalized.
 */
export function firstLetterUppercase(str: string): string {
  // Convert the entire string to lowercase to standardize capitalization
  const valueString = str.toLowerCase();

  return valueString
    .split(' ') // Split the string into an array of words
    .map(
      (value: string) =>
        `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}` // Capitalize the first letter and keep the rest lowercase
    )
    .join(' '); // Join the words back into a single string
}

/**
 * Converts a given string to lowercase.
 * @param str - The input string.
 * @returns The lowercase version of the string.
 */
export function lowerCase(str: string): string {
  return str.toLowerCase();
}

/**
 * Converts a given string to uppercase.
 * @param str - The input string.
 * @returns The uppercase version of the string or an empty string if input is falsy.
 */
export const toUpperCase = (str: string): string => {
  return str ? str.toUpperCase() : str;
};

/**
 * Validates whether a given string is a properly formatted email address.
 * @param email - The email string to validate.
 * @returns True if the string is a valid email format, otherwise false.
 */
export function isEmail(email: string): boolean {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  return regexExp.test(email); // Test the email string against the regex pattern
}

/**
 * Validates whether a given string is a valid Data URL.
 * A Data URL contains inline data encoded in Base64 or text format.
 * @param value - The string to validate.
 * @returns True if the string is a valid Data URL, otherwise false.
 */
export function isDataURL(value: string): boolean {
  const dataUrlRegex =
    /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;

  return dataUrlRegex.test(value); // Test the string against the Data URL regex pattern
}
