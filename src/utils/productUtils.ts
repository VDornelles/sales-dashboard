import produtcsSalesData from "../data/generalData";
import { Products } from "../ts/enums/product-enums";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

export function getTotalSalesByYear(
  year: number,
  product: Products | undefined = undefined
): SalesData {
  const salesData: SalesData = {
    totalSales: 0,
    ecommerceSales: 0,
    year: year,
  };

  if (product) {
    const productData: ProductData = produtcsSalesData.get(product)!;
    getSalesData(productData, salesData, year);
  } else {
    produtcsSalesData.forEach((productData: ProductData) => {
      getSalesData(productData, salesData, year);
    });
  }

  return salesData;
}

function getSalesData(productData: ProductData, salesData: SalesData, year: number) {
  let productSales: SalesData | undefined = productData.salesData.find((data: SalesData) => {
    return data.year === year;
  });

  if (productSales) {
    salesData.totalSales += productSales.totalSales;
    salesData.ecommerceSales += productSales.ecommerceSales;
  }
}
