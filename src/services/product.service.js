import { initializeApp } from "firebase/app";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc3BhD66QddVUrEhbu2IlC3o4rWDUFJyU",
  authDomain: "chilli-funki.firebaseapp.com",
  projectId: "chilli-funki",
  storageBucket: "chilli-funki.appspot.com",
  messagingSenderId: "386748299061",
  appId: "1:386748299061:web:0c3187d9463396b1903e7c",
};

export function initFirebase() {
  initializeApp(firebaseConfig);
}

export async function getAllProducts(category) {
  const db = getFirestore();
  const queryBase = collection(db, "products");
  const querySnapshot = category
    ? query(queryBase, where("category", "==", category))
    : queryBase;

  return getDocs(querySnapshot).then((response) =>
    response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  );
}

export function getProductById(id) {
  const db = getFirestore();
  const queryDoc = doc(db, "products", id);

  return getDoc(queryDoc).then((response) => ({
    id: response.id,
    ...response.data(),
  }));
}
