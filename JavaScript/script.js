// MOBILE NAVIGATION

const btnNavEl = document.querySelector('.btn-mobile--nav');
const navEl = document.querySelector('nav');

btnNavEl.addEventListener('click', function () {
  navEl.classList.toggle('nav-open');
});

// Sticky navigation

const sectionTitleEl = document.querySelector('.section-title');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionTitleEl);
