const { ISSUES_API, MEMBERS_API } = require ('../utils/constant.js');
const httpClient = require ('../adapters/http-client.js');

const { makeIssueFromGitHub } = require ('../models/issue');
const { makeUserFromGitHub } = require ('../models/user');

const { buildListIssues } = require ('./list-issues-by-assignee.js');
const { buildListMembers } = require ('./list-members.js');

const listIssuesByAssignee = buildListIssues({ httpClient, apiIssuesUrl: ISSUES_API, makeIssueFromGitHub });
const listMembers = buildListMembers({ httpClient, apiMembersUrl: MEMBERS_API, makeUserFromGitHub });

module.exports = { listIssuesByAssignee, listMembers };