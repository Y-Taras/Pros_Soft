const _ = require('lodash');

const getPicRefs = (n, path) => new _.fill(new Array(n), path).map((e, i) => `${e}${i < 9 ? '0' : ''}${i + 1}.png`);
const getPicRefsJpg = (n, path) => new _.fill(new Array(n), path).map((e, i) => `${e}${i < 9 ? '0' : ''}${i + 1}.jpg`);

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

const gallery_2 = (colClass, wrapClass, path, nImg) => {
  const start = '<div class="app-gallery"><div class="row">';
  const col = `<div class="${colClass || 'col-lg-2 col-md-2 col-sm-4 col-xs-6'}">`;
  const wrap = `<div class="img-wrapper ${wrapClass}">`;
  const end = '</div></div>';
  const srcs = getPicRefsJpg(nImg, path);
  const content = srcs.reduce((prev, curr) => (
    `${prev}${col}${wrap}<a class="fancybox" href="${curr}" rel="${path}"><img class="app-gallery-item" src="${curr}"></a>${end}`
  ), start);
  return `${content}${end}`;
};

const galleryJpg = (colClass, path, nImg) => {
  const wrapper = '<div class="gallery col-xs-12">';
  const start = '<div class="swiper-container gallery-top"><div class="swiper-wrapper">';
  const startThumbs = '<div class="swiper-container gallery-thumbs"><div class="swiper-wrapper">';
  const wrap = `<div class="swiper-slide">`;
  const arrow = '<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>';
  const end = '</div>';
  const srcs = getPicRefsJpg(nImg, path);
  const content = srcs.reduce((prev, curr) => (
    `${prev}${wrap}<a class="fancybox" href="${curr}" rel="${path}"><img src="${curr}"></a>${end}`
  ), start);
  const thumbs = srcs.reduce((prev, curr) => (
      `${prev}${wrap}<img src="${curr}">${end}`
  ), startThumbs);
  return `${wrapper}${content}${end}${arrow}${end}${thumbs}${end}${end}${end}${end}`;
};

const galleryPng = (colClass, path, nImg) => {
  const wrapper = '<div class="gallery col-xs-12">';
  const start = '<div class="swiper-container gallery-top"><div class="swiper-wrapper">';
  const startThumbs = '<div class="swiper-container gallery-thumbs"><div class="swiper-wrapper">';
  const wrap = `<div class="swiper-slide">`;
  const arrow = '<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>';
  const end = '</div>';
  const srcs = getPicRefs(nImg, path);
  const content = srcs.reduce((prev, curr) => (
    `${prev}${wrap}<a class="fancybox" href="${curr}" rel="${path}"><img src="${curr}"></a>${end}`
  ), start);
  const thumbs = srcs.reduce((prev, curr) => (
      `${prev}${wrap}<img src="${curr}">${end}`
  ), startThumbs);
  return `${wrapper}${content}${end}${arrow}${end}${thumbs}${end}${end}${end}${end}`;
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
  const mainImg = `<a class="fancybox swiper-slide" href="${refs[0]}" rel="${path}"><img class="gallery-img" src="${refs[0]}"/></a>`;
  refs.shift();
  const imgs = refs.map(ref => {
    return `<a class="fancybox swiper-slide" href="${ref}" rel="${path}"><img class="gallery-img" src="${ref}"/></a>`
  }).join('');
  return `${mainImg}${imgs}`;
};

module.exports = { gallery, galleryJpg, galleryPng, gallery_2, noColGallery, hiddenGallery };
