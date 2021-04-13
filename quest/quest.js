import loadProfile from '../common/load-profile.js';
import { getUser, saveUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-id.js';
import scoreQuest from './score-quest.js';


loadProfile(); // gets user from local storage and adds it to the header
const section = document.querySelector('section');
// go grab the query parameter from the URL
const searchParams = new URLSearchParams(window.location.search);
// go get the quest id from the URL
const questId = searchParams.get('id');
// go use old faithful to find our quest
const quest = findById(quests, questId);

// if there's no such quest 
if (!quest) {
    window.location = '../map';
}
const button = document.createElement('button');
const title = document.createElement('h1');
const image = document.createElement('img');
const description = document.createElement('span');
const choiceForm = document.createElement('form');
//const choices = document.createElement('choices');
const result = document.createElement('result');
const resultDescription = document.createElement('result-description');
const hp = document.createElement('hp');
const supplies = document.createElement('supplies');


// use the quest that we found to populate the dom
title.textContent = quest.title;
button.textContent = 'submit';
image.src = '../assets/quests/' + quest.image;
description.textContent = quest.description;


// for each of the quest's choices
for (let index of quest.choices) {
    const label = document.createElement('label');
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'choice';
    radioButton.value = index.id;
    label.append(index.id, index.description, radioButton, hp, supplies);
    choiceForm.append(label);
    choiceForm.append(button);


}

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get user choice
    const formData = new FormData(choiceForm);

    const choiceId = formData.get('choice');
    // use old faitful to find the choice

    const choice = findById(quest.choices, choiceId); // go find the choice based on the id

    // get user out of local storage
    const user = getUser();
    // generate a score and manipulate user state
    scoreQuest(choice, quest.id, user);
    // save user
    saveUser(user);

    // update UI
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    // reload profile for new stats
    loadProfile();

});
section.append(title, image, description, choiceForm, resultDescription);