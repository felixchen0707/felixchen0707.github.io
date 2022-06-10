'use strict';

function postSiteCardGroup(args, content) {
  if (args.length > 0) {
    return `<div class="site-card-group"><p class='p h2'>${args}</p>${content}</div>`;
  } else {
    return `<div class="site-card-group">${content}</div>`;
  }
}
function postSiteCard(args) {
  args = args.join(' ').split(', ')
  // 所有支持的参数
  let title = args[0].trim();
  let url = '';
  let screenshot = '';
  let avatar = '';
  let description = '';
  // 解析
  if (args.length > 1) {
    for (let i = 1; i < args.length; i++) {
      let tmp = args[i].trim();
      if (tmp.includes('url=')) {
        url = tmp.substring(4, tmp.length);
      } else if (tmp.includes('screenshot=')) {
        screenshot = tmp.substring(11, tmp.length);
      } else if (tmp.includes('avatar=')) {
        avatar = tmp.substring(7, tmp.length);
      } else if (tmp.includes('description=')) {
        description = tmp.substring(12, tmp.length);
      }
    }
  }
  // 布局
  let result = '';
  result += '<a class="site-card" href="' + url + '">';
  result += '<div class="img"><img class="no-lightbox" src="' + screenshot + '"/></div>';
  result += '<div class="info">';
  if (avatar.length > 0) {
    result += '<img class="no-lightbox" src="' + avatar + '"/>';
  } else {

  }

  result += '<span class="title">' + title + '</span>';
  if (description.length > 0) {
    result += '<span class="desc">' + description + '</span>';
  } else {

  }

  result += '</div></a>';
  return result;

}

// <a class="site-card" href=""><div class="img"><img src=""/></div><div class="info"><span class="title">link</span></div></a>
// <a class="site-card" href=""><div class="img"><img src=""/></div><div class="info"><span class="title">link</span></div></a>
hexo.extend.tag.register('site', postSiteCard);
hexo.extend.tag.register('sitegroup', postSiteCardGroup, {ends: true});
