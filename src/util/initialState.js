export default (initialState = {
   user: {
      email: "",
      id: ""
   },
   selectedList: "",
   lists: {
      byId: {},
      allIds: []
   },
   tasks: {
      byId: {},
      allIds: []
   },
   labels: {
      byId: {},
      allIds: []
   }
});
