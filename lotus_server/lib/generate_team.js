const getCreature = require('../models/monster_builder');

const generateTeam = (team) => {
  const teamMembers = [];
  // spin up the promises
  team.forEach(creature => {
    teamMembers.push(getCreature(creature));
  });
  return Promise.all(teamMembers).then(team => {
    const teamObj = {};
    team.forEach(monster => {
      teamObj[monster.id] = monster;
    });
    return teamObj;
  });
};

module.exports = generateTeam
