// NB: updatae crowdin.config when adding locales

const defaultLocale = "en";

const locales = {
  en: {
    name: "English",
    enabled: true,
    dayJsImport: "en",
  },
  zh: {
    name: "中文",
    enabled: true,
    dayJsImport: "zh",
  },
  de: {
    name: "Deutsch",
    enabled: false,
    dayJsImport: "de",
  },
  es: {
    name: "Español",
    enabled: true,
    dayJsImport: "es",
  },
  fr: {
    name: "Français",
  },
  hr: {
    name: "Hrvatski",
  },
  in: {
    name: "हिन्दी",
  },
  ja: {
    name: "日本語",
    enabled: true,
    dayJsImport: "ja",
  },
  ko: {
    name: "한국어",
    enabled: true,
  },
  nl: {
    name: "Nederlands",
  },
  ru: {
    name: "русский",
  },
  sa: {
    name: "اَلْعَرَبِيَّةُ",
  },
  th: {
    name: "ภาษาไทย",
  },
  tr: {
    name: "Türk",
  },
  vi: {
    name: "Tiếng Việt",
  },
};

module.exports = { locales, defaultLocale };
