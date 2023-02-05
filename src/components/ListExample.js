import React, { useState } from "react";
import Fruit from "./Fruit";
import FruitForm from "./FruitForm";
import Navigation from "./Navigation";

const ListExample = () => {
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);
  const handleClick = (id) => {
    const fruitCopy = [...fruits];
    const fruitCopyUpdated = fruitCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitCopyUpdated);
  };
  const [newFruit, setNewFruit] = useState("");

  //const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const fruitCopy = [...fruits];

    const id = new Date().getTime();
    const nom = newFruit;
    const newFruitAdd = { id, nom };
    fruitCopy.push(newFruitAdd);
    setFruits(fruitCopy);
    setNewFruit("");
  };
  const handleChange = (event) => {
    setNewFruit(event.target.value);
  };
  return (
    <div>
       <Navigation/>
       <div className="container">
            <h1>List of fruits</h1>

            <ul>
              {fruits.map((fruit) => (
                <Fruit fruit={fruit} onClick={ (e) => handleClick(fruit.id) }/>
              ))}
            </ul>
            <FruitForm handleChange={handleChange} handleSubmit={handleSubmit} newFruit={newFruit}/>
         </div>
            
    </div>
  );
};

export default ListExample;
