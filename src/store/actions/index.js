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

export function setDialogOpen(bool) {
  return {
    type: "SET_DIALOG_OPEN",
    payload: bool,
  };
}

export function setDialogContent(content) {
  return {
    type: "SET_DIALOG_CONTENT",
    payload: content,
  };
}

export function setActiveTab(tabname) {
  return {
    type: "SET_ACTIVE_TAB",
    payload: tabname,
  };
}
