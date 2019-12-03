import React from 'react';
import List from "./List";
import AddForm from "./AddForm"
import './App.css';
import Footer from './Footer';

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Blueberries", purchased: true },
      { id: 2, name: "Strawberries", purchased: true },
      { id: 3, name: "Spinach", purchased: true },
    ],
    filter: 'All'
  };

  setFilter = (filter) => {
    this.setState({ filter })
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  };

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getId(), purchased: false }
    this.setState({ groceries: [grocery, ...groceries] });
  };

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            purchased: !grocery.purchased
          }
        }
        return grocery
      })
    });
  };

  visibleItems = () => {
    const { groceries, filter } = this.state;
    switch(filter) {
      case 'Active':
        return groceries.filter( t => ! t.purchased )
      case 'Purchased':
          return groceries.filter( t => t.purchased )
      default:
          return groceries;
    }
  };

  render() {
    const { groceries, filter } = this.state;

    return (
      <div>
      <Footer filter={filter} setFilter={this.setFilter} />
      <AddForm addItem={this.addItem} />
      <List name="Grocery List" items={this.visibleItems()} todoClick={this.handleClick} />
      </div>
    );
};
};

export default App;
