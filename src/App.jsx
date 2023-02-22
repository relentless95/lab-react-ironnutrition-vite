import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState("");
  const [toDelete, deleteItem]=useState("");

  const handleDelete=(name)=>{
    const updatedFoodlist = foodList.filter((food) =>food.name !== name);
    setFoodList(updatedFoodlist);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} handleDelete ={handleDelete} toDelete={toDelete}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search
        foodList={foodList}
        setFoodList={setFoodList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Render the list of Food Box components here */}
        {foodList
          .filter((curr) => {
            if (searchTerm === "") {
              return curr;
            }
            if (curr.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return curr;
            }
          })
          .map((food) => {
            return <FoodBox food={food} handleDelete={handleDelete} />;
          })}
      </Row>
    </div>
  );
}

export default App;
