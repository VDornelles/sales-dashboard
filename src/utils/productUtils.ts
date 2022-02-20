import produtcsSalesData from "../data/generalData";
import { Products } from "../ts/enums/product-enums";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

export function getTotalSalesByYear(
  year: number,
  product: Products | undefined = undefined
): SalesData {
  let totalSales: number = 0;
  let ecommerceSales: number = 0;

  if (product) {
    const productData: ProductData = produtcsSalesData.get(product)!;
    let productSales: SalesData | undefined = productData.salesData.find((salesData: SalesData) => {
      return salesData.year === year;
    });
    if (productSales) {
      totalSales = productSales.totalSales;
      ecommerceSales = productSales.ecommerceSales;
    }
  } else {
    produtcsSalesData.forEach((productData: ProductData) => {
      let productSales: SalesData | undefined = productData.salesData.find(
        (salesData: SalesData) => {
          return salesData.year === year;
        }
      );

      if (productSales) {
        totalSales += productSales.totalSales;
        ecommerceSales += productSales.ecommerceSales;
      }
    });
  }

  return { totalSales, ecommerceSales, year };
}
