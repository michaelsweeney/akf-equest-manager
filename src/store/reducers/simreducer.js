const initialState = {
  loadedSims: [],
  exportFormat: {
    csv: false,
    xl: false,
    sim: false,
  },
  selectedReports: [],
};

export default function simReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_SIM_FILE": {
      return {
        ...state,
        loadedSims: [
          ...state.loadedSims.filter((d) => d != action.payload),
          action.payload,
        ],
      };
    }
    case "REMOVE_SIM_FILE": {
      return {
        ...state,
        loadedSims: state.loadedSims.filter((d) => d != action.payload),
      };
    }
    case "SET_EXPORT_FORMAT": {
      return {
        ...state,
        exportFormat: action.payload,
      };
    }

    case "SET_SELECTED_REPORTS": {
      return {
        ...state,
        selectedReports: action.payload,
      };
    }
    default:
      return state;
  }
}
