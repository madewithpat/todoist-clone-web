import createTask from "./reducers/createTask";
import * as actions from "./actions";

describe("Tasks", () => {
   describe("Create", () => {
      it("should return initial state", () => {
         expect(createTask(undefined, {})).toEqual({
            byId: {},
            allIds: []
         });
      });
      it("should add a task to state", () => {
         const firstTask = {
            content: "Pass this test",
            list: 1
         };
         const newState = createTask(undefined, actions.createTask(firstTask));

         expect(newState).toEqual({
            byId: {
               1: {
                  id: 1,
                  content: "Pass this test",
                  list: 1,
                  isSynced: false,
                  syncId: null,
                  labels: []
               }
            },
            allIds: [1]
         });

         const secondTask = {
            content: "Pass this test again",
            list: 1
         };
         expect(createTask(newState, actions.createTask(secondTask))).toEqual({
            byId: {
               1: {
                  id: 1,
                  content: "Pass this test",
                  list: 1,
                  isSynced: false,
                  syncId: null,
                  labels: []
               },
               2: {
                  id: 2,
                  content: "Pass this test again",
                  list: 1,
                  isSynced: false,
                  syncId: null,
                  labels: []
               }
            },
            allIds: [1, 2]
         });
      });
   });
});
