import { createI18n } from 'vue-i18n'

const locales = import.meta.glob("./locales/**/**/*.json",{eager:true})

const messages: Record< string, any>={}

for (const path in locales) {
  // path ví dụ: ./locales/en/user.json
  const matched = path.match(/\.\/locales\/([a-zA-Z-]+)\/(.+)\.json$/)
  if (matched) {
    const [, locale, file] = matched
    if (!messages[locale]) {
      messages[locale] = {}
    }
    // Gán nội dung file JSON vào key theo tên file
    messages[locale][file] = (locales[path] as any).default
  }
}

const i18n = createI18n ({
    legacy: false,
    locale: "vi",
    fallbackLocale: "en",
    messages
});

export default i18n