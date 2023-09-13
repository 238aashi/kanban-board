import React from "react";
 import './Card.css'

function Card({card , state}){
    return(
        <div className="card">
            <div className="card_header">
            <p className="card_header_id">  {card.id}</p>
                <span className="profile"><i class="ri-account-circle-fill"></i></span>
            </div>
            <div className="card_task">
            <span className="card_state">
                    {(state==='userGroup'|| state === 'priorityGroup') && card.status=== 'Backlog'     && <i style={{ color: "gray" }}class="ri-loader-2-line"></i>}
                    {(state==='userGroup'|| state === 'priorityGroup') && card.status=== 'Todo'        &&  <i style={{ color: "gray" }} class="ri-circle-line"></i>}
                    {(state==='userGroup'|| state === 'priorityGroup') && card.status=== 'In progress' &&<i style={{ color: "rgb(244, 206, 82)" }} class="ri-emotion-2-line"></i>}
                    {(state==='userGroup'|| state === 'priorityGroup') && card.status=== 'Done'        &&  <i style={{ color: "blue" }} class="ri-checkbox-circle-fill"></i>}
                    {(state==='userGroup'|| state === 'priorityGroup') && card.status=== 'Canceled'    && <i style={{ color: "gray" }} class="ri-close-circle-fill"></i>}
                </span>
                {card.title}
            </div>
            <div className="card_bottom"> 
            <span className="card_priority " > 

                {(state==='userGroup'|| state==='statusGroup') && card.priority=== 4 && <i class="ri-file-warning-fill"></i>}
                {(state==='userGroup'|| state==='statusGroup') && card.priority=== 3 &&<i class="ri-bar-chart-2-fill"></i> }
                {(state==='userGroup'|| state==='statusGroup') && card.priority=== 2 &&<i class="ri-bar-chart-fill"></i> }
                {(state==='userGroup'|| state==='statusGroup') && card.priority=== 1 && <i class="ri-bar-chart-line"></i> }
                {(state==='userGroup'|| state==='statusGroup') && card.priority=== 0 && <i class="ri-more-fill"></i> }
        
            </span>
            <span className="card_tag">  <i class="ri-circle-fill"> </i></span>
            {card.tag }
            </div>
        </div>
    )
}
export default Card;



