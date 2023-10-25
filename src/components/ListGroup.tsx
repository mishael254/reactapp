import { Fragment } from "react";
import { useState } from "react";

function ListGroup() {

    let listOfItems = [
        'Japan',
        'China',
        'Kenya',
        'United-States'
    ]
   
    const[selectedItem, setSelectedItem] = useState(-1);
   
    
  return (
    <Fragment>
        <h1>List of Countries</h1>
        
        <ul className="list-group">
            {listOfItems.map((item , index) => <li className={selectedItem === index ? "list-group-item active" : "list-group-item"} key={item} onClick={()=>{setSelectedItem(index)}}>{item}</li>)}
        </ul>
    </Fragment>
  );
}

export default ListGroup;
