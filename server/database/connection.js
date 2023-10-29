require('dotenv').config();

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env["MONGODB_USERNAME"]}:${process.env["MONGODB_PASSWORD"]}@khanhnamld.xhaxihr.mongodb.net/khanhnamld?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB