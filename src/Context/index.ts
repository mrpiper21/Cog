import { useContext } from 'react';
import { VerifyContext } from '../hooks/VerificationContext';

export const useVerificationContext = () => {
  return useContext(VerifyContext);
};