import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "../config/env";
import logger from "../utils/logger";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID,
};

let firestoreDb: any;

try {
  const firebaseApp = initializeApp(firebaseConfig);
  firestoreDb = getFirestore(firebaseApp);
  logger("Firebase initialized Succesfully");
} catch (err) {
  logger("Error initializing Firebase", "server/db/firebase.ts", err as Error);
}

export default firestoreDb;
