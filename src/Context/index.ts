import { useContext } from 'react';
import { VerifyContext } from '../hooks/VerificationContext';
import { useUserContext } from '../hooks/UserContext';

export const useVerificationContext = () => {
  return useContext(VerifyContext);
};

export const UserInfoContext = () => {
  return useContext(useUserContext)
}