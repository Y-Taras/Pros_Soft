const gallery = (...srcs) => {
  srcs.pop();
  const col = '<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6">';
  const wrap = '<div class="img-wrapper">';
  const gallery = srcs.reduce(
    (prev, curr) => `${prev}${col}${wrap}<img class="app-gallery-item" src="${curr}"></div></div>`,
    '<div class="app-gallery"><div class="row">');
  return `${gallery}</div></div>`;
};

module.exports = gallery;
