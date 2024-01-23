import { getFirestore, collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const addPost = async (song,artist,youtubeUrl) => {
  // console.warn("loading...");
  let result = {};
  const dbCollection = collection(db, "request");
  try {
    const res = await addDoc(dbCollection, {
      song,
      artist,
      youtubeUrl
    });

    const docSnapshot = await getDoc(res);
    if (docSnapshot.exists()) {
      result = {
        ...docSnapshot.data(),
        id: docSnapshot.id,
      };
    } else {
      console.log("Document does not exist");
    }
  } catch (error) {
    console.log("Error:", error);
  }
  console.log("result", result);
  return result;
};
