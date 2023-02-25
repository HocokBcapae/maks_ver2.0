gsap.to('.img', {
  y: 200,
  scrollTrigger: {
    trigger: '.img',
    scrub: 1,
  },
});

gsap.to('.img', {
  y: 200,
  scrollTrigger: {
    stagger: 0.4,
    trigger: '.img',
    start: 'center center',
    end: 'bottom top',
    scrub: 1,
  },
});
