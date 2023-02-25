let tl = gsap.timeline();

tl.from('.images > div', 0.8, {
  x: -80,
  delay: 0.5,
  ease: 'power1.inOut',
  opacity: 0,
  stagger: {
    amount: 0.65,
  },
});

tl.to('.images > div', 0.65, {
  ease: 'power1.inOut',
  opacity: 0,
  stagger: {
    amount: 0.65,
  },
});
tl.to('.overlay', 0.5, {
  ease: 'power1.inOut',
  opacity: 0,
});
tl.to('.loader-text', 1.2, {
  opacity: 1,
});
tl.to('.loader-text', 1.3, {
  opacity: 0,
});
tl.to('.wrapper', 3, {
  y: '-100%',
  ease: 'expo.out',
});
tl.to('.overlay', 2, {
  ease: 'power1.inOut',
  y: '-100%',
  ease: 'power2.out',
});

tl.from('.menu-item', 1.1, {
  opacity: 1,
  delay: -1.5,
  ease: 'power1.inOut',
  opacity: 0,
  stagger: {
    amount: 0.65,
  },
});
//

const firstName = new SplitType('.header-1');

gsap.to('.char', 1, {
  y: 0,
  ease: 'back.out(1.7)',
  stagger: 0.05,
  delay: 6.8,
});

const lastName = new SplitType('.header-2');
gsap.to('.char', 1, {
  y: 0,
  ease: 'back.out(1.7)',
  stagger: 0.05,
  delay: 7,
});
