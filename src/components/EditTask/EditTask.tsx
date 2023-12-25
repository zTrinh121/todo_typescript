import React from 'react'
import cancelIcon from '../../assets/Cancel.svg'
import styles from './editTask.module.scss'
import { ITask } from '../data/Task.type';
import { useState } from 'react';

type ModalProps = {
    taskList: ITask[];
    setTaskList: (taskList:ITask[]) => void;
    editedTask: ITask;
    setOpen: (open: boolean) => void;
}

const EditTask = (props: ModalProps) => {
    const { taskList, setTaskList, editedTask, setOpen } = props;
    const [taskName, setTaskName] = useState(editedTask.name);
    const [priority, setPriority] = useState(editedTask.priority);
    
    const isEmpty = taskName.trim() === "" ;
    
    const handleEdit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedTaskList = taskList.map((task) =>task.id === editedTask.id ? { ...task, name: taskName, priority: priority } : task);
        setTaskList(updatedTaskList)
        setOpen(false);
    }

    return (
        <div className={styles.wrapper}>
            <form className='task' onSubmit={handleEdit}>
                <div className="task__header">
                    <h1 className='header__tittle'>Edit Task</h1>
                    <img src={cancelIcon} alt="" onClick={() => setOpen(false)}/>
                </div>
                <div className="task__name">
                    <label className="name__tittle">
                        Task
                    </label>
                    <input type="text" className="name__detail" placeholder='Task name' value={taskName}
                    onChange={e => setTaskName(e.target.value)} />
                </div>
                <div className="task__priorities">
                    <div className="priorities__tittle">Priority</div>
                    <div className='priority'>
                        <div className="prior__radio radio--high">
                            <input type="radio" value='high' name='priority' id='prior--high' checked={priority.toLowerCase() === 'high'}
                            onChange={e => setPriority(e.target.value)}/>
                            <label htmlFor="prior--high">High</label>
                        </div>
                        <div className="prior__radio radio--medium">
                            <input type="radio" value="medium" name='priority' id='prior--medium' checked={priority.toLowerCase() === 'medium'} 
                            onChange={e => setPriority(e.target.value)}/>
                            <label htmlFor="prior--medium" >Medium</label> 
                        </div>
                        <div className="prior__radio radio--low">
                            <input type="radio" name='priority' value="low" id='prior--low' checked={priority.toLowerCase() === 'low'}
                            onChange={e => setPriority(e.target.value)}/>
                            <label htmlFor="prior--low">Low</label>
                        </div>

                    </div>
                    
                </div>
                <div className='task__submit'>
                    <input type="submit" value="Edit"  className="submit__edit" disabled={isEmpty}/>
                    <button className="submit__cancel" onClick={() => setOpen(false)}>Cancel</button>
                </div>
            </form>
        </div>
    
  )
}

export default EditTask;