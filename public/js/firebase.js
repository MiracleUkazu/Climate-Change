
const firebaseConfig = {
    apiKey: "AIzaSyC6kt_Mz3MTahUT1UhL5YARlDdL00NrWxw",
    authDomain: "hive-blog.firebaseapp.com",
    projectId: "hive-blog",
    storageBucket: "hive-blog.appspot.com",
    messagingSenderId: "473712925949",
    appId: "1:473712925949:web:bdff858b98d737d437f294"
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app); 