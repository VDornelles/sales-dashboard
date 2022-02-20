import produtcsSalesData from "../data/generalData";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

export function getTotalSalesByYear(year: number): SalesData {
  let totalSales: number = 0;
  let ecommerceSales: number = 0;

  produtcsSalesData.forEach((productData: ProductData) => {
    let productSales: SalesData | undefined = productData.salesData.find((salesData: SalesData) => {
      return salesData.year === year;
    });

    if (productSales) {
      totalSales += productSales.totalSales;
      ecommerceSales += productSales.ecommerceSales;
    }
  });

  return { totalSales, ecommerceSales, year };
}
