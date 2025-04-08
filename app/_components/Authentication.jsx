"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "@/configs/firebaseConfig";

function Authentication({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const provider = new GoogleAuthProvider();

  const onSignInClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        console.error("Auth error:", error);
      });
  };

  if (!mounted) return null; // ✅ prevents mismatch between server and client

  return <div onClick={onSignInClick}>{children}</div>;
}

export default Authentication;
