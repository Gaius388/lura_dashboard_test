import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      (set) => ({
        power: false,
        country: "United States of America",
        setPower: () => set((state) => ({ power: !state.power })),
        setCountry: (data) => set({ country: data }),
      }),
      { name: "userStore" }
    )
  )
);
