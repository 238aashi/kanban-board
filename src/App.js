import React ,{useEffect, useState} from 'react'
import './App.css';
import Status from "./Components/Groups/Status/StatusTask"
// import State from './Components/DisplayState'

// import './Components/DisplayState.css'

import Priority from './Components/Groups/PriorityGroup/Priority'
import users from './data/userdetails'
import User from './Components/Groups/UsersGroup/User'
function App() {
  const [isBlockVisible, setBlockVisible] = useState(false);
  const toggleBlockVisibility = () => {
    console.log(isBlockVisible);
    setBlockVisible(!isBlockVisible);
  }
  const [selectedGroup,setSelectedGroup ]= useState('User');
  const [selectedOrder, setSelectedOrder]=useState('Priority');
  
  
  
    const handleDropdownChangeGroup = (event) => {
      setSelectedGroup(event.target.value);
      
    };
    
  
    const handleDropdownChangeOrder = (event) => {
      setSelectedOrder(event.target.value);
 
    };
  useEffect(() => {

  },[isBlockVisible])

  return (
    <div className="app">
      <div className="app_navbar">
      <button className='display_btn' onClick={toggleBlockVisibility}> 
        <i class="ri-equalizer-line"></i> 
        {"   "}Display{"  "}
        <i class="ri-arrow-drop-down-line">
          </i> </button>
        
      </div>
      <div className='app_body'>
      {/* {<State visibility={isBlockVisible}/> } */}
      { isBlockVisible && (
        <div className="filter">
            <span className="closeicon" > <i class="ri-close-circle-line"></i></span>
            <div className="grouping">
            <label  htmlFor="myDropdown">Grouping:</label>
            <select id="myDropdown" className="Dropdown" value={selectedGroup} onChange={handleDropdownChangeGroup}>
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
            </select>
            {/* <p> console.log({selectedGroup}); </p> */}
            </div>
           
            <div className="ordering">
            <label  htmlFor="myDropdown">Ordering:</label>
            <select disabled={!(selectedGroup=== 'User')} id="myDropdown" className="Dropdown" value={selectedOrder} onChange={handleDropdownChangeOrder}>
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
            </select>
            {/* <p> console.log({selectedOrder}); </p> */}
            </div>
        </div>
        )}
        {/* --------------------------- */}
        <div className="statusBoard">
            {selectedGroup === "Status" && 
                <div className='boards'>
                <Status name="Backlog"/>
                <Status name="Todo"/>
                <Status name="In progress"/>
                <Status name="Done"/>
                <Status name="Canceled"/>
                </div>
            }
            {selectedGroup === "Priority" && 
                <div className='boards'>
                <Priority name="No priority" priority={0} />
                <Priority name="Urgent" priority={4} />
                <Priority name="High" priority={3} />
                <Priority name="Medium" priority={2} />
                <Priority name="Low" priority={1} />
                </div>
            }
            {selectedGroup === "User" && 
                <div className='boards'>
                {
                users.map((userdetail) => (
            
                 <User userdetail={userdetail} selectedOrder={selectedOrder}/>
               
                ))
                }
                </div>
            }
        </div>
        
      </div>
    </div>
  );
}

export default App;
