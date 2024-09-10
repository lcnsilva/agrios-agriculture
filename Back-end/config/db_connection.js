import mongoose from "mongoose";

async function conexaoDb() {
    mongoose.connect(process.env.MONGO_DB_URI);
    return mongoose.connection;
}

export default conexaoDb;