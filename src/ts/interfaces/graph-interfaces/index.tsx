export interface IStackedBarChart {
  productName: string;
  ecommerceSales: number;
  nonEcommerceSales: number;
}

export interface IPieChart {
  name: string;
  salesNumber: number;
}

export interface IAreaChart {
  year: number;
  totalSales: number;
}

export interface IBarChart {
  year: number;
  ecommerceSales: number;
  nonEcommerceSales: number;
}
