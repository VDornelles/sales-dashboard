import produtcsSalesData from "../data/generalData";
import { Products } from "../ts/enums/product-enums";
import {
  IAreaChart,
  IBarChart,
  IPieChart,
  IStackedBarChart,
} from "../ts/interfaces/graph-interfaces";
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
        salesNumber: productSales.totalSales,
      });
  });

  return pieChartData;
}

export function getLineChartDataByProduct(product: Products): IAreaChart[] {
  const productSales: SalesData[] = produtcsSalesData.get(product)?.salesData!;
  const areaChartData: IAreaChart[] = [];

  productSales.forEach((salesData: SalesData) => {
    areaChartData.push({
      year: salesData.year,
      totalSales: salesData.totalSales,
    });
  });

  return areaChartData.reverse();
}

export function getBarChartDataByProduct(product: Products) {
  const productSales: SalesData[] = produtcsSalesData.get(product)?.salesData!;
  const barChartData: IBarChart[] = [];

  productSales.forEach((salesData: SalesData) => {
    barChartData.push({
      year: salesData.year,
      ecommerceSales: salesData.ecommerceSales,
      nonEcommerceSales: salesData.totalSales - salesData.ecommerceSales,
    });
  });

  return barChartData.reverse();
}
