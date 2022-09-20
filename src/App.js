import styles from './App.module.css'
import {useState} from "react";
import {CgArrowLongDownL, CgArrowLongUpL } from "react-icons/cg";
function App() {

  const statuses = ['todo', 'progress', 'review', 'done']
  const [task, setTask] = useState([])
  const [newTask, setNewTask] =useState('')
    const addTask = () => {
      setTask([...task, {id: Math.random(), title: newTask, status: statuses[0]}])
        setNewTask('')
    }
    const deleteTask = (idTask) => {
      setTask(task.filter(task => task.id !== idTask))
    }
    const moveTask = (idTask) => {
      setTask(task.map((task, index) => task.id === idTask ? {...task, status: statuses[task.index] - 1} : task))
    }
  return (
    <div className={styles.App}>
      <input className={styles.Input} placeholder='add new task' value={newTask} onChange={e => setNewTask(e.target.value)}/>
      <button className={styles.Button} onClick={addTask}>ADD TASK</button>
      {statuses.map(status =>
          <div>
            <h2 className={styles.H2}>
              {status}
            </h2>
              {task.filter(task => task.status === status).map((task, index) =>
              <h5 className={styles.H5}>
                <button className={styles.Button} onClick={() => moveTask(task.id, index)}><CgArrowLongDownL /></button>
                  {task.title}
                <button className={styles.Button}><CgArrowLongUpL /></button>
                <button className={styles.Button} onClick={() => deleteTask(task.id)}>DELETE</button>
              </h5>)}
          </div>
      )}

    </div>
  );
}

export default App;
