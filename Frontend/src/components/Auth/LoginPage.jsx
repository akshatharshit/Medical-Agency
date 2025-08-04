import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../../store/authStore.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, login, loading, error } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect logged-in user to homepage or dashboard
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-base-200 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-primary select-none">
          Login
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
              autoComplete="email"
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
              aria-describedby="email-error"
            />
          </div>

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
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={loading}
              aria-invalid={error ? "true" : "false"}
              aria-describedby="password-error"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full normal-case flex items-center justify-center gap-2 ${loading ? "pointer-events-none" : ""
              }`}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? <span className="loading-dots">Loading</span> : "Login"}
          </button>




        </form>

        <p className="mt-8 text-center text-sm text-base-content/80">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Register here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
