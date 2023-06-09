import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isLogin, setIsLoggedIn] = useState(false);
  const [about, setAbout] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);

  //checking token loginUser
  const checkLogin = async () => {
    const token = localStorage.getItem("tokensStore");
    if (token) {
      const verified = await axios.get(
        `/user/verify`,
      {headers: { Authorization: token }}
      );
      console.log(verified);
      setIsLoggedIn(verified.data);

      if (verified.data === false) {
        return localStorage.clear();
      } else {
        setIsLoggedIn(false);
      }
    }
  };

  useEffect(() => {
try {
  checkLogin();
} catch (error) {
  
}
  },[])


  //Fetching data from mongodb server
  const fetchData = async () => {
    //..............For Fetching About data................
    const Res1 = await axios.get("https://bapu12-portfolio-api.vercel.app/about");
    setAbout(Res1.data);

    //..............For Fetching Education data................
    const Res2 = await axios.get("https://bapu12-portfolio-api.vercel.app/education");
    setEducation(Res2.data);

    //..............For Fetching Projects data................
    const Res3 = await axios.get("https://bapu12-portfolio-api.vercel.app/project");
    setProjects(Res3.data);

    //..............For Fetching Experience data................
    const Res4 = await axios.get("https://bapu12-portfolio-api.vercel.app/experience");
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
    projects: [projects, setProjects],
    isLogin: [isLogin, setIsLoggedIn],
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
