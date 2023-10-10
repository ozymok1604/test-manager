import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  OPEN_MODAL,
} from "../actionTypes";

const initialState = {
  task: {},
  deletedTaskId: "",
  editedTask: {},
  completedTaskId: "",
  isOpen: false,
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: action.task,
      };
    case DELETE_TASK:
      return {
        ...state,
        deletedTaskId: action.deletedTaskId,
      };

    case EDIT_TASK:
      return {
        ...state,
        editedTask: action.editedTask,
      };

    case COMPLETE_TASK:
      return {
        ...state,
        completedTaskId: action.completedTaskId,
      };

    case FILTER_TASKS:
      return {
        ...state,
        filterValue: action.filterValue,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: action.isOpen,
      };

    default:
      return state;
  }
};
