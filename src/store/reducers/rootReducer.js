const initState = {
  users: [
    { id: 1, name: "Huy" },
    { id: 2, name: "Dang Huy" },
    { id: 3, name: "Pham Dang Huy" },
  ],

  posts: [],
};

// state la trang thai cua redux, noi luu tru data cua redux
const rootreducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);

      //De app k bi anh huong khi co nhieu du lieu thi can copy lai state, users se lay cai moi hon va ghi de lai
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10000);
      let user = { id: id, name: `random - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};

export default rootreducer;
