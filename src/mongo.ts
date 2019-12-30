//connect

function getClient(){

    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://127.0.0.1:27017'
    const client = MongoClient(url, { useNewUrlParser: true });; 
    return client;
}

export { getClient }