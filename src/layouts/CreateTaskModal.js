import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, openModal } from "../store";
import { getRandomNumber } from "../utils/getRandomNumber";
import styles from "./styles.module.scss";

const CreateTaskModal = () => {
  const editedTask = useSelector((state) => state.editedTask);

  const [title, setTitle] = useState(editedTask.title);
  const [description, setDescription] = useState(editedTask.description);
  const [date, setDate] = useState(editedTask.date);

  const dispatch = useDispatch();

  const onHandleModalClose = () => {
    dispatch(openModal(false));
  };

  const onTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionInput = (e) => {
    setDescription(e.target.value);
  };

  const onDateInput = (e) => {
    setDate(e.target.value);
  };
  const onButtonClick = () => {
    onHandleModalClose();

    Object.keys(editedTask).length
      ? dispatch(
          editTask({
            id: editedTask.id,
            title: title,
            status: editedTask.status,
            description: description,
            date: date,
          })
        )
      : dispatch(
          addTask({
            id: getRandomNumber(1000),
            title: title,
            status: false,
            description: description,
            date: date,
          })
        );
  };
  return (
    <div onClick={onHandleModalClose} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.task_header}>
          {Object.keys(editedTask).length ? "Edit Task" : " Add a new Task"}{" "}
        </div>
        <div className={styles.form}>
          <div className={styles.field_title}>Title</div>
          <input
            onChange={onTitleInput}
            className={styles.title_input}
            type="text"
            value={title}
          />
          <div className={styles.field_title}>Description</div>
          <textarea
            onChange={onDescriptionInput}
            className={styles.description_input}
            type="text"
            defaultValue={editedTask.description}
          />
          <div className={styles.field_title}>Due date</div>
          <input
            onChange={onDateInput}
            className={styles.date_input}
            type="date"
            defaultValue={editedTask.date}
          />

          <button
            disabled={title || Object.keys(editedTask).length ? false : true}
            onClick={onButtonClick}
            className={
              title || Object.keys(editedTask).length
                ? styles.add_button
                : styles.add_button_disabled
            }
          >
            {Object.keys(editedTask).length ? "Edit" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateTaskModal };
