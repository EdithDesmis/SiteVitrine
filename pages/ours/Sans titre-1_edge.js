/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
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
                id: 'shadow',
                type: 'image',
                rect: ['74px', '263px','42px','5px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
            },
            {
                id: 'jambe_droite',
                type: 'image',
                rect: ['87px', '189px','32px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OursTracesParts-026.svg",'0px','0px']
            },
            {
                id: 'jambe_gauche',
                type: 'image',
                rect: ['135px', '189px','32px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OursTracesParts-015.svg",'0px','0px']
            },
            {
                id: 'corps',
                type: 'image',
                rect: ['84px', '129px','83px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OursTracesParts-039.svg",'0px','0px']
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['252px', '255px','1px','2px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'brasdroit',
                type: 'image',
                rect: ['70px', '132px','30px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OursTracesParts-055.svg",'0px','0px']
            },
            {
                id: 'bras_gauche',
                type: 'image',
                rect: ['152px', '131px','30px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OursTracesParts-045.svg",'0px','0px']
            },
            {
                id: 'tete',
                type: 'image',
                rect: ['61px', '29px','129px','110px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OursTracesParts-065.svg",'0px','0px']
            },
            {
                id: 'Ellipsetete',
                type: 'ellipse',
                rect: ['268px', '63px','32px','32px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'EllipsebrasD',
                type: 'ellipse',
                rect: ['268px', '109px','30px','30px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['307px', '67px','auto','auto','auto', 'auto'],
                text: "tete",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['307px', '111px','auto','auto','auto', 'auto'],
                text: " bras droit",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'EllipsebrasG',
                type: 'ellipse',
                rect: ['269px', '157px','28px','28px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['307px', '157px','auto','auto','auto', 'auto'],
                text: " bras gauche",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'EllipsejambeD',
                type: 'ellipse',
                rect: ['269px', '198px','28px','28px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['307px', '198px','auto','auto','auto', 'auto'],
                text: "Jambe droite",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'EllipsejambeG',
                type: 'ellipse',
                rect: ['269px', '237px','28px','28px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['307px', '237px','auto','auto','auto', 'auto'],
                text: "Jambe gauche",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Ellipsesaut',
                type: 'ellipse',
                rect: ['269px', '274px','28px','28px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TextCopy7',
                type: 'text',
                rect: ['307px', '274px','auto','auto','auto', 'auto'],
                text: "saut",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_shadow}": [
                ["style", "top", '297px'],
                ["transform", "scaleX", '1'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '72px'],
                ["style", "width", '109px']
            ],
            "${_tete}": [
                ["style", "top", '74px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '110px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '60px'],
                ["style", "width", '129px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '274px'],
                ["style", "left", '307px']
            ],
            "${_EllipsejambeG}": [
                ["style", "height", '28px'],
                ["style", "top", '237px'],
                ["style", "left", '269px'],
                ["style", "width", '28px']
            ],
            "${_corps}": [
                ["style", "top", '174px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '75px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '83px'],
                ["style", "width", '83px']
            ],
            "${_jambe_droite}": [
                ["style", "top", '234px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '68px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '86px'],
                ["style", "width", '32px']
            ],
            "${_EllipsebrasG}": [
                ["style", "top", '157px'],
                ["style", "height", '28px'],
                ["style", "left", '269px'],
                ["style", "width", '28px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '157px'],
                ["style", "left", '307px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '198px'],
                ["style", "left", '307px']
            ],
            "${_EllipsejambeD}": [
                ["style", "top", '198px'],
                ["style", "height", '28px'],
                ["style", "left", '269px'],
                ["style", "width", '28px']
            ],
            "${_Ellipsesaut}": [
                ["style", "height", '28px'],
                ["style", "top", '274px'],
                ["style", "left", '269px'],
                ["style", "width", '28px']
            ],
            "${_brasdroit}": [
                ["style", "top", '177px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '72px'],
                ["style", "left", '69px'],
                ["style", "width", '30px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '237px'],
                ["style", "left", '307px']
            ],
            "${_EllipsebrasD}": [
                ["style", "top", '109px'],
                ["style", "height", '30px'],
                ["style", "left", '268px'],
                ["style", "width", '30px']
            ],
            "${_bras_gauche}": [
                ["style", "top", '176px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '72px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '151px'],
                ["style", "width", '30px']
            ],
            "${_jambe_gauche}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '134px'],
                ["style", "width", '32px'],
                ["style", "top", '234px'],
                ["style", "height", '68px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text}": [
                ["style", "top", '67px'],
                ["style", "left", '307px']
            ],
            "${_Ellipsetete}": [
                ["style", "top", '63px'],
                ["style", "height", '32px'],
                ["style", "left", '268px'],
                ["style", "width", '32px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '111px'],
                ["style", "left", '307px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8500,
            autoPlay: true,
            labels: {
                "tete": 250,
                "brasG": 2500,
                "brasD": 3750,
                "jambeG": 5000,
                "jambeD": 6250,
                "saut": 7500
            },
            timeline: [
                { id: "eid301", tween: [ "style", "${_bras_gauche}", "left", '153px', { fromValue: '151px'}], position: 7500, duration: 500 },
                { id: "eid302", tween: [ "style", "${_bras_gauche}", "left", '151px', { fromValue: '153px'}], position: 8000, duration: 500 },
                { id: "eid151", tween: [ "transform", "${_jambe_gauche}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 5000, duration: 500 },
                { id: "eid152", tween: [ "transform", "${_jambe_gauche}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 5500, duration: 500 },
                { id: "eid239", tween: [ "transform", "${_jambe_gauche}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 7500, duration: 500 },
                { id: "eid240", tween: [ "transform", "${_jambe_gauche}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 8000, duration: 500 },
                { id: "eid2", tween: [ "style", "${_shadow}", "height", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "style", "${_bras_gauche}", "top", '108px', { fromValue: '176px'}], position: 7500, duration: 500 },
                { id: "eid304", tween: [ "style", "${_bras_gauche}", "top", '176px', { fromValue: '108px'}], position: 8000, duration: 500 },
                { id: "eid21", tween: [ "style", "${_jambe_droite}", "left", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
                { id: "eid297", tween: [ "style", "${_jambe_droite}", "left", '88px', { fromValue: '86px'}], position: 7500, duration: 500 },
                { id: "eid298", tween: [ "style", "${_jambe_droite}", "left", '86px', { fromValue: '88px'}], position: 8000, duration: 500 },
                { id: "eid157", tween: [ "style", "${_jambe_gauche}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 5000, duration: 1000 },
                { id: "eid1153", tween: [ "style", "${_jambe_gauche}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 5000, duration: 1000 },
                { id: "eid1154", tween: [ "style", "${_jambe_gauche}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 5000, duration: 1000 },
                { id: "eid1155", tween: [ "style", "${_jambe_gauche}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 5000, duration: 1000 },
                { id: "eid1156", tween: [ "style", "${_jambe_gauche}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 5000, duration: 1000 },
                { id: "eid1157", tween: [ "style", "${_jambe_gauche}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 5000, duration: 1000 },
                { id: "eid238", tween: [ "style", "${_jambe_gauche}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1158", tween: [ "style", "${_jambe_gauche}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1159", tween: [ "style", "${_jambe_gauche}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1160", tween: [ "style", "${_jambe_gauche}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1161", tween: [ "style", "${_jambe_gauche}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1162", tween: [ "style", "${_jambe_gauche}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid253", tween: [ "style", "${_tete}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid24", tween: [ "style", "${_corps}", "top", '174px', { fromValue: '174px'}], position: 0, duration: 0 },
                { id: "eid307", tween: [ "style", "${_corps}", "top", '106px', { fromValue: '174px'}], position: 7500, duration: 500 },
                { id: "eid308", tween: [ "style", "${_corps}", "top", '174px', { fromValue: '106px'}], position: 8000, duration: 500 },
                { id: "eid285", tween: [ "style", "${_brasdroit}", "left", '71px', { fromValue: '69px'}], position: 7500, duration: 500 },
                { id: "eid286", tween: [ "style", "${_brasdroit}", "left", '69px', { fromValue: '71px'}], position: 8000, duration: 500 },
                { id: "eid76", tween: [ "transform", "${_brasdroit}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 3750, duration: 500 },
                { id: "eid77", tween: [ "transform", "${_brasdroit}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 4250, duration: 500 },
                { id: "eid236", tween: [ "transform", "${_brasdroit}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 7500, duration: 500 },
                { id: "eid237", tween: [ "transform", "${_brasdroit}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 8000, duration: 500 },
                { id: "eid255", tween: [ "style", "${_brasdroit}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid254", tween: [ "style", "${_bras_gauche}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid311", tween: [ "style", "${_shadow}", "opacity", '0.63703703703704', { fromValue: '1'}], position: 7500, duration: 500 },
                { id: "eid312", tween: [ "style", "${_shadow}", "opacity", '1', { fromValue: '0.63703703703704'}], position: 8000, duration: 500 },
                { id: "eid25", tween: [ "style", "${_corps}", "left", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_corps}", "left", '85px', { fromValue: '83px'}], position: 7500, duration: 500 },
                { id: "eid306", tween: [ "style", "${_corps}", "left", '83px', { fromValue: '85px'}], position: 8000, duration: 500 },
                { id: "eid1", tween: [ "transform", "${_shadow}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid249", tween: [ "transform", "${_shadow}", "scaleX", '1.5', { fromValue: '1'}], position: 7500, duration: 500 },
                { id: "eid250", tween: [ "transform", "${_shadow}", "scaleX", '1', { fromValue: '1.5'}], position: 8000, duration: 500 },
                { id: "eid291", tween: [ "style", "${_jambe_gauche}", "top", '166px', { fromValue: '234px'}], position: 7500, duration: 500 },
                { id: "eid292", tween: [ "style", "${_jambe_gauche}", "top", '234px', { fromValue: '166px'}], position: 8000, duration: 500 },
                { id: "eid287", tween: [ "style", "${_brasdroit}", "top", '109px', { fromValue: '177px'}], position: 7500, duration: 500 },
                { id: "eid288", tween: [ "style", "${_brasdroit}", "top", '177px', { fromValue: '109px'}], position: 8000, duration: 500 },
                { id: "eid252", tween: [ "style", "${_corps}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1163", tween: [ "style", "${_corps}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1164", tween: [ "style", "${_corps}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1165", tween: [ "style", "${_corps}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1166", tween: [ "style", "${_corps}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1167", tween: [ "style", "${_corps}", "transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid260", tween: [ "style", "${_corps}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1168", tween: [ "style", "${_corps}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1169", tween: [ "style", "${_corps}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1170", tween: [ "style", "${_corps}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1171", tween: [ "style", "${_corps}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1172", tween: [ "style", "${_corps}", "transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid289", tween: [ "style", "${_jambe_gauche}", "left", '136px', { fromValue: '134px'}], position: 7500, duration: 500 },
                { id: "eid290", tween: [ "style", "${_jambe_gauche}", "left", '134px', { fromValue: '136px'}], position: 8000, duration: 500 },
                { id: "eid258", tween: [ "style", "${_jambe_droite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid244", tween: [ "style", "${_shadow}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1173", tween: [ "style", "${_shadow}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1174", tween: [ "style", "${_shadow}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1175", tween: [ "style", "${_shadow}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1176", tween: [ "style", "${_shadow}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid1177", tween: [ "style", "${_shadow}", "transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7500, duration: 0 },
                { id: "eid245", tween: [ "style", "${_shadow}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1178", tween: [ "style", "${_shadow}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1179", tween: [ "style", "${_shadow}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1180", tween: [ "style", "${_shadow}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1181", tween: [ "style", "${_shadow}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid1182", tween: [ "style", "${_shadow}", "transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8500, duration: 0 },
                { id: "eid256", tween: [ "style", "${_corps}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid295", tween: [ "style", "${_tete}", "top", '6px', { fromValue: '74px'}], position: 7500, duration: 500 },
                { id: "eid296", tween: [ "style", "${_tete}", "top", '74px', { fromValue: '6px'}], position: 8000, duration: 500 },
                { id: "eid257", tween: [ "style", "${_jambe_gauche}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid30", tween: [ "transform", "${_tete}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 500 },
                { id: "eid31", tween: [ "transform", "${_tete}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 750, duration: 500 },
                { id: "eid46", tween: [ "transform", "${_tete}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 1250, duration: 500 },
                { id: "eid47", tween: [ "transform", "${_tete}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 1750, duration: 500 },
                { id: "eid3", tween: [ "style", "${_shadow}", "width", '109px', { fromValue: '109px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_bras_gauche}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2500, duration: 0 },
                { id: "eid1183", tween: [ "style", "${_bras_gauche}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2500, duration: 0 },
                { id: "eid1184", tween: [ "style", "${_bras_gauche}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2500, duration: 0 },
                { id: "eid1185", tween: [ "style", "${_bras_gauche}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2500, duration: 0 },
                { id: "eid1186", tween: [ "style", "${_bras_gauche}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2500, duration: 0 },
                { id: "eid1187", tween: [ "style", "${_bras_gauche}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_bras_gauche}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 3500, duration: 0 },
                { id: "eid1188", tween: [ "style", "${_bras_gauche}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 3500, duration: 0 },
                { id: "eid1189", tween: [ "style", "${_bras_gauche}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 3500, duration: 0 },
                { id: "eid1190", tween: [ "style", "${_bras_gauche}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 3500, duration: 0 },
                { id: "eid1191", tween: [ "style", "${_bras_gauche}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 3500, duration: 0 },
                { id: "eid1192", tween: [ "style", "${_bras_gauche}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 3500, duration: 0 },
                { id: "eid230", tween: [ "style", "${_bras_gauche}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7500, duration: 0 },
                { id: "eid1193", tween: [ "style", "${_bras_gauche}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7500, duration: 0 },
                { id: "eid1194", tween: [ "style", "${_bras_gauche}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7500, duration: 0 },
                { id: "eid1195", tween: [ "style", "${_bras_gauche}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7500, duration: 0 },
                { id: "eid1196", tween: [ "style", "${_bras_gauche}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7500, duration: 0 },
                { id: "eid1197", tween: [ "style", "${_bras_gauche}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7500, duration: 0 },
                { id: "eid231", tween: [ "style", "${_bras_gauche}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid1198", tween: [ "style", "${_bras_gauche}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid1199", tween: [ "style", "${_bras_gauche}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid1200", tween: [ "style", "${_bras_gauche}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid1201", tween: [ "style", "${_bras_gauche}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid1202", tween: [ "style", "${_bras_gauche}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_jambe_droite}", "top", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid299", tween: [ "style", "${_jambe_droite}", "top", '166px', { fromValue: '234px'}], position: 7500, duration: 500 },
                { id: "eid300", tween: [ "style", "${_jambe_droite}", "top", '234px', { fromValue: '166px'}], position: 8000, duration: 500 },
                { id: "eid159", tween: [ "transform", "${_jambe_droite}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 6250, duration: 500 },
                { id: "eid160", tween: [ "transform", "${_jambe_droite}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 6750, duration: 500 },
                { id: "eid242", tween: [ "transform", "${_jambe_droite}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 7500, duration: 500 },
                { id: "eid243", tween: [ "transform", "${_jambe_droite}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 8000, duration: 500 },
                { id: "eid148", tween: [ "style", "${_brasdroit}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 3750, duration: 500 },
                { id: "eid1203", tween: [ "style", "${_brasdroit}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 3750, duration: 500 },
                { id: "eid1204", tween: [ "style", "${_brasdroit}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 3750, duration: 500 },
                { id: "eid1205", tween: [ "style", "${_brasdroit}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 3750, duration: 500 },
                { id: "eid1206", tween: [ "style", "${_brasdroit}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 3750, duration: 500 },
                { id: "eid1207", tween: [ "style", "${_brasdroit}", "transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 3750, duration: 500 },
                { id: "eid161", tween: [ "style", "${_brasdroit}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 4250, duration: 500 },
                { id: "eid1208", tween: [ "style", "${_brasdroit}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 4250, duration: 500 },
                { id: "eid1209", tween: [ "style", "${_brasdroit}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 4250, duration: 500 },
                { id: "eid1210", tween: [ "style", "${_brasdroit}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 4250, duration: 500 },
                { id: "eid1211", tween: [ "style", "${_brasdroit}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 4250, duration: 500 },
                { id: "eid1212", tween: [ "style", "${_brasdroit}", "transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 4250, duration: 500 },
                { id: "eid234", tween: [ "style", "${_brasdroit}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 7500, duration: 500 },
                { id: "eid1213", tween: [ "style", "${_brasdroit}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 7500, duration: 500 },
                { id: "eid1214", tween: [ "style", "${_brasdroit}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 7500, duration: 500 },
                { id: "eid1215", tween: [ "style", "${_brasdroit}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 7500, duration: 500 },
                { id: "eid1216", tween: [ "style", "${_brasdroit}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 7500, duration: 500 },
                { id: "eid1217", tween: [ "style", "${_brasdroit}", "transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 7500, duration: 500 },
                { id: "eid235", tween: [ "style", "${_brasdroit}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 8000, duration: 500 },
                { id: "eid1218", tween: [ "style", "${_brasdroit}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 8000, duration: 500 },
                { id: "eid1219", tween: [ "style", "${_brasdroit}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 8000, duration: 500 },
                { id: "eid1220", tween: [ "style", "${_brasdroit}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 8000, duration: 500 },
                { id: "eid1221", tween: [ "style", "${_brasdroit}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 8000, duration: 500 },
                { id: "eid1222", tween: [ "style", "${_brasdroit}", "transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 8000, duration: 500 },
                { id: "eid26", tween: [ "style", "${_tete}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid1223", tween: [ "style", "${_tete}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid1224", tween: [ "style", "${_tete}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid1225", tween: [ "style", "${_tete}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid1226", tween: [ "style", "${_tete}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid1227", tween: [ "style", "${_tete}", "transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_tete}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 0 },
                { id: "eid1228", tween: [ "style", "${_tete}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_tete}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 0 },
                { id: "eid1230", tween: [ "style", "${_tete}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 0 },
                { id: "eid1231", tween: [ "style", "${_tete}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 0 },
                { id: "eid1232", tween: [ "style", "${_tete}", "transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 0 },
                { id: "eid44", tween: [ "style", "${_tete}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 1250, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_tete}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 1250, duration: 0 },
                { id: "eid1234", tween: [ "style", "${_tete}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 1250, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_tete}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 1250, duration: 0 },
                { id: "eid1236", tween: [ "style", "${_tete}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 1250, duration: 0 },
                { id: "eid1237", tween: [ "style", "${_tete}", "transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 1250, duration: 0 },
                { id: "eid251", tween: [ "style", "${_tete}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0 },
                { id: "eid1238", tween: [ "style", "${_tete}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0 },
                { id: "eid1239", tween: [ "style", "${_tete}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0 },
                { id: "eid1240", tween: [ "style", "${_tete}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_tete}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_tete}", "transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0 },
                { id: "eid259", tween: [ "style", "${_tete}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8500, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_tete}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8500, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_tete}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8500, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_tete}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8500, duration: 0 },
                { id: "eid1246", tween: [ "style", "${_tete}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8500, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_tete}", "transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8500, duration: 0 },
                { id: "eid158", tween: [ "style", "${_jambe_droite}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 6250, duration: 1000 },
                { id: "eid1248", tween: [ "style", "${_jambe_droite}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 6250, duration: 1000 },
                { id: "eid1249", tween: [ "style", "${_jambe_droite}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 6250, duration: 1000 },
                { id: "eid1250", tween: [ "style", "${_jambe_droite}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 6250, duration: 1000 },
                { id: "eid1251", tween: [ "style", "${_jambe_droite}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 6250, duration: 1000 },
                { id: "eid1252", tween: [ "style", "${_jambe_droite}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 6250, duration: 1000 },
                { id: "eid241", tween: [ "style", "${_jambe_droite}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1253", tween: [ "style", "${_jambe_droite}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1254", tween: [ "style", "${_jambe_droite}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1255", tween: [ "style", "${_jambe_droite}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1256", tween: [ "style", "${_jambe_droite}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid1257", tween: [ "style", "${_jambe_droite}", "transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 7500, duration: 1000 },
                { id: "eid19", tween: [ "style", "${_tete}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_tete}", "left", '60px', { fromValue: '60px'}], position: 1250, duration: 0 },
                { id: "eid293", tween: [ "style", "${_tete}", "left", '62px', { fromValue: '60px'}], position: 7500, duration: 500 },
                { id: "eid294", tween: [ "style", "${_tete}", "left", '60px', { fromValue: '62px'}], position: 8000, duration: 500 },
                { id: "eid60", tween: [ "transform", "${_bras_gauche}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 2500, duration: 500 },
                { id: "eid61", tween: [ "transform", "${_bras_gauche}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 3000, duration: 500 },
                { id: "eid232", tween: [ "transform", "${_bras_gauche}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 7500, duration: 500 },
                { id: "eid233", tween: [ "transform", "${_bras_gauche}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 8000, duration: 500 },
                { id: "eid16", tween: [ "style", "${_shadow}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_shadow}", "left", '72px', { fromValue: '72px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2529660");
