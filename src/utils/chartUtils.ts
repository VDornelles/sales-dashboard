import produtcsSalesData from "../data/generalData";
import { IPieChart, IStackedBarChart } from "../ts/interfaces/graph-interfaces";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

export function getStackedChartDataByYear(year: number): IStackedBarChart[] {
  const stackedChartData: IStackedBarChart[] = [];

  produtcsSalesData.forEach((productData: ProductData) => {
    let productSales: SalesData | undefined = productData.salesData.find((salesData: SalesData) => {
      return salesData.year === year;
    });

    productSales &&
      stackedChartData.push({
        productName: productData.productName,
        ecommerceSales: productSales?.ecommerceSales,
        nonEcommerceSales: productSales?.totalSales - productSales?.ecommerceSales,
      });
  });

  return stackedChartData;
}

export function getPieChartDataByYear(year: number) {
  const pieChartData: IPieChart[] = [];

  produtcsSalesData.forEach((productData: ProductData) => {
    let productSales: SalesData | undefined = productData.salesData.find((salesData: SalesData) => {
      return salesData.year === year;
    });

    productSales &&
      pieChartData.push({
        name: productData.productName,
        salesNumber: productSales.ecommerceSales,
      });
  });

  return pieChartData;
}
