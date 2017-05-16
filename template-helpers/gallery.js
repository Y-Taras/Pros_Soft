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

const getPicRefs = (n, path) => new _.fill(new Array(n), path).map((e, i) => `${e}${i < 9 ? '0' : ''}${i + 1}.png`);

const landingGallery = (thumbnailsPath, originsPath, nImg) => {
  const thumbsSrcs = getPicRefs(nImg, thumbnailsPath);
  const originsRefs = getPicRefs(nImg, originsPath);
  const rows = _.chunk(thumbsSrcs, 2);
  return rows.map((row, i) => {
    const cols = row.map((col, j) => {
      return `<div class="col-xs-6"><a class="fancybox" href="${originsRefs[2 * i + j]}"><img class="gallery-item" src="${col}"/></a></div>`;
    }).join('');
    return `<div class="row" style="margin-bottom: 10px">${cols}</div>`;
  }).join('');
};

const noColGallery = (thumbnailsPath, originsPath, nImg) => {
  const thumbsSrcs = getPicRefs(nImg, thumbnailsPath);
  const originsRefs = getPicRefs(nImg, originsPath);
  return thumbsSrcs.map((src, i) => {
    return `<a class="fancybox" href="${originsRefs[i]}"><img class="gallery-item" src="${src}"/></a>`;
  }).join('');
};

module.exports = { gallery, landingGallery, noColGallery };
