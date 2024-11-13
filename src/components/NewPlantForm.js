import React, { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  
  
    const newPlant = { name, image, price: parseFloat(price) };
  
    fetch("https://react-hooks-cc-plantshop-8-l45f.onrender.com/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        setPlants((prevPlants) => [...prevPlants, newPlant]);
      })
      
  };

  return (
    <div>   
       <form onSubmit={handleSubmit}>
        <label><h2>ADD PLANT:</h2></label>
      <div>
      <input
        type="text"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      </div>
      <div>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      </div>
      <button type="submit">Add Plant</button>
    </form>
</div>
  );
}



export default NewPlantForm;