module.exports = data = {
    name: "base",
    version: "1.0.0",
    author: "hitomihiumi",
    fontURL: "none",
    data: {
        width: 600,
        height: 120,
        errorImage: null,
        structureType: 'canvas',
        methods: [],
        layers: [
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ellipseimage',
                x: 0,
                y: 0,
                width: 600,
                height: 120,
                radius: 28,
                image: '#{background}#'
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: true,
                type: 'ellipse',
                x: 0,
                y: 0,
                width: 600,
                height: 120,
                radius: 28,
                color: '#000',
                alpha: 0.4
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ellipse',
                x: 1,
                y: 1,
                width: 598,
                height: 118,
                radius: 28,
                color: '#{borderColor}#',
                stroke: 1
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ellipseimage',
                x: 490,
                y: 10,
                width: 100,
                height: 100,
                radius: 25,
                image: '#{avatar}#'
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ellipse',
                x: 490,
                y: 10,
                width: 100,
                height: 100,
                radius: 25,
                color: '#fff',
                stroke: 1.5
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ngon',
                x: 60,
                y: 60,
                radius: 50,
                sides: 6,
                color: '#{decorationColor}#',
                stroke: 2
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ngon',
                x: 260,
                y: 60,
                radius: 50,
                sides: 6,
                color: '#{decorationColor}#',
                stroke: 2
            },
            {
                shadow: {
                    shadowColor: '#000',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0
                },
                angle: 0,
                structureType: 'layer',
                fill: true,
                type: 'text',
                font: 'OpenSans',
                size: 30,
                weight: 'bold',
                x: 315,
                y: 100,
                text: 'LEVEL UP!',
                color: '#{textColor}#',
                baseline: 'bottom'
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'line',
                points: [{ x: 120, y: 60 }, { x: 200, y: 60 }],
                stroke: 2,
                color: '#fff'
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'line',
                points: [{ x: 180, y: 40 }, { x: 200, y: 60 }],
                stroke: 2,
                color: '#fff'
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'line',
                points: [{ x: 180, y: 80 }, { x: 200, y: 60 }],
                stroke: 2,
                color: '#fff'
            },
            {
                shadow: {
                    shadowColor: '#000',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0
                },
                angle: 0,
                structureType: 'layer',
                fill: true,
                type: 'text',
                font: 'OpenSans',
                size: '#{levelFontSizeOne}#',
                weight: 'bold',
                x: 60,
                y: 60,
                text: '#{previousLevel}#',
                color: '#{textColor}#',
                baseline: 'middle',
                align: 'center'
            },
            {
                shadow: {
                    shadowColor: '#000',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0
                },
                angle: 0,
                structureType: 'layer',
                fill: true,
                type: 'text',
                font: 'OpenSans',
                size: '#{levelFontSizeTwo}#',
                weight: 'bold',
                x: 260,
                y: 60,
                text: '#{level}#',
                color: '#{textColor}#',
                baseline: 'middle',
                align: 'center'
            }
        ]
    }
}