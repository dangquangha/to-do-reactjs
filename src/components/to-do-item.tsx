import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled'
import TrashIcon from '@atlaskit/icon/glyph/trash'
import '../styles/components/to-do-item.css'

function ToDoItem({ todo }: {todo: {id: number, title: string}}) {
  return (
    <div className="to-do-item">
        <div className="item-title">
            <p>{ todo.title }</p>
        </div>
        <Button appearance='primary'>
            <EditFilledIcon label=""/>
        </Button>

        <Button appearance='danger'>
            <TrashIcon label=""/>
        </Button>
    </div>
  );
}

export default ToDoItem;

