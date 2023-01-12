const { listIssuesByAssignee, listMembers } = require('../use-cases');
const { GetIssuesDTO, GetMembersDTO } = require('./responses');

const getIssuesByAssignee = async (req, res, next) => {
    try{
        const { who } = req.query;
        const issues = await listIssuesByAssignee({ who });
        res.send(new GetIssuesDTO(issues));
    }catch(error){
        next(error);
    }
};

const getMembers = async (req, res, next) => {
    try{
        const members = await listMembers();
        res.send(new GetMembersDTO(members));
    }catch(error){
        next(error);
    }
}

module.exports = { getIssuesByAssignee, getMembers };