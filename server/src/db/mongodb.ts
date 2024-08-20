import { MongoClient } from "mongodb";
import config from "../config/env";

const uri = config.MONGO_URI;
const mongoclient = new MongoClient(uri);

export const connect = async () => {
  try {
    await mongoclient.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};


export const getDb = () => mongoclient.db(config.MONGO_DB_NAME);