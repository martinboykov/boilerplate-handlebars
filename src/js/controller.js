import * as vendor from './vendor';

export default class Controller {
  constructor() {
    this.title = 'controller';
  }
  init() {
    const self = this;
    const tl = gsap.timeline({
      scrollTrigger: {
        toggleActions: 'play none none none',
        trigger: 'h2',
        start: 'top center+=50%',
      },
    });
    tl.from($('h2'), { duration: 1, y: '-50%', autoAlpha: 0 });
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    return this;
  }
}
