import create from "zustand";
import { purchaseOfProductI } from "../interfaces/PurchaseOfProduct/purchaseOfProduct";

interface PurchaseStore {
  purchases: purchaseOfProductI[] | null;
  setPurchases: (purchases: purchaseOfProductI[]) => void;
  clearPurchases: () => void;
}

export const usePurchaseStore = create<PurchaseStore>((set) => ({
  purchases: null,
  setPurchases: (purchases) => set({ purchases }),
  clearPurchases: () => set({ purchases: null }),
}));
