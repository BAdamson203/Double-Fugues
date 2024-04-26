import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import reactDOM from 'react-dom';
import './App.css';
/* icon imports */
import { Search } from "@mui/icons-material";
/* image imports */
import background from "./components/assets/background.jpg";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import students from './assets/chapel-students.webp' /* image credits: wheaton.edu */
import logo from './assets/df-logo.jpg';

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

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  },[]);

  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        'hd': 'my.wheaton.edu'
       });
      auth.signInWithPopup(provider);
  }

return (
  <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
          <li>
              <Link to="hero" smooth={true} offset={0} duration={500}>
                  Home
              </Link>
          </li>
          <li>
              <Link to="about" smooth={true} offset={-350} duration={500}>
                  About us
              </Link>
          </li>
          <li>
              <Link to="contact" smooth={true} offset={-350} duration={500}>
                  Contact us
              </Link>
          </li>
          <li>
              <Link onClick={signInWithGoogle} className='btn'>
                  Log in with Google
              </Link>
          </li>
      </ul>
  </nav>
)
}

const Hero = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      'hd': 'my.wheaton.edu'
     });
    auth.signInWithPopup(provider);
}

  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Double Fugue</h1>
            <p>A place to connect with other Wheaties about your unique hobbies</p>
            <button className='btn' onClick={signInWithGoogle}>Log in</button>
        </div>
    </div>
  )
}

const Title = ({subtitle, title}) => {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={students} alt="" className='gecko'/>
        </div>
        <div className="about-right">
            <h2>Finding new friends based on your interests</h2>
            <p>Double Fugue is an application created by Wheaton students to help
              serve the Wheaton College campus community by connecting students
              through common interests.</p>
            <p>Our goal is to bring students across Wheaton College closer together
              to do more of the weird things that they love with others who love to
              do the same.</p>
            <p>If you've been having trouble finding a fugue partner or really, 
              really want to routinely cook recipes generated with ChatGPT with
              other students, or something like that, Double Fugue might just
              be the service for you!</p>
        </div>
    </div>
  )
}

const Contact = () => {

  /* Script obtained from Web3 forms.
     Can receive 250 form submissions per month for free. */
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    /* access key corresponds to Josh P.'s email */
    formData.append("access_key", "55dd8a16-cedd-4a9a-b71c-43f1f83c9f2a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out to us through the provided contact form or our
          contact information listed below. We want our platform to serve the
          Wheaton community as best as we can and any feedback to improve our
          service is always appreciated.</p>
        <h3>Our team</h3>
        <ul>
          <li>
            Benjamin Adamson: benjamin.adamson@my.wheaton.edu
          </li>
          <li>
            Luke Bilhorn: luke.bilhorn@my.wheaton.edu
          </li>
          <li>
            Josh Piazza: josh.piazza@my.wheaton.edu
          </li>
          <li>
            Josh Schuurman: josh.schuurman@my.wheaton.edu
          </li>
          <li>
            Ziling Zhong: ziling.zhong@my.wheaton.edu
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>
            Your name
          </label>
          <input type="text" name="name" placeholder="Enter your name" required/>
          <label>
            Email address
          </label>
          <input type="text" name="email" placeholder="Enter your email address" required/>
          <label>
            Write your message here
          </label>
          <textarea name="message" rows="6" placeholder="Enter your thoughts" required/>
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
        <p>© Double Fugue, 2024. All rights reserved.</p>
        <ul>
            <li>
                Terms of Service
            </li>
            <li>
                Privacy Policy
            </li>
        </ul>
    </div>
  )
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <section>
        {user ? <Profile /> : <LandingPage />}
      </section>
    </div>
  );
}

function LandingPage() {
  return(
    <div className="landing page">
      <Navbar/>
      <Hero/>
      <Title subtitle='About Double Fugue' title='Connecting Wheaties through their hobbies'/>
      <About/>
      <Title subtitle='Contact us' title='Let us know what you think!'/>
      <Contact/>
      <Footer/>
    </div>
  );
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

  function PostsPage() {
    const dummy = useRef();
    const { uid } = auth.currentUser;

    const postsRef = firestore.collection('posts');
    const query = postsRef.orderBy('createdAt');
        /*const query = postsRef.where('uid','==',uid);*/

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
      {/*<Topbar/>*/}
      <form onSubmit={makePost}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">SEND</button>
      </form>

        <main>
          {posts && posts.map(pst => <SinglePost key ={pst.id} posts={pst} />)}

          <div ref={dummy}></div>
        </main>

        
      </>
    )
  }

  function FilteredPostsPage() {

    const dummy = useRef();
    const { uid } = auth.currentUser;

    const postsRef = firestore.collection('posts');
    const query = postsRef.where('uid','==',uid);
        /*const query = postsRef.where('uid','==',uid);*/

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
      </>
    )
  }

  function SinglePost(props) {
    const { text, uid, photoURL, createdAt, tags } = props.posts;
    const postClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    var printTag = '';
    for(const a in tags){
      printTag += "#"+tags[a]+" ";
    }

    return (
      <div className="shareBox"> 
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src={photoURL} alt="" />
                        <p>
                          {text}
                        </p>
                    </div>
                    <hr className="shareHr"/>
                    <div className="shareBottom">
                        <div className="shareOptions">
                            {/* shareOption is current placeholder for tag system */}
                            <div className="shareOption">
                                {printTag ? <b>{printTag}</b> : <i>This post has no tags</i>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            /*<div className={'post ${postClass}'}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>*/
    )
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
                {/*<Sidebar className="sidebar"/>*/}
                <div className="profileRight">
                    <div className="profileRightTop">
                        <img className="profileCoverImg" src = {background} alt=""/>
                        <img className="profileUserImg" src = {photoURL} alt=""/>
                        <div className="profileInfo">
                            {profile && profile.map(prof => <ProfileInfo key ={prof.id} profiles={prof} />)}
                        </div>
                    </div>
                    <div className="profileBottom">
                      <div className="profileRightBottom">
                        <h4>Your Posts</h4>
                          <FilteredPostsPage/>
                      </div>
                      <div className="profileLeftBottom">
                        <h4>Feed</h4>
                        <PostsPage/>
                      </div>
                    </div>
                </div>   
            </div>
        </>
    )
  }

function ProfileInfo(props){
  const { fname, id, lname, uid } = props.profiles;
  const profileClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return(
    <div>
      <h4 className="name">
        {fname} {lname}
      </h4>
      <span className="profileInfoDesc">{id}</span>
    </div>
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

/*function Sidebar() {
  return(
      <div className="sidebar">
          <div className="sidebarWrapper">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
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
}*/


  export default App;