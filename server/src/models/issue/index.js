const { buildMakeIssue } = require('./issue');
const { makeUserFromGitHub } = require('../user');
const { makeLabel } = require('../label');
const { buildMakeScore } = require('./score.js');
const { rotundaScoreAlgorithm } = require('./score-rotunda-algorithm.js');

function calculateBusinessDaysFromCreation({createdOn}) {
    let days = 0;
    let startDate = new Date(createdOn);

    while (startDate < new Date()) {
        if (startDate.getDay() !== 0 && startDate.getDay() !== 6) days++;
        startDate.setDate(startDate.getDate() + 1);
    }

    return days;
}


const makeScore = buildMakeScore({ calculateScoreAlgorithm: rotundaScoreAlgorithm })

module.exports.makeIssueFromGitHub = buildMakeIssue({ makeUserFromGitHub, makeLabel, makeScore, calculateBusinessDaysFromCreation })
