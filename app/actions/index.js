export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING'
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

export const setError = () => ({ type: actions.SET_ERROR });
export const setLoading = () => ({ type: actions.SET_LOADING });