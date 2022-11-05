const app = require("./app");
const connectDatabase = require("./config/databse");
const PORT=4000;
connectDatabase();
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
  });

  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });