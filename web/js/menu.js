$(document).ready(main);
var contador = 1;
var contador2 = 1;
function main() {
    $('.menu-cel').click(() => {
        if(contador == 1) {
            $('nav').animate({
                left: '0',
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
        left: '-100%'
      });
        }
    });
    $('.menu-cel').click(() => {
        if(contador2 == 1) {
            $('div.sombra').css({
                display: 'block',
                right: '0',
                transition: '0.2s'
            });
            contador2 = 0;
        } else {
            contador2 = 1;
            $('div.sombra').css({
        display: 'none'
      });
        }
    });
    $('.sombra').click(() => {
        if (contador == 1) {
            $('nav').animate({
                left: '0',
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    $('.sombra').click(() => {
        if (contador2 == 1) {
            $('div.sombra').css({
                display: 'block',
                right: '0',
                transition: '0.2s'
            });
            contador2 = 0;
        } else {
            contador2 = 1;
            $('div.sombra').css({
                display: 'none'
            });
        }
    });
    $('.submenu').click(() => {
        $(this).children('.children').slideToggle();
    });
};
