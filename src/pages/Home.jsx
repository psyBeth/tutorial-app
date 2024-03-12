import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_URL)   //URL from backend
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
      <AddTutorial getTutorials={getTutorials}/>
      <TutorialList tutorials={tutorials} getTutorials={getTutorials}/>
    </>
  );
};

export default Home;