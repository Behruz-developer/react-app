import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface ICardItem {
  id: number;
  amount: number;
  price: number;
}

interface InfoStore {
  page: number
  searching: string
  card: ICardItem[]
  select: string
  setPage: (data: number) => void
  setSearching: (data: string) => void
  setCard: (data: ICardItem[]) => void
  setSelect: (data: string) => void
}

const infoStore = create<InfoStore>()(
  devtools((set) => ({
    page: 0,
    searching: '',
    card: [],
    select: '',
    setPage: (data) => set({ page: data }),
    setSearching: (data) => set({ searching: data }),
    setCard:(data) => set({ card: data }),
    setSelect:(data) => set({ select: data })
  }))
);

export default infoStore;
