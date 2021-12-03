  import React, {Component} from "react";
  import'./style.css';
  /*  import { FaBeer } from 'react-icons/fa'; */

  class App extends Component {
    constructor (props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
    }

    updateInput(key, value){
      //update react state
      this.setState({
        [key]: value
      });
    }
    addItem(){
      //create item with unique id
      const newItem={
        id: 1 + Math.random(),
        value:this.state.newItem.slice()
      };

      //copy of current list of items
      const list =[...this.state.list];

      //add new item to list
      list.push(newItem);

      //update staete with new list and reset newItem input
      this.setState({
        list,
        newItem:""
      });
    }
    deleteItem(id){
      //copy current list of items
      const list =[...this.state.list];

      //filter out item being deleted
      const updatedList = list.filter(item => item.id !==id);

      this.setState({list: updatedList});
    }
    render() {
    return (
      <div className="App">
        <div className="container">
         <h1>TO DO LIST </h1>
         <p className="p">Add an item..</p>
        <div className="addItem">
            <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)} 
          />
        <div className="bttnplace">
        <button className="button" 
        onClick={() => this.addItem() }
        >
        +
      </button>
      </div>
      <br/>
      <ol>
        {this.state.list.map(item =>{
          return(
            <li key={item.id}>
             <div></div>
            {item.value}
            <button className="erase"
              onClick={() => this.deleteItem(item.id)}
              >
                X
              </button>
            </li>
            )

        })}
         
      </ol>
      
      </div>
      </div>
       <div className="footer">Created by Michel Chang ver 0.01</div>     
      </div>
      
    );
    }
   
  }

  export default App;
