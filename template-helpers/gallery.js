const _ = require('lodash');

const getPicRefs = (n, path) => new _.fill(new Array(n), path).map((e, i) => `${e}${i < 9 ? '0' : ''}${i + 1}.png`);

const gallery = (colClass, wrapClass, path, nImg) => {
  const start = '<div class="app-gallery"><div class="row">';
  const col = `<div class="${colClass || 'col-lg-2 col-md-2 col-sm-4 col-xs-6'}">`;
  const wrap = `<div class="img-wrapper ${wrapClass}">`;
  const end = '</div></div>';
  const srcs = getPicRefs(nImg, path);
  const content = srcs.reduce((prev, curr) => (
    `${prev}${col}${wrap}<a class="fancybox" href="${curr}" rel="${path}"><img class="app-gallery-item" src="${curr}"></a>${end}`
  ), start);
  return `${content}${end}`;
};

const noColGallery = (thumbnailsPath, originsPath, nImg) => {
  const thumbsSrcs = getPicRefs(nImg, thumbnailsPath);
  const originsRefs = getPicRefs(nImg, originsPath);
  return thumbsSrcs.map((src, i) => {
    return `<a class="fancybox" href="${originsRefs[i]}" rel="${originsPath}"><img class="gallery-item" src="${src}"/></a>`;
  }).join('');
};

const hiddenGallery = (path, nImg) => {
  const refs = getPicRefs(nImg, path);
  const mainImg = `<a class="fancybox" href="${refs[0]}" rel="${path}"><img class="gallery-img" src="${path}gallery_img1.png"/></a>`;
  refs.shift();
  const imgs = refs.map(ref => {
    return `<a class="fancybox" href="${ref}" rel="${path}"></a>`
  }).join('');
  return `${mainImg}${imgs}`;
};

module.exports = { gallery, noColGallery, hiddenGallery };
