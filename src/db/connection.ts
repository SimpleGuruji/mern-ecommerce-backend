import mongoose, { ConnectOptions } from "mongoose";

import { DB_NAME } from "../constants";

const dbConnection = async (): Promise<void> => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MONGODB connected successfully !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed !! ", error);
    process.exit(1);
  }
};

export default dbConnection;
