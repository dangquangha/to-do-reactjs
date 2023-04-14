import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import ToDoItem from './to-do-item';
import '../styles/components/to-do-list.css'
import { useState } from 'react';

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="to-do-list">
      {
        toDoList.map((item: {id: number, title: string}) => (
          <ToDoItem key={item.id} todo={item}/>
        ))
      }
    </div>
  );
}

export default ToDoList;
