// fs is going to let us read and write to files
const fs = require("fs");
// per npm docs we will create a UUID (universally unique id). I'm choosing to use their common JS syntax 
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {

        // when recieving data from a web server, the data is always a string, so here we use JSON.parse to read our JS object in our db.json file.
        let dataStorage = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));

        // here we have our response in json format
        res.json(dataStorage);
    });


    app.post('/api/notes', (req, res) => {
        // bodyInfo represents the note typed by the user
        let NewBodyInfo = req.body;

        // this is how we set our id per npm uuid
        NewBodyInfo.id = uuidv4()

        // same as above code block, we are reading a file and parsing it into an object
        let dataStorage = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));

        // sending the newly added note to our body for the client
        dataStorage.push(NewBodyInfo)

        /*  When sending data to a web server, it has to be a string. We use JSON.stringify to accomplish the reverse of JSON.parse*/
        fs.writeFileSync('./data/db.json', JSON.stringify(dataStorage));

        // res.json(NewBodyInfo) takes whats in the body(the note)and turns it into an object
        res.json(NewBodyInfo);
    })
    // extra credit writing a delete below
    app.delete("/api/notes/:id", (req, res) => {

        // putting the id as param for deletion of note later
        let deleteMe = req.params.id;

        // as i did before we are reading a file and parsing it into an object
        let notes = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));

        // here we use the filter method to find all the notes we want to keep
        const newNotes = notes.filter(placeHolder => placeHolder.id !== deleteMe)

        // finally we write in our new data 
        fs.writeFileSync("./data/db.json", JSON.stringify(newNotes))

        //our response contains our filtered array which no longer includes the note we deleted.
        res.json(newNotes)
    })
}

