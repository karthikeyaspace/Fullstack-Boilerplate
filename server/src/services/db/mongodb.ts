// mongodb crud
import e from "express";
import { getDb } from "../../db/mongodb";
import logger from "../../utils/logger";

const db = getDb();

const createDocument = async (collectionName: string, document: any) => {
  try {
    const result = await db.collection(collectionName).insertOne(document);
    return { success: true, data: result.insertedId };
  } catch (error) {
    logger("error creating mongo db document", "services/db", error);
  }
};

//query - {name: "test"}
const getDocument = async (collectionName: string, query: any) => {
  try {
    const result = await db.collection(collectionName).findOne(query);
    return { success: true, data: result };
  } catch (error) {
    logger("error getting mongo db document", "services/db", error);
  }
};

const getDocuments = async (collectionName: string, query: any) => {
  try {
    const result = await db.collection(collectionName).find(query).toArray();
    return { success: true, data: result };
  } catch (error) {
    logger("error getting mongo db documents", "services/db", error);
  }
};

const deleteDocument = async (collectionName: string, query: any) => {
  try {
    const result = await db.collection(collectionName).deleteOne(query);
    return { success: true, data: result.deletedCount };
  } catch (error) {
    logger("error deleting mongo db document", "services/db", error);
  }
};

export { createDocument, getDocument, getDocuments, deleteDocument };
