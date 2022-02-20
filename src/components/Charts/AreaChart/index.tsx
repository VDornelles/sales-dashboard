import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IAreaChart } from "../../../ts/interfaces/graph-interfaces";

interface ISalesAreaChart {
  data: IAreaChart[];
}

const SalesAreaChart: React.FC<ISalesAreaChart> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="totalSales" stroke="#1d3d8f" fill="#326cfc" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesAreaChart;
