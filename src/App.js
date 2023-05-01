import React, { Component } from "react";
import TodoItems from "./components/todoItems/todoItems";
import AddItem from "./components/AddItems/AddItem";
class App extends Component{
  state = {
    items: [
      {id:1,name:"hamza",age:"22"},
      {id:2,name:"mohamed",age:"23"},
      {id:3,name:"anouar",age:"24"}
    ]
  }
  deleteItems =(id) => {
    let items=this.state.items.filter(item => {
      return item.id !== id ;
    }  )  
    this.setState({items});
    
     }
     addItem = (item)=> {
      item.id=Math.random();
        let items=this.state.items;
        items.push(item);
        this.setState({items:items})
        
     }
    render() {
      return (
        <div className="App container">
         <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems}/>
        <AddItem addItem={this.addItem}/>
        </div>
      );

    }
}

export default App;
