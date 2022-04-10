const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
import { Plugin } from 'vite'

const md = new MarkdownIt();
export const transformMarkdown = (mdText: string): string => {
  return `
    <template class='article-content'>
      ${md.render(mdText)}
    </template>
  `;
}

export default function markdownPlugin(): Plugin {
  const markdownRE =/\.(md)$/
  
  return {
    name: 'vite:markdown',
    transform(code, id:string, opt) {
      if (!id.endsWith('.md')) return code;
      return {
        code: transformMarkdown(code),
        map:null
      }
    }
  }
}

markdownPlugin['default'] = markdownPlugin