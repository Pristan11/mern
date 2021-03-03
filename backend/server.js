const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
//Handle Uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR : ${err}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});
const cors = require("cors");
dotenv.config({ path: "backend/config/config.env" });

//connect database
connectDatabase();
const server = app.listen(process.env.PORT, () =>
  console.log(`listening on ${process.env.PORT} in  ${process.env.NODE_ENV}`)
);

//handlde unhanlde promises rejections
process.on("unhandleRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("shutting down the server due to unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
