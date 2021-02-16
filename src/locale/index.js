import enLang from './lang/en-US';
import zhLang from './lang/zh-CN';
import deepmerge from 'deepmerge';
import { createApp } from 'vue';
const app = createApp();

const navigatorLanguage = navigator.language || navigator.userLanguage;

let lang = navigatorLanguage === 'en-US' ? enLang : zhLang;

let merged = false;
let i18nHandler = function () {
  const vuei18n = Object.getPrototypeOf(app.config.globalProperties).$t;
  if (typeof vuei18n === 'function' && app.config.globalProperties.locale) {
    if (!merged) {
      merged = true;
      app.config.globalProperties.locale(
        app.config.lang,
        deepmerge(lang, app.locale(app.config.lang) || {}, { clone: true })
      );
    }
    return vuei18n.apply(this, arguments);
  }
};

export const t = function (path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) {
    return value;
  }
  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) {
      return value;
    }
    if (!value) {
      return '';
    }
    current = value;
  }
  return '';
};

const use = function (l) {
  lang = l || lang;
};

const i18n = function (fn) {
  i18nHandler = fn || i18nHandler;
};

export default {
  use,
  i18n,
  t
};
