# Note Taker

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Note Taker is a website application designed to save notes as on a server so that one can deploy and use anywhere

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/note-taker.git)
* [Deployed Website](https://nicoguarino-note-taker.herokuapp.com/notes)

## Installation <a name = "installation"></a>

No installation needed 

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/team-profile-generator/blob/main/images/sample_code.png?raw=true "Sample Code")

### Sample Code
```JavaScript Sample
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
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino, Note Taker front-end development team


## Contributing <a name = "contributing"></a>

Note Taker is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Note Taker
