module.exports.buildListIssues = ({ httpClient, apiIssuesUrl, makeIssueFromGitHub }) => {
  return async function listIssuesByAssignee ({ who } = {}) {
    try{
      const issuesFromGithub = await httpClient.get(apiIssuesUrl);
      const allIssues = issuesFromGithub.map(issue=> makeIssueFromGitHub(issue))
      const issuesByAssignee = who ? allIssues.filter(issue=>issue.getAssignee().getId()==who) : allIssues;
      const sortedIssuesByScore = issuesByAssignee.sort((a,b)=>b.getScore()-a.getScore());
      return sortedIssuesByScore.map(issue=>issue.getObjectData());

    }catch(error){
      throw error;
    }
  }
}