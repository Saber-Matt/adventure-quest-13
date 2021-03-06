import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import completedAllQuests from './completed-all-quests.js';
import isDead from '../common/is-dead.js';

loadProfile(); // i predict we'll load the header on every page but the home page

// go grab the user from localStorage
const user = getUser();

// if they're dead, or if they've completed all the quests
if (isDead(user) || completedAllQuests(quests, user)) {
    // send them to the results page
    window.location = '../results';
}
// getting some quest element from DOM
const nav = document.getElementById('quests');

for (let quest of quests) {
    // for every quest
    let questDisplay = null;
    // if the user has completed it

    console.log(quest.id);
    const theUserHasCompletedThisQuest = user.completed[quest.id];

    if (theUserHasCompletedThisQuest) {
        // make a completed quest display (with a checkmark)
        questDisplay = createCompletedQuest(quest);
    }
    else {
        // otherwise, make a link to the quest
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay); // add the quest display to the nav
}