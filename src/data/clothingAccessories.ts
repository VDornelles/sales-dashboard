import { Products } from "../ts/enums/product-enums";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

const salesData: SalesData[] = [
  {
    totalSales: 58188,
    ecommerceSales: 52128,
    year: 2015,
  },
  {
    totalSales: 53751,
    ecommerceSales: 46830,
    year: 2014,
  },
  {
    totalSales: 46681,
    ecommerceSales: 40198,
    year: 2013,
  },
  {
    totalSales: 40451,
    ecommerceSales: 33614,
    year: 2012,
  },
  {
    totalSales: 35137,
    ecommerceSales: 28196,
    year: 2011,
  },
];

export const clothingAndAccessories: ProductData = {
  productName: Products.ClothingAndAccessories,
  salesData: salesData,
};
