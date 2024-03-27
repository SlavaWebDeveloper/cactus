import ScrollReveal from 'scrollreveal';

function scrollRevealAnimation() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset: true,
    })

  sr.reveal(`.home__img, .new__data, .section__title, .care__img, .contact__content, .footer `);
  sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 400});
  sr.reveal(`.new-card`, {delay: 600, interval: 100});
  sr.reveal(`.shop__title`, {delay: 200});
  sr.reveal(`.shop-card`, {interval: 100});
}


export default scrollRevealAnimation;