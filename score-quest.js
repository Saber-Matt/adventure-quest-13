unction scoreQuest(choice, questId, user) {
    // add hp to user according to the choice's consequences
    user.hp += choice.hp;
    // add supplies to the user according to the choice's consequences
    user.supplies += choice.supplies;
    // set this quest id to completed in the user
    user.completed[questId] = true;
}

export default scoreQuest;