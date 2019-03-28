import database from 'Store/Firebase';

const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
        const { providerData } = firebaseUser;
        const firebase = database.getFirebaseInstance();

        for (let ii = 0; ii < providerData.length; ii += 1) {
            if (providerData[ii].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID
            && providerData[ii].uid === googleUser.getBasicProfile().getId()) {
                // We don't need to reauth the Firebase connection.
                return true;
            }
        }
    }
    return false;
};

export default isUserEqual;
