import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, openModal } from "../store";
import { getRandomNumber } from "../utils/getRandomNumber";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={onTitleInput}
            value={title}
            type="email"
            placeholder=""
          />

          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onDescriptionInput}
            value={description}
            defaultValue={editedTask.description}
            type="email"
            placeholder=""
          />

          <Form.Label>Due date</Form.Label>
          <Form.Control
            onChange={onDateInput}
            value={date}
            type="date"
            defaultValue={editedTask.date}
            placeholder=""
          />

          <Button
            disabled={title || Object.keys(editedTask).length ? false : true}
            onClick={onButtonClick}
            className={styles.add_button}
            variant={
              title || Object.keys(editedTask).length ? "primary" : "secondary"
            }
          >
            {Object.keys(editedTask).length ? "Edit" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CreateTaskModal };
