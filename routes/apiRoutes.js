const fs = require("fs")
// per npm docs we will create a UUID (universally unique id). I'm choosing to use their common JS syntax 
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {

        // when recieving data from a web server, the data is always a string, so here we use JSON.parse to read our JS object in our db.json file.
        let dataStorage = JSON.parse(fs.readFileSync("./db/db.son", "utf8"));

        // here we have our response in json format
        res.json(dataStorage);
    });


    app.post('api/notes', (req, res) => {
        // bodyInfo represents the note typed by the user
        const NewBodyInfo = req.body;

        // this is how we set our id per npm uuid
        NewBodyInfo.id = uuidv4()

        // same as above code block, we are reading a file and parsing it into an object
        let dataStorage = JSON.parse(fs.readFileSync("./db/db.son", "utf8"));

        // sending the newly added note to our body for the client
        dataStorage.push(NewBodyInfo)

        // res.json(bodyInfo) takes whats in the body and turns it into an object
        res.json(bodyInfo);
    })

    // let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    /* 
    When sending data to a web server, it has to be a string. We use JSON.stringify to accomplish the reverse of JSON.parse so our data can be written to our db.json file
    fs.writeFileSync('./db/db.json', JSON.stringify(data)); */
}
        //   here are my get requests

// key element mock up html export or put at bottom after more research.//!check
// .get can go under post after wrapping whole thing in a function.
// app.delete as well/ everything can go in here



// activity 12