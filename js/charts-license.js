AmCharts.makeChart("chartdivL1", {
    type: "serial",
    categoryField: "category",
    startDuration: 1,
    fontSize: 14,
    thousandsSeparator: " ",
    theme: "default",
    categoryAxis: {
        gridPosition: "start"
    },
    trendLines: [],
    graphs: [
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            id: "AmGraph-1",
            title: "Выдано лицензий по результатам конкурса",
            type: "column",
            valueField: "column-1"
        },
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            id: "AmGraph-2",
            title: "Выдано лицензий по результатам аукциона",
            type: "column",
            valueField: "column-2"
        },
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            id: "AmGraph-3",
            title: "Выдано лицензий без конкурса для геологического изучения",
            type: "column",
            valueField: "column-3"
        },
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            fillColors: "#E994E0",
            id: "AmGraph-4",
            lineColor: "#E994E0",
            title: "Выдано лицензий в порядке переоформления (ст.17-1",
            type: "column",
            valueField: "column-4"
        },
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            fillColors: "#27CEDE",
            id: "AmGraph-5",
            lineColor: "#27CEDE",
            title: "Выдано лицензий по п.19 \"Положения о порядке лицензирования пользования недрами\"",
            type: "column",
            valueField: "column-5"
        },
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            fillColors: "#9DBC6F",
            id: "AmGraph-6",
            lineColor: "#9DBC6F",
            title: "Выдано лицензий в соответствии с ФЗ \"О соглашениях о разделе продукции\"",
            type: "column",
            valueField: "column-6"
        },
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            fillColors: "#F0C083",
            id: "AmGraph-7",
            lineColor: "#F0C083",
            title: "Выдано лицензий при установлении факта открытия месторождения",
            type: "column",
            valueField: "column-7"
        },
        {
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            fillAlphas: 1,
            fillColors: "#DEE38F",
            id: "AmGraph-8",
            lineColor: "#DEE38F",
            title: "Другие основания в соответствии с законодательством РФ",
            type: "column",
            valueField: "column-8"
        },
        {
            animationPlayed: true,
            balloonText: "[[title]] в [[category]]: <br><span style=\"font-size:18px\"><b>[[value]]</b></span>",
            bullet: "round",
            bulletSize: 10,
            id: "AmGraph-9",
            lineThickness: 2,
            title: "Выдано лицензий за отчетный период",
            valueField: "column-9"
        }
    ],
    guides: [],
    valueAxes: [
        {
            id: "ValueAxis-1",
            stackType: "regular",
            title: "кол-во"
        }
    ],
    allLabels: [],
    balloon: {},
    legend: {
        enabled: true,
        fontSize: 10,
        useGraphSettings: true
    },
    titles: [
        {
            id: "Title-1",
            size: 18,
            text: "Сведения о кол-ве выданных лицензий с основанием выдачи за 2004-2016 гг."
        }
    ],
    dataProvider: [
        {
            category: "2004",
            "column-1": "159",
            "column-2": "163",
            "column-3": "421",
            "column-4": "1283",
            "column-5": "201",
            "column-6": "1",
            "column-7": "42",
            "column-8": "747",
            "column-9": "3017"
        },
        {
            category: "2005",
            "column-1": "130",
            "column-2": "505",
            "column-3": "267",
            "column-4": "981",
            "column-5": "94",
            "column-6": "3",
            "column-7": "25",
            "column-8": "1073",
            "column-9": "3078"
        },
        {
            category: "2006",
            "column-1": "83",
            "column-2": "517",
            "column-3": "414",
            "column-4": "974",
            "column-5": "82",
            "column-6": "",
            "column-7": "38",
            "column-8": "915",
            "column-9": "3023"
        },
        {
            category: "2007",
            "column-1": "89",
            "column-2": "515",
            "column-3": "312",
            "column-4": "973",
            "column-5": "",
            "column-6": "",
            "column-7": "76",
            "column-8": "1162",
            "column-9": "3127"
        },
        {
            category: "2008",
            "column-1": "64",
            "column-2": "328",
            "column-3": "204",
            "column-4": "1007",
            "column-5": "",
            "column-6": "",
            "column-7": "31",
            "column-8": "847",
            "column-9": "2481"
        },
        {
            category: "2009",
            "column-1": "13",
            "column-2": "80",
            "column-3": "241",
            "column-4": "596",
            "column-5": "",
            "column-6": "",
            "column-7": "39",
            "column-8": "931",
            "column-9": "1900"
        },
        {
            category: "2010",
            "column-1": "24",
            "column-2": "338",
            "column-3": "179",
            "column-4": "618",
            "column-5": "59",
            "column-6": "",
            "column-7": "97",
            "column-8": "920",
            "column-9": "2235"
        },
        {
            category: "2011",
            "column-1": "25",
            "column-2": "352",
            "column-3": "286",
            "column-4": "600",
            "column-5": "69",
            "column-6": "",
            "column-7": "37",
            "column-8": "1075",
            "column-9": "2444"
        },
        {
            category: "2012",
            "column-1": "51",
            "column-2": "332",
            "column-3": "339",
            "column-4": "500",
            "column-5": "117",
            "column-6": "",
            "column-7": "31",
            "column-8": "1215",
            "column-9": "2585"
        },
        {
            category: "2013",
            "column-1": "29",
            "column-2": "415",
            "column-3": "479",
            "column-4": "463",
            "column-5": "85",
            "column-6": "0",
            "column-7": "56",
            "column-8": "1063",
            "column-9": "2590"
        },
        {
            category: "2014",
            "column-1": "22",
            "column-2": "401",
            "column-3": "469",
            "column-4": "623",
            "column-5": "57",
            "column-6": "0",
            "column-7": "48",
            "column-8": "984",
            "column-9": "2604"
        },
        {
            category: "2015",
            "column-1": "27",
            "column-2": "375",
            "column-3": "564",
            "column-4": "684",
            "column-5": "106",
            "column-6": "0",
            "column-7": "28",
            "column-8": "1258",
            "column-9": "3042"
        },
        {
            category: "2016",
            "column-1": "23",
            "column-2": "349",
            "column-3": "661",
            "column-4": "1485",
            "column-5": "34",
            "column-6": "0",
            "column-7": "38",
            "column-8": "1140",
            "column-9": "3730"
        }
    ]
});

function modalOpenL1() {
    $(".modalsL1").show();
}
function modalCloseL1() {
    $(".modalsL1").hide();
}