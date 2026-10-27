// Módulo Firebase (Auth + Firestore) - Base para a trilha
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

let app, auth, db;

export function initFirebase() {
  if (app) return { app, auth, db };
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  return { app, auth, db };
}

export function onAuthChange(callback) {
  const { auth } = initFirebase();
  return onAuthStateChanged(auth, callback);
}

export function getUser() {
  const { auth } = initFirebase();
  return auth.currentUser;
}

export async function signIn(email, password) {
  const { auth } = initFirebase();
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signUp(email, password, displayName) {
  const { auth } = initFirebase();
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(cred.user, { displayName });
  }
  // criar documento do usuário
  const { db } = initFirebase();
  await setDoc(doc(db, "usuarios", cred.user.uid), {
    uid: cred.user.uid,
    email: cred.user.email,
    displayName: displayName || null,
    createdAt: serverTimestamp()
  }, { merge: true });
  return cred;
}

export async function logOut() {
  const { auth } = initFirebase();
  return signOut(auth);
}

export async function salvarProgresso(userId, data) {
  const { db } = initFirebase();
  await setDoc(doc(db, "progresso", userId), { ...data, updatedAt: serverTimestamp() }, { merge: true });
}

export async function carregarProgresso(userId) {
  const { db } = initFirebase();
  const snap = await getDoc(doc(db, "progresso", userId));
  return snap.exists() ? snap.data() : null;
}

export async function salvarReflexao(userId, aulaId, reflexao) {
  const { db } = initFirebase();
  const id = userId + "_" + aulaId + "_" + Date.now();
  await setDoc(doc(db, "reflexoes", id), {
    userId, aulaId, reflexao, createdAt: serverTimestamp()
  });
  return id;
}
