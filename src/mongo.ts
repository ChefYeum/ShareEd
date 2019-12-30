//connect

function getClient(){
    
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://127.0.0.1:27017'
    return new MongoClient(url, { useNewUrlParser: true });
}

export { getClient }