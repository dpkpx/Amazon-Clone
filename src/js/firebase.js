import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';


const app = initializeApp({
  apiKey: "AIzaSyCJNV3I3J_a95VkRTRKdDfhq1egyVmRPNs",
  authDomain: "clone-df569.firebaseapp.com",
  projectId: "clone-df569",
  storageBucket: "clone-df569.appspot.com",
  messagingSenderId: "979304394649",
  appId: "1:979304394649:web:183e7718fa1261331e2d08"
});

const db = getFirestore(app);



window.onload = () => {
  const url = document.location.href;

  const productId = url.split('?')[1].split('=')[1]

  const productRef = doc(db, `product/${productId}`);

  getDoc(productRef)
    .then((productSnap) => {
      const product = productSnap.data();

      loadDataToDom(product)

    })
}

function loadDataToDom(product) {

  document.querySelector(".categoryLabel p").innerHTML = product.categoryLabel;
  document.querySelector(".product__title").innerHTML = product.title;
  document.querySelector(".product__storeLink").innerHTML = `Visit the ${product.store} Store`;
  document.querySelectorAll(".product__priceValue").forEach(value => value.innerHTML = product.price);
  document.querySelector(".leftInStock").innerHTML = `Only ${product.leftInStock} left in stock.`;


  const navthumb = document.querySelector(".product__visualsNav ol");
  product.thumbnails.forEach((thumbnail, index) => {

    navthumb.innerHTML = navthumb.innerHTML + `<li order=${index + 1} tabindex="0" class="product__visualsNavThumbnail">
    <img src="${thumbnail}" alt="thumbnail"></li>`;

  })

  const imageContainer = document.querySelector(".product__visualsDisplay ol")
  let zIndex = 99;
  product.images.forEach((image, index) => {
    index != 0 ? zIndex = -1 : zIndex = 99;
    imageContainer.innerHTML = imageContainer.innerHTML + `<li order=${index + 1} style="z-index: ${zIndex} ;"><img src="${image}"
  alt="product Image"></li>`;

  })
}