let admin = (() => {
  let first = true;
  let sender = (data, method, action) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, action);

      if (data) {

        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      }
      xhr.send(JSON.stringify(data));
      xhr.onload = () => {
        let response;
        if (method != 'GET') {
          response = JSON.parse(xhr.response);
        } else {
          response = xhr.response;
        }
        if (xhr.status >= 200 && xhr.status <= 300) {
          resolve(response);
        } else {
          reject(response);
        }
      }
    })
  };
  let getSkills = () => {
    let inputs = document.querySelectorAll('.skills-level');

    sender({}, 'POST', 'admin/skills/get').then((response) => {

      Array.prototype.forEach.call(inputs, (elem) => {

        elem.value = response[0][elem.id];
      })
    }).catch((response) => {
      console.log("!!!");
    })
  };
  let getTemplate = (type) => {
    let body = document.querySelector('.admin-main');
    sender({}, 'GET', 'admin/' + type).then((response) => {
      body.innerHTML = response;


    }).then(()=> {
      if (type === 'skills') {
        getSkills();
      }
      if (first) {
        listers();
      }
      first = false;

    }).catch((response) => {
      // console.log(response);
    });

  };
  let sendSkills = () => {
    let inputs = document.querySelectorAll('.skills-level');
    let skills = {};
    Array.prototype.forEach.call(inputs, (elem) => {
      if (elem.value >= 0 && elem.value <= 100) {
        skills[elem.name] = elem.value;
      }

    });
    sender(skills, 'POST', 'admin/skills').then((response) => {
      console.log(response);
    }).catch((response) => {
      // console.log(response);
    })
  };
  let sendPost = () => {
    let post = {};
    post.title = document.getElementsByName('title')[0].value;
    post.date = document.getElementsByName('date')[0].value;
    post.content = document.getElementsByName('content')[0].value;
    console.log(post);
  };
  let listers = () => {
    let bodyTarget = document.querySelector('.admin-container');
    if (bodyTarget) {
      bodyTarget.addEventListener('click', (e) => {
        console.log(e.target.id);
        if (e.target.id == 'send-skills') {
          e.preventDefault();
          sendSkills();
        }
        if (e.target.id == 'send-post') {
          e.preventDefault();
          sendPost();
        }
        if (e.target.id == 'blog-tab') {
          e.preventDefault();
          getTemplate('blog');
        }
        if (e.target.id == 'skills-tab') {
          e.preventDefault();
          getTemplate('skills');
        }
      })
    }
  };
  return {
    init: () => {

      getTemplate('skills');



    }
  }
})();

module.exports = admin;