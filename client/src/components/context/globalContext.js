import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [about, setAbout] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  //Fetching data from mongodb server
  const fetchData = async () => {
    //..............For Fetching About data................
    const Res1 = await axios.get(`http://localhost:5000/about`);
    // console.log(aboutRes.data);
    setAbout(Res1.data);

    //..............For Fetching Education data................
    const Res2 = await axios.get(`http://localhost:5000/education`);
    // console.log(Res2.data);
    setEducation(Res2.data);

    //..............For Fetching Experience data................
    const Res3 = await axios.get(`http://localhost:5000/experience`);
    // console.log(Res3.data);
    setExperience(Res3.data);
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
    education: [education, setEducation],
    experience: [experience, setExperience],
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
