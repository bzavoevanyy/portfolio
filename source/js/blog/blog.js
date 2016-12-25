let blog = (() => {

  let changeActivePost = (target) => {
    let posts = document.querySelector('.posts');
    let activeLink = document.querySelector('.active');
    let activeData = activeLink.dataset.post;
    let targetData = target.dataset.post;
    let activePost = document.querySelectorAll('.post')[activeData];
    let targetPost = document.querySelectorAll('.post')[targetData];

    activeLink.classList.remove('active');
    target.classList.add('active');
    activePost.classList.remove('active');
    targetPost.classList.add('active');

    posts.scrollTop = targetPost.offsetTop-50;

  };
  let listener = () => {
    let bodyTarget = document.querySelector('.wrapper-blog');
    if (bodyTarget) {

      bodyTarget.addEventListener('click', (e) => {
        e.preventDefault();
        changeActivePost(e.target);

      })
    }
  };


  return {
    init: () => {
      listener();
    }
  }
})();

module.exports = blog;