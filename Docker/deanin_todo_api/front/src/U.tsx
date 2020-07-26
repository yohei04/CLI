import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface UProps {}

type Item = {
  id: string;
  text: string;
};

const U: React.FC<UProps> = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [editText, setEditText] = useState('');

  const handleText = (e: any) => {
    e.preventDefault();
    setItems([...items, { id: uuidv4(), text: value }]);
    setValue('');
  };

  console.log(items);
  return (
    <>
      <br />
      <br />
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleText}>add</button>
        <h1>List</h1>
        {items.map((item) => (
          <ul>
            <li>
              <span>{item.text}</span>
              <input type="text" />
              <button>edit</button>
            </li>
          </ul>
        ))}
      </form>
    </>
  );
};
export default U;
