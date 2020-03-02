import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBuwsw_fSDn0qCR_DBtOu4b5mYVf2UJYgE",
	authDomain: "crown-clothing-db-62bf6.firebaseapp.com",
	databaseURL: "https://crown-clothing-db-62bf6.firebaseio.com",
	projectId: "crown-clothing-db-62bf6",
	storageBucket: "crown-clothing-db-62bf6.appspot.com",
	messagingSenderId: "117519684645",
	appId: "1:117519684645:web:c21bb88c2b0a7071fd9bcc",
	measurementId: "G-J4DJ26Q730"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
