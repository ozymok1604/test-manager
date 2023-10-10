import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, openModal } from "../../store";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import styles from "./styles.module.scss";

const Task = ({ task, index, isCompleted }) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteTask(task.id));
  };

  const onEditClick = () => {
    dispatch(editTask(task));
    dispatch(openModal(true));
  };

  const onStatusClick = () => {
    dispatch(
      editTask({
        id: task.id,
        title: task.title,
        status: !task.status,
        description: task.description,
        date: task.date,
      })
    );
  };

  return (
    <div className={styles.task}>
      <div className={styles.number}>{index + 1}</div>
      <div className={styles.title}>{task?.title}</div>
      <div className={styles.description}>{task?.description}</div>
      <div className={styles.date}>{task?.date}</div>

      <div
        style={{ backgroundColor: task.status ? "green" : "orange" }}
        onClick={onStatusClick}
        className={styles.completed_status}
      >
        {task.status == true ? "Completed" : "Not Completed"}
      </div>

      {!isCompleted && (
        <>
          <img onClick={onEditClick} className={styles.edit_img} src={Edit} />

          <img
            onClick={onDeleteClick}
            className={styles.delete_img}
            src={Delete}
          />
        </>
      )}
    </div>
  );
};

export { Task };
