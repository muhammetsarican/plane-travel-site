const { default: mongoose } = require("mongoose");
const db = mongoose.connection;

db.once("open", () => {
    db.dropDatabase();
    console.log("DB connection is successful!");
});

const connectDB = async () => {
    const dbUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(dbUri);
}

module.exports = () => {
    connectDB();
}