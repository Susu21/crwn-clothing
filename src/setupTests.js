import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("33l8XjFYy8SYnZ1iAZp5")
  .collection("cartItems")
  .doc("TxLNJBnpu2eIza2OwGBQ");
firestore.doc("/users/33l8XjFYy8SYnZ1iAZp5/cartItems/TxLNJBnpu2eIza2OwGBQ");
firestore.collection("/users/33l8XjFYy8SYnZ1iAZp5/cartItems");
