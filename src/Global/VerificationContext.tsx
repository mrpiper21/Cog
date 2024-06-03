import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

interface VerifyState {
  isVerified: boolean;
  uploadPhoto: () => void;
}

export const VerifyContext = createContext<VerifyState | undefined>(undefined);

export const VerificationContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVerified, setIsVerified] = useState<boolean>(Boolean);

  const uploadPhoto = () => {
    setIsVerified(true);
  };
  return (
    <VerifyContext.Provider value={{ isVerified, uploadPhoto }}>
      {children}
    </VerifyContext.Provider>
  );
};

export default VerificationContext;
