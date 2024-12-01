// Description: This file contains utility functions that are used throughout the application.

/*
  Function to validate a string value
  The function takes two arguments:
  @param - value: the value to validate
  @param - maxLength: the maximum length of the string value
*/
export function validateString(value: unknown, maxLength: number): boolean {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
}

/*
  Function to get an error message from an error object
  The function takes one argument:
  @param - error: the error object
  returns - the error message as a string
*/
export function getErrorMessage(error: unknown): string {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An unknown error occurred";
  }

  return message;
}
