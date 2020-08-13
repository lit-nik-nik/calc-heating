'use strict';

$(document).ready( function(){

    $('.window').val('');

    let sum, 
        area,
        window,
        thermal,
        areaWindow,
        temp,
        wall,
        topRoom,
        height;

    $('button').on('click', () => {
        $('.calculator').toggleClass("hide show");
        if ($('button').text() == 'Включить калькулятор') {
            $('button').text('Выключить калькулятор');
        } else {
            $('button').text('Включить калькулятор');
        }

    });

    summa();

    $('.area').on('input', () => {
        area = +$('.area').val();
        console.log(`area = ${area}`);
        summa();
    });

    $('.window').on('change', () => {
        window = +$('.window').val();
        console.log(`window = ${window}`);
        summa();
    });
    
    $('.thermal').on('change', () => {
        thermal = +$('.thermal').val();
        console.log(`thermal = ${thermal}`);
        summa();
    });

    $('.area-window').on('change', () => {
        areaWindow = +$('.area-window').val();
        console.log(`areaWindow = ${areaWindow}`);
        summa();
    });

    $('.temp').on('change', () => {
        temp = +$('.temp').val();
        console.log(`temp = ${temp}`);
        summa();
    });

    $('.wall').on('change', () => {
        wall = +$('.wall').val();
        console.log(`wall = ${wall}`);
        summa();
    });

    $('.top-room').on('change', () => {
        topRoom = +$('.top-room').val();
        console.log(`topRoom = ${topRoom}`);
        summa();
    });

    $('.height').on('change', () => {
        height = +$('.height').val();
        console.log(`height = ${height}`);
        summa();
    });

    function summa() {
        sum = Math.round(100 * area * window * thermal * areaWindow * temp * wall * topRoom * height); 
        $('.sum').val(sum);
    }
});
