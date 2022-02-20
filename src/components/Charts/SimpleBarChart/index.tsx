import React from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IBarChart } from "../../../ts/interfaces/graph-interfaces";

interface ISimpleBarChart {
  data: IBarChart[];
}

const SimpleBarChart: React.FC<ISimpleBarChart> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="ecommerceSales" fill="#1d3d8f" />
        <Bar dataKey="nonEcommerceSales" fill="#326cfc" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
