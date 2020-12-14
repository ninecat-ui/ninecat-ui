const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
};
export function getPropsData (ele) {
  let componentOptions = ele.componentOptions;
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions;
  }
  return componentOptions ? componentOptions.propsData || {} : {};
};

export function isEmptyElement (c) {
  return !(c.tag || (c.text && c.text.trim() !== ''));
}

export function isStringElement (c) {
  return !c.tag;
}

export function filterEmpty (children = []) {
  return children.filter(c => !isEmptyElement(c));
}

export function parseStyleText (cssText = '', camel) {
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};
