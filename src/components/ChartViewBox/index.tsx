import React from "react";

import { StyGraphContainer } from "./styles";

const ChartViewBox: React.FC = ({ children }) => {
  return <StyGraphContainer>{children}</StyGraphContainer>;
};

export default ChartViewBox;
