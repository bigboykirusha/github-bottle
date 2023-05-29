import { createContext, Dispatch, SetStateAction } from "react";
import { Items } from "../layouts/MainLayout";

interface SortContextType {
  categoryId: number;
  setCategoryId: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  items: Items[];
  setItems: Dispatch<SetStateAction<Items[]>>;
}
export const SortContext = createContext<SortContextType>({
  categoryId: 0,
  setCategoryId: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  items: [],
  setItems: () => {},
});
