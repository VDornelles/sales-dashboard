import React, { useContext } from "react";
import { DashboardContext, IDashboardContext } from "../../../store/dashboardContext";
import { StyYearSelection } from "./styles";

const YearSelection: React.FC = () => {
  const { selectedYear, setSelectedYear }: IDashboardContext = useContext(DashboardContext);

  const addYear = () => setSelectedYear((prev: number) => prev + 1);

  const subtractYear = () => setSelectedYear((prev: number) => prev - 1);

  return (
    <StyYearSelection>
      <button onClick={subtractYear} disabled={selectedYear === 2008}>
        -
      </button>
      <p>{selectedYear}</p>
      <button onClick={addYear} disabled={selectedYear === 2015}>
        +
      </button>
    </StyYearSelection>
  );
};

export default YearSelection;
