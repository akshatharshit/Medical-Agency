// src/pages/SettingsPage.js

import { useEffect, useState } from "react";
import { THEMES } from "../../Constant/info";
import { useThemeStore } from "../../store/useThemeStore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore"; // Adjust path as needed

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content pt-24 pb-16 px-4 sm:px-6 lg:px-12 relative">
      {/* Top Right Buttons */}
      <div className="fixed top-24 right-6 flex items-center gap-4 z-50">
        {!user ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary btn-md normal-case min-w-[100px]"
              type="button"
              aria-label="Login"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-secondary btn-md normal-case min-w-[100px]"
              type="button"
              aria-label="Register"
            >
              Register
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-error btn-md normal-case min-w-[100px]"
            type="button"
            aria-label="Logout"
          >
            Logout
          </button>
        )}
      </div>

      {/* Main Content Container for Settings */}
      <motion.div
        className="max-w-4xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-primary mb-10 select-none">
          Settings
        </h1>

        {/* Appearance Section */}
        <section className="p-8 bg-base-200 rounded-xl border border-base-300 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2">Theme</h2>
            <p className="text-base text-base-content/70 max-w-xl">
              Choose a theme for your interface. This will change your app's look instantly.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {THEMES.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                aria-pressed={theme === t}
                className={`group flex flex-col items-center gap-3 p-4 rounded-xl border shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                  theme === t
                    ? "border-primary bg-primary/25"
                    : "border-transparent hover:bg-base-300"
                }`}
              >
                <div
                  className="relative h-14 w-full rounded-md overflow-hidden shadow"
                  data-theme={t}
                >
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-sm font-medium truncate w-full text-center capitalize">
                  {t}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Notifications Section */}
        <section className="p-8 bg-base-200 rounded-xl border border-base-300 shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-xl mx-auto gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Enable Notifications</h2>
            <p className="text-base text-base-content/70 max-w-sm">
              Receive updates and alerts for important events.
            </p>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-primary self-start sm:self-auto"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled((prev) => !prev)}
            aria-label="Toggle Notifications"
          />
        </section>

        {/* Privacy Section */}
        <section className="p-8 bg-base-200 rounded-xl border border-base-300 shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-xl mx-auto gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Privacy Mode</h2>
            <p className="text-base text-base-content/70 max-w-sm">
              Hide online status and typing indicators for better privacy.
            </p>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-accent self-start sm:self-auto"
            checked={privacyMode}
            onChange={() => setPrivacyMode((prev) => !prev)}
            aria-label="Toggle Privacy Mode"
          />
        </section>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
