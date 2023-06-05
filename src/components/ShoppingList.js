import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemSearch (event) {
    setSearch(event.target.value);
   }

  console.log(items)
  const itemsToDisplay = items.filter((item) => {
      if (search.length !== 0 ) {
        const name=item.name
        if(name.includes(search)) {
          console.log("match?", name)
          return name
        }  
        // return item.name === search
      } else{
        if (selectedCategory === "All") return true
        return item.category === selectedCategory
    };
  })
   
  function onItemFormSubmit (newItemObj) {
       (setItems([...items,newItemObj]))
 }

 return (
  <div className="ShoppingList">
    <ItemForm onItemFormSubmit={onItemFormSubmit}  />

    <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleItemSearch} 
    search={search} />

    <ul className="Items">
      {itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
  </div>
);
}

export default ShoppingList;
