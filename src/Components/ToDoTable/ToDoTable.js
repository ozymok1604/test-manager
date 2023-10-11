import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../../Components/Task/Task";
import { addTask } from "../../store";
import { getFilteredList } from "../../utils/getFilteredList";
import Button from "react-bootstrap/Button";
import styles from "./styles.module.scss";

const ToDoTable = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const deletedTaskId = useSelector((state) => state.deletedTaskId);
  const editedTask = useSelector((state) => state.editedTask);
  const filterValue = useSelector((state) => state.filterValue);
  const [displayCompleted, setDisplayCompleted] = useState(true);
  const [displayNotCompleted, setDisplayNotCompleted] = useState(true);

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  Object.keys(task).length && tasks.push(task);

  useEffect(() => {
    dispatch(addTask({}));
  }, []);

  const filteredList = getFilteredList(tasks);
  const list = filteredList.filter((item) => item?.id !== deletedTaskId);

  const toDoList = list.map((o) => {
    if (o.id === editedTask.id) {
      return editedTask;
    }
    return o;
  });

  window.localStorage.setItem("tasks", JSON.stringify(toDoList));

  const localToDoList = JSON.parse(localStorage.getItem("tasks") || toDoList);

  const filteredToDoList = localToDoList.filter((item) =>
    filterValue
      ? item.title?.includes(filterValue) ||
        item.description?.includes(filterValue) ||
        item.date?.includes(filterValue)
      : item
  );

  const displayFilteredArray = filteredToDoList.filter((item) => {
    if (displayCompleted == true && displayNotCompleted == true) {
      return item;
    } else if (displayCompleted == true) {
      return item.status == true;
    } else if (displayNotCompleted == true) {
      return item.status == false;
    }
  });
  const onCompletedClick = () => {
    setDisplayCompleted(!displayCompleted);
  };

  const onNotCompletedClick = () => {
    setDisplayNotCompleted(!displayNotCompleted);
  };

  return (
    <>
      <div className={styles.display_container}>
        <div className={styles.display_label}>Display: </div>
        <Button
          onClick={onCompletedClick}
          variant={displayCompleted ? "success" : "secondary"}
        >
          Completed
        </Button>

        <Button
          onClick={onNotCompletedClick}
          variant={displayNotCompleted ? "success" : "secondary"}
        >
          Not Completed
        </Button>
      </div>
      <div className={styles.table}>
        <div className={styles.table_fields}>
          <div>#</div>
          <div>Title</div>
          <div>Description</div>
          <div>Due date</div>
          <div>Status</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>
        {displayFilteredArray?.map((task, index) => {
          return <Task index={index} task={task} />;
        })}
      </div>
    </>
  );
};

export { ToDoTable };
