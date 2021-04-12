import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHp from './score-hp.js';
import scoreSupplies from './score-supplies.js';
import { hpMessages, aliveSuppliesMessages, deadSuppliesMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const suppliesResult = scoreSupplies(user.supplies);
const hpMessage = hpMessages[hpResult];

let suppliesMessages = null;
if (hpResult === 'dead') {
    suppliesMessages = deadSuppliesMessages;
}
else {
    suppliesMessages = aliveSuppliesMessages;
}

const suppliesMessage = suppliesMessages[suppliesResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.race + ', ';
story += hpMessage + ' and ' + suppliesMessage + '.';

storyDisplay.textContent = story;