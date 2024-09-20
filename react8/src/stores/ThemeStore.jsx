import { create } from "zustand";

const useThemeStore = create((set => ({
    theme: `primary`,
    setTheme: (newTheme) => set(() => ({theme: newTheme})),
})));

export default useThemeStore;