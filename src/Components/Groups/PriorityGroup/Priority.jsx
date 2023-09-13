import React , {useState, useEffect}from "react";
import './Priority.css'
import Card from './../../Cards/Card'
import tickets from "../../../data/tickets";
function StatusTask(prior){
var obj=prior;
const [cardData, setCardData] = useState(tickets);
    const [count, setCount]= useState(0);


    useEffect(() => {
        // Calculate the count based on the filtered tickets
        const filteredTickets = cardData.filter((card) => obj.priority === card.priority);
        setCount(filteredTickets.length);
      }, [cardData, obj.priority]);
    return (
        <>
       
        <div className="board">
            <div className="board_top">
                <span className="card_status">
                    {prior.name === 'No priority' && <i style={{ color: "gray" }} class="ri-more-fill"></i>}
                    {prior.name === 'Urgent' && <i style={{ color: "rgb(232, 107, 30)" }} class="ri-file-warning-fill"></i>}
                    {prior.name === 'High' && <i class="ri-bar-chart-2-fill"></i>}
                    {prior.name === 'Medium' &&  <i class="ri-bar-chart-fill"></i>}
                    {prior.name === 'Low' &&  <i class="ri-bar-chart-line"></i>}
                </span>
                <p className="board_top_title"> {prior.name} <span className="count">{count}</span></p>
                <span className="iconcards"><i class="ri-add-fill"></i></span>
                <span className="iconcards"><i class="ri-more-fill"></i></span>
                
            </div>
            
            <div className="card_details">
            {cardData
                    .filter((card) => obj.priority === card.priority)
                    .map((card) => (
                      <Card key={card.id} card={card} state="priorityGroup" />
                    
                    ))}
                </div>
    
            
        </div>
        </>
    )
}

export default StatusTask
// {card.priority=== 4 && <i class="ri-file-warning-fill"></i>}
// {card.priority=== 3 &&<i class="ri-signal-wifi-fill"></i> }
// {card.priority=== 2 &&<i class="ri-signal-wifi-3-fill"></i> }
// {card.priority=== 1 && <i class="ri-signal-wifi-1-fill"></i> }
// {card.priority=== 0 && <i class="ri-more-fill"></i> }