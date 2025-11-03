"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Brain, Eye, EyeOff, Loader2 } from "lucide-react";

const Input = ({ label, type, placeholder, value, onChange, error, icon }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          className={`w-full px-4 py-3 rounded-lg border ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-400/20"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-400/20"
          } bg-white focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 transition-colors`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const Button = ({
  children,
  type = "button",
  disabled = false,
  loading = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-lg shadow-blue-500/25 border border-blue-400/30"
    >
      {loading && <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />}
      {children}
    </button>
  );
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Check if already authenticated (async, non-blocking)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/user", {
          credentials: "include",
        });
        if (response.ok) {
          router.replace("/");
        }
      } catch (error) {
        // User not authenticated, continue with login
      }
    };
    // Small delay to ensure smooth page load
    const timer = setTimeout(checkAuth, 100);
    return () => clearTimeout(timer);
  }, [router]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Success - redirect to main page
      router.push("/");
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Login failed. Please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/2 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.jpg" 
                alt="B2W Infotech Logo" 
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <Brain className="h-10 w-10 text-blue-600 hidden" />
              <span className="text-2xl font-bold text-blue-800">B2W Infotech</span>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-black mb-3">
            Sign in to your account
          </h2>
          <p className="text-gray-700">
            Or{" "}
            <Link
              href="/register"
              className="font-medium text-blue-800 hover:text-blue-900 transition-all duration-200"
            >
              create a new account
            </Link>
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-xl py-8 px-6 shadow-xl border border-gray-200 rounded-2xl shadow-lg shadow-gray-500/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={errors.password}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 bg-white rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-800 hover:text-blue-900 transition-all duration-200"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {errors.submit}
              </div>
            )}

            <Button type="submit" disabled={isLoading} loading={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
