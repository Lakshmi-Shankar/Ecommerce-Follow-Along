// const mongoose = require("mongoose");


// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URL) // No need for useNewUrlParser or useUnifiedTopology
//     .then((data) => {
//       console.log(`MongoDB connected with server: ${data.connection.host}`);
//     })
//     .catch((err) => {
//       console.error(`Database connection failed: ${err.message}`);
//       process.exit(1); // Exit process to avoid running with an invalid DB connection
//     });
// };


// module.exports = connectDatabase;

const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
