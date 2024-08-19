// Usage: node test.js
const fetchCountryNames = require("../dist/lib/es5/index.js").fetchCountryNames;
const getCountryData = require("../dist/lib/es5/index.js").getCountryData;

async function main() {
  const countries = await fetchCountryNames();
  console.log("All country names:", countries);

  const nigeriaData = await getCountryData("Nigeria");
  if (nigeriaData) {
    const [dialCode, currency, languages] = nigeriaData;
    console.log(
      `Nigeria data: Dial Code: ${dialCode}, Currency: ${currency}, Languages: ${languages}`
    );
  }
}

main().catch(console.error);
