const MEMBERS_API = `https://api.github.com/orgs/${process.env.GITHUB_ORG || 'rotundasoftware'}/members`;
const ISSUES_API = `https://api.github.com/repos/${process.env.GITHUB_ORG || 'rotundasoftware'}/${process.env.GITHUB_REPO || 'rotunda-qa-demo'}/issues`;

module.exports = { MEMBERS_API, ISSUES_API };
