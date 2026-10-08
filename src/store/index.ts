import { create } from "zustand";

type MacbookStoreProp = {
  color: string;
  setColor: (newColor: string) => void;
  scale: number;
  setScale: (newScale: number) => void;
  texture: string;
  setTexture: (newTextire: string) => void;
  reset: () => void;
};

const useMacbookStore = create<MacbookStoreProp>((set) => ({
  color: "#2e2c2e",
  setColor: (newColor: string) => set({ color: newColor }),

  scale: 0.08,
  setScale: (newScale: number) => set({ scale: newScale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),

  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacbookStore;
