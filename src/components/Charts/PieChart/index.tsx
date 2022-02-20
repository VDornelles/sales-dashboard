import React, { useContext, useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { DashboardContext, IDashboardContext } from "../../../store/dashboardContext";
import { IPieChart } from "../../../ts/interfaces/graph-interfaces";
import { getPieChartDataByYear } from "../../../utils/chartUtils";

const SalesPieChart: React.FC = () => {
  const [pieChartData, setPieChartData] = useState<IPieChart[]>();
  const { selectedYear }: IDashboardContext = useContext(DashboardContext);

  useEffect(() => {
    setPieChartData(getPieChartDataByYear(selectedYear));
  }, [selectedYear]);

  const COLORS = ["#326cfc", "#1d3d8f", "#0048ff", "#002991", "#01154a"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="salesNumber"
          label
        >
          {pieChartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesPieChart;
