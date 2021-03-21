const path = require('path');

// heres our routes, using get these are the html pagres being shown to the client
module.exports = (app) => {

  app.get('/notes', (req, res) => {
    // remember path is in reference to our local file structure and dirname is the absolute path of the directory we are in
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
