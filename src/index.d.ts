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
