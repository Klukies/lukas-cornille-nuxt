import MarkdownIt, { Options } from 'markdown-it';
import Renderer from 'markdown-it/lib/renderer';
import hljs from 'highlight.js/lib/core';
import Token from 'markdown-it/lib/token';

const registerLanguages = () => {
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
  hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
  hljs.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'));
  hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
};

const highlightAuto = (code: string, language: string) => {
  return language
    ? hljs.highlight(language || 'plaintext', code, true).value
    : hljs.highlightAuto(code).value;
};

const wrap = (render: Renderer.RenderRule) =>
  function(...args: [Token[], number, Options, any, Renderer]) {
    return render
      .apply(render, args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };

const highlightjs = (md: MarkdownIt) => {
  registerLanguages();
  md.options.highlight = highlightAuto;
  md.renderer.rules.fence = wrap(md.renderer.rules.fence!);
  md.renderer.rules.code_block = wrap(md.renderer.rules.code_block!);
};

export default highlightjs;
