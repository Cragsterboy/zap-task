import fs from 'fs'
import path from "path";
/*
    csvToJson
    Fetche a file and returns it in json format
    @param file: file url
    @returns json: files content as json
*/
const csvToJson = (file) => {
    // handle if no file sent
    if (!file) return "No file sent.";
    let content = fetchFileContent(file);
    if(content =="error") return content;
    // split file into rows via return
    let rows = content.split("\r\n");
    // json holder
    let json = [];
    // create an array of headers from the first row of the file
    let headers = rows[0].trim().split(",");
    // loop through each row
    for(let i=1; i<rows.length; i++){
        let obj = {}; //json obj for rows data
        let row=rows[i].trim().split(","); // split row via comma
        for(let j=0;j<headers.length;j++){ // loop through headers
            obj[headers[j]] = row[j]; // build json obj from headers and data
        }
        json.push(obj); //push obj into global json
    }
    return json;
}

/*
    fetchFileContent
    Fetches the content of the file
    @param file: file url
    @returns content: files content
*/
const fetchFileContent = (file) => {
    let content;
    try {
        content = fs.readFileSync(path.join(path.resolve(),file), 'utf8');
    }catch (err) {
        console.log(err);
       return "error";
    }
    return content;
}
export default csvToJson;