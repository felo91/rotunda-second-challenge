const { buildMakeUser } = require('./user');

module.exports = {
    makeUser: buildMakeUser().makeUser, 
    makeUserFromGitHub: buildMakeUser().makeUserFromGitHub
}