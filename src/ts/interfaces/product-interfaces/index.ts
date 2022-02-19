export interface ProductData {
  productName: string;
  salesData: SalesData[];
}

export interface SalesData {
  totalSales: number;
  ecommerceSales: number;
  year: number;
}
