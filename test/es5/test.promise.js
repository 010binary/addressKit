const {
  fetchCountryNames,
  getCountryData,
  getAdministrativeDivisions,
  getMajorLanguage,
  getCapital,
  getCountryCode,
} = require("../../dist/lib/es5/index.js");

function testCountryData() {
  fetchCountryNames()
    .then((countryNames) => {
      console.log("Country names:", countryNames);
      return getCountryData("Latvia");
    })
    .then((countryData) => {
      console.log("Country data:", countryData);
      return getAdministrativeDivisions("Latvia");
    })
    .then((administrativeDivisions) => {
      console.log("Administrative divisions:", administrativeDivisions);
      return getMajorLanguage("Latvia");
    })
    .then((majorLanguage) => {
      console.log("Major language:", majorLanguage);
      return getCapital("Latvia");
    })
    .then((capital) => {
      console.log("Capital:", capital);
      return getCountryCode("Latvia");
    })
    .then((countryCode) => {
      console.log("Country code:", countryCode);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

testCountryData();
