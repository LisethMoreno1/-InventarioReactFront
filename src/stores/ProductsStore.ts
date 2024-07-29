/* import create from "zustand";
import { ProductI } from "../interfaces/Products/product";

interface ProductsStore {
  products: ProductI[] ;
  setProducts: (products: ProductI[]) => void;
 
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
 
})); */

import create from "zustand";
import { ProductIList } from "../interfaces/Products/listaPRoducto";

interface ProductsStore {
  products: ProductIList[];
  setProducts: (products: ProductIList[]) => void;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
