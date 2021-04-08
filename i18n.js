const path = require("path");
const NextI18Next = require("next-i18next").default;

//URL Path'te /tr , /en istiyorsak localeSubpaths'te belirtilmeli. şu an /tr , /en 404 veriyor.

module.exports = new NextI18Next({
  // localeSubpaths: {
  //   en: "en",
  //   tr: "tr"
  // },
  defaultLanguage: "tr",
  otherLanguages: ["en"],
  defaultNS: "common",
  localePath: path.resolve("public/static/locales"),
  serverLanguageDetection: true,
  browserLanguageDetection: true,
  nonExplicitSupportedLngs: true,


});
