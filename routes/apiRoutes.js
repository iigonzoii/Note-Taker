const fs = require("fs")
// per npm docs we will create a UUID (universally unique id). I'm choosing to use their common JS syntax 
const { v4: uuidv4 } = require('uuid');

//  I will invoke it later using this line below
uuidv4()

// we want to post new notes using the code below. we will probably need an empty array or to reference our db,json mahybe? .push somewhere on or after line 7?


//  notes referes to url pathway
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        // when recieving data from a web server, the data is always a string, so here we use JSON.parse to read our JS object in our db.json file.
        
        let storedNote = JSON.parse(fs.readFileSync("./db/db.son", "utf8"));

        // here we have our response getting kicked back to us in json format
        res.json(storedNote);
    })
    app.post('/notes', (req, res) => {
        // bodyInfo represents the note typed by the user
        const bodyInfo = req.body;
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