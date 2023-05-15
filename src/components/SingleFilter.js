import React from "react";
import { useState } from "react";
import styles from './SingleFilter.module.css'

function SingleFilter({setActiveStatus, filter, activestatus}) {
    const isbtn =filter===activestatus;

    const handleClick=(status)=>{
        setActiveStatus(status)
        console.log(activestatus,isbtn, filter)     
    }
    return ( 
        <button className={styles.singlefilter}
        onClick={()=>handleClick(filter)}
        style ={{background:isbtn?"#081E34":"", transparent:isbtn? 0.05: ""}}><p style ={{color:isbtn? "white" :"black"}}>{filter}</p></button>
    );
  }
  
export default SingleFilter;