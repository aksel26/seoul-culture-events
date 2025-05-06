import { MonthOption } from "@/lib/types";
import dayjs from "dayjs";

/**
 * Creates an array of month objects for the specified year
 * @param {number} year - The year to create months for (default: current year)
 * @returns Array of objects with label (1-12) and value in YYYY/MM format
 */
export const createMonthArray = (
  year: number = dayjs().year()
): MonthOption[] => {
  return Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;

    return {
      label: month.toString() + "월", // "1", "2", "3", ..., "12"
      value: `${year}/${formattedMonth}`, // "YYYY/MM" format
    };
  });
};
