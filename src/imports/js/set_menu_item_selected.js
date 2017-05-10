const selectedMenuItem = $(`a.nav-item-label[href='${location.pathname}']`)[0];
$(selectedMenuItem).addClass('selected');
