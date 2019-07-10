// initialisation des states

let stateInit = { dragons: ["Apalala", "Balaur", "Bolla"], count: 0 };

let dragonReducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case "ADD_DRAGON":
      // TODO
      //   return { ...state, elems };
      return state;
    default:
      return state;
  }
};

export default dragonReducer;
