import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ghous:ghous@techkolachi.lgbacbk.mongodb.net/test?retryWrites=true&w=majority")

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("db connected!");

});

export default db;