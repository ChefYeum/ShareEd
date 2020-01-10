import mongoose from 'mongoose';

function connect() {
    return mongoose.connect('mongodb://localhost:27017/drive', {useNewUrlParser: true, useUnifiedTopology: true})
}

export default connect;