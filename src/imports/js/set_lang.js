const currentLocation = document.location;
const currentHref = currentLocation.href;
const currentHost = currentLocation.origin;
const currentPath = currentLocation.pathname;
const langSelectors = $('.language-selector a');
const ukSelector = langSelectors[0];
const enSelector = langSelectors[1];
const prefixEnRegex = /\/+en\//;
let prefixEn = currentPath.match(prefixEnRegex);
    prefixEn = prefixEn && prefixEn[0];

if (prefixEn) {
  ukSelector.href = `${currentHref.replace(prefixEnRegex, '/')}`;
  enSelector.href = '';
  $(enSelector.children[0]).addClass('selected');
  $(ukSelector.children[0]).removeClass();
} else {
  ukSelector.href = currentHref;
  enSelector.href = `${currentHost}/en${currentPath}`;
  $(ukSelector.children[0]).addClass('selected');
  $(enSelector.children[0]).removeClass();
}
