import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyALowy7E0CbDuunlunTBwD2E5RqKS5npt0",
    authDomain: "school-attendance-app-d824d.firebaseapp.com",
    databaseURL: "https://school-attendance-app-d824d-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-d824d",
    storageBucket: "school-attendance-app-d824d.appspot.com",
    messagingSenderId: "735763175779",
    appId: "1:735763175779:web:9eb53383ed21e38da69b56"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.database();

