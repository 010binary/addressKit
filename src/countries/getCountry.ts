import * as fs from 'fs/promises';
import * as path from 'path';

// Interface for the country data structure
interface CountryData {
  [country: string]: [number, string, string];
}

// Function to fetch all country names
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

// Function to get data for a specific country
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