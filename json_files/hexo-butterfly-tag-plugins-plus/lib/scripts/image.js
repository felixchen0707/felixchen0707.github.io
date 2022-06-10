/**
 * image.js v4 | https://volantis.js.org
 */

'use strict';

// <div class="img-wrap"><div class="img-bg"><img class="img" src="url"/></div></div>
// <div class="img-wrap"><div class="img-bg"><img class="img" src="url" alt="haha"/></div><span class="image-caption">haha</span></div>
// <div class="img-wrap"><div class="img-bg"><img class="img" src="url" style="width:50%;"/></div></div>
// <div class="img-wrap"><div class="img-bg"><img class="img" src="url" style="height:32px;"/></div></div>
// <div class="img-wrap"><div class="img-bg" style="background:#eee"><img class="img" src="url"/></div></div>
// <div class="img-wrap"><div class="img-bg"><img class="img" src="url" alt="haha" style="width:400px;"/></div><span class="image-caption">haha</span></div>
// <div class="img-wrap"><div class="img-bg" style="background:#eee"><img class="img" src="url" alt="haha" style="width:400px;"/></div><span class="image-caption">haha</span></div>
hexo.extend.tag.register('image', function(args) {
  args = args.join(' ').split(', ');
  let url = args[0].trim();
  let alt = '';
  let bg = '';
  let style = '';
  if (args.length > 1) {
    for (let i = 1; i < args.length; i++) {
      let tmp = args[i].trim();
      if (tmp.includes('alt=')) {
        alt = tmp.substring(4, tmp.length);
      } else if (tmp.includes('width=')) {
        style += 'width:' + tmp.substring(6, tmp.length) + ';';
      } else if (tmp.includes('height=')) {
        style += 'height:' + tmp.substring(7, tmp.length) + ';';
      } else if (tmp.includes('bg=')) {
        bg = tmp.substring(3, tmp.length);
      }
    }
  }
  function img(url, alt, style) {
    let img = '';
    img += '<img class="img" src="' + url + '"';
    if (alt.length > 0) {
      img += ' alt="' + alt + '"';
    }
    if (style.length > 0) {
      img += ' style="' + style + '"';
    }
    img += '/>';
    return img;
  }

  let ret = '';
  // wrap
  ret += '<div class="img-wrap">';
  // bg
  ret += '<div class="img-bg"';
  if (bg.length > 0) {
    ret += ' style="background:' + bg + '"';
  }
  ret += '>';
  ret += img(url, alt, style);
  ret += '</div>';

  if (alt.length > 0) {
    ret += '<span class="image-caption">' + alt + '</span>';
  }

  ret += '</div>';
  return ret;
});


// <img no-lazy class="inline" src="url" style="height:1.5em"/>
// <img no-lazy class="inline" src="url" style="height:22px;"/>
hexo.extend.tag.register('inlineimage', function(args) {
  args = args.join(' ').split(', ');
  let url = args[0].trim();
  let ret = '';
  ret += '<img no-lazy class="inline" src="' + url + '"';
  let style = '';
  if (args.length > 1) {
    for (let i = 1; i < args.length; i++) {
      let tmp = args[i].trim();
      if (tmp.includes('height=')) {
        style += 'height:' + tmp.substring(7, tmp.length) + ';';
      }
    }
  }
  if (style.length > 0) {
    ret += ' style="' + style + '"';
  } else {
    ret += ' style="height:1.5em"';
  }
  ret += '/>';
  return ret;
});
