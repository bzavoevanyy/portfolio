let preloader = (() => {

  let getImgPaths = () => {
    let paths = [];
    let img = document.body.getElementsByTagName('*');
    img = Array.prototype.slice.call(img);
    img.map((val) => {
      if (val.tagName === 'IMG') {
        paths.push(val.attributes.src.value)
      } else {
        let style = getComputedStyle(val);
        if (style.backgroundImage.search(/url/) !== -1) {
          paths.push(style.backgroundImage.replace('url("', '').replace('")', ''));
        }
      }
    });
    return paths;
  };

  let loadImg = () => {
    let paths = getImgPaths();
    let percent = 0;
    let setPersent = () => {
      let preloader = document.querySelector('.preloader');
      percent += 100 / paths.length;
      document.getElementById('preloader_text').innerHTML = Math.round(percent) + '%';
      if (Math.round(percent) >= 100) {
        preloader.classList.add('preloader--close');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }
    };
    paths.map((val) => {
      let fakeImg = document.createElement('IMG');
      fakeImg.setAttribute('src', val);
      fakeImg.addEventListener('load', () => {
        setPersent();
      });
      fakeImg.addEventListener('error', () => {
        fakeImg.removeEventListener('load', () => {
        });
        setPersent()
      });
    })
  };
  return {
    init: () => {
      if (!document.querySelector('.admin-container')) {
        loadImg();
      }
    }
  }
})();

module.exports = preloader;