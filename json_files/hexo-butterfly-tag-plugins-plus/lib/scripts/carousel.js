'use strict'

function carousel (args, content) {
  args = args.join(' ').split(',')
  let carouselId = args[0]
  let carouselname = args[1]?args[1]:'carousel'
  return `<div id='${carouselId}' class='carousel'><div id="${carouselId}-drag-container" class="drag-container"><div id="${carouselId}-spin-container" class="spin-container">${hexo.render.renderSync({ text: content, engine: 'markdown' }).replace(/^(\s|<p>)+|(\s|<\/p>)+$/g, '')}<p>${carouselname}</p></div><div id="${carouselId}-carousel-ground" class="carousel-ground"></div></div></div><script type="text/javascript">carouselinit('${carouselId}');</script>`
}

hexo.extend.tag.register('carousel',carousel,{ ends: true });
/*
<div id='Id' class='carousel'><div id="Id-drag-container" class="drag-container"><div id="Id-spin-container" class="spin-container"><img src="/img/1.jpg" alt=""><br><img src="/img/2.jpg" alt=""><p>name</p></div><div id="Id-carousel-ground" class="carousel-ground"></div></div></div><script type="text/javascript">carouselinit('Id');</script>
*/
