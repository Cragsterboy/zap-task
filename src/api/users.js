import express from 'express'
import {findUser, addUser} from '../services/userServices.js';

import apiAuth from "../middlewares/apiAuth.js";
const apiUsers = express();

apiUsers.get("/:userId", (req,res)=>{
    let userId = req.params.userId;
    let data = findUser(userId);
    res.json(data);
});
apiUsers.post("/", apiAuth, (req, res)=>{
    res.json(addUser(req.body));
})

export default apiUsers;