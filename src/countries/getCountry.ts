import * as fs from 'fs/promises';
import * as path from 'path';

// Interface for the country data structure
interface CountryData {
  [country: string]: [number, string, string];
}


/**
 * Fetches the country names
 * 
 * @returns A promise that resolves to an array of country names.
 *          If the file is not found or there is an error parsing the data, an empty array is returned.
 */
async function fetchCountryNames(): Promise<string[]> {
  try {
    const filePath = path.join(__dirname, 'countries.json');
    const data = await fs.readFile(filePath, 'utf8');
    const countriesData: CountryData = JSON.parse(data);
    return Object.keys(countriesData);
  } catch (error) {
    console.error('Error fetching country names:', error);
    return [];
  }
}

/**
 * Retrieves country data based on the provided country name.
 * @param {string} countryName - The name of the country to retrieve data for.
 * @returns {Promise<[number, string, string] | null>} - A promise that resolves to an array containing the country data, or null if the country is not found.
 */
async function getCountryData(countryName: string): Promise<[number, string, string] | null> {
  try {
    const filePath = path.join(__dirname, 'countries.json');
    const data = await fs.readFile(filePath, 'utf8');
    const countriesData: CountryData = JSON.parse(data);
    
    if (countryName in countriesData) {
      return countriesData[countryName];
    } else {
      console.log(`Country "${countryName}" not found.`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
    return null;
  }
}

export { fetchCountryNames, getCountryData };