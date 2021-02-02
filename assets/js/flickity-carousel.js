//Flickity carousel CREDIT
//var elem = document.querySelector('.main-carousel');
//var flkty = new Flickity(elem, {
    //cellAlign: 'left',
    //contain: true,
//     autoPlay: true,
//     freeScroll: true,
//     wrapAround: true,
//     pageDots: false,
//     prevNextButtons: false
// });
Flickity.prototype._createResizeClass = function() {
  this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function() {
  this.element.classList.remove('flickity-resize');
  resize.call( this );
  this.element.classList.add('flickity-resize');
};