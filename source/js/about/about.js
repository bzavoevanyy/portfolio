import menu from '../menu/menu';
import movePage from '../movePage/movePage';

let about = (() => {
  let renderSkills = (data) => {
    const circles = document.querySelectorAll('.skills__fillcircle')
    Array.prototype.forEach.call(circles, (elem) => {
      let dash = data[0][elem.id]*295/100;
      elem.style.cssText= "stroke-dasharray:" + dash + " 295;"
    })
  };
  let getSkills = () => {
    let getter = () => {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/admin/skills/get');
        xhr.send();
        xhr.onload = () => {
          let response = JSON.parse(xhr.response);
          if (xhr.status >= 200 && xhr.status <= 300) {
            resolve(response);
          }
          reject(response);
        }
      })
    };
    getter().then((response) => {
      console.log(response);
      renderSkills(response);
    }).catch((response) => {
      console.log(response, 'Error!');
    })
  };
  let listener = () => {
    let bodyTarget = document.querySelector('.wrapper-about');
    if (bodyTarget) {
      getSkills();
      bodyTarget.addEventListener('click', (e) => {

        switch (e.target.id) {
          case 'arrow_down':
            movePage.down();
            break;
          case 'show-menu':
            menu.show(bodyTarget);
            break;
          case 'hide-menu':
            menu.hide(bodyTarget);
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

module.exports = about;