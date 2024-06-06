import React, { useContext } from 'react';
import { VerifyContext } from '../hooks/Verificationcontext/VerificationContext';
import { useUserContext } from '../hooks/Usercontext/UserContext';

// export const useUserContext = React.createContext(UserContext);
export const useVerificationContext = () => {
  return useContext(VerifyContext);
};

export const UserInfoContext = () => {
  return useContext(useUserContext)
}