"use client";
import { create } from "zustand";

interface CameraState {
  cameraStep: number | null;
  setCameraStep: (_index: number | null) => void;
}

export const useCameraStepStore = create<CameraState>((set) => ({
  cameraStep: 0,
  setCameraStep: (index) => set({ cameraStep: index }),
}));
