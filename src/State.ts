import fs from "fs/promises";
import path from "path";

interface Country {
  name: string;
  administrative_divisions: string[];
  major_language: string;
  capital: string;
  country_code: string;
}

interface CountriesData {
  countries: Country[];
}

async function fetchCountryData(countryName: string): Promise<Country | null> {
  try {
    const filePath = path.join(__dirname, "./countries.min.json");
    console.log(filePath);
    const data = await fs.readFile(filePath, "utf8");
    const countriesData: CountriesData = JSON.parse(data);

    // Find the country by name
    return (
      countriesData.countries.find(
        (country) => country.name.toLowerCase() === countryName.toLowerCase()
      ) || null
    );
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
}

/**
 * Retrieves the administrative divisions of a country based on the provided country name.
 * @param {string} countryName - The name of the country.
 * @returns {Promise<string[] | null>} - A promise that resolves to an array of administrative divisions or null if the country is not found.
 */
export async function getAdministrativeDivisions(
  countryName: string
): Promise<string[] | null> {
  const country = await fetchCountryData(countryName);
  return country ? country.administrative_divisions : null;
}

/**
 * Retrieves the major language(s) of a country based on the provided country name.
 * @param {string} countryName - The name of the country.
 * @returns {Promise<string | null>} - A promise that resolves to the major language(s) or null if the country is not found.
 */
export async function getMajorLanguage(
  countryName: string
): Promise<string | null> {
  const country = await fetchCountryData(countryName);
  return country ? country.major_language : null;
}

/**
 * Retrieves the capital of a country based on the provided country name.
 * @param {string} countryName - The name of the country.
 * @returns {Promise<string | null>} - A promise that resolves to the capital or null if the country is not found.
 */
export async function getCapital(countryName: string): Promise<string | null> {
  const country = await fetchCountryData(countryName);
  return country ? country.capital : null;
}

/**
 * Retrieves the country code of a country based on the provided country name.
 * @param {string} countryName - The name of the country.
 * @returns {Promise<string | null>} - A promise that resolves to the country code or null if the country is not found.
 */
export async function getCountryCode(
  countryName: string
): Promise<string | null> {
  const country = await fetchCountryData(countryName);
  return country ? country.country_code : null;
}
