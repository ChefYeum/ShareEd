//connect

function getClient(){
    const PASSWORD = process.env.MONGOPASS;
    const USERNAME = process.env.MONGOUSER;
    
    const MongoClient = require('mongodb').MongoClient;
    const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@shareedcluster-pwhtf.mongodb.net/test?retryWrites=true&w=majority`;
    return new MongoClient(uri, { useNewUrlParser: true });
}

export { getClient }