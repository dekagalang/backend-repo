import admin from "firebase-admin";

const serviceAccount = require("../../firebase-ebuddy.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
