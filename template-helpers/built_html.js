const _ = require('lodash');

const gallery = (colClass, wrapClass, path, nImg) => {
  const start = '<div class="app-gallery"><div class="row">';
  const col = `<div class="${colClass || 'col-lg-2 col-md-2 col-sm-4 col-xs-6'}">`;
  const wrap = `<div class="img-wrapper ${wrapClass}">`;
  const end = '</div></div>';
  const srcs = new _.fill(new Array(nImg), path).map((e, i) => `${e}${i < 9 ? '0' : ''}${i + 1}.jpg`);
  const content = srcs.reduce((prev, curr) => (
    `${prev}${col}${wrap}<a class="fancybox" href="${curr}" rel="${path}"><img class="app-gallery-item" src="${curr}"></a>${end}`
  ), start);
  return `${content}${end}`;
};

// const phones = (phones) => phones.reduce((prev, curr) => {
//   `<p><a href="tel: ${curr.replace(/[()\-\s]/g, '')}">${curr}</a></p>`
// }, '')

const phones = (phones) => {
  console.log(phones);
}

module.exports = { gallery, phones };
