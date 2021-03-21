// per npm docs we will create a UUID (universally unique id). I'm choosing to use their common JS syntax 
const { v4: uuidv4 } = require('uuid');

//  I will invoke it later using this line below
uuidv4()

// we want to post new notes using the code below. we will probably need an empty array or to reference our db,json mahybe? .push somewhere on or after line 7?


//  notes referes to url pathway
module.exports = (app) => {
    app.post('/notes', (req, res) => {
    // bodyInfo represents the note typed by the user
    const bodyInfo = req.body;
    // res.json(bodyInfo) takes whats in the body and turns it into an object
    res.json(bodyInfo);
    })

}
        //   here are my get requests
       
// key element mock up html export or put at bottom after more research.//!check
// .get can go under post after wrapping whole thing in a function.
// app.delete as well/ everything can go in here



// activity 12