const Config = require('markdown-it-chain');
const anchorPlugin = require('markdown-it-anchor');
const slugify = require('transliteration').slugify;
const containers = require('./containers');
const overWriteFenceRule = require('./fence');

const config = new Config();

config
  .options.html(true).end()

  .plugin('anchor').use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: false,
      permalinkBefore: true,
      permalinkSymbol:'#',
    }
  ]).end()

  .plugin('containers').use(containers).end();


const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
