'use strict';

$(document).ready( function(){

    let sum, 
        reserve = 1,
        area = 0,
        window = 1,
        doors = 1,
        thermal = 1,
        areaWindow = 1,
        temp = 1,
        wall = 1,
        bottomRoom = 1,
        topRoom = 1,
        height = 1,
        cardinalPoints = 1,
        wind = 1,
        heater = 1,
        installHeater = 1;

//добавление на кнопку сброса калькулятора
    $('button').on('click', () => {
        clearForm();
    });

//функция расчета мощности
    function summa() {
        sum = ((100 * area * window * thermal * areaWindow * temp * wall * topRoom * height * doors * 
                bottomRoom * cardinalPoints * wind * heater * installHeater * reserve) / 1000).toFixed(2); 
        $('#sum').val(sum);
    }

//функция сброса всех полей калькулятора в исходное состояние
    function clearForm() {
        $('#reserve').val('');
        $('#area').val('');
        $('#window').val('');
        $('#thermal').val('');
        $('#area-window').val('');
        $('#temp').val('');
        $('#wall').val('');
        $('#top-room').val('');
        $('#height').val('');
        $('#сardinal-points').val('');
        $('#wind').val('');
        $('#bottom-room').val('');
        $('#doors').val('');
        $('#heater').val('');
        $('#install-heater').val('');
        $('#sum').val(0);
        area = 0;
        reserve = 1;
        window = 1;
        doors = 1;
        thermal = 1;
        areaWindow = 1;
        temp = 1;
        wall = 1;
        bottomRoom = 1;
        topRoom = 1;
        height = 1;
        cardinalPoints = 1;
        wind = 1;
        heater = 1;
        installHeater = 1;
    }

//добавление событий на каждый элемент формы
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

    $('#сardinal-points').on('change', () => {
        cardinalPoints = +$('#сardinal-points').val();
        summa();
    });

    $('#wind').on('change', () => {
        wind = +$('#wind').val();
        summa();
    });

    $('#bottom-room').on('change', () => {
        bottomRoom = +$('#bottom-room').val();
        summa();
    });

    $('#doors').on('change', () => {
        doors = +$('#doors').val();
        summa();
    });

    $('#heater').on('change', () => {
        heater = +$('#heater').val();
        summa();
    });

    $('#install-heater').on('change', () => {
        installHeater = +$('#install-heater').val();
        summa();
    });

    $('#reserve').on('change', () => {
        reserve = +$('#reserve').val();
        summa();
    });

    summa();
    clearForm();
});
