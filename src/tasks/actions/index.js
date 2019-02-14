export const actionTypes = {
   CREATE_TASK: "CREATE_TASK",
   COMPLETE_TASK: "COMPLETE_TASK",
   DELETE_TASK: "DELETE_TASK"
};

export const createTask = payload => ({
   type: actionTypes.CREATE_TASK,
   ...payload
});
