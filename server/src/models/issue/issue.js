module.exports.buildMakeIssue = ({ makeUserFromGitHub, makeLabel, makeScore, calculateBusinessDaysFromCreation }) => {
  return function makeIssueFromGitHub ({ title, number, created_at, user, assignee, labels, url } = {}) {
    if (!title)  throw new Error('Issue must have a title.')
    if (!created_at)  throw new Error("Issue must have a created date.")
    if (!number)  throw new Error('Issue must contain a issue number.')
    if (!user)  throw new Error('Issue must have an Opener.')
    if (!url)  throw new Error('Issue must have an url.')

    const businessDays = calculateBusinessDaysFromCreation({createdOn: created_at});

    const structuredOpener = makeUserFromGitHub(user); 
    const structuredAssignee = makeUserFromGitHub(assignee);

    const structuredLabels = labels.map(label=>makeLabel(label));

    const score = makeScore({
      labels:structuredLabels.map(label=>label.getName()), 
      businessDays
    })

    url= url.replace('api.github.com/repos/','github.com/');

    
    return Object.freeze({  
        getTitle: () => title,
        getNumber: () => number,
        getCreatedOn: () => created_at,
        getOpener: () => structuredOpener,
        getAssignee: () => structuredAssignee,
        getLabels: () => structuredLabels.map(label=>label.getObjectData()),
        getScore: () => score,
        getUrl: () => url,
        getDays: () => businessDays,
        getObjectData: () => ({ 
          title, 
          number, 
          createdOn: created_at, 
          businessDays,
          opener: structuredOpener.getObjectData(), 
          assignee: structuredAssignee.getObjectData(), 
          labels: structuredLabels.map(label=>label.getObjectData()), 
          score,
          url 
        })
    })
  }
}