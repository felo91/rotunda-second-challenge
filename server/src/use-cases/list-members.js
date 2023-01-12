module.exports.buildListMembers = ({ httpClient,apiMembersUrl, makeUserFromGitHub }) => {
  return async function listMembers () {
    const membersFromOrganization = await httpClient.get(apiMembersUrl);
    return membersFromOrganization.map(member=> makeUserFromGitHub(member).getObjectData())
  }
}