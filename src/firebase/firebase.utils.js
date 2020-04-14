import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBuwsw_fSDn0qCR_DBtOu4b5mYVf2UJYgE',
	authDomain: 'crown-clothing-db-62bf6.firebaseapp.com',
	databaseURL: 'https://crown-clothing-db-62bf6.firebaseio.com',
	projectId: 'crown-clothing-db-62bf6',
	storageBucket: 'crown-clothing-db-62bf6.appspot.com',
	messagingSenderId: '117519684645',
	appId: '1:117519684645:web:c21bb88c2b0a7071fd9bcc',
	measurementId: 'G-J4DJ26Q730',
};

firebase.initializeApp(config);

// the function beloew is asynchronous because we are making an API call
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		// console.log("returning");
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
