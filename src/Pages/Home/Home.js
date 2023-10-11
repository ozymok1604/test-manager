import { useDispatch, useSelector } from "react-redux";
import { editTask, filterTasks, openModal } from "../../store";
import { ToDoTable } from "../../Components/ToDoTable/ToDoTable";
import { CreateTaskModal } from "../../layouts/CreateTaskModal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./styles.module.scss";

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
          <FloatingLabel
            controlId="floatingInput"
            label="Search"
            className="mb-3"
          >
            <Form.Control
              onChange={onFilterChange}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </div>

        <ToDoTable />

        <Button onClick={onAddTaskClick} variant="primary">
          Add a new Task!
        </Button>
      </div>
    </>
  );
};

export { Home };
