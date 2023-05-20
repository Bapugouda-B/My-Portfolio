import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [about, setAbout] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);

  //Fetching data from mongodb server
  const fetchData = async () => {
    //..............For Fetching About data................
    const Res1 = await axios.get(`http://localhost:5000/about`);
    // console.log(Res1.data);
    setAbout(Res1.data);

    //..............For Fetching Education data................
    const Res2 = await axios.get(`http://localhost:5000/education`);
    // console.log(Res2.data);
    setEducation(Res2.data);


     //..............For Fetching Projects data................
     const Res3 = await axios.get(`http://localhost:5000/project`);
     // console.log(Res3.data);
     setProjects(Res3.data);

    //..............For Fetching Experience data................
    const Res4 = await axios.get(`http://localhost:5000/experience`);
    // console.log(Res4.data);
    setExperience(Res4.data);
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
    projects: [projects, setProjects]
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
