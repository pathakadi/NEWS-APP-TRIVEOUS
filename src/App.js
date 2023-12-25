import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import './App.css';
import { NewsList, SignIn, SignUp } from './components'

function App() {
  const [ searchTerm , setSearchTerm ] = useState("");
    const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
  
      return () => {
        listen();
      };
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
        })
        .catch((error) => console.log(error));
    };
  return (
    <div className="App">
      <div className='head'>
        <h1>Daily News</h1>
      </div>
      <div>
        {authUser ? (
          <>
            <p className="small">{`Signed In as ${authUser.email}`}</p>
            <button className="btn1" onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <h2 className="small">Signed Out</h2>
        )}
      </div>
      <div>
        { authUser ?  (
          <>
            <input className='search-bar' value={searchTerm} placeholder='Search...' onChange={(e)=> setSearchTerm(e.target.value)} />
            <NewsList query={searchTerm}/>
          </>
        ) : (
          <>
            <SignIn/>
            <SignUp/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
