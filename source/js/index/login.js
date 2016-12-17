let login = (() => {

  let runFlip = () => {
    let container = document.querySelector('.flip-container').classList;
    let loginButton = document.querySelector('#login');


    if (!container.contains('rotate')) {
      container.add('rotate');
      loginButton.style.display = 'none';
    } else {
      container.remove('rotate');
      loginButton.style.display = '';
    }
  };
  let sendForm = () => {
    class Form {
      constructor() {
        this.login = document.getElementsByName('login')[0].value;
        this.password = document.getElementsByName('password')[0].value;
        this.robot = document.getElementsByName('robot')[0].checked;
        let robotRadio = document.getElementsByName('robot-radio');

        if (robotRadio[0].checked) {
          this.robotRadio = robotRadio[0].value;
        } else {
          this.robotRadio = robotRadio[1].value
        }
      }
      checkForm() {
        let loginPatttern = /^[a-z0-9_-]{3,16}$/;
        let passwordPattern = /^[a-z0-9_-]{6,18}$/;
        console.log(loginPatttern.test(this.password))
      }
    }

    let data = new Form();
    // console.log(data);
    data.checkForm();
  };
  let listener = () => {
    document.body.addEventListener('click', (e) => {

      switch (e.target.id) {
        case 'login' :
          e.preventDefault();
          runFlip();
          break;
        case 'index' :
          e.preventDefault();
          runFlip();
          break;
        case 'enter' :
          e.preventDefault();
          sendForm();
          break;

      }
    });
  };

  return {
    init: () => {
      listener();
    }
  }

})();

module.exports = login;