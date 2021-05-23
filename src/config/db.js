import * as firebase from 'firebase';

 let config = {
apiKey: "AIzaSyBDXB3OFOOPZMrbN2qzL8p2h_IDaQm5IsA",
  authDomain: "react-native-fire-2afb3.firebaseapp.com",
  projectId: "react-native-fire-2afb3",
  storageBucket: "react-native-fire-2afb3.appspot.com",
  messagingSenderId: "645148772443",
  appId: "1:645148772443:web:fd8860cba336f78d9a977e"
  };
let app = firebase.initializeApp(config);
export const db = app.database();