"use client";

import { create } from "zustand";

export type NavigationTarget =
  | "HOME"
  | "PROJECTS"
  | "INDUSTRIES"
  | "SOLUTIONS"
  | "CLIENTS"
  | "ABOUT"
  | null;

interface SectionState {
  activeIndex: number;
  sectionActiveName: string;
  navigationTarget: NavigationTarget;
  setSectionData: (_index: number) => void;
  setSectionActiveName: (_name: string) => void;
  navigateTo: (_target: NavigationTarget) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
  activeIndex: 0,
  sectionActiveName: "",
  navigationTarget: null,
  setSectionActiveName: (name) => set({ sectionActiveName: name }),
  setSectionData: (index) => set({ activeIndex: index }),
  navigateTo: (target) => set({ navigationTarget: target }),
}));
