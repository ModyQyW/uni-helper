const obj = require('./snippets/vue-html.json');

let str = '|API|Prefix|Description|\r|-|-|-|\r';

Object.keys(obj).forEach((key) => {
  const { prefix, body, description } = obj[key];
  let newPrefix = '';
  prefix.forEach((text) => {
    newPrefix += `\`${text}\`, `;
  });
  newPrefix = newPrefix.slice(0, -2);
  let newBody = '';
  newBody =
    '`' +
    body[0]
      .replace(/(?<=\w)\ .*[\>\/]/g, '')
      .replace(/\(?\([\w\{\ \}\)\$\:\,\=\>\'\"\/\|\(]+/g, '()')
      .replace(/\$\d[\w\<\/\-\>]*/g, '');
  if (newBody.indexOf('/* ') !== -1 && newBody.indexOf(' */') === -1) {
    newBody += ' */`';
  } else if (
    newBody.indexOf('<!-- ') !== -1 &&
    newBody.indexOf(' -->') === -1
  ) {
    newBody += ' -->`';
  } else if (newBody.indexOf('<') !== -1 && newBody.indexOf('>') === -1) {
    newBody += '>`';
  } else {
    newBody += '`';
  }
  str += `|${newBody}|${newPrefix}|${description}|\r`;
});

console.log(str);
