const getMecha = () => {
  const first = [
    'Rogue',
    'Fallen',
    'Tacit',
    'Brawler',
    'Coyote',
    'Striker',
    'Gipsy',
    'Cherno',
    'Saber',
    'Guardian',
    'Romeo',
    'Obsidian',
    'Horizon',
    'Chrome',
    'Vulcan',
    'Heavy',
    'Echo',
    'Electric',
    'Hercules',
    'Shadow'
  ];
  const last = [
    'Ronin',
    'Doom',
    'Paragon',
    'Knuckle',
    'Paladin',
    'Gear',
    'Yukon',
    'Rhino',
    'Siren',
    'Valkyrie',
    'Command',
    'Hulk',
    'Hog',
    'Tango',
    'Eureka',
    'Alpha',
    'Danger',
    'Avenger',
    'Typhoon',
    'Phoenix',
    'Brave',
    'Redeemer',
    'Fury',
    'Blue',
    'Athena',
    'Bravo',
    'Drift',
    'Intercept',
    'Assassin',
    'River',
    'Merit',
    '',
  ];
  return first[Math.floor(Math.random()*first.length)] + ' '
         + last[Math.floor(Math.random()*last.length)];
}

const getKaiju = () => {
  const first = [
    'Talon',
    'Spine',
    'Bone',
    'Meat',
    'Hard',
    'Hammer',
    'Leather',
    'Scum',
    'Knife',
    'Ridge',
    'Knuckle',
    'Oni'
  ];
  const last = [
    'spike',
    'scythe',
    'head',
    'back',
    'arms',
    'ra',
    'hawk',
    'jacakl',
    'runner',
    'fiend',
    'za',
    '',
  ];
  return first[Math.floor(Math.random()*first.length)]
         + last[Math.floor(Math.random()*last.length)];
};

module.exports = {getMecha, getKaiju};
