import { create } from "zustand";

interface InitialState {
    DriverLicense: boolean
    uploadLicense: ()=> void
}

export const useInitialStore = create<InitialState>()((set) => ({
    DriverLicense: false,
    uploadLicense: ()=> set((state)=> ({ DriverLicense: true}))
}))