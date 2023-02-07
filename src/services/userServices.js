import fs from 'fs'
import path from "path";
import csvToJson from "./csvToJson.js";
let csv = "src/data/users.csv";
/*
    findUser
    Searchs the users csv for the user id given
    @param id: user id to search
    @returns user: users data
*/
const findUser = (id) => {
    if(!id) return "no id given.";
    let users = csvToJson(csv); // fetch users data
    if(users=="error") return "an error occured.";
    for(let i=0; i<users.length; i++){ //loop through till we find the user with the given id
        if(users[i]['id']==id) return users[i];
    }
    return "no user found"; //catch if no user found
}
/*
    addUser
    adds a user with the given data to the user csv file
    @param data: an object of user data
    @returns a message: either sucess or erro
*/

const addUser = (data) => {
    if(!data) return "no data given.";
    let users = csvToJson(csv); // fetch users data
    let newUserId = (users.length+1); // generate an id from users length adding 1
    let row = [];
    // push all data into array, if no data obj provided we give a blank
    row.push(newUserId);
    row.push(data['first_name'] ? data['first_name'] : "");
    row.push(data['last_name'] ? data['last_name'] : "");
    row.push(data['email'] ? data['email'] : "");
    row.push(data['job_title'] ? data['job_title'] : "");
    row.push(data['star'] ? data['star'] : false);
    let rowCsv = "\r\n"+row.join(","); //join array to make a csv string
    try {
        fs.appendFileSync(path.join(path.resolve(),csv), rowCsv ); // add to use csv
        return "new user added.";
    }catch (err) { // error catch if we cant add data
        return "an error occured.";
    }
    
}

export{findUser, addUser}