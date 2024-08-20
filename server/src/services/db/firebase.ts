import firestoreDb from "../../db/firebase"
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";


const createDoc = async (collectionName: string, data: any) => {
  try {
    const docRef = doc(firestoreDb, collectionName);
    await setDoc(docRef, data);
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const readFromId = async (collectionName: string, id: string) => {
  try {
    const docRef = doc(firestoreDb, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, data: null };
    }
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

const readAll = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(
      collection(firestoreDb, collectionName)
    );
    let data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return { success: true, data: data };
  } catch (err) {
    console.error(err);
    return { success: false, data: [] };
  }
};

const readByField = async (
  collectionName: string,
  field: string,
  value: string
) => {
  try {
    const q = query(
      collection(firestoreDb, collectionName),
      where(field, "==", value)
    );
    const querySnapshot = await getDocs(q);
    let data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return { success: true, data: data };
  } catch (err) {
    console.error(err);
    return { success: false, data: [] };
  }
};

const update = async (collectionName: string, id: string, data: any) => {
  try {
    const docRef = doc(firestoreDb, collectionName, id);
    await setDoc(docRef, data);
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const removeById = async (collectionName: string, id: string) => {
  try {
    const docRef = doc(firestoreDb, collectionName, id);
    await setDoc(docRef, {});
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export { createDoc, readFromId, readAll, readByField, update, removeById };
