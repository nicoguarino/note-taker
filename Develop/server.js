const express = require('express');
const {db} = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/html');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

// do we need to use routes folder and paths?

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});