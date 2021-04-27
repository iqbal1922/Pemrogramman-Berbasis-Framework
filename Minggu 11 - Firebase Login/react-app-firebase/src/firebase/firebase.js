import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZzWilHo9b5DwE5QLIdWbiFMJ7Aih7KvY",
  authDomain: "ornate-keel-304301.firebaseapp.com",
  databaseURL: "https://ornate-keel-304301-default-rtdb.firebaseio.com",
  projectId: "ornate-keel-304301",
  storageBucket: "ornate-keel-304301.appspot.com",
  messagingSenderId: "616646524188",
  appId: "1:616646524188:web:eff2af14dcef2e66fc0ed9",
  measurementId: "G-TT9Q1Y9KY1"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;