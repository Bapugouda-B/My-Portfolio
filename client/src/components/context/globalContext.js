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
    const Res1 = await axios.get(`/about`);
    // console.log(Res1.data);
    setAbout(Res1.data);

    //..............For Fetching Education data................
    const Res2 = await axios.get(`/education`);
    // console.log(Res2.data);
    setEducation(Res2.data);

    //..............For Fetching Projects data................
    const Res3 = await axios.get(`/project`);
    // console.log(Res3.data);
    setProjects(Res3.data);

    //..............For Fetching Experience data................
    const Res4 = await axios.get(`/experience`);
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
    projects: [projects, setProjects],
    isLogin: [isLogin, setIsLoggedIn],
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
