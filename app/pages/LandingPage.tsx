import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      window.location.href = "/profile";
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Split Layout */}
      <main className="flex flex-1">
        {/* Left Side - White */}
        <section className="w-[45%] bg-white flex items-center justify-center p-8 h-[48rem]">
          <div className="text-center">
            <h1 className="text-8xl font-bold text-blue-600 mb-4">AthenA.I.</h1>
            <p className="text-lg text-gray-700">Empowering your future.</p>
          </div>
        </section>

        {/* Right Side - Blue with Login Form */}
        <section className="w-[55%] bg-blue-600 text-white flex items-center justify-center p-8">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-md border border-white/10 w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-center">Log In</h2>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <form onSubmit={handleLogin}>
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-2.5 text-white/60 hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded mt-4"
              >
                Log In
              </button>

              <p className="text-sm text-center text-gray-300 mt-4">
                Don’t have an account?{" "}
                <a href="/registrations" className="text-blue-200 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
