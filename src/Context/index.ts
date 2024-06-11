import React, { useContext } from 'react';
import { VerifyContext } from '../hooks/Verificationcontext/VerificationContext';
import { useUserContext } from '../hooks/Usercontext/UserContext';
import { PreferenceContext } from './../hooks/PrefrenceContext/PreferenceContext';

// export const useUserContext = React.createContext(UserContext);
export const useVerificationContext = () => {
  return useContext(VerifyContext);
};

export const UserInfoContext = () => {
  return useContext(useUserContext)
}

export const usePreferenceContext = () => {
  return useContext(PreferenceContext)
}