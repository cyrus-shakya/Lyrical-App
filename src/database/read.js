import { getFirestore, doc, collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "./config";


export const fetchSongs = async () => {
  // console.warn("loading...");
  // let data = [];
  // const dbCollection = collection(db, "SongList");
  // try {
  //   const querySnapshot = await getDocs(dbCollection);
  //   querySnapshot.forEach((doc) => {
  //     const post = {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     data.push(post);
  //   });
  // } catch (error) {
  //   console.log("Error fetching songs: ", error);
  // }

  // return data;

  const res = await fetch('https://lyricalchord.com/wp-json/wp/v2/posts')
  const data = await res.json()
  return data
};

export const getMusicByName = async (name) => {
  const songData = [];
  const dbCollection = collection(db, "SongList");

  try {
    const querySnapshot = await getDocs(dbCollection);

    for (const doc of querySnapshot.docs) {
      const postSong = doc.data();
      // const createdUser = await getUserById(userId);
      if (postSong.song === name) {
        const post = {
          ...postSong,
          id: doc.id,
          // user: createdUser,
        };
        songData.push(post);
      }
    }
  } catch (error) {
    errorMessage(error);
    console.log("Error:", error);
  }

  return songData;
};

// export const fetchLyrics = async (id) => {
//   const lyricsData =[];

//   const songDocRef = doc(db, "SongList", id);
//   const songDocSnap = await getDoc(songDocRef);

//   try {
//     if (songDocSnap.exists()) {
//       lyricsData.push(songDocSnap.data())
//     } else {
//       console.log("Song not found.");
//       return null;
//     }
//   } catch (error) {
//     console.log("Error fetching song lyrics:", error);
//     return null;
//   }

//   console.log('From read: ',lyricsData)
//   return lyricsData;
// };

