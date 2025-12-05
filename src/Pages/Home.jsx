
import "animate.css";
import { useLoaderData } from "react-router";
import SlideCard from "../Components/SlideCard";
import Services from "./Services";
import Tips from "./Tips";
import Veterian from "./Veterian";
import PetShopping from "./PetShopping";

const Home = () => {
  
  const data = useLoaderData();

  return (
    <div>
      <SlideCard data={data}></SlideCard>
      <Services></Services>
      <Tips></Tips>
      <Veterian></Veterian>
      <PetShopping></PetShopping>
    </div>
  );
};

export default Home;
