import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [about, setAbout] = useState([]);

  //fetchinf data from mongodb server
  const fetchData = async () => {
    const res1 = await axios.get(`http://localhost:5000/about`);
    console.log(res1.data);
    setAbout(res1.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const state = {
    about: [about, setAbout],
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
