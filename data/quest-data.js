const planeWreck = {
    id: 'plane-wreck',
    title: 'The Wreckage of a 737',
    map: {
        top: '89%',
        left: '44%'
    },
    //image: 'PLANE CRASH',
    description: `
    INSERT CREATIVE DESCRIPTION
    `,
    choices: [{
        id: 'explore: ',
        description: 'Explore the wreckage',
        result: `
            INSERT CREATIVE RESULT. 
        `,
        hp: 0,
        supplies: 35
    }, {
        id: 'Cry loudly: ',
        description: 'INSERT CREATIVE DESCRIPTION',
        result: `
        INSERT CREATIVE RESULT.
        `,
        hp: -30,
        supplies: 50
    }, {
        id: 'Run: ',
        description: 'INSERT CREATIVE DESCRIPTION',
        result: `
        INSERT CREATIVE RESULT.
        `,
        hp: -50,
        supplies: 0
    }]
};

const DinoEggs = {
    id: 'dino-eggs',
    title: 'You Discovered a Dinosaur Nest!',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dino-eggs.jpg',
    audio: 'dino-egg.wav',
    action: 'dragon-growl.aiff',
    description: `
    INSERT CREATIVE DESCRIPTION
    `,
    choices: [{
        id: 'Examine them more closely: ',
        description: 'INSERT CREATIVE DESCRIPTION',
        result: `
        INSERT CREATIVE RESULT. 
        `,
        hp: -100,
        supplies: 0
    }, {
        id: 'Leave them alone: ',
        description: 'You\'re already stranded on on an island with a bunch of bio-death machines, why tempt fate?',
        result: `
        Fate smiles down on you, maybe you will survive after all.
        `,
        hp: 10,
        supplies: 0
    }, {
        id: 'Take the eggs: ',
        description: 'Because its not kidnapping if they haven\'t hatched yet',
        result: `
        You narrowly escape the raptor pack on their way back to the nest. Hopefully the babies imprint on you because their parents are now hunting you- FOREVER.
        `,
        hp: 15,
        supplies: 35
    }]
};

const tRex = {
    id: 't-Rex',
    title: 'Well That Escalated Quickly',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['plane-wreck', 'dino-egg'],
    image: '.png',
    action: 'some-action.wav',
    description: `
    Congratulations! You\'ve encountered an Hungry T-Rex
    `,
    choices: [{
        id: 'Run: ',
        description: 'Because what else are your going to do, right?',
        result: 'You succeed in escaping! You escape right into the loving talons of the raptor pack thats been hunting you. Its a win-win dino-eat-human scenario.',
        hp: -100,
        supplies: 0
    }, {
        id: 'Stand Perfectly Still: ',
        description: 'It worked in the movies, right?',
        result: 'It did work in the movies. But they were actors, and you are low on supplies. Eventually your resolve gives out and you become dino food.',
        hp: -100,
        supplies: 0
    }, {
        id: 'Scream: ',
        description: 'Let the whole Dino World hear you',
        result: 'Surprisingly, this works! Your cries attract other hungry carnivours, allowing you to escape in the battle royal. ',
        hp: 10,
        supplies: 15
    }]
};

const quests = [
    planeWreck,
    DinoEggs,
    tRex,
];

export default quests;