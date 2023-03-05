/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['megrim, fantasy']='<script src=\"http://use.edgefonts.net/megrim:n4:all.js\"></script>';
    fonts['righteous, sans-serif']='<script src=\"http://use.edgefonts.net/righteous:n4:all.js\"></script>';
    fonts['lobster, serif']='<script src=\"http://use.edgefonts.net/lobster:n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Alice2',
                type: 'rect',
                rect: ['32', '123','auto','auto','auto', 'auto']
            },
            {
                id: 'Marina',
                type: 'rect',
                rect: ['259', '227','auto','auto','auto', 'auto']
            },
            {
                id: 'Chloe',
                type: 'rect',
                rect: ['425', '244','auto','auto','auto', 'auto']
            },
            {
                id: 'marilyne2',
                type: 'rect',
                rect: ['639', '262','auto','auto','auto', 'auto']
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['194px', '0px','auto','auto','auto', 'auto'],
                text: "Vintage",
                align: "left",
                font: ['lobster, serif', 90, "rgba(57,57,57,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['446px', '35px','198px','96px','auto', 'auto'],
                text: "Style",
                align: "left",
                font: ['lobster, serif', 83, "rgba(231,216,182,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'Chloe',
                symbolName: 'Chloe'
            },
            {
                id: 'Alice2',
                symbolName: 'Alice'
            },
            {
                id: 'Marina',
                symbolName: 'Marina'
            },
            {
                id: 'marilyne2',
                symbolName: 'marilyne'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Alice2}": [
                ["style", "left", '35px'],
                ["style", "top", '150px']
            ],
            "${_Text5}": [
                ["style", "top", '35px'],
                ["color", "color", 'rgba(231,216,182,1.00)'],
                ["style", "font-family", 'lobster, serif'],
                ["style", "left", '446px'],
                ["style", "font-size", '83px']
            ],
            "${_Chloe}": [
                ["style", "left", '374px'],
                ["style", "top", '150px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text4}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(57,57,57,1.00)'],
                ["style", "font-family", 'lobster, serif'],
                ["style", "left", '194px'],
                ["style", "font-size", '90px']
            ],
            "${_Marina}": [
                ["style", "left", '203px'],
                ["style", "top", '150px']
            ],
            "${_marilyne2}": [
                ["style", "left", '546px'],
                ["style", "top", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${_Alice2}", "top", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Alice2}", "left", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_marilyne2}", "top", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Marina}", "left", '203px', { fromValue: '203px'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Marina}", "top", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Chloe}", "top", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Chloe}", "left", '374px', { fromValue: '374px'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_marilyne2}", "left", '546px', { fromValue: '546px'}], position: 0, duration: 0 }            ]
        }
    }
},
"Alice": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Alice',
                    type: 'image',
                    rect: ['0px', '0px', '150px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Alice.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '225px', '150px', '225px', 'auto', 'auto'],
                    id: 'fond_noir',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                },
                {
                    rect: ['52px', '192px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['megrim, fantasy', 20, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Alice',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['14px', '244px', '122px', '151px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-10px', '-12px', '167px', '256px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'action',
                    opacity: 0,
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '225px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
            ],
            "${_fond_noir}": [
                ["style", "height", '225px'],
                ["style", "top", '180px']
            ],
            "${_Alice}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text3}": [
                ["style", "top", '244px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '14px'],
                ["style", "font-size", '10px']
            ],
            "${_Text2}": [
                ["style", "top", '192px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'megrim, fantasy'],
                ["style", "left", '52px'],
                ["style", "font-size", '20px']
            ],
            "${_action}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text3}", "top", '69px', { fromValue: '244px'}], position: 0, duration: 2000 },
                { id: "eid12", tween: [ "style", "${_fond_noir}", "top", '0px', { fromValue: '180px'}], position: 0, duration: 2000 },
                { id: "eid11", tween: [ "style", "${_Text2}", "top", '17px', { fromValue: '192px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"Marina": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'marina',
                    type: 'image',
                    rect: ['0px', '0px', '150px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/marina.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '225px', '150px', '225px', 'auto', 'auto'],
                    id: 'fond_noir',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                },
                {
                    rect: ['52px', '192px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['megrim, fantasy', 20, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Marina',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['14px', '244px', '122px', '151px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-10px', '-12px', '167px', '256px', 'auto', 'auto'],
                    id: 'action',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_marina}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '225px'],
                ["style", "width", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text3}": [
                ["style", "top", '244px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '14px'],
                ["style", "font-size", '10px']
            ],
            "${_fond_noir}": [
                ["style", "height", '225px'],
                ["style", "top", '180px']
            ],
            "${_Text2}": [
                ["style", "top", '192px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'megrim, fantasy'],
                ["style", "left", '52px'],
                ["style", "font-size", '20px']
            ],
            "${_action}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text3}", "top", '69px', { fromValue: '244px'}], position: 0, duration: 2000 },
                { id: "eid12", tween: [ "style", "${_fond_noir}", "top", '0px', { fromValue: '180px'}], position: 0, duration: 2000 },
                { id: "eid11", tween: [ "style", "${_Text2}", "top", '17px', { fromValue: '192px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"Chloe": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'chloe',
                    type: 'image',
                    rect: ['0px', '0px', '150px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/chloe.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '225px', '150px', '225px', 'auto', 'auto'],
                    id: 'fond_noir',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                },
                {
                    rect: ['52px', '192px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['megrim, fantasy', 20, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Chloe',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['14px', '244px', '122px', '151px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-10px', '-12px', '167px', '256px', 'auto', 'auto'],
                    id: 'action',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2}": [
                ["style", "top", '192px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'megrim, fantasy'],
                ["style", "left", '52px'],
                ["style", "font-size", '20px']
            ],
            "${_fond_noir}": [
                ["style", "height", '225px'],
                ["style", "top", '180px']
            ],
            "${symbolSelector}": [
                ["style", "height", '225px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
            ],
            "${_Text3}": [
                ["style", "top", '244px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '14px'],
                ["style", "font-size", '10px']
            ],
            "${_chloe}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_action}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text3}", "top", '69px', { fromValue: '244px'}], position: 0, duration: 2000 },
                { id: "eid12", tween: [ "style", "${_fond_noir}", "top", '0px', { fromValue: '180px'}], position: 0, duration: 2000 },
                { id: "eid11", tween: [ "style", "${_Text2}", "top", '17px', { fromValue: '192px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"marilyne": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'mrylin',
                    type: 'image',
                    rect: ['0px', '0px', '150px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/marilyne.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '225px', '150px', '225px', 'auto', 'auto'],
                    id: 'fond_noir',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                },
                {
                    rect: ['52px', '192px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['megrim, fantasy', 20, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Marilyne',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['14px', '244px', '122px', '151px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 10, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-10px', '-12px', '167px', '256px', 'auto', 'auto'],
                    id: 'action',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(3,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mrylin}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '225px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
            ],
            "${_Text3}": [
                ["style", "top", '244px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '14px'],
                ["style", "font-size", '10px']
            ],
            "${_fond_noir}": [
                ["style", "height", '225px'],
                ["style", "top", '180px']
            ],
            "${_Text2}": [
                ["style", "top", '192px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'megrim, fantasy'],
                ["style", "left", '36px'],
                ["style", "font-size", '20px']
            ],
            "${_action}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text3}", "top", '69px', { fromValue: '244px'}], position: 0, duration: 2000 },
                { id: "eid12", tween: [ "style", "${_fond_noir}", "top", '0px', { fromValue: '180px'}], position: 0, duration: 2000 },
                { id: "eid11", tween: [ "style", "${_Text2}", "top", '17px', { fromValue: '192px'}], position: 0, duration: 2000 },
                { id: "eid19", tween: [ "style", "${_Text2}", "left", '36px', { fromValue: '36px'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-16445984");
