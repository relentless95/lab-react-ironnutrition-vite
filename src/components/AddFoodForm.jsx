import React, { useState } from "react";
import { Divider, Input } from "antd";


function AddFoodForm({ foodList, setFoodList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFoodList([
      ...foodList,
      { name: name,
        image: image,
        calories: calories,
        servings: servings },
    ]);
  };

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={image} type="text" onChange={handleImageChange}/>

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={calories} type="number" onChange={handleCaloriesChange}/>


      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={servings} type="number" onChange={handleServingsChange}/>

      <button  onClick={handleSubmit}>Create</button>
    </form>
  );
}

export default AddFoodForm;
