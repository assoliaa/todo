import React, { useState } from "react";
import MoveToTrash from "./MoveToTrash";
import DeleteForever from "./DeleteForever";
import styles from "./OneTodo.module.css"


function ToDo({todo, setTodos, Todos}) {
    const[clicked, setclicked] =useState(false);
     
    
  
    const changestatus =(id)=>{
        const ItemTo =Todos.find((todo)=>todo.id===id)
        if(ItemTo.status==="To Do"){
            ItemTo.status="Done"
            const newTodos=Todos.filter(item=>item.id!==id);
            setTodos([...newTodos, ItemTo])
        }
        else if(ItemTo.status==="Done"){
            ItemTo.status="To Do"
            const newTodos=Todos.filter(item=>item.id!==id);
            setTodos([...newTodos, ItemTo])
        }
    }
    
    const handleClick=(id)=>{
        const ItemTo =Todos.find((todo)=>todo.id===id)
        if(ItemTo.status==="To Do"){
            setclicked(!clicked)
        }
        else if(ItemTo.status==="Trash"){
            setclicked(!clicked)      
        }
    }
    
    return(<div className={styles.column}><div className={clicked? styles.Highlighted:styles.Todo}>
        <button style={{border:"none", padding:0}} onClick={()=>handleClick(todo.id)}><img src ="Button.png"/></button>
        <input type ="checkbox" className={styles.checkbox} 
        сhecked ={todo.status==="Done" || clicked} 
        onChange={()=>changestatus(todo.id)}/>
        <p className={(todo.status==="Done" || clicked)? styles.marked:styles.content}>{todo.content}</p>
        </div>
        {todo.status ==="To Do" && clicked ?<MoveToTrash Todos={Todos} setTodos={setTodos} todo={todo}/>:""}
        {todo.status ==="Trash"&& clicked?<DeleteForever Todos={Todos} setTodos={setTodos} todo={todo}/>:""}
        </div>)
  }
  
export default ToDo;