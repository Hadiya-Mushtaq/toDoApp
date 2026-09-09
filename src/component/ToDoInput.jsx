import { useState } from 'react';
export default function ToDoInput() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
        <form>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    </div>
  );
}