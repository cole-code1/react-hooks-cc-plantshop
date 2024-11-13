import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  return (
    <div>
      <div className="row">
        {plants.map((plant) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={plant.id}>
            <PlantCard plant={plant} setPlants={setPlants} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantList;