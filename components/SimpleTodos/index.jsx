import './index.css'

const SimpleTodos = (props) =>{

  const {eachTodo, ondelete } = props;
  const {task , uniqueNo} = eachTodo;

  const onDeleteHandler = () =>{
      ondelete(uniqueNo)
  }

  return(
    <li className='task-card'>
      <p className='task-name'>{task}</p>
      <button className='delete-task' onClick={onDeleteHandler}>Delete</button>
    </li>
  )
   
}

export default SimpleTodos;