import $ from 'jquery';
window.jQuery = window.$ = $;
import 'slick-carousel/slick/slick';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
window.gsap = gsap;

export { gsap };
