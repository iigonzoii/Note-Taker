const path = require('path');

// ROUTING

module.exports = (app) => {
//   here are my get requests
  app.get('/notes', (req, res) => {
    // remember path is in reference to our local file structure and dirname is the absolute path of the directory we are in
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
