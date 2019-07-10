// initialisation des states

const stateInit = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  count: 3,
  error: null
};

const dragonReducer = (state = stateInit, action = {}) => {
  let newDragons;
  switch (action.type) {
    case "ADD_DRAGON":
      let foundIndex = state.dragons.indexOf(action.payload.dragon);
      if (foundIndex >= 0) {
        return {
          ...state,
          error: "Le dragon existe déjà !"
        };
      }
      newDragons = state.dragons.concat([action.payload.dragon]);
      // On créé un nouvel état car REDUX impose que celui-ci soit IMMUTABLE
      return {
        ...state,
        dragons: newDragons,
        count: newDragons.length,
        error: null
      };
    case "REMOVE_DRAGON":
      newDragons = state.dragons.filter(
        (_, index) => index !== action.payload.index
      );
      return {
        ...state,
        dragons: newDragons,
        count: newDragons.length,
        error: null
      };
    case "REVERSE_DRAGON":
      newDragons = [...state.dragons].reverse();
      return {
        ...state,
        dragons: newDragons,
        error: null
      };
    default:
      return state;
  }
};

export default dragonReducer;
