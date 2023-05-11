// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaGUe3NOQwJoCn7EAm72tOAM3hA0BbqaU",
  authDomain: "autoply-386402.firebaseapp.com",
  projectId: "autoply-386402",
  storageBucket: "autoply-386402.appspot.com",
  messagingSenderId: "657294755902",
  appId: "1:657294755902:web:fd496a9bb8777183f2a96f",
  measurementId: "G-30YQZCC4XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
