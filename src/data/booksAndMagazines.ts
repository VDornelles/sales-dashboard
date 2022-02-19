import { Products } from "../ts/enums/product-enums";
import { ProductData, SalesData } from "../ts/interfaces/product-interfaces";

const salesData: SalesData[] = [
  {
    totalSales: 12583,
    ecommerceSales: 11648,
    year: 2015,
  },
  {
    totalSales: 11879,
    ecommerceSales: 10828,
    year: 2014,
  },
  {
    totalSales: 11444,
    ecommerceSales: 10249,
    year: 2013,
  },
  {
    totalSales: 10991,
    ecommerceSales: 9778,
    year: 2012,
  },
  {
    totalSales: 10160,
    ecommerceSales: 8773,
    year: 2011,
  },
];

export const booksAndMagazines: ProductData = {
  productName: Products.BooksAndMagazines,
  salesData: salesData,
};
