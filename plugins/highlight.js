// Most of the code is copied from https://github.com/valeriangalliat/markdown-it-highlightjs
// However the original author imported every language, making the bundle too big
// I only import the languages I need

const hljs = require('highlight.js/lib/core');
const javascript = require('highlight.js/lib/languages/javascript');
const php = require('highlight.js/lib/languages/php');
const powershell = require('highlight.js/lib/languages/powershell');
const html = require('highlight.js/lib/languages/xml');
const bash = require('highlight.js/lib/languages/bash');

const maybe = (f) => {
  try {
    return f();
  } catch (e) {
    return false;
  }
};

const registerLangs = () => {
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('php', php);
  hljs.registerLanguage('powershell', powershell);
  hljs.registerLanguage('html', html);
  hljs.registerLanguage('bash', bash);
};

const highlight = (code, lang) =>
  maybe(() => hljs.highlight(lang || 'plaintext', code, true).value) || '';

const highlightAuto = (code, lang) =>
  lang ? highlight(code, lang) : maybe(() => hljs.highlightAuto(code).value) || '';

const wrap = (render) =>
  function(...args) {
    return render
      .apply(this, args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };

const highlightjs = (md, opts) => {
  opts = Object.assign({}, highlightjs.defaults, opts);
  registerLangs(opts.register);

  md.options.highlight = highlightAuto;
  md.renderer.rules.fence = wrap(md.renderer.rules.fence);

  if (opts.code) {
    md.renderer.rules.code_block = wrap(md.renderer.rules.code_block);
  }
};

highlightjs.defaults = {
  code: true,
};

module.exports = highlightjs;
