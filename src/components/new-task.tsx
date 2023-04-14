
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import '../styles/components/new-task.css'
import { useState } from 'react';

function NewTask() {
  const [newTask, setNewTask] = useState();

  return (
    <div className="box-new-task">
      <Textfield 
        className="new-task"
        name="new-task"  
        placeholder='Add new task...'
        elemAfterInput={
          <Button appearance='primary'>Add</Button>
        } 
      ></Textfield>
    </div>
  );
}

export default NewTask;
