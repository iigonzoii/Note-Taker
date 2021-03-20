// we want to post new notes using the code below. we will probably need an empty array or to reference our db,json mahybe? .push somewhere on or after line 7?


//  notes referes to url pathway
app.post('/notes', (req,res) => {
// bodyInfo represents the note typed by the user
const bodyInfo = req.body;
// res.json(bodyInfo) takes whats in the body and turns it into an object
res.json(bodyInfo);

}

// key element mock up html export or put at bottom after more research.
// .get can go under post after wrapping whole thing in a function.
// app.delete as well/ everything can go in here



// activity 12