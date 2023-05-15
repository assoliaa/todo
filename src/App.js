import react, { useSyncExternalStore } from "react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import AddTask from "./components/AddTask";
import './App.css';
import TodoList from "./components/TodoList";
import SingleFilter from "./components/SingleFilter";
import Footer from "./components/Footer";
import MoveToTrash from "./components/MoveToTrash";
import DeleteForever from "./components/DeleteForever";
///*{movetotrash?<button onClick={()=>MoveTo(id)}>Move to Trash</button>:""}
//{deletefrom?<div><button onClick={()=>{Delete(id)}}>Delete Forever</button><button onClick={()=>{MoveBack(id)}}>Move back to ToDo</button></div>:""}

function App() {
  const[addWindow, setaddWindow] =useState(false);
  const[content, setContent] =useState('');
  const[activestatus, setActiveStatus]=useState("To Do");
  

  
  
  const [Todos, setTodos] =useState([
    {
      id:uuidv4(), 
      status:"To Do",
      content:"Go to the gym",
      },
    {
      id:uuidv4(),
      status: "Done",
      content:"Read Book",
    },
    {
      id:uuidv4(),
      status: "Done",
      content:"Make myself happy",
    },
  ]);

  const changeContent =(e) =>{
    setContent(e.target.value)
    }
  
  
  const addTask =() =>{
    const newTodo ={
      status:"To Do",
      content:content,
      id: uuidv4(),
    }
    if(content){
      setTodos( Todos => [...Todos, newTodo]);
      setContent('');
    }
  }
  const filterStatus=(status)=>{
    setActiveStatus(status)
  }
  const filteredTodos =Todos.filter((item)=>item.status ===activestatus);
  const filters =["To Do", "Done", "Trash"]
  return (
      <div className='main'>
      <div className="text">
        <p className='Title'>Simple To Do List</p>
        <p className='motto'>Today is awesome day. The weather is awesome, you are awesome too!</p>
      </div>
      <div className="buttons">
      <div className="filters">
        {filters.map((filter, index)=><SingleFilter setActiveStatus={setActiveStatus} filter={filter} key={index} activestatus={activestatus}/>)}
      </div>
      <button onClick={()=>setaddWindow(!addWindow)}className='btnAdd'><img src = "PLus Math.png"/></button>
      </div>
      <p className="SmallTitle">{activestatus}</p>
      <div className="divider"></div>
      <div className="List">
        <TodoList 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} Todos={Todos}/>
      </div>
         {addWindow&&<AddTask content={content} changeContent={changeContent} addTask={addTask}/>}
      <Footer/>
    </div>
  ); 
}

export default App;
