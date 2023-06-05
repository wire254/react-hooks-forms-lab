import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [categorySelection, setCategorySelection] = useState("Produce")
  const [addItem, setAddItem] = useState([])
  
  function onChangeCategory(event) {
    setCategorySelection(event.target.value);
  }
  
  function onAddItem (e) {
    setAddItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id:uuid(),
      name:addItem,
      category:categorySelection,
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={onAddItem} name="name" value={addItem}/>
        
      </label>

      <label>
        Category:
        <select name="category" onChange={onChangeCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
