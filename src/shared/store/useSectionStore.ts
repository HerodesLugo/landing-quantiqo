"use client";

import { create } from "zustand";

interface SectionState {
  activeIndex: number;
  sectionActiveName: string;
  setSectionData: (_index: number) => void;
  setSectionActiveName: (_name: string) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
  activeIndex: 0,
  sectionActiveName: "",
  setSectionActiveName: (name) => set({ sectionActiveName: name }),
  setSectionData: (index) => set({ activeIndex: index }),
}));
