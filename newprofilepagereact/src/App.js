import "./App.css";
/* icon imports */
import { Chat, Help, RssFeed, Search } from "@mui/icons-material";
/* image imports */
import background from "./components/assets/background.jpg";
/* Firebase setup */
import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

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
      <section>
        {user ? <Profile /> : <SignIn />}
      </section>
    </div>
  );
}

function Profile() {
  const { uid, photoURL } = auth.currentUser;
  const profileRef = firestore.collection('account');
  const query = profileRef.where('uid','==',uid);
  const [profile] = useCollectionData(query, { idField: 'id' });

  return(
      <>
          <Topbar className="topbar"/>
          <div className="profile">
              <Sidebar className="sidebar"/>
              <div className="profileRight">
                  <div className="profileRightTop">
                      <img className="profileCoverImg" src = {background} alt=""/>
                      <img className="profileUserImg" src = {photoURL} alt=""/>
                      <div className="profileInfo">
                          
                          <h4 className="profileInfoName">
                            {uid}
                          </h4>
                          
                          <span className="profileInfoDesc">description</span>
                      
                      </div>
                  </div>
                  <div className="profileRightBottom">
                      <PostsPage/>
                  </div>
              </div>   
          </div>
      </>
  )
}

function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">
              Double Fugue
            </span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="Search" className="searchInput"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">
                  About Double Fugue
                </span>
                <span className="topbarLink">
                  FAQ
                </span>
                <span className="topbarLink">
                  Home
                </span>
                <SignOut className="signOutButton"/>
            </div>
        </div>
    </div>
  )
}

function Sidebar() {
  return(
      <div className="sidebar">
          <div className="sidebarWrapper">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                    {/* Feed not currently implemented, may be scrapped */}
                      <RssFeed className="sidebarIcon"/>
                      <span className="sidebarListItemText">
                        Feed
                      </span>
                  </li>
                  <li className="sidebarListItem">
                      <Chat className="sidebarIcon"/>
                      <span className="sidebarListItemText">Chats</span>
                  </li>
                  <li className="sidebarListItem">
                      <Help className="sidebarIcon"/>
                      <span className="sidebarListItemText">Help</span>
                  </li>
              </ul>
              <button className="sidebarButton">
                Show More
              </button>
              <hr/>
          </div>
      </div>)
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      'hd': 'my.wheaton.edu'
     });
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

  /* PostsPage is slightly retooled to only show posts from the user */
  function PostsPage() {
    const dummy = useRef();
    const { uid } = auth.currentUser;

    const postsRef = firestore.collection('posts');
    const query = postsRef.where('uid','==',uid);

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

        {/*<form onSubmit={makePost}>

          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

          <button type="submit">SEND</button>

    </form>*/}
      </>
    )
  }

  function SinglePost(props) {
    const { text, uid, photoURL, createdAt } = props.posts;
    const postClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
      <div className={'post ${postClass}'}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    )
  }

export default App;