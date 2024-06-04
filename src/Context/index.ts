import React, { useContext } from 'react';
import { VerifyContext } from '../hooks/VerificationContext';

export const useUserContext = React.createContext({ value: null });
export const useVerificationContext = () => {
  return useContext(VerifyContext);
};

export const UserInfoContext = () => {
  return useContext(useUserContext)
}