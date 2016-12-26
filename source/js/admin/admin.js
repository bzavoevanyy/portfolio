let admin = (() => {
  let sender = (data) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'admin/skills');
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      xhr.send(JSON.stringify(data));
      console.log(JSON.stringify(data));
      xhr.onload= () => {
        let response = JSON.parse(xhr.response);
        if (response.status >= 200 && response.status <= 300) {
          resolve(response);
        } else {
          reject(response);
        }
      }
    })
  };
  let sendSkills = () => {
    let inputs = document.querySelectorAll('.skills-level');
    let skills = {};
    Array.prototype.forEach.call(inputs, (elem) => {
      if (elem.value >=0 && elem.value <= 100) {
        skills[elem.name] = elem.value;
      }

    });
    sender(skills).then((response)=> {
      console.log(response);
    }).catch((response) => {
      console.log(response);
    })
  };
  let listers = () => {
    let bodyTarget = document.querySelector('.admin-container');
    if (bodyTarget) {
      bodyTarget.addEventListener('click', (e) => {
        if (e.target.id == 'send-skills') {
          sendSkills();
        }
      })
    }
  };
  return {
    init: () => {
      listers();
    }
  }
})();

module.exports = admin;