import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "light", // default fallback
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
    document.documentElement.setAttribute("data-theme", theme);
  },
}));

// Restore saved theme on load
if (typeof window !== "undefined") {
  const savedTheme = localStorage.getItem("chat-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    useThemeStore.setState({ theme: savedTheme });
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    useThemeStore.setState({ theme: "light" });
  }
}
