const initState = {
  users: [
    { id: 1, name: "Huy" },
    { id: 2, name: "Dang Huy" },
  ],
};

// state la trang thai cua redux, noi luu tru data cua redux
const rootreducer = (state = initState, action) => {
  return state;
};

export default rootreducer;
