// src/components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import useAuthStore from "../../store/authStore";

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore();

    return (
        <nav className="navbar bg-base-100 shadow px-4">
            {/* Left side: Brand Logo and Name */}
            <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => navigate("/")}
                aria-label="Go to homepage"
            >
                <FaHeartbeat className="text-primary text-3xl" />
                <span className="font-bold text-xl select-none">
                    Shashwat Medical Agency
                </span>
            </div>

            {/* Right side: Spacer + Buttons */}
            <div className="flex-1"></div>

            <div className="flex items-center space-x-4">
                {/* Settings - Text-like button */}
                <button
                    className="btn btn-ghost btn-sm normal-case"
                    onClick={() => navigate("/settings")}
                    aria-label="Go to settings"
                    type="button"
                >
                    Settings
                </button>

                {/* Admin button visible only when user.role === 'admin' */}
                {user?.role === "admin" && (
                    <button
                        className="btn btn-outline btn-primary btn-sm normal-case"
                        onClick={() => navigate("/admin")}
                        aria-label="Go to admin panel"
                        type="button"
                    >
                        Admin
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
