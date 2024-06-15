module.exports = RankData = {
    name: "yourStyleName",
    version: "1.0.0",
    author: "yourUsername",
    fontURL: "none",
    data: {
        width: 600,
        height: 300,
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
                height: 300,
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
                height: 300,
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
                height: 298,
                radius: 28,
                color: '#{borderColor}#',
                stroke: 2
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ellipseimage',
                x: 230,
                y: 30,
                width: 140,
                height: 140,
                radius: 50,
                image: '#{avatar}#'
            },
            {
                shadow: {},
                angle: 0,
                structureType: 'layer',
                fill: false,
                type: 'ellipse',
                x: 230,
                y: 30,
                width: 140,
                height: 140,
                radius: 50,
                color: '#fff',
                stroke: 1.5
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
                size: 25,
                weight: 'bold',
                x: 300,
                y: 190,
                text: '#{name}#',
                color: '#{textColor}#',
                align: 'center',
                baseline: 'top'
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
                size: 20,
                weight: 'bold',
                x: 300,
                y: 230,
                text: 'Welcome to the #{guildName}#!',
                color: '#{textColor}#',
                align: 'center',
                baseline: 'top'
            }
        ]
    }
}