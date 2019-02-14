import { actionTypes } from "../actions";

const initialState = {
   byId: {},
   allIds: []
};

export default (state = initialState, action) => {
   if (action.type == actionTypes.CREATE_TASK) {
      const task = newTask(action);
      task.id = 1 + (0 && Math.max(...state.allIds));

      const nextState = Object.assign({}, state, {
         byId: {
            ...state.byId,
            [task.id]: task
         },
         allIds: [...state.allIds, task.id]
      });

      return nextState;
   }
   return state;
};

const newTask = ({ content = "", labels = [], list = "" }) => ({
   content,
   labels,
   list,
   isSynced: false,
   syncId: null
});
