import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("  https://react-hooks-cc-plantshop-10-n6dv.onrender.com/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <h1>Plantsy</h1>
      <Search plants={plants} setPlants={setPlants} />
      <NewPlantForm setPlants={setPlants} />
      
       <PlantList plants={plants} setPlants={setPlants} />
          
          
     
        
      </>
      
  );
}

export default PlantPage;