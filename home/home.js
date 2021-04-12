import { saveUser } from '../data/api.js';


// go grab the form from the home page
const userSignUp = document.querySelector('form');


// when we submit
userSignUp.addEventListener('submit', (event) => {

    event.preventDefault();
    const formData = new FormData(userSignUp);
    const saveHero = formData.get('user-name');
    const user = {
        name: saveHero,
        hp: 35,
        supplies: 0,
        completed: {}
    };
    // make a new form data object

    // use the form data object to make a user


    // pop that user in local storage
    saveUser(user);

    // redirect us to the map page
    window.location = 'map';
});