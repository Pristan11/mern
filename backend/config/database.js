const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((result) => {
      console.log(
        `mongodb Database connected with host :${result.connection.host}`
      );
    });
};

module.exports = connectDatabase;
