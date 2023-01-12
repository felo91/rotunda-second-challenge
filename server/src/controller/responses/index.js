class OkResult{ 
    constructor(menssage){
        this.ok=true;
        this.menssage = menssage || 'The request was successful';
    }
}

class GetIssuesDTO extends OkResult{
    constructor(issues){
        super();
        this.issues = issues;
    }
}

class GetMembersDTO extends OkResult{
    constructor(members){
        super();
        this.members = members;
    }
}

module.exports = { GetIssuesDTO, GetMembersDTO };