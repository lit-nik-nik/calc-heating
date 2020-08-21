'use strict';

$(document).ready( function(){

//массив всех селектов, что используются в расчете
    const massivSelect = [
        {
            label: 'Площадь комнаты',
            id: 'area'
        }
    ];

    $.each(massivSelect, (i, elem) => {
        $('#selects').append(
            `<div class="col-sm-3 mt-3">
                <label for="${elem.id}">${elem.label}</label>
                <div class="input-group">
                    <input type="text" id="${elem.id}" class="form-control" placeholder="">
                    <div class="input-group-append">
                                <span class="input-group-text">м<sup>2</sup></span>
                    </div>
                </div>
            </div>`
        );
    });

});