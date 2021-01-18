const db_url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.brg4y.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;
//console.log(db_url);

module.exports = {url: db_url};
