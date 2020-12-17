// app/reducers/index.js
import { actions } from "../actions";

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

const initialState = {
  isError: false,
  isLoading: false,
  tasks: defaultTasks,
};

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState) {
  console.log(`taskStateReducer:${JSON.stringify(taskState,null,2)} `)
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
const reducers = (state, action) => {
  console.log(`action:${JSON.stringify(action,null,2)}`)
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      //console.log(`reducer was hit ARCHIVE_TASK :${JSON.stringify(action,null,2)} {state}=>${JSON.stringify(state,null,2)}`)
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    case actions.SET_ERROR:
      return {
        ...state,
        isError: true,
      };
    case actions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state || initialState;
  }
};

export default reducers;
