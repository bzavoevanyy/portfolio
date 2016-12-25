import menu from '../menu/menu';
import movePage from '../movePage/movePage';

let about = (() => {


    let listener = () => {
        let bodyTarget = document.querySelector('.wrapper-about');
        if (bodyTarget) {

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
        init : () => {
            listener();
        }
    }
})();

module.exports = about;