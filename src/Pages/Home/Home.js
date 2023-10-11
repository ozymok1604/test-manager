import { useDispatch, useSelector } from "react-redux";
import { editTask, filterTasks, openModal } from "../../store";
import { ToDoTable } from "../../Components/ToDoTable/ToDoTable";
import { CreateTaskModal } from "../../layouts/CreateTaskModal";
import styles from "./styles.module.scss";
import { useState } from "react";

const Home = () => {
  const isOpenModal = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  const onAddTaskClick = () => {
    dispatch(editTask({}));
    dispatch(openModal(true));
  };

  const onFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <>
      {isOpenModal && <CreateTaskModal />}
      <div className={styles.home}>
        <div className={styles.header_title}>ToDo List</div>
        <div className={styles.filter_container}>
          <div className={styles.filter_title}>Search:</div>

          <input onChange={onFilterChange} className={styles.filter}></input>
        </div>

        <ToDoTable />

        <button onClick={onAddTaskClick} className={styles.add_button}>
          Add a new Task!
        </button>
      </div>
    </>
  );
};

export { Home };
