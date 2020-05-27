import React, {Component} from 'react';

// Common React Hooks methods, useState & useEffect 
import  './style.css'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      newItem: "",
      list: [],

    }
    this.addItem = this.addItem.bind(this)
  }

updateInput(key, value){
  // update the react state
  this.setState({
    [key]: value
  });
}  



addItem(){
  // create item with unique id
  const newItem = {
    id: 1 + Math.random(),
    value: this.state.newItem.slice() // copy data
  };

  // copy of current list os items
  const list = [...this.state.list];

  // add new item to list
  list.push(newItem);

  // update state with new list and rest newItem input
  this.setState({
    list,
    newItem: ""
  });
}


deleteItem(id){
  // item will be deleted here
  const list = [...this.state.list];

  // filter out item being deleted
  const updatedList = list.filter(item => item.id !== id);

  this.setState({
    list: updatedList
  })
}

  render(){
    return(
      <div>
        <div>
          <p className="title">Todo List in React</p>
          <br />
           <input className = "input"
          type = "text"
          placeholder = "Type item here..."
          value = {this.state.newItem}
          onChange = {e => this.updateInput("newItem", e.target.value)} 
            />
            <button className = "addButton"
            onClick = {() => this.addItem()} 
            >
            Add Item
            </button>
              <br  /><br  />

              <ol className = "listView">  
                {this.state.list.map(item => {
                  return(
                    <li className = "listItems"key = {item.id}> 
                    {item.value} 
                    <button className = "deleteButton"
                      onClick = {() => this.deleteItem(item.id)}
                    >
                      X
                    </button>
                    </li>
                  )
                })}
              </ol>
        </div>

      </div>
    )
  }
}

export default App;
