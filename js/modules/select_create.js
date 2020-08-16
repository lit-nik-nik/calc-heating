'use strict';

$(document).ready( function(){

//массив всех селектов, что используются в расчете
    const massivSelect = [
        {
            label: 'Какие окна установлены?',
            id: 'window',
            option: [
                {
                    name: 'Обычные окна',
                    value: '1.27'
                },
                {
                    name: 'Двойной стеклопакет',
                    value: '1.0'
                },
                {
                    name: 'Тройной стеклопакет',
                    value: '0.85'
                }
            ]
        },
        {
            label: 'Теплоизоляция',
            id: 'thermal',
            option: [
                {
                    name: 'Низкая',
                    value: '1.27'
                },
                {
                    name: 'Хорошая',
                    value: '1.0'
                },
                {
                    name: 'Высокая',
                    value: '0.85'
                }
            ]
        },
        {
            label: 'Кол-во входных дверей',
            id: 'doors',
            option: [
                {
                    name: 'Нет',
                    value: '1.0'
                },
                {
                    name: 'Одна',
                    value: '1.3'
                },
                {
                    name: 'Две',
                    value: '1.7'
                }
            ]
        },
        {
            label: 'Соотношение S окон к полу',
            id: 'area-window',
            option: [
                {
                    name: '50%',
                    value: '1.2'
                },
                {
                    name: '40%',
                    value: '1.1'
                },
                {
                    name: '30%',
                    value: '1.0'
                },
                {
                    name: '20%',
                    value: '0.9'
                },
                {
                    name: '10%',
                    value: '0.8'
                }
            ]
        },
        {
            label: 'Самая низкая температура в регионе',
            id: 'temp',
            option: [
                {
                    name: '-35',
                    value: '1.5'
                },
                {
                    name: '-30',
                    value: '1.3'
                },
                {
                    name: '-25',
                    value: '1.2'
                },
                {
                    name: '-20',
                    value: '1.1'
                },
                {
                    name: '-15',
                    value: '0.9'
                },
                {
                    name: '-10',
                    value: '0.9'
                },
                {
                    name: '<-10',
                    value: '0.7'
                }
            ]
        },
        {
            label: 'Сколько наружних стен',
            id: 'wall',
            option: [
                {
                    name: 'Нет',
                    value: '0.8'
                },
                {
                    name: 'Одна',
                    value: '1.0'
                },
                {
                    name: 'Две',
                    value: '1.2'
                },
                {
                    name: 'Три',
                    value: '1.4'
                }
            ]
        },
        {
            label: 'С какой стороны внеш. стены',
            id: 'сardinal-points',
            option: [
                {
                    name: 'Не знаю',
                    value: '1.0'
                },
                {
                    name: 'Север, Северо-Восток, Восток',
                    value: '1.1'
                },
                {
                    name: 'Юг, Юго-запад, Запад',
                    value: '1.0'
                }
            ]
        },
        {
            label: 'Помещение относительно розы ветров',
            id: 'wind',
            option: [
                {
                    name: 'Не знаю',
                    value: '1.0'
                },
                {
                    name: 'Наветренная',
                    value: '1.2'
                },
                {
                    name: 'Подветренная',
                    value: '1.0'
                },
                {
                    name: 'Параллельно направления ветра',
                    value: '1.1'
                }
            ]
        },
        {
            label: 'Тип пола и нижнего помещения',
            id: 'bottom-room',
            option: [
                {
                    name: 'Холодный пол и неотапливаемое помещение',
                    value: '1.4'
                },
                {
                    name: 'Утепленный пол и неотапливаемое помещение',
                    value: '1.2'
                },
                {
                    name: 'Отапливаемое помещение',
                    value: '1.0'
                }
            ]
        },
        {
            label: 'Тип верхнего помещения',
            id: 'top-room',
            option: [
                {
                    name: 'Холодный чердак',
                    value: '1.0'
                },
                {
                    name: 'Отапливаемый чердак',
                    value: '0.9'
                },
                {
                    name: 'Жилое помещение',
                    value: '0.8'
                }
            ]
        },
        {
            label: 'Высота потолка в помещении',
            id: 'height',
            option: [
                {
                    name: '2.5 метра',
                    value: '1.0'
                },
                {
                    name: '3.0 метра',
                    value: '1.05'
                },
                {
                    name: '3.5 метра',
                    value: '1.1'
                },
                {
                    name: '4.0 метра',
                    value: '1.15'
                },
                {
                    name: '4.5 метра',
                    value: '1.2'
                }
            ]
        },
        {
            label: 'Схема подключения радиаторов',
            id: 'heater',
            option: [
                {
                    name: 'По диагонали, горячая сверху',
                    value: '1.0'
                },
                {
                    name: 'С одной стороны, горячая сверху',
                    value: '1.03'
                },
                {
                    name: 'Снизу вход и выход',
                    value: '1.13'
                },
                {
                    name: 'По диагонали, горячая снизу',
                    value: '1.25'
                },
                {
                    name: 'С одной стороны, горячая снизу',
                    value: '1.28'
                },
                {
                    name: 'Единый вход и выход',
                    value: '1.28'
                }
            ]
        },
        {
            label: 'Место установки радиаторов',
            id: 'install-heater',
            option: [
                {
                    name: 'Открыто на стене',
                    value: '0.9'
                },
                {
                    name: 'Под подоконник',
                    value: '1.0'
                },
                {
                    name: 'В углублении в стене',
                    value: '1.07'
                },
                {
                    name: 'Под подоконник и закрытая декор. панелью',
                    value: '1.12'
                },
                {
                    name: 'В декоративном кожухе',
                    value: '1.2'
                }
            ]
        },
        {
            label: 'Резерв мощности',
            id: 'reserve',
            option: [
                {
                    name: '0%',
                    value: '1.0'
                },
                {
                    name: '+10%',
                    value: '1.1'
                },
                {
                    name: '+20%',
                    value: '1.2'
                }
            ]
        }
    ];

//функция добавления селектов

    $.each(massivSelect, (i, elem) => {
        $('#selects').append(
            `<div class="col-sm-3 mt-3">
                <label for="${elem.id}">${elem.label}</label>
                <select class="custom-select" id="${elem.id}"></select>
            </div>`
        );
    
        $.each(elem.option, (i, opt) => {
            console.log(`${i} - ${opt.value}; ${opt.name}`);
            $(`#${elem.id}`).append(
                `<option value="${opt.value}">${opt.name}</option>`
            );
        });
    });
});