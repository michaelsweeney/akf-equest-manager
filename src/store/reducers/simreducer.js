const initialState = {
  loadedSims: [],
  exportFormat: {
    csv: false,
    xl: false,
  },
  selectedReports: [],
  selectedTextReports: [],
};

export default function simReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_SIM_FILE": {
      return {
        ...state,
        loadedSims: [
          ...state.loadedSims.filter(
            (d) => d.fullpath != action.payload.fullpath
          ),
          action.payload,
        ],
      };
    }
    case "REMOVE_SIM_FILE": {
      return {
        ...state,
        loadedSims: state.loadedSims.filter(
          (d) => d.fullpath != action.payload
        ),
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

    case "SET_SELECTED_TEXT_REPORTS": {
      return {
        ...state,
        selectedTextReports: action.payload,
      };
    }
    default:
      return state;
  }
}
