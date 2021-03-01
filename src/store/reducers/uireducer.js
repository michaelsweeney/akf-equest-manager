const initialState = {
  dialogOpen: false,
  dialogContent: {
    title: "",
    content: "",
  },
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DIALOG_OPEN": {
      return {
        ...state,
        dialogOpen: action.payload,
      };
    }
    case "SET_DIALOG_CONTENT": {
      return {
        ...state,
        dialogContent: action.payload,
      };
    }

    default:
      return state;
  }
}
