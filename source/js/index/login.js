let login = (() => {
  const loginPatttern = /^[a-z0-9_-]{3,16}$/;
  const passwordPattern = /^[a-z0-9_-]{6,18}$/;
  const loginTooltip = document.getElementById('login-tooltip');
  const passwordTooltip = document.getElementById('password-tooltip');
  const robotTooltip = document.getElementById('robot-tooltip');

  let runFlip = (flag) => {
    let container = document.querySelector('.flip-container').classList;
    let loginButton = document.querySelector('#login');


    if (!container.contains('rotate') && !flag) {
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


          if (!this.robot) { // Проверяем чекбокс "Я не робот"
            robotTooltip.classList.add('show');
            return false
          }
          if (this.robotRadio === 'robot') { // Проверяем radioButton "Я не робот"
            robotTooltip.classList.add('show');
            return false;
          }
          if (!loginPatttern.test(this.login)) { // Проверяем поле "Логин"
            loginTooltip.classList.add('show');
            return false;
          }
          if (!passwordPattern.test(this.password)) { // Проверяем поле "Пароль"
            passwordTooltip.classList.add('show');
            return false;
          }
          return true;
        }
      }

      let data = new Form();
    data.checkForm();
    // TODO send object by AJAX
    }
    ;
  let checkInputs = (target) => {


    if (target.name === 'login') {
      if (loginPatttern.test(target.value)) {
        target.parentNode.classList.remove('error');
        target.parentNode.classList.add('noterror');
        if (loginTooltip.classList.contains('show')) {
          loginTooltip.classList.remove('show');
        }
      } else {
        target.parentNode.classList.add('error');
        target.parentNode.classList.remove('noterror');
      }
    }
    if (target.name === 'password') {
      if (passwordPattern.test(target.value)) {
        target.parentNode.classList.remove('error');
        target.parentNode.classList.add('noterror');
        if (passwordTooltip.classList.contains('show')) {
          passwordTooltip.classList.remove('show');
        }
      } else {
        target.parentNode.classList.add('error');
        target.parentNode.classList.remove('noterror');
      }
    }
  };
  let listener = () => {
    document.body.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target.name === 'robot' || e.target.name === 'robot-radio') {
        if (robotTooltip.classList.contains('show')) {
          robotTooltip.classList.remove('show');
        }
      }

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
        case 'header-wrapper' :
          runFlip(true);
          break;
        case 'dark-block' :
          runFlip(true);
          break;
      }
    });

    document.body.addEventListener('keyup', (e) => {

      switch (e.target.name) {
        case 'login' :
          checkInputs(e.target);
          break;
        case 'password' :
          checkInputs(e.target);
          break;
      }
    })
  };

  return {
    init: () => {
      listener();
    }
  }

})();

module.exports = login;