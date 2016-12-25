import movePage from '../movePage/movePage';
import menu from '../menu/menu';
let works = (() => {


  class Slider {
    constructor() {
      this.leftImages = document.querySelectorAll('.view-small__block-left');
      this.rightImages = document.querySelectorAll('.view-small__block-right');
      this.focusImage = document.querySelector('.view-focus').children;
      this.title = document.querySelector('.content-disc__title');
      this.skills = document.querySelector('.content-disc__skills');
      this.link = document.querySelector('.button');
      this.step = 0;
    }

    counter(elem, task) {

      if (task) {
        if (elem < this.leftImages.length - 1) {
          elem += 1;
          return elem;
        } else return 0;
      } else {
        if (elem > 0) {
          elem -= 1;
          return elem;
        } else return this.leftImages.length - 1;
      }
    };


    up() {

      this.focusImage[this.step].style.opacity = "0";
      this.focusImage[this.counter(this.step, false)].style.opacity = "1";

      let data = this.focusImage[this.counter(this.step, false)].dataset;

      this.title.innerText = data.title;
      this.skills.innerText = data.skills;
      this.link.setAttribute('href', data.link);

      this.leftImages[this.counter(this.step, false)].style.top = "100%";
      this.leftImages[this.counter(this.counter(this.step, false), false)].style.top = "0";
      this.leftImages[this.counter(this.step, true)].style.display = "block";
      this.leftImages[this.step].style.display = "none";
      this.leftImages[this.step].style.top = "-100%";

      this.rightImages[this.counter(this.step, true)].style.top = "-100%";
      this.rightImages[this.step].style.top = "0";
      this.rightImages[this.counter(this.counter(this.step, false), false)].style.display = "none";
      this.rightImages[this.counter(this.counter(this.step, false), false)].style.top = "100%";
      this.rightImages[this.counter(this.step, false)].style.display = "block";

      this.step = this.counter(this.step, false);


    }

    down() {

      this.focusImage[this.step].style.opacity = "0";
      this.focusImage[this.counter(this.step, true)].style.opacity = "1";

      let data = this.focusImage[this.counter(this.step, true)].dataset;

      this.title.innerText = data.title;
      this.skills.innerText = data.skills;
      this.link.setAttribute('href', data.link);

      this.leftImages[this.step].style.top = "0";
      this.leftImages[this.counter(this.step, false)].style.top = "100%";
      this.leftImages[this.counter(this.step, true)].style.display = "block";
      this.leftImages[this.counter(this.counter(this.step, true), true)].style.display = "none";
      this.leftImages[this.counter(this.counter(this.step, true), true)].style.top = "-100%";

      this.rightImages[this.counter(this.counter(this.step, true), true)].style.top = "0";
      this.rightImages[this.counter(this.step, true)].style.top = "-100%";
      this.rightImages[this.step].style.display = "none";
      this.rightImages[this.step].style.top = "100%";
      this.rightImages[this.counter(this.step, false)].style.display = "block";

      this.step = this.counter(this.step, true);
    };
  }


  let listener = () => {
    let bodyTarget = document.querySelector('.wrapper-works');
    if (bodyTarget) {
      let slide = new Slider();
      bodyTarget.addEventListener('click', (e) => {
        switch (e.target.id) {
          case 'arrow_down':
            e.preventDefault();
            movePage.down();
            break;
          case 'arrow_up':
            e.preventDefault();
            movePage.up();
            break;
          case 'show-menu':
            e.preventDefault();
            menu.show(bodyTarget);
            break;
          case 'hide-menu':
            e.preventDefault();
            menu.hide(bodyTarget);
            break;
          case 'left_arrow':
            e.preventDefault();
            slide.up();
            break;
          case 'right_arrow':
            e.preventDefault();
            slide.down();
            break;
        }

      })
    }
  };
  return {
    init: () => {
      listener();
    }
  }
})();

module.exports = works;