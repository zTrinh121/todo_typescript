import editTask from '../assets/editTask.svg';
import deleteTask from '../assets/deleteTask.svg';
import { ITask } from "./data/Task.type";
import CircularProgress from './CircularProgress';

type Props = {
    taskList: ITask[];
    setTaskList: (taskList:ITask[]) => void;
    setOpenEdit: (open:boolean) => void;
    setEditedTask: (editTask:ITask) => void;
    setDeleteTask: (deleteTask: ITask) => void;
    setOpenDelete: (open:boolean) => void;
};

const TaskList = (props: Props) => {
    const { taskList, setTaskList, setOpenEdit, setEditedTask, setDeleteTask, setOpenDelete } = props;
    //Progress
    const toggleProgress = (task: ITask) => {
      let newProgress:string;
      let newPercentage:number;

      if(task.progress === 'To do'){
        newProgress = 'In Progress';
        newPercentage = 50;
      }else if(task.progress === 'In Progress'){
        newProgress = 'Done';
        newPercentage = 100;
      }else if(task.progress === 'Done'){
        newProgress = 'To do'
        newPercentage = 0
      }else{
        newProgress="To do"
        newPercentage= 0
      }
      const updatedTaskListProgress:ITask[] = taskList.map((t) =>
        t.id === task.id ? { ...t, progress: newProgress, percentage: newPercentage } : t
      );
      setTaskList(updatedTaskListProgress);
    }

    //Color Priority
    const colorPriority: Record<string, string> =  {
      high: '#F73446',
      medium: '#FFBD21',
      low: '#0AC947'
    }
    
    //Edit
    const handleEditOpen = (task:ITask):void => {
      setOpenEdit(true);
      setEditedTask(task);
    }

    //Delete
    const handleDeleteOpen = (task:ITask):void => {
      setOpenDelete(true);
      setDeleteTask(task);
    }

    if(taskList.length === 0){
      return(
        <div>There is no task. Please add some</div>
      )
    }
    else{
      return (
        <div>
           {taskList.slice().reverse().map((task) => {
              return (
                  <div className="tasks__task">
                    <div className="task__content">
                      <p className="content__header">Task</p>
                      <p className="content__detail">{task.name}</p>
                    </div>
                    <div className="task__priority">
                      <p className="priority__header">Priority</p>
                      <p className="priority__detail"
                      style={{ color: colorPriority[task.priority.toLowerCase()] }}>{task.priority}</p>
                    </div>
                    <button className="task__progressbar" onClick={() => toggleProgress(task)}>{task.progress}</button>
                    <CircularProgress percentage={task.percentage} circleWidth={24} task={task} toggleProgress={toggleProgress}/>
                    {/*Start: Responsive mobile */}
                    <div className="task__function">
                    <img className="task__delete task__delete--mobile" src={deleteTask} alt="" onClick={() => handleDeleteOpen(task)}/>
                      <img className="task__edit task__edit--mobile" src={editTask} alt="" onClick={() => handleEditOpen(task)} />
                      
                    </div> 
                     {/*End: Responsive mobile  */}
                    <img className="task__edit task__edit--pc" src={editTask} alt="" onClick={() => handleEditOpen(task)}/>
                    <img className="task__delete task__delete--pc" src={deleteTask} alt="" onClick={() => handleDeleteOpen(task)}/>
                   
                  </div>
          )
      })}
          </div>
      )
    }
    
}

export default TaskList;