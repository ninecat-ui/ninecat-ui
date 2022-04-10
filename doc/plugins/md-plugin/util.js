const { compileTemplate } = require('@vue/compiler-sfc');
const { compile } =  require('@vue/compiler-dom')

const compiler = { compile }

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  // return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
  const templateEndIndex = content.indexOf('</template>')
  const html = content.slice(10,templateEndIndex)
  return html
}

function pad(source) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n');
}

function genInlineComponentText(template, script) {
  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  const finalOptions = {
    source: `<div>${template}</div>`,
    filename: 'inline-component',
    compiler
  };
  const compiled = compileTemplate(finalOptions);
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(tip => {
      console.warn(tip);
    });
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n'
    );
  }
  let demoComponentContent = `
    ${compiled.code}
  `;
  const vueIndex = demoComponentContent.indexOf('vue')
  demoComponentContent = demoComponentContent.slice(vueIndex + 4);
  demoComponentContent = demoComponentContent.replace(/export/, '');
  script = script.trim();
  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =');
  } else {
    script = 'const democomponentExport = {}';
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      ...democomponentExport,
    }
  })()`;


  return demoComponentContent;
}

module.exports = {
  stripScript,
  stripStyle,
  stripTemplate,
  genInlineComponentText
};