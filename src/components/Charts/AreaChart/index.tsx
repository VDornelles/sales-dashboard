import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
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
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year">
          <Label value="Calendar Year" position="bottom" offset={0} />
        </XAxis>
        <YAxis>
          <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
            Sales(Millions of Dollars)
          </Label>
        </YAxis>
        <Tooltip />
        <Area type="monotone" dataKey="totalSales" stroke="#1d3d8f" fill="#326cfc" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesAreaChart;
