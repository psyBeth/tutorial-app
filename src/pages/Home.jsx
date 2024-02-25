import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
  try {
    const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials"
    const res = await axios(URL)
    setTutorials(res.data);
  } catch (error) {
    console.log(error);
  }
  }

  //? request must be made during the mount phase
  useEffect(() => {
    getTutorials()
  }, [])
  
  console.log(tutorials);

  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorials}/>
    </>
  );
};

export default Home;