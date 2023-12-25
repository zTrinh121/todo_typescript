import styles from './deletetask.module.scss'
import { ITask } from '../data/Task.type';


type ModalProps = {
    deleteTask: ITask;
    setOpen: (open: boolean) => void; 
    handleDelete: (task: ITask) => void
}

const DeleteTask = (props: ModalProps) => {
  const {deleteTask, setOpen, handleDelete } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.task}>
          <div className={styles.task__header}>Are you sure you want to delete this task?</div>
          <div className='task__submit'>
              <button className="submit__delete" onClick={() => handleDelete(deleteTask)}>Delete</button>
              <button className="submit__cancel" onClick={() => setOpen(false)}>Cancel</button>
          </div>
      </div>
    </div>
    
  )
}

export default DeleteTask;
