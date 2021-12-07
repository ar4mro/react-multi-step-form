import React, { useContext, useState } from "react";

const SignupFormContext = React.createContext();

export function SignupFormProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [social, setSocial] = useState({});
  const contextValue = {
    profile,
    setProfile,
    social,
    setSocial,
  };

  return (
    <SignupFormContext.Provider value={contextValue}>
      {children}
    </SignupFormContext.Provider>
  );
}

export default function useSignupForm() {
  return useContext(SignupFormContext);
}
