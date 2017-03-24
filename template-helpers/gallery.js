const gallery = (...srcs) => {
  srcs.pop();
  const start = '<div class="app-gallery"><div class="row">';
  const col = '<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6">';
  const wrap = '<div class="img-wrapper">';
  const end = '</div></div>';
  const content = srcs.reduce((prev, curr) => (
    `${prev}${col}${wrap}<a class="fancybox" href="${curr}" rel="gallery"><img class="app-gallery-item" src="${curr}"></a>${end}`
  ), start);
  return `${content}${end}`;
};

module.exports = gallery;
