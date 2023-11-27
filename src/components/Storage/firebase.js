// const {initializeApp, cert} = require('firebase-admin/app'); 
// const {getFirestore} = require('firebase-admin/firestore');


// const serviceAccount = require('./Certeficate.json');

// initializeApp({
//   credential: cert(serviceAccount),
//   databaseURL: "https://gabriel-registration-default-rtdb.firebaseio.com"
// });

// const db = getFirestore();
// module.exports(db);



// class Database{
//   constructor(){
//     this.db = db;
//   }
 
//   addData = (data) => {
//     return this.db.collection('data').add(data);
//   }
//   getData = () => {
//     return this.db.collection('data').get();
//   }
//   deleteData = (id) => {
//     return this.db.collection('data').doc(id).delete();
//   }
//   updateData = (id, data) => {
//     return this.db.collection('data').doc(id).update(data);
//   }
//   getSingleData = (id) => {
//     return this.db.collection('data').doc(id).get();
//   }

// }

// export default new Database();
