export let lang = window.sessionStorage.getItem('lang');

export const langTransformMap = {
  zh: 'zh-CN',
  en: 'en-US'
};

export function transformLang (originalLang) {
  let langTransform = langTransformMap[originalLang];
  if (langTransform === undefined) langTransform = originalLang;
  lang = langTransform;
  return langTransform;
}

export function getLang (refresh?) {
  // Because window.sessionStorage.setItem is special，can't get value in a short time use getItem,so use a temp variable
  if (lang == null || lang === '') {
    // first time get
    const langTransform = transformLang(
      window.sessionStorage.getItem('lang') ||
        navigator.language
    );
    setLang(langTransform);
    return langTransform;
  } else {
    // isn't first time get ,use refresh choose get value
    return refresh
      ? window.sessionStorage.getItem('lang') ||
          navigator.language
      : lang;
  }
}

export function setLang (langType:string) {
  window.sessionStorage.setItem('lang', langType);
}
