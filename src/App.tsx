
import addBtn from './assets/addBtn.svg';
import './scss/App.scss'
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import { ITask } from "./components/data/Task.type";
import TaskList  from './components/TaskList';
import EditTask from './components/EditTask/EditTask';
import DeleteTask from './components/DeleteTask/DeleteTask';

function App() {


  //Modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openEdit, setopenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const onClose = () => {
    setIsOpen(false);
  }

  //TaskList and task
  const storedTaskList = localStorage.getItem("task");
  const initialTaskList : ITask[] = storedTaskList? JSON.parse(storedTaskList):[];
    const [taskList, setTaskList] = useState(initialTaskList);
    
    const [editedTask, setEditedTask] = useState(null as null | ITask);
    const [deleteTask, setDeleteTask] = useState(null as null | ITask);

    useEffect(() => {
      localStorage?.setItem("task", JSON.stringify(taskList));
    }, [taskList]);
  //Add Task
  const addTaskHandle = (data:ITask) => {
     setTaskList([...taskList, data]);
  }
  //Delete Task
  const handleDelete = (task:ITask):void => {
    const index = taskList.indexOf(task);
    const tempTaskList = [...taskList];
    tempTaskList.splice(index,1);
    setTaskList(tempTaskList);
    setOpenDelete(false);
  }



  return (
    <div className="tasks">
      <div className="tasks__header">
        <h1 className="header__tittle">Task List</h1>
        <button className="header__btn" onClick={() => setIsOpen(true)}>
          <img src={addBtn} alt="Add task" />
          <p className="btn__content">Add Task</p>
        </button> 
      </div>
      {isOpen && <AddTask onClose={onClose} handleSubmit={addTaskHandle}/>}
      <TaskList taskList={taskList} setTaskList={setTaskList} setOpenEdit={setopenEdit} setEditedTask={setEditedTask} setDeleteTask={setDeleteTask} setOpenDelete={setOpenDelete}></TaskList>
      {openEdit && <EditTask taskList={taskList} setTaskList={setTaskList} editedTask={editedTask as ITask} setOpen={setopenEdit}/>}
      {openDelete && <DeleteTask deleteTask={deleteTask as ITask}  setOpen={setOpenDelete} handleDelete={handleDelete} />}
      
    </div>
  )
}

export default App
