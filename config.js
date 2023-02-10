/**
 * This is a configuration file to work with firebase firestore
 */

const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBs8sQ_VI1P2l5eIaXn2Bn9iJXl8SxLSq8",
  authDomain: "fileupload-2c903.firebaseapp.com",
  projectId: "fileupload-2c903",
  storageBucket: "fileupload-2c903.appspot.com",
  messagingSenderId: "686813138124",
  appId: "1:686813138124:web:ef9132e954e6c0b3620669",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const StudentList = db.collection("StudentList");

module.exports = StudentList;
