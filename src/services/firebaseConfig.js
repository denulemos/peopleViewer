import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
    //TU CONFIGURACION :)
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
