'use strict';

$(document).ready( function(){

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
        $('button').toggleClass('btn-danger btn-success');
        if ($('button').text() == 'Включить калькулятор') {
            $('button').text('Выключить калькулятор');
            clearForm();
        } else {
            $('button').text('Включить калькулятор');
        }

    });

    summa();
    clearForm();

    $('#area').on('input', () => {
        area = +$('#area').val();
        summa();
    });

    $('#window').on('change', () => {
        window = +$('#window').val();
        summa();
    });
    
    $('#thermal').on('change', () => {
        thermal = +$('#thermal').val();
        summa();
    });

    $('#area-window').on('change', () => {
        areaWindow = +$('#area-window').val();
        summa();
    });

    $('#temp').on('change', () => {
        temp = +$('#temp').val();
        summa();
    });

    $('#wall').on('change', () => {
        wall = +$('#wall').val();
        summa();
    });

    $('#top-room').on('change', () => {
        topRoom = +$('#top-room').val();
        summa();
    });

    $('#height').on('change', () => {
        height = +$('#height').val();
        summa();
    });

    function summa() {
        sum = Math.round(100 * area * window * thermal * areaWindow * temp * wall * topRoom * height); 
        $('#sum').val(sum);
    }

    function clearForm() {
        $('#area').val('');
        $('#window').val('');
        $('#thermal').val('');
        $('#area-window').val('');
        $('#temp').val('');
        $('#wall').val('');
        $('#top-room').val('');
        $('#height').val('');
        $('#sum').val(0);
    }
});
