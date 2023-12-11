// LandContext.js
import { createContext, useContext, useState } from 'react';

const LandContext = createContext();

export const LandProvider = ({ children }) => {
  const [landDetails, setLandDetails] = useState([]);

  const addLandDetails = (details) => {
    setLandDetails([...landDetails, details]);
  };

  return (
    <LandContext.Provider value={{ landDetails, addLandDetails }}>
      {children}
    </LandContext.Provider>
  );
};

export const useLandContext = () => {
  return useContext(LandContext);
};
