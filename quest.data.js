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
        id: 'explore',
        description: 'Explore the wreckage',
        result: `
            INSERT CREATIVE RESULT. 
        `,
        hp: 0,
        supplies: 35
    }, {
        id: 'cry loudly',
        description: 'INSERT CREATIVE DESCRIPTION',
        result: `
        INSERT CREATIVE RESULT.
        `,
        hp: -30,
        supplies: 50
    }, {
        id: 'run',
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
        id: 'examine them more closely',
        description: 'INSERT CREATIVE DESCRIPTION',
        result: `
        INSERT CREATIVE RESULT. 
        `,
        hp: -35,
        supplies: 15
    }, {
        id: 'leave them alone',
        description: 'INSERT CREATIVE DESCRIPTION',
        result: `
        INSERT CREATIVE RESULT.
        `,
        hp: -45,
        supplies: 0
    }, {
        id: 'take the eggs',
        description: 'INSERT CREATIVE DESCRIPTION',
        result: `
        INSERT CREATIVE RESULT.
        `,
        hp: 0,
        supplies: 90
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
    audio: 'tRex-roar.wav',
    action: 'some-action.wav',
    description: `
    INSERT CREATIVE DESCRIPTION
    `,
    choices: [{
        id: 'Run',
        description: 'Because what else are your going to do, right?',
        result: 'You succeed in escaping! You escape right into the loving talons of the raptor pack thats been hunting you. Its a win-win dino-eat-human senario.',
        hp: 0,
        gold: 40
    }, {
        id: 'Stand Perfectly Still',
        description: 'It worked in the movies, right?',
        result: 'It did work in the movies. But they were actors, and you are low on supplies. Eventually your resolve gives out and you become dino food.',
        hp: -50,
        gold: 0
    }, {
        id: 'Scream',
        description: 'Let the whole Dino World hear you',
        result: 'Surprisingly, this works! Your cries attract other hungry carnivours, allowing you to escape in the battle royal. ',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    planeWreck,
    DinoEggs,
    tRex,
];

export default quests;