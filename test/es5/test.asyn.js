const {
  fetchCountryNames,
  getCountryData,
  getAdministrativeDivisions,
  getMajorLanguage,
  getCapital,
  getCountryCode,
} = require("../../dist/lib/es5/index.js");

async function testCountryData() {
  try {
    const countryNames = await fetchCountryNames();
    console.log("Country names:", countryNames);

    const countryData = await getCountryData("Latvia");
    console.log("Country data:", countryData);

    const administrativeDivisions = await getAdministrativeDivisions("Latvia");
    console.log("Administrative divisions:", administrativeDivisions);

    const majorLanguage = await getMajorLanguage("Latvia");
    console.log("Major language:", majorLanguage);

    const capital = await getCapital("Latvia");
    console.log("Capital:", capital);

    const countryCode = await getCountryCode("Latvia");
    console.log("Country code:", countryCode);
  } catch (error) {
    console.error("Error:", error);
  }
}

testCountryData();
