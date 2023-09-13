import React, { useState, useEffect } from "react";
import './StatusTask.css'
import Card from './../../Cards/Card'
import tickets from "../../../data/tickets";
function StatusTask(props){
var obj=props;
const [cardData, setCardData] = useState(tickets);
    const [count, setCount]= useState(1);


    useEffect(() => {
        // Calculate the count based on the filtered tickets
        const filteredTickets = cardData.filter((card) => obj.name === card.status);
        setCount(filteredTickets.length);
      }, [cardData, obj.name]);
    // const increasing= () =>{
    //     var cnt= count+1;
    //     setCount(cnt);
    // };
    return (
        <>
       
        <div className="board">
            <div className="board_top">
                <span className="card_status">
                    {props.name === 'Backlog' && <i style={{ color: "gray" }}class="ri-loader-2-line"></i>}
                    {props.name === 'Todo' &&  <i style={{ color: "gray" }} class="ri-circle-line"></i>}
                    {props.name === 'In progress' &&<i style={{ color: "rgb(244, 206, 82)" }} class="ri-emotion-2-line"></i>}
                    {props.name === 'Done' &&  <i style={{ color: "blue" }} class="ri-checkbox-circle-fill"></i>}
                    {props.name === 'Canceled' && <i style={{ color: "gray" }} class="ri-close-circle-fill"></i>}
                </span>
                <p className="board_top_title"> {props.name} <span className="count">{count}</span></p>
                <span className="iconcards"><i class="ri-add-fill"></i></span>
                <span className="iconcards"><i class="ri-more-fill"></i></span>
                
            </div>
            
            <div className="card_details">
                
                {cardData
                    .filter((card) => obj.name === card.status)
                    .map((card) => (
                      <Card key={card.id} card={card} state="statusGroup" />
                    
                    ))}
                </div>
    
            
        </div>
        </>
    )
}

export default StatusTask


// <i class="ri-circle-line"></i>

// <i class="ri-checkbox-circle-fill"></i>

// <i class="ri-close-circle-fill"></i>

// <i class="ri-loader-2-line"></i>

// <i class="ri-emotion-2-line"></i>