const express = require('express');
const {handleErrors} = require('./middleware/handleErrors.js');
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3001;
const corsOptions = require('./cors.config.js');

app.use(cors({ origin: '*' }));

const { getIssuesByAssignee, getMembers } = require('./controller');

app.get('/issues', getIssuesByAssignee);
app.get('/members', getMembers);

app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
});