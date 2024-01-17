/**
 * Calculates the difference in years between a given date and the current date.
 * @param dateString - The date string to calculate the difference from.
 * @returns The difference in years as a string with one decimal place.
 */
export function getYearsDifference(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const differenceInMilliseconds = Math.abs(now.getTime() - date.getTime());
  const differenceInYears =
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  return differenceInYears.toFixed(1);
}

/**
 * Calculates the date before a specified number of years.
 * @param years - The number of years to subtract from the current date.
 * @returns The date before the specified number of years in the format "YYYY-MM-DD".
 */
export function getDateBeforeYears(years: string) {
  const now = new Date();
  const pastTime =
    now.getTime() - parseFloat(years) * 365.25 * 24 * 60 * 60 * 1000;
  const pastDate = new Date(pastTime);

  const day = String(pastDate.getDate()).padStart(2, "0");
  const month = String(pastDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript
  const year = pastDate.getFullYear();

  return `${year}-${month}-${day}`;
}
