export function addSimFile(filepath) {
  return {
    type: "ADD_SIM_FILE",
    payload: filepath,
  };
}
export function removeSimFile(filepath) {
  return {
    type: "REMOVE_SIM_FILE",
    payload: filepath,
  };
}

export function setExportFormat(format) {
  return {
    type: "SET_EXPORT_FORMAT",
    payload: format,
  };
}

export function setSelectedReports(format) {
  return {
    type: "SET_SELECTED_REPORTS",
    payload: format,
  };
}
