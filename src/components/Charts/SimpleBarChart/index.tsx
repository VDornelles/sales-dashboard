import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IBarChart } from "../../../ts/interfaces/graph-interfaces";

interface ISimpleBarChart {
  data: IBarChart[];
}

const SimpleBarChart: React.FC<ISimpleBarChart> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis>
          <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
            Sales(Millions of Dollars)
          </Label>
        </YAxis>
        <Tooltip />
        <Bar name="E-Commerce" dataKey="ecommerceSales" fill="#1d3d8f" />
        <Bar name="Non E-Commerce" dataKey="nonEcommerceSales" fill="#326cfc" />
        <Legend verticalAlign="bottom" align="center" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
