import React, { useState } from 'react';
import cancelIcon from '../../assets/Cancel.svg'
import styles from './addTask.module.scss'
import { ITask } from '../data/Task.type';
import { v4 as uuidv4 } from 'uuid';

type ModalProps = {
    onClose: () => void;
    handleSubmit: (data: ITask) => void
}

const  AddTask= (props: ModalProps) => {
    const { onClose, handleSubmit } = props;
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("");
    const isEmpty = taskName.trim() === "" || priority==="";
    
    const handleBtnSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: ITask = {
            id: uuidv4(),
            name: taskName,
            priority: priority,
            progress: "To do",
            percentage: 0
        }
        handleSubmit(data);
        onClose();
    }

    
    return (
        <div className={styles.wrapper}>
        <form className='task' onSubmit={handleBtnSubmit}>
            <div className="task__header">
                <h1 className='header__tittle'>Add Task</h1>
                <img src={cancelIcon} alt="" onClick={onClose} />
            </div>
            <div className="task__name">
                <label className="name__tittle">
                    Task
                </label>
                <input type="text" className="name__detail" placeholder='Task name' value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
            </div>
            <div className="task__priorities">
                <div className="priorities__tittle">Priority</div>
                <div className='priority'>
                    <div className="prior__radio radio--high">
                        <input type="radio" value='high' name='priority' id='prior--high' onChange={e => setPriority(e.target.value)}/>
                        <label htmlFor="prior--high">High</label>
                    </div>
                    <div className="prior__radio radio--medium">
                        <input type="radio" value="medium" name='priority' id='prior--medium' onChange={e => setPriority(e.target.value)} />
                        <label htmlFor="prior--medium">Medium</label> 
                    </div>
                    <div className="prior__radio radio--low">
                        <input type="radio" name='priority' value="low" id='prior--low' onChange={e => setPriority(e.target.value)}/>
                        <label htmlFor="prior--low">Low</label>
                    </div>

                </div>
                
            </div>
            <div className='task__submit'>
                <input type="submit" value="Add"  className="submit__add" disabled={isEmpty}/>
                <button className="submit__cancel" onClick={onClose}>Cancel</button>
            </div>
        </form>
    </div>
    )
}

export default AddTask