import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import '../App.css';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h2>Create Account</h2>
        <input
          className="box"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          className="box"
          type="password"
          placeholder="Password(Min 6 digits)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button className="btn2" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;