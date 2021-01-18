require('dotenv').config();

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT;

/*
require('./app/routes')(app, {});

app.listen(port, () => {console.log('We are live on port ' + port);});
*/

MongoClient.connect(db.url,
                    {useUnifiedTopology: true},
                    (err, database) => {if (err) return console.log(err)
                                        // Make sure you add the database name and not the collection name
                                        const data = database.db("notes_db");
                                        require('./app/routes')(app, data);
                                      });
app.listen(port, () => {console.log('We are live on ' + port);  });
