import app from "./app.js";
import connectDatabase from "./config/databse.js";
const PORT=8000;


process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

 connectDatabase();
// const server = app.listen(process.env.PORT, () => {
//     console.log(`Server is working on http://localhost:${PORT}`);
//   });
const server= app.listen(PORT,()=> console.log(`Server is running on http://localhost:${PORT}`))

  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });