import dotenv from "dotenv";

import dbConnection from "./db/connection";
import { app } from "./app";

dotenv.config({
  path: "./.env",
});

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(`App is listening on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !! ", err);
  });
