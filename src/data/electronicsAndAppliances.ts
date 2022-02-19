import { Products } from "../ts/enums/product-enums";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

const salesData: SalesData[] = [
  {
    totalSales: 30016,
    ecommerceSales: 26050,
    year: 2015,
  },
  {
    totalSales: 28151,
    ecommerceSales: 24234,
    year: 2014,
  },
  {
    totalSales: 27541,
    ecommerceSales: 23727,
    year: 2013,
  },
  {
    totalSales: 26753,
    ecommerceSales: 22580,
    year: 2012,
  },
  {
    totalSales: 24622,
    ecommerceSales: 20975,
    year: 2011,
  },
];

export const electronicsAndAppliances: ProductData = {
  productName: Products.ElectronicsAndAppliances,
  salesData: salesData,
};
