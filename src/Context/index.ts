import { createContext, useContext } from 'react';

export const ActiveCategoryContext = createContext('');

export const useActiveCategory = () => {
  return useContext(ActiveCategoryContext);
};