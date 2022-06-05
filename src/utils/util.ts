export const isFunction = val => typeof val === 'function';

export const isArray = Array.isArray;
export const isString = val => typeof val === 'string';
export const isSymbol = val => typeof val === 'symbol';
export const isObject = val => val !== null && typeof val === 'object';
// const onRE = /^on[^a-z]/;
// const isOn = key => onRE.test(key);

// const cacheStringFunction = fn => {
//   const cache = Object.create(null);
//   return str => {
//     const hit = cache[str];
//     return hit || (cache[str] = fn(str));
//   };
// };
// const camelizeRE = /-(\w)/g;
// const camelize = cacheStringFunction(str => {
//   return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
// });

// const hyphenateRE = /\B([A-Z])/g;
// const hyphenate = cacheStringFunction(str => {
//   return str.replace(hyphenateRE, '-$1').toLowerCase();
// });

// const capitalize = cacheStringFunction(str => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// });

// const hasOwnProperty = Object.prototype.hasOwnProperty;
// const hasOwn = (val, key) => hasOwnProperty.call(val, key);

// // change from vue sourcecode
// function resolvePropValue (options, props, key, value) {
//   const opt = options[key];
//   if (opt != null) {
//     const hasDefault = hasOwn(opt, 'default');
//     // default values
//     if (hasDefault && value === undefined) {
//       const defaultValue = opt.default;
//       value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
//     }
//     // boolean casting
//     if (opt[0 /* shouldCast */]) {
//       if (!hasOwn(props, key) && !hasDefault) {
//         value = false;
//       } else if (opt[1 /* shouldCastTrue */] && (value === '' || value === hyphenate(key))) {
//         value = true;
//       }
//     }
//   }
//   return value;
// }

// export function getDataAndAriaProps (props) {
//   return Object.keys(props).reduce((memo, key) => {
//     if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
//       memo[key] = props[key];
//     }
//     return memo;
//   }, {});
// }

export const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
};

export const ensureArray = (arr: any): any[] => {
  if (!arr && arr !== 0) return []
  return Array.isArray(arr) ? arr : [arr]
}


// export { isOn, cacheStringFunction, camelize, hyphenate, capitalize };
