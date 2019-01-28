
// DEPENDENCIES
const express = require('express');
const path = require('path');
const app = express();

// SERVE STATIC FILES
app.use('/public', express.static(path.join(__dirname, 'public')));

// DISPLAY PAGE
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// LISTEN
app.listen(process.env.PORT || 3000, () => console.log('Server started...'));