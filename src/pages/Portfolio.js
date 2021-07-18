import classes from './Portfolio.module.scss';
import FinishedOrder from '../components/FinishedOrder';

// FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';


import { useCollectionData } from 'react-firebase-hooks/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCkaNhiSxkGrQKMqqaYS92Cid4QuXe7U_8",
    authDomain: "stolarnia-project.firebaseapp.com",
    databaseURL: "https://stolarnia-project-default-rtdb.firebaseio.com",
    projectId: "stolarnia-project",
    storageBucket: "stolarnia-project.appspot.com",
    messagingSenderId: "653762010250",
    appId: "1:653762010250:web:f71eaca977d0999929e173"
  });
}
else {
  firebase.app();
}

const firestore = firebase.firestore();
const storage = firebase.storage();
// FIREBASE

function Portfolio() {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  const messagesRef = firestore.collection('finishedOrders');
  const query = messagesRef.orderBy('createdAt', 'desc');
  const [messages] = useCollectionData(query, {idField: 'id'});
  const storageRef = storage.ref();
  return (
    <div>
      <div className={classes.topMargin}></div>
      {messages && messages.map( (msg, index) => {
        if (index % 2 === 0) {
          return <FinishedOrder key={msg.id} storageRef={storageRef} msg={msg} bg={classes.bg1}/>
        }
        else {
          return <FinishedOrder key={msg.id} storageRef={storageRef} msg={msg} bg={classes.bg2}/>
        }
      })}
      {/* <Link to='/'>Home</Link> */}
    </div>
  )
}

export default Portfolio;