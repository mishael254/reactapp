import { Fragment } from "react";
import { useState } from "react";


interface ListGroupProps {
  listOfItems:string[];
  heading: string;
}
function ListGroup(listgroupprops: ListGroupProps) {

    
   
    const[selectedItem, setSelectedItem] = useState(-1);
   
       
  return (
    <Fragment>
        <h1>{listgroupprops.heading}</h1>
        
        <ul className="list-group">
            {listgroupprops.listOfItems.map((item , index) => <li className={selectedItem === index ? "list-group-item active" : "list-group-item"} key={item} onClick={()=>{setSelectedItem(index)}}>{item}</li>)}
        </ul>
    </Fragment>
  );
}

export default ListGroup;
