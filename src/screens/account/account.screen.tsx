import React, { useState, useEffect } from "react";
import UserLoggedScreen from "../userLoggedScreen/user-logged.screen";
import UserGuestScreen from "./userGuestScreen/user-guest.screen";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LoadingModal } from "../../components";

export default function AccountScreen() {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLogged(user ? true : false);
    });
  }, []);

  if (isLogged === null) return <LoadingModal isVisible text="Loading" />;

  return isLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}
