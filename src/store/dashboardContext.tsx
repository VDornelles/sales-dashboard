import React, { useState } from "react";

export interface IDashboardContext {
  selectedYear: number;
  setSelectedYear: Function;
}

const initialState: IDashboardContext = {
  selectedYear: 2015,
  setSelectedYear: () => null,
};

export const DashboardContext: React.Context<any> =
  React.createContext<IDashboardContext>(initialState);

export const DashboardProvider = ({ children }: any) => {
  const [selectedYear, setSelectedYear] = useState<number>(2015);

  return (
    <DashboardContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
