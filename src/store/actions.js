import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  OPEN_MODAL,
} from "../actionTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};

export const deleteTask = (deletedTaskId) => {
  return {
    type: DELETE_TASK,
    deletedTaskId,
  };
};

export const editTask = (editedTask) => {
  return {
    type: EDIT_TASK,
    editedTask,
  };
};

export const completeTask = (completedTaskId) => {
  return {
    type: COMPLETE_TASK,
    completedTaskId,
  };
};
export const filterTasks = (filterValue) => {
  return {
    type: FILTER_TASKS,
    filterValue,
  };
};

export const openModal = (isOpen) => {
  return {
    type: OPEN_MODAL,
    isOpen,
  };
};
