import React, { Component } from 'react';
import Fruit from "./Fruit";
import FruitForm from "./FruitForm";
import Navigation from "./Navigation";


class ListExample extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { id: 1, nom: "Abricot" },
        { id: 2, nom: "Banane" },
        { id: 3, nom: "Cerise" },
      ],
      newFruit: ""
    };
  }

  handleClick = (id) => {
    const fruitCopy = [...this.state.fruits];
    const fruitCopyUpdated = fruitCopy.filter((fruit) => fruit.id !== id);
    this.setState({ fruits: fruitCopyUpdated });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const fruitCopy = [...this.state.fruits];
    const id = new Date().getTime();
    const nom = this.state.newFruit;
    const newFruitAdd = { id, nom };
    fruitCopy.push(newFruitAdd);
    this.setState({ fruits: fruitCopy, newFruit: "" });
  };

  handleChange = (event) => {
    this.setState({ newFruit: event.target.value });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>List of fruits</h1>

          <ul>
            {this.state.fruits.map((fruit) => (
              <Fruit fruit={fruit} onClick={(e) => this.handleClick(fruit.id)} />
            ))}
          </ul>
          <FruitForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            newFruit={this.state.newFruit}
          />
        </div>
      </div>
    );
  }
}

export default ListExample;

