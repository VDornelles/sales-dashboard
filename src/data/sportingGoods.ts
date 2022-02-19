import { Products } from "../ts/enums/product-enums";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

const salesData: SalesData[] = [
  {
    totalSales: 13104,
    ecommerceSales: 11681,
    year: 2015,
  },
  {
    totalSales: 10910,
    ecommerceSales: 9347,
    year: 2014,
  },
  {
    totalSales: 9914,
    ecommerceSales: 7927,
    year: 2013,
  },
  {
    totalSales: 8506,
    ecommerceSales: 6356,
    year: 2012,
  },
  {
    totalSales: 6982,
    ecommerceSales: 5103,
    year: 2011,
  },
];

export const sportingGoods: ProductData = {
  productName: Products.SportingGoods,
  salesData: salesData,
};
