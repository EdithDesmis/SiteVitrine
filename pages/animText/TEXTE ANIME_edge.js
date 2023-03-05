/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['bowlby-one, sans-serif']='<script src=\"http://use.edgefonts.net/bowlby-one:n4:all.js\"></script>';
    fonts['copse, serif']='<script src=\"http://use.edgefonts.net/copse:n4:all.js\"></script>';
    fonts['doppio-one, sans-serif']='<script src=\"http://use.edgefonts.net/doppio-one:n4:all.js\"></script>';
    fonts['abril-fatface, serif']='<script src=\"http://use.edgefonts.net/abril-fatface:n4,i4:all.js\"></script>';

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
                id: 'fond',
                type: 'rect',
                rect: ['-11px', '-12px','822px','423px','auto', 'auto'],
                fill: ["rgba(44,49,58,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Group_1',
                type: 'group',
                rect: ['24', '20','900','263','auto', 'auto'],
                c: [
                {
                    id: 'JE_FAIS',
                    type: 'text',
                    rect: ['0px', '0px','659px','67px','auto', 'auto'],
                    text: "JE FAIS DE",
                    align: "left",
                    font: ['doppio-one, sans-serif', 50, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'animation',
                    type: 'text',
                    rect: ['241px', '0px','659px','67px','auto', 'auto'],
                    clip: ['rect(0px 38px 67px 0px)'],
                    text: " L'ANIMATION ",
                    align: "left",
                    font: ['doppio-one, sans-serif', 50, "rgba(142,166,71,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'DE',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '78px','auto','auto','auto', 'auto'],
                    clip: ['rect(0px 1px 62px 0px)'],
                    text: "DE",
                    align: "left",
                    font: ['doppio-one, sans-serif', 50, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'TEXTE',
                    display: 'none',
                    type: 'text',
                    rect: ['76px', '40px','574px','223px','auto', 'auto'],
                    clip: ['rect(0px 520px 199px 0px)'],
                    text: "TEXTE",
                    align: "left",
                    font: ['doppio-one, sans-serif', 170, "rgba(142,166,71,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'plutot',
                type: 'text',
                rect: ['824px', '162px','auto','auto','auto', 'auto'],
                text: "PLUTÔT",
                align: "left",
                font: ['doppio-one, sans-serif', 50, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'jessaie',
                type: 'text',
                rect: ['822px', '224px','auto','auto','auto', 'auto'],
                text: "J'ESSAIE !!!",
                align: "left",
                font: ['doppio-one, sans-serif', 65, "rgba(142,166,71,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Group2',
                type: 'group',
                rect: ['0', '26','532','429','auto', 'auto'],
                c: [
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['85px', '-12px','652','275','auto', 'auto'],
                    c: [
                    {
                        id: 'ca',
                        display: 'none',
                        type: 'text',
                        rect: ['0px', '0px','auto','auto','auto', 'auto'],
                        text: "CA",
                        align: "left",
                        font: ['doppio-one, sans-serif', 100, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'ME_PRENDS',
                        display: 'none',
                        type: 'text',
                        rect: ['7px', '112px','auto','auto','auto', 'auto'],
                        text: "ME PRENDS",
                        align: "left",
                        font: ['doppio-one, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text10',
                        display: 'none',
                        type: 'text',
                        rect: ['87px', '144px','auto','auto','auto', 'auto'],
                        text: "DU",
                        align: "left",
                        font: ['doppio-one, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'TEMPS',
                        display: 'none',
                        type: 'text',
                        rect: ['127px', '62px','auto','auto','auto', 'auto'],
                        text: "TEMPS",
                        align: "left",
                        font: ['doppio-one, sans-serif', 170, "rgba(141,173,100,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'pendule',
                    type: 'image',
                    rect: ['817px', '47px','315px','315px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"pendule.svg",'0px','0px']
                },
                {
                    id: 'point_exclam',
                    type: 'text',
                    rect: ['628px', '-312px','auto','auto','auto', 'auto'],
                    text: "!",
                    font: ['Arial, Helvetica, sans-serif', 250, "rgba(255,255,255,1.00)", "normal", "none", ""]
                }]
            },
            {
                id: 'Group3',
                type: 'group',
                rect: ['3', '28','828','381','auto', 'auto'],
                c: [
                {
                    id: 'ET',
                    display: 'none',
                    type: 'text',
                    rect: ['88px', '26px','auto','auto','auto', 'auto'],
                    text: "ET",
                    align: "left",
                    font: ['abril-fatface, serif', 100, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'le',
                    display: 'none',
                    type: 'text',
                    rect: ['161px', '116px','120px','112px','auto', 'auto'],
                    text: "le",
                    align: "left",
                    font: ['abril-fatface, serif', 100, "rgba(255,255,255,1)", "400", "none", "italic"]
                },
                {
                    id: 'T',
                    display: 'none',
                    type: 'text',
                    rect: ['221px', '2px','171px','280px','auto', 'auto'],
                    text: "T",
                    align: "left",
                    font: ['abril-fatface, serif', 294, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'E',
                    type: 'text',
                    rect: ['849px', '13px','auto','auto','auto', 'auto'],
                    text: "E",
                    align: "left",
                    font: ['abril-fatface, serif', 294, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'M',
                    type: 'text',
                    rect: ['849px', '13px','auto','auto','auto', 'auto'],
                    text: "M",
                    align: "left",
                    font: ['abril-fatface, serif', 294, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'P',
                    type: 'text',
                    rect: ['849px', '13px','auto','auto','auto', 'auto'],
                    text: "P",
                    align: "left",
                    font: ['abril-fatface, serif', 294, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'S',
                    type: 'text',
                    rect: ['849px', '13px','auto','auto','auto', 'auto'],
                    text: "S",
                    align: "left",
                    font: ['abril-fatface, serif', 294, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'cest',
                type: 'text',
                rect: ['65px', '-111px','auto','auto','auto', 'auto'],
                text: "c'est",
                align: "left",
                font: ['abril-fatface, serif', 100, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'de',
                type: 'text',
                rect: ['-70px', '80px','auto','auto','auto', 'auto'],
                text: "de",
                align: "left",
                font: ['abril-fatface, serif', 50, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'argent',
                display: 'none',
                type: 'text',
                rect: ['51px', '135px','auto','auto','auto', 'auto'],
                text: "L'ARGENT",
                align: "left",
                font: ['abril-fatface, serif', 150, "rgba(255,255,255,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Group3}": [
                ["style", "left", '3px']
            ],
            "${_cest}": [
                ["style", "top", '-70px'],
                ["style", "left", '64px'],
                ["style", "font-size", '50px']
            ],
            "${_jessaie}": [
                ["style", "top", '224px'],
                ["color", "color", 'rgba(142,166,71,1.00)'],
                ["style", "left", '820px'],
                ["style", "font-size", '65px']
            ],
            "${_DE}": [
                ["style", "top", '78px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'doppio-one, sans-serif'],
                ["style", "clip", [0,62,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_ET}": [
                ["style", "top", '26px'],
                ["style", "font-family", 'abril-fatface, serif'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_ME_PRENDS}": [
                ["style", "top", '112px'],
                ["style", "display", 'none'],
                ["style", "left", '7px'],
                ["style", "font-size", '20px']
            ],
            "${_P}": [
                ["style", "top", '101px'],
                ["style", "width", 'autopx'],
                ["style", "left", '832px'],
                ["style", "font-size", '180px']
            ],
            "${_M}": [
                ["style", "top", '103px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "width", 'autopx'],
                ["style", "left", '832px'],
                ["style", "font-size", '180px']
            ],
            "${_S}": [
                ["style", "top", '101px'],
                ["style", "width", 'autopx'],
                ["style", "left", '832px'],
                ["style", "font-size", '180px']
            ],
            "${_E}": [
                ["style", "top", '101px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "width", 'autopx'],
                ["style", "left", '832px'],
                ["style", "font-size", '180px']
            ],
            "${_animation}": [
                ["style", "top", '0px'],
                ["style", "font-size", '50px'],
                ["style", "clip", [0,0,67,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(142,166,71,1.00)'],
                ["style", "height", '67px'],
                ["style", "font-family", 'doppio-one, sans-serif'],
                ["style", "left", '241px'],
                ["style", "width", '659px']
            ],
            "${_de}": [
                ["style", "left", '-70px'],
                ["style", "top", '80px']
            ],
            "${_point_exclam}": [
                ["style", "top", '-312px'],
                ["transform", "scaleY", '1.5'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '628px'],
                ["style", "font-size", '250px']
            ],
            "${_argent}": [
                ["style", "top", '247px'],
                ["subproperty", "filter.grayscale", '0'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '56px'],
                ["style", "font-size", '20px']
            ],
            "${_fond}": [
                ["style", "top", '-12px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '423px'],
                ["color", "background-color", 'rgba(44,49,58,1.00)'],
                ["style", "left", '-11px'],
                ["style", "width", '822px']
            ],
            "${_Group2}": [
                ["style", "top", '26px'],
                ["style", "left", '0px']
            ],
            "${_JE_FAIS}": [
                ["style", "top", '0px'],
                ["style", "width", '659px'],
                ["style", "clip", [0,19,67,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '67px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'doppio-one, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '50px']
            ],
            "${_pendule}": [
                ["style", "top", '47px'],
                ["style", "left", '817px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_plutot}": [
                ["style", "left", '846px'],
                ["style", "top", '169px']
            ],
            "${_Text10}": [
                ["style", "top", '144px'],
                ["style", "left", '87px'],
                ["style", "display", 'none']
            ],
            "${_Group}": [
                ["style", "-webkit-transform-origin", [2.3,95.27], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [2.3,95.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [2.3,95.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [2.3,95.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [2.3,95.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [2.3,95.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '85px'],
                ["style", "top", '-12px']
            ],
            "${_TEMPS}": [
                ["style", "top", '418px'],
                ["color", "color", 'rgba(141,173,100,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '127px'],
                ["style", "font-size", '170px']
            ],
            "${_le}": [
                ["style", "font-style", 'italic'],
                ["style", "display", 'none'],
                ["style", "left", '73px'],
                ["style", "top", '116px']
            ],
            "${_T}": [
                ["style", "top", '2px'],
                ["style", "display", 'none'],
                ["style", "width", '171px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '280px'],
                ["style", "left", '133px'],
                ["style", "font-size", '294px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TEXTE}": [
                ["transform", "scaleX", '0.2'],
                ["style", "left", '76px'],
                ["style", "font-size", '170px'],
                ["style", "top", '40px'],
                ["color", "color", 'rgba(142,166,71,1.00)'],
                ["transform", "scaleY", '0.2'],
                ["style", "display", 'none'],
                ["style", "height", '223px'],
                ["style", "font-family", 'doppio-one, sans-serif'],
                ["style", "clip", [0,520,199,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '574px']
            ],
            "${_ca}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "font-size", '100px']
            ],
            "${_Group_1}": [
                ["style", "top", '37px'],
                ["style", "left", '43px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 18500,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_ca}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_ca}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid54", tween: [ "style", "${_jessaie}", "left", '475px', { fromValue: '820px'}], position: 5750, duration: 500, easing: "easeOutBack" },
                { id: "eid60", tween: [ "style", "${_jessaie}", "left", '475px', { fromValue: '475px'}], position: 6750, duration: 0 },
                { id: "eid30", tween: [ "transform", "${_TEXTE}", "scaleY", '1', { fromValue: '0.2'}], position: 2750, duration: 1380 },
                { id: "eid346", tween: [ "style", "${_cest}", "left", '64px', { fromValue: '64px'}], position: 16250, duration: 0, easing: "easeOutBack" },
                { id: "eid67", tween: [ "style", "${_TEXTE}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_TEXTE}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid21", tween: [ "style", "${_TEXTE}", "display", 'block', { fromValue: 'block'}], position: 4130, duration: 0 },
                { id: "eid354", tween: [ "style", "${_argent}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid355", tween: [ "style", "${_argent}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0, easing: "easeOutBack" },
                { id: "eid351", tween: [ "style", "${_argent}", "display", 'block', { fromValue: 'block'}], position: 18500, duration: 0, easing: "easeOutBack" },
                { id: "eid79", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Group_1}", "top", '-64px', { fromValue: '37px'}], position: 4130, duration: 870 },
                { id: "eid58", tween: [ "style", "${_Group_1}", "top", '-372px', { fromValue: '-64px'}], position: 6250, duration: 500 },
                { id: "eid337", tween: [ "style", "${_S}", "top", '101px', { fromValue: '101px'}], position: 15250, duration: 0, easing: "easeOutQuad" },
                { id: "eid308", tween: [ "style", "${_E}", "font-size", '180px', { fromValue: '180px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid324", tween: [ "style", "${_S}", "left", '678px', { fromValue: '832px'}], position: 15000, duration: 250, easing: "easeOutQuad" },
                { id: "eid309", tween: [ "style", "${_M}", "font-size", '180px', { fromValue: '180px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid249", tween: [ "style", "${_le}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid248", tween: [ "style", "${_le}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0, easing: "easeOutQuad" },
                { id: "eid329", tween: [ "style", "${_ET}", "left", '0px', { fromValue: '0px'}], position: 15250, duration: 0, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_TEMPS}", "top", '62px', { fromValue: '418px'}], position: 7750, duration: 500, easing: "easeOutQuad" },
                { id: "eid310", tween: [ "style", "${_P}", "font-size", '180px', { fromValue: '180px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_ET}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "style", "${_ET}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_DE}", "clip", [0,62,62,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,62,62,0]}], position: 2500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_DE}", "clip", [0,62,62,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,62,62,0]}], position: 2750, duration: 0 },
                { id: "eid49", tween: [ "style", "${_jessaie}", "top", '224px', { fromValue: '224px'}], position: 5750, duration: 0 },
                { id: "eid53", tween: [ "style", "${_jessaie}", "top", '224px', { fromValue: '224px'}], position: 6250, duration: 0 },
                { id: "eid64", tween: [ "style", "${_jessaie}", "top", '-111px', { fromValue: '224px'}], position: 6750, duration: 500 },
                { id: "eid336", tween: [ "style", "${_T}", "top", '0px', { fromValue: '2px'}], position: 14000, duration: 1250, easing: "easeOutQuad" },
                { id: "eid125", tween: [ "style", "${_Group}", "top", '-12px', { fromValue: '-12px'}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid127", tween: [ "style", "${_Group}", "top", '60px', { fromValue: '-12px'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid213", tween: [ "transform", "${_point_exclam}", "scaleY", '1.5', { fromValue: '1.5'}], position: 12000, duration: 0 },
                { id: "eid330", tween: [ "style", "${_ET}", "top", '24px', { fromValue: '26px'}], position: 13500, duration: 1750, easing: "easeOutQuad" },
                { id: "eid77", tween: [ "style", "${_ME_PRENDS}", "left", '7px', { fromValue: '7px'}], position: 7500, duration: 0 },
                { id: "eid311", tween: [ "style", "${_S}", "font-size", '180px', { fromValue: '180px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid322", tween: [ "style", "${_P}", "left", '661px', { fromValue: '832px'}], position: 14750, duration: 250, easing: "easeOutQuad" },
                { id: "eid325", tween: [ "style", "${_P}", "left", '573px', { fromValue: '661px'}], position: 15000, duration: 250, easing: "easeOutQuad" },
                { id: "eid335", tween: [ "style", "${_T}", "left", '133px', { fromValue: '133px'}], position: 15250, duration: 0, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "transform", "${_Group}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 8500, duration: 500, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "transform", "${_Group}", "rotateZ", '-90deg', { fromValue: '-30deg'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid81", tween: [ "style", "${_TEMPS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_TEMPS}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_JE_FAIS}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid74", tween: [ "style", "${_ME_PRENDS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_ME_PRENDS}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid328", tween: [ "style", "${_le}", "top", '114px', { fromValue: '116px'}], position: 13750, duration: 1500, easing: "easeOutQuad" },
                { id: "eid356", tween: [ "style", "${_argent}", "opacity", '1', { fromValue: '0'}], position: 17250, duration: 1250, easing: "easeOutBack" },
                { id: "eid326", tween: [ "style", "${_P}", "top", '101px', { fromValue: '101px'}], position: 15250, duration: 0, easing: "easeOutQuad" },
                { id: "eid332", tween: [ "style", "${_M}", "top", '101px', { fromValue: '103px'}], position: 14500, duration: 750, easing: "easeOutQuad" },
                { id: "eid119", tween: [ "transform", "${_Group}", "scaleY", '0.5', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid118", tween: [ "transform", "${_Group}", "scaleX", '0.5', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "style", "${_T}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid251", tween: [ "style", "${_T}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0, easing: "easeOutQuad" },
                { id: "eid360", tween: [ "style", "${_argent}", "left", '49px', { fromValue: '56px'}], position: 17250, duration: 1250, easing: "easeOutBack" },
                { id: "eid376", tween: [ "transform", "${_E}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 14250, duration: 250, easing: "easeOutQuad" },
                { id: "eid377", tween: [ "transform", "${_E}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 14500, duration: 250, easing: "easeOutQuad" },
                { id: "eid362", tween: [ "style", "${_argent}", "top", '146px', { fromValue: '247px'}], position: 17250, duration: 1250, easing: "easeOutBack" },
                { id: "eid210", tween: [ "style", "${_point_exclam}", "top", '71px', { fromValue: '-312px'}], position: 11250, duration: 750, easing: "easeOutElastic" },
                { id: "eid380", tween: [ "transform", "${_M}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 14500, duration: 250, easing: "easeOutQuad" },
                { id: "eid381", tween: [ "transform", "${_M}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 14750, duration: 500, easing: "easeOutQuad" },
                { id: "eid359", tween: [ "style", "${_argent}", "font-size", '150px', { fromValue: '20px'}], position: 17250, duration: 1250, easing: "easeOutBack" },
                { id: "eid350", tween: [ "style", "${_de}", "left", '105px', { fromValue: '-70px'}], position: 16750, duration: 500, easing: "easeOutBack" },
                { id: "eid212", tween: [ "transform", "${_point_exclam}", "scaleX", '1.5', { fromValue: '1'}], position: 11250, duration: 750, easing: "easeOutElastic" },
                { id: "eid319", tween: [ "style", "${_M}", "left", '511px', { fromValue: '832px'}], position: 14500, duration: 250, easing: "easeOutQuad" },
                { id: "eid331", tween: [ "style", "${_M}", "left", '423px', { fromValue: '511px'}], position: 14750, duration: 500, easing: "easeOutQuad" },
                { id: "eid71", tween: [ "style", "${_ca}", "left", '0px', { fromValue: '0px'}], position: 7250, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Group_1}", "left", '-17px', { fromValue: '43px'}], position: 4130, duration: 870 },
                { id: "eid57", tween: [ "style", "${_Group_1}", "left", '-365px', { fromValue: '-17px'}], position: 6250, duration: 500 },
                { id: "eid110", tween: [ "style", "${_Group}", "-webkit-transform-origin", [2.3,95.27], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.3,95.27]}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid392", tween: [ "style", "${_Group}", "-moz-transform-origin", [2.3,95.27], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.3,95.27]}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid393", tween: [ "style", "${_Group}", "-ms-transform-origin", [2.3,95.27], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.3,95.27]}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid394", tween: [ "style", "${_Group}", "msTransformOrigin", [2.3,95.27], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.3,95.27]}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid395", tween: [ "style", "${_Group}", "-o-transform-origin", [2.3,95.27], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.3,95.27]}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid396", tween: [ "style", "${_Group}", "transform-origin", [2.3,95.27], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.3,95.27]}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_TEXTE}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_TEXTE}", "top", '40px', { fromValue: '40px'}], position: 2750, duration: 0 },
                { id: "eid348", tween: [ "style", "${_cest}", "top", '24px', { fromValue: '-70px'}], position: 16250, duration: 500, easing: "easeOutBack" },
                { id: "eid129", tween: [ "transform", "${_pendule}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8750, duration: 0, easing: "easeOutQuad" },
                { id: "eid131", tween: [ "transform", "${_pendule}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 9750, duration: 1500, easing: "easeOutBounce" },
                { id: "eid184", tween: [ "color", "${_TEXTE}", "color", 'rgba(142,166,71,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,166,71,1.00)'}], position: 3355, duration: 0 },
                { id: "eid185", tween: [ "color", "${_TEXTE}", "color", 'rgba(142,166,71,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,166,71,1.00)'}], position: 7250, duration: 0 },
                { id: "eid34", tween: [ "transform", "${_Group_1}", "rotateZ", '-35deg', { fromValue: '0deg'}], position: 4130, duration: 870 },
                { id: "eid327", tween: [ "style", "${_le}", "left", '73px', { fromValue: '73px'}], position: 15250, duration: 0, easing: "easeOutQuad" },
                { id: "eid270", tween: [ "style", "${_E}", "left", '399px', { fromValue: '832px'}], position: 14250, duration: 250, easing: "easeOutQuad" },
                { id: "eid333", tween: [ "style", "${_E}", "left", '311px', { fromValue: '399px'}], position: 14500, duration: 750, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_plutot}", "top", '162px', { fromValue: '169px'}], position: 5000, duration: 750 },
                { id: "eid63", tween: [ "style", "${_plutot}", "top", '-173px', { fromValue: '162px'}], position: 6750, duration: 500 },
                { id: "eid109", tween: [ "style", "${_Group}", "left", '85px', { fromValue: '85px'}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid126", tween: [ "style", "${_Group}", "left", '116px', { fromValue: '85px'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid114", tween: [ "style", "${_pendule}", "left", '400px', { fromValue: '817px'}], position: 8750, duration: 250, easing: "easeOutBounce" },
                { id: "eid134", tween: [ "style", "${_pendule}", "left", '134px', { fromValue: '400px'}], position: 9000, duration: 2250, easing: "easeOutBounce" },
                { id: "eid339", tween: [ "style", "${_Group3}", "left", '-828px', { fromValue: '3px'}], position: 15250, duration: 1000, easing: "easeOutBack" },
                { id: "eid10", tween: [ "style", "${_JE_FAIS}", "clip", [0,19,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,19,67,0]}], position: 250, duration: 0 },
                { id: "eid11", tween: [ "style", "${_JE_FAIS}", "clip", [0,47.25,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,19,67,0]}], position: 500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_JE_FAIS}", "clip", [0,84.54000091552734,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,47.25,67,0]}], position: 750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_JE_FAIS}", "clip", [0,117.30999755859375,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,84.54000091552734,67,0]}], position: 1000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_JE_FAIS}", "clip", [0,169.2899932861328,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,117.30999755859375,67,0]}], position: 1250, duration: 0 },
                { id: "eid15", tween: [ "style", "${_JE_FAIS}", "clip", [0,204.3199920654297,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169.2899932861328,67,0]}], position: 1500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_JE_FAIS}", "clip", [0,245,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,204.3199920654297,67,0]}], position: 1750, duration: 0 },
                { id: "eid47", tween: [ "style", "${_plutot}", "left", '475px', { fromValue: '846px'}], position: 5000, duration: 750 },
                { id: "eid59", tween: [ "style", "${_plutot}", "left", '475px', { fromValue: '475px'}], position: 6750, duration: 0 },
                { id: "eid334", tween: [ "style", "${_E}", "top", '101px', { fromValue: '101px'}], position: 15250, duration: 0, easing: "easeOutQuad" },
                { id: "eid239", tween: [ "style", "${_Group2}", "top", '25px', { fromValue: '26px'}], position: 12500, duration: 750, easing: "easeOutBounce" },
                { id: "eid343", tween: [ "style", "${_cest}", "font-size", '50px', { fromValue: '50px'}], position: 16250, duration: 0, easing: "easeOutBack" },
                { id: "eid238", tween: [ "style", "${_Group2}", "left", '-554px', { fromValue: '0px'}], position: 12500, duration: 750, easing: "easeOutBounce" },
                { id: "eid65", tween: [ "style", "${_DE}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid66", tween: [ "style", "${_DE}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid106", tween: [ "style", "${_TEXTE}", "font-size", '170px', { fromValue: '170px'}], position: 2750, duration: 0 },
                { id: "eid186", tween: [ "style", "${_TEXTE}", "font-size", '170px', { fromValue: '170px'}], position: 4130, duration: 0 },
                { id: "eid187", tween: [ "style", "${_TEXTE}", "font-size", '170px', { fromValue: '170px'}], position: 7250, duration: 0 },
                { id: "eid29", tween: [ "transform", "${_TEXTE}", "scaleX", '1', { fromValue: '0.2'}], position: 2750, duration: 1380 },
                { id: "eid208", tween: [ "style", "${_point_exclam}", "left", '628px', { fromValue: '628px'}], position: 11250, duration: 0 },
                { id: "eid233", tween: [ "style", "${_point_exclam}", "left", '446px', { fromValue: '628px'}], position: 12000, duration: 500, easing: "easeOutElastic" },
                { id: "eid20", tween: [ "style", "${_animation}", "clip", [0,319,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,67,0]}], position: 1750, duration: 750 }            ]
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
})(jQuery, AdobeEdge, "EDGE-26287930");
