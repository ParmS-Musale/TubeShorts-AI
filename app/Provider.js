"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { AuthContext } from "./_context/AuthContext";
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL); // Make sure this env variable is set


const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState();
  const CreateUser = useMutation(api.users.CreateNewUser);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      setUser(user);
      const result = await CreateUser({
        name: user?.displayName,
        email: user?.email,
        pictureURL: user?.photoURL,
      });
      console.log(result);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!mounted) return null;

  return (
    <ConvexProvider client={convex}>
      <AuthContext.Provider value={{ user }}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </AuthContext.Provider>
    </ConvexProvider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default Provider;
