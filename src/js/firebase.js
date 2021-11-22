import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getFirestore, collection, getDocs,doc,setDoc,getDoc } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';


const app = initializeApp({
  apiKey: "AIzaSyCJNV3I3J_a95VkRTRKdDfhq1egyVmRPNs",
  authDomain: "clone-df569.firebaseapp.com",
  projectId: "clone-df569",
  storageBucket: "clone-df569.appspot.com",
  messagingSenderId: "979304394649",
  appId: "1:979304394649:web:183e7718fa1261331e2d08"
});

const db = getFirestore(app);


const card_2 = doc(db,"cards/card-2");

function writeData(){
  const docData={
    
          "bottom" : "End of Season Sale",
          "content" : {
            "first" : {
              "img" : "https://firebasestorage.googleapis.com/v0/b/clone-df569.appspot.com/o/card-men%2Fmen's-clothing.jpg?alt=media&token=fc11d753-3fb6-4c2f-94fa-a4bf127b8040",
              "label" : "Men's Clothing"
            },
            "fourth" : {
              "img" : "https://firebasestorage.googleapis.com/v0/b/clone-df569.appspot.com/o/card-men%2Fbags.jpg?alt=media&token=39154cfa-283d-4ea6-afc9-14c58de2779b",
              "label" : "Bags & Luggage"
            },
            "second" : {
              "img" : "https://firebasestorage.googleapis.com/v0/b/clone-df569.appspot.com/o/card-men%2Ffootwear.jpg?alt=media&token=2851e135-a62b-4a7e-b7cc-fc121adf862a",
              "label" : "Footwear"
            },
            "third" : {
              "img" : "https://firebasestorage.googleapis.com/v0/b/clone-df569.appspot.com/o/card-men%2Fwatches.jpg?alt=media&token=65938cb8-8ec1-4735-9142-97e670b9be82",
              "label" : "Watches"
            }
          },
          "heading" : "Styles for Men | Up to 70% off",
          "type" : "four-section"
        }
      
    
  setDoc(card_2,docData)
  .then(()=>{
    console.log("sucessfully written");
  })
  .catch(()=>{
    console.log("Error");
    
  })
}
const cards = collection(db,"cards");
// getDocs(cards)
// .then((snapshot)=>{
//   const data = snapshot.docs.map(doc => {console.log( {"id":doc.id,"title":doc.data().heading})});
  
// })
// .catch((e)=>{
//   console.log("Got Error :"+ e);
// })
