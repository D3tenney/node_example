var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
                                    app.get('/notes/:id', (req, res) => {const id = req.params.id;
                                                                         const details = {'_id': new ObjectID(id)};
                                                                         db.collection(process.env.MONGODB_NOTES_COLLECTION)
                                                                           .findOne(details, (err, item) => {if (err) {res.send({'error':'An error has occurred'});}
                                                                                                             else {res.send(item);}
                                                                                                           });
                                                                                                         });

                                    app.post('/notes',
                                             (req, res) => {const note = {text: req.body.body,
                                                                          title: req.body.title };
                                                            db.collection(process.env.MONGODB_NOTES_COLLECTION)
                                                              .insertOne(note,
                                                                         (err, result) => {if (err) {res.send({ 'error': 'An error has occurred'});}
                                                                                  else {res.send(result.ops[0]);}
                                                                                });
                                                                              });

                                    app.put('/notes/:id',
                                            (req, res) => {const id = req.params.id;
                                                           const details = {'_id': new ObjectID(id)};
                                                           const note = {$set: {text: req.body.body,
                                                                                title: req.body.title}};
                                                           db.collection(process.env.MONGODB_NOTES_COLLECTION)
                                                             .updateOne(details, note, (err, result) => {if (err) {res.send({'error': 'An error has occurred'});}
                                                                                                         else {res.send(note);}
                                                                                                       });
                                                                                                     });

                                    app.delete('/notes/:id', (req, res) => {const id = req.params.id;
                                                                            const details = {'_id': new ObjectID(id)};
                                                                            db.collection(process.env.MONGODB_NOTES_COLLECTION)
                                                                              .deleteOne(details, (err, item) => {if (err) {res.send({'error': 'An error has occurred'});}
                                                                                                               else {res.send('Note ' + id + ' deleted.');}
                                                                                                             });
                                                                                                           });
                                                                            };
