export let lang = window.sessionStorage.getItem('lang')

export const langTransformMap = {
  zh: 'zh-CN',
  en: 'en-US'
}

export function transformLang (originalLang) {
  let langTransform = langTransformMap[originalLang]
  if (langTransform === void 0) langTransform = originalLang
  lang = langTransform
  return langTransform
}

export function getLang (refresh) {
  // 由于window.sessionStorage.setItem的特殊性，很短时间内的getItem将无法获取到更新后的值，所以用一个内存中的变量实时更新
  if (lang == null || lang === '') {
    // 第一次获取
    const langTransform = transformLang(
      window.sessionStorage.getItem('lang') ||
        navigator.language ||
        navigator.userLanguage
    )
    setLang(langTransform)
    return langTransform
  } else {
    // 非第一次获取则根据refresh参数进行选择性获取
    return refresh
      ? window.sessionStorage.getItem('lang') ||
          navigator.language ||
          navigator.userLanguage
      : lang
  }
}

export function setLang (langType) {
  window.sessionStorage.setItem('lang', langType)
}
