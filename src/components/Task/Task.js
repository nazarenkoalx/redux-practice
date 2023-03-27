import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const onTaskDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const onStatusChange = () => {
    dispatch(toggleCompleted(task.id));
  };
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={onStatusChange}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={onTaskDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
