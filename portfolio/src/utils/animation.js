import gsap from 'gsap';

const tl = gsap.timeline({ default: {ease: 'power1.out'} });

tl.to('.text', { y: '0%', duration: 2, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 1.5});
tl.to('.intro', { y: '-100%', duration: 1}, '-=1.25');
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=.75');

export default tl;