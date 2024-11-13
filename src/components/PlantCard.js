import React, { useState } from "react";

function PlantCard({ plant, setPlants }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  // Toggle Sold Out status
  const SoldOut = () => {
    fetch(`  http://localhost:6001/plants${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isSoldOut: !isSoldOut,
      }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        setPlants((Plants) =>
          Plants.map((p) => (p.id === updatedPlant.id ? updatedPlant : p))
        );
        setIsSoldOut(!isSoldOut);
      })
      .catch((error) => console.error("Error updating plant:", error));
  };


  const deletePlant = () => {
    fetch(` http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPlants(( Plants) =>
            Plants.filter((p) => p.id !== plant.id)
          );
        } else {
          console.error("Failed to delete the plant.");
        }
      })
    
  };

  return (
    <div className="card w-75 p-3">
      <img src={plant.image} className="card-img-top" alt={plant.name} />
      <div className="card-body">
        <h5 className="card-title">{plant.name}</h5>
        <p className="card-text">Price: ${plant.price}</p>
        <button
          className={`btn ${isSoldOut ? "btn-secondary" : "btn-primary"}`}
          onClick={SoldOut}
        >
          {isSoldOut ? "Sold Out" : "In Stock"}
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={deletePlant}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PlantCard;