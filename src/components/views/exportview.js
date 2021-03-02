import React from "react";

import ExportFormatSelector from "./exportview/exportformatselector";
import ReportPicker from "./exportview/reportpicker";

const ExportView = () => {
  return (
    <div>
      <ExportFormatSelector />
      <ReportPicker />
    </div>
  );
};

export default ExportView;
