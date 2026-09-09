import { useState } from 'react';
export default function ToDoInput() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setToDoList([...toDoList, inputValue]);
    setInputValue('');
  }
  return (
    <div>
        <form>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Add</button>
        </form>
    </div>
  );
   
}