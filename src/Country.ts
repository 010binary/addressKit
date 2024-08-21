import fs from "fs/promises";
import path from "path";

interface Country {
  name: string;
  administrative_divisions?: string[];
  major_language?: string;
  capital?: string;
  country_code?: string;
}

interface CountriesData {
  countries: Country[];
}

/**
 * Fetches the country names.
 *
 * @returns {Promise<string[]>} A promise that resolves to an array of country names.
 *          If the file is not found or there is an error parsing the data, an empty array is returned.
 */
export async function fetchCountryNames(): Promise<string[]> {
  try {
    const filePath = path.join(__dirname, "./countries.min.json");
    console.log(filePath);
    const data = await fs.readFile(filePath, "utf8");
    const countriesData: CountriesData = JSON.parse(data);

    // Extract country names
    return countriesData.countries.map((country) => country.name);
  } catch (error) {
    console.error("Error fetching country names:", error);
    return [];
  }
}

/**
 * Retrieves country data based on the provided country name.
 * @param {string} countryName - The name of the country to retrieve data for.
 * @returns {Promise<Country | null>} - A promise that resolves to an object containing the country data, or null if the country is not found.
 */
export async function getCountryData(
  countryName: string
): Promise<Country | null> {
  try {
    const filePath = path.join(__dirname, "./countries.min.json");
    const data = await fs.readFile(filePath, "utf8");
    const countriesData: CountriesData = JSON.parse(data);

    // Find the country by name
    const country = countriesData.countries.find(
      (country) => country.name.toLowerCase() === countryName.toLowerCase()
    );

    if (country) {
      return country;
    } else {
      console.log(`Country "${countryName}" not found.`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
}
