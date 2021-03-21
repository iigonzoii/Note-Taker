// below we require express, set it to a const and set our port as well
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to return json instead of a string
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this allows us to serve static files such as images, CSS, and Js files by specifying our root directory we would like to access as the root argument( you can add an options argument as well) 
app.use(express.static("public"));

// here we require the files in our routes folder so our server knows how we want it to interact with users visiting our site
require ('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// without this code below our server wont do anything
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
