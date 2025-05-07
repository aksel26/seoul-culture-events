import { FetchForm } from "@/lib/types";

/**
 * Extracts values from a JSON object, joins them with '/' separator,
 * and replaces empty strings with '%20'
 *
 * @param {Object} jsonObject - The JSON object to extract values from
 * @returns {string} - The joined values
 */
export const extractAndJoinValues = (jsonObject: FetchForm) => {
  // Get all values from the JSON object
  const values = Object.values(jsonObject);

  // Replace empty strings with '%20'
  const processedValues = values.map((value) => {
    // Check if the value is an empty string
    if (value === "") {
      return "%20";
    }
    return value;
  });

  // Join the values with '/' separator
  return processedValues.join("/");
};
