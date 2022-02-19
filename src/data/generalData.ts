import { Products } from "../ts/enums/product-enums";
import { ProductData } from "../ts/interfaces/product-interfaces";
import { booksAndMagazines } from "./booksAndMagazines";
import { clothingAndAccessories } from "./clothingAccessories";
import { electronicsAndAppliances } from "./electronicsAndAppliances";
import { sportingGoods } from "./sportingGoods";

const produtcsSalesData: Map<Products, ProductData> = new Map();

produtcsSalesData.set(Products.BooksAndMagazines, booksAndMagazines);
produtcsSalesData.set(Products.ClothingAndAccessories, clothingAndAccessories);
produtcsSalesData.set(Products.ElectronicsAndAppliances, electronicsAndAppliances);
produtcsSalesData.set(Products.SportingGoods, sportingGoods);

export default produtcsSalesData;
