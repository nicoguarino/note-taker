const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

// display notes written after note is created and saved
router.post('/notes', (req, res) => {
    console.log(JSON.stringify(req.body));
    let note = req.body;

    //applying an idea to notes written
    note.id = uniqid();

    // pushing notes to db.json
    notes.push(note);

    // syncing notes array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify((notes), null, 2)
    ); 
    
    //sending call back to render notes to page
    res.send('Success!');
});

// delete function to work properly
router.delete(`/notes/${id}`, (req, res) => {

    notes.Remove({id: req.body.id}, err => {
        if (!err) {
            return res.send('Note deleted!')
        } else {
            return res.send(err);
        }
    });
});








 






module.exports = router;