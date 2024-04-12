import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyABZ_Vo1gmStINDqZfuDMvMKe1POot0jGU",
  authDomain: "doublefuguesreal.firebaseapp.com",
  projectId: "doublefuguesreal",
  storageBucket: "doublefuguesreal.appspot.com",
  messagingSenderId: "337242738949",
  appId: "1:337242738949:web:e4c1cbd4254af04d18a76c",
  measurementId: "G-X15X010VN7"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>DoubleFugues</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

  function SignOut() {
    return auth.currentUser && (

      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

  function ChatRoom() {

    const dummy = useRef();

    const postsRef = firestore.collection('posts');
    const query = postsRef.orderBy('createdAt').limit(25);

    const [posts] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const makePost = async(e) => {

      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      await postsRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })

      setFormValue('');

      dummy.current.scrollIntoView({behavior: 'smooth'});
      }

    return (
      <>
        <main>
          {posts && posts.map(pst => <SinglePost key ={pst.id} posts={pst} />)}

          <div ref={dummy}></div>
        </main>

        <form onSubmit={makePost}>

          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

          <button type="submit">SEND</button>

        </form>
      </>
    )
  }

  function SinglePost(props) {
    const { text, uid, photoURL } = props.posts;

    const postClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
      <div className={'post ${postClass}'}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    )
  }

export default App;
