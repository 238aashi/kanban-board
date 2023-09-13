import React ,{useState, useEffect}from "react";
import './User.css'
import Card from '../../Cards/Card'
// import usersdetail from "../../../data/userdetails";
import tickets from "../../../data/tickets";
function User({userdetail, selectedOrder}){

    const [cardData, setCardData] = useState(tickets);
    const [count, setCount]= useState(0);

    useEffect(() => {
        // Calculate the count based on the filtered tickets
        const filteredTickets = cardData.filter((card) => userdetail.id === card.userId);
        setCount(filteredTickets.length);
      }, [cardData, userdetail.id]);
    
    return (
        <>
       
        <div className="board">
            <div className="board_top">
                <span className="user_profile_pic">
                <i class="ri-account-circle-fill"></i>
                </span>
                <p className="board_top_title"> {userdetail.name} <span className="count">{count}</span></p>
                <span className="iconcards"><i  class="ri-add-fill"></i></span>
                <span className="iconcards"><i class="ri-more-fill"></i></span>
                
            </div>
            
            <div className="card_details">
                
                {selectedOrder === 'Priority' &&  cardData &&  cardData.sort((a, b)=> a.priority < b.priority ? 1 : -1 )
                .filter((card) => userdetail.id === card.userId )
                .map((card) => (
            
                <Card  card={card}  state="userGroup" />
               
                ))
                }
                {selectedOrder === 'Title' &&  cardData &&  cardData.sort((a, b)=> a.title > b.title ? 1 : -1 )
                .filter((card) => userdetail.id === card.userId )
                .map((card) => (
                    <Card  card={card}  state="userGroup" />
               
                ))
                }
                </div> 
    
        </div>
        </>
    )
}

export default User;