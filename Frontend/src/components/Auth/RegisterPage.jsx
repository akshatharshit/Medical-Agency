import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../../store/authStore.js";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { user, register, loading, error } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    shopName: "",
    address: "",
    password: "",
    role: "user",
  });

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect logged-in user after registration
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-base-200 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-primary select-none">
          Register
        </h2>

        {error && (
          <div
            role="alert"
            className="mb-6 p-4 rounded bg-red-100 text-red-800 text-center font-semibold"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Your full name"
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="you@example.com"
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNo"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              required
              value={formData.phoneNo}
              onChange={handleChange}
              className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="+91 9876543210"
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          {/* Shop Name */}
          <div>
            <label
              htmlFor="shopName"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Shop Name
            </label>
            <input
              type="text"
              id="shopName"
              name="shopName"
              required
              value={formData.shopName}
              onChange={handleChange}
              className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Your shop name"
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Your address"
              rows={3}
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength={6}
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="At least 6 characters"
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          {/* Role Hidden Field */}
          <input type="hidden" name="role" value="user" />

          <button
            type="submit"
            className={`btn btn-primary w-full normal-case flex items-center justify-center gap-2 ${loading ? "pointer-events-none" : ""
              }`}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className="loading-dots">Loading</span>
              </>
            ) : (
              "Register"
            )}
          </button>

        </form>

        <p className="mt-8 text-center text-sm text-base-content/80">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Login here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
