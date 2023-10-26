import {create} from "zustand";
export type Languages = "ES" | "EN";
export interface LanguageStore {
    languageValue: Languages;
    setLanguage: (language: Languages) => void;
}
export const useLanguageStore = create<LanguageStore>()((set) => ({
    languageValue: "ES",
    setLanguage: (language: Languages) => {
        set({languageValue: language});
    },
}));
