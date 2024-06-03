import { useContext } from 'react';
import { VerifyContext } from '../Global/VerificationContext';

export const useVerificationContext = () => {
  return useContext(VerifyContext);
};