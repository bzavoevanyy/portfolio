let scrollToY = (scrollTargetY, speed = 1000, easing = 'easeOutSine') => {

  let scrollY = window.scrollY;
  let currentTime = 0;

  // min time .1, max time .8 seconds
  let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  let easingEquations = {
    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function (pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }
  };

  let tick = () => {
    currentTime += 1 / 60;

    let p = currentTime / time;
    let t = easingEquations[easing](p);

    if (p < 1) {
      setTimeout(tick, speed / 60);

      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  };

  tick();
};

let movePage = (() => {
  return  {
      down : () => {
        let winHeight = window.innerHeight;
        scrollToY(winHeight, 1000, 'easeInOutSine');
      },

      up : () => {
        scrollToY(0, 1000, 'easeInOutSine');
      }

  }
})();
module.exports = movePage;