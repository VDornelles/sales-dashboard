import React from "react";

import { StyChartTitle, StyGraphContainer } from "./styles";

interface IChartViewBox {
  title: string;
}

const ChartViewBox: React.FC<IChartViewBox> = ({ children, title }) => {
  return (
    <StyGraphContainer>
      <StyChartTitle>{title}</StyChartTitle>
      {children}
    </StyGraphContainer>
  );
};

export default ChartViewBox;
