const { fetchCountryNames, getCountryData } = require("./Country");
const {
  getAdministrativeDivisions,
  getMajorLanguage,
  getCapital,
  getCountryCode,
} = require("./State");

module.exports = {
  fetchCountryNames,
  getCountryData,
  getAdministrativeDivisions,
  getMajorLanguage,
  getCapital,
  getCountryCode,
};
