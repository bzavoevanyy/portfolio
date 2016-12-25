let menu = (() => {
  const menuBlock = document.querySelector('.main-menu');

  return {
    show : (wrapBlock) => {
      menuBlock.classList.add('show-menu');
      wrapBlock.style.cssText="height: 100vh;\
        overflow: hidden;";
    },
    hide : (wrapBlock) => {
        menuBlock.classList.remove('show-menu');
        wrapBlock.style.cssText="height: auto;\
        overflow: visible;";
    }
  }
})();

module.exports = menu;