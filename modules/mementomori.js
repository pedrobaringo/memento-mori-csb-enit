import {MMWhite} from './die.js';
import {MMBlack} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["w"] = MMWhite;
	CONFIG.Dice.terms["b"] = MMBlack;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"MMDice",name:"Memento Mori Dice"},"default");
    dice3d.addDicePreset({
      type:"dw",
      labels:[
        'modules/memento-mori-csb-es/assets/images/WhiteFace1.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace2.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace3.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace4.webp',
        'modules/memento-mori-csb-es/assets/images/WhiteFace5.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace6.webp'
      ],
      bumpMaps:[
        'modules/memento-mori-csb-es/assets/images/WhiteFace1.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace2.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace3.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace4.webp',
        'modules/memento-mori-csb-es/assets/images/WhiteFace5.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace6.webp'
      ],
	  colorset:"whiteMM",
      system: "MMDice"
    });
	dice3d.addDicePreset({
      type:"db",
      labels:[
        'modules/memento-mori-csb-es/assets/images/BlackFace1.webp', 
        'modules/memento-mori-csb-es/assets/images/BlackFace2.webp', 
        'modules/memento-mori-csb-es/assets/images/BlackFace3.webp', 
        'modules/memento-mori-csb-es/assets/images/BlackFace4.webp',
        'modules/memento-mori-csb-es/assets/images/BlackFace5.webp', 
        'modules/memento-mori-csb-es/assets/images/BlackFace6.webp'
      ],
      bumpMaps:[
        'modules/memento-mori-csb-es/assets/images/WhiteFace1.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace2.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace3.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace4.webp',
        'modules/memento-mori-csb-es/assets/images/WhiteFace5.webp', 
        'modules/memento-mori-csb-es/assets/images/WhiteFace6.webp'
      ],
	  colorset:"blackMM",
      system: "MMDice"
    });
dice3d.addColorset({
    name: 'whiteMM',
    description: 'White',
    category: 'Memento Mori Dice',
    foreground: '#e0e0e0',
    background: '#e0e0e0',
    outline: 'white',
    texture: 'stone',
    material: 'glass'
});
dice3d.addColorset({
    name: 'blackMM',
    description: 'Black',
    category: 'Memento Mori Dice',
    foreground: 'black',
    background: 'black',
    outline: 'black',
    texture: 'stone',
    material: 'glass'
});
});
