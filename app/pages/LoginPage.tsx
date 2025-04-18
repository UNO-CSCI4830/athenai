import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/profile");
    } catch (err: any) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <section className="w-full bg-blue-600 text-white flex items-center justify-center p-8">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-md border border-white/10 w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold text-center">Login</h1>

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
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded"
              >
                Log In
              </button>

              <p className="text-sm text-center text-gray-300">
                Don't have an account?{" "}
                <a href="/registrations" className="text-blue-400 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
