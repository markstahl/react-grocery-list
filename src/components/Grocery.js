import React from "react";
import GroceryList from "./GroceryList";

const GroceryStuff = props => {


  let stuff = groceryData.map(item=> {
    return(
      <GroceryList
      key={item.id}
      name={item.name}
      handleButtonClick={ (event) => { alert(item.name + ' was clicked')} }
      />
    )

  });

  return(
    <ul>
    {stuff}
    </ul>
  )
}

export default GroceryStuff;
